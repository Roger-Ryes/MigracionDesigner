//Start signature to Callback event to CM_TASSTSAM_SAA
//designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TASSTSAM_SAA'.
task_executeCommandCallback_CM_TASSTSAM_SAA = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if (executeCommandCallbackEventArgs.success) {
        for (let i: any = 0; i < entities.RestructuringList.length; i++) {
            if (entities.RestructuringList[i].finalOp) {
                operacion = entities.RestructuringList[i].bank;
                money = entities.RestructuringList[i].currency;
                typeOperation = entities.RestructuringList[i].typeLoan;
                break;
            }
        }
        entities.OperationEntity.operation = operacion;

        //Open Modal
        let nav: any = executeCommandCallbackEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_REESTRUCA_18926');
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_ASSTSCNYHAQPM_525',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_RESTRUCTEG_166525'
        };

        nav.queryParameters = {
            mode: 2
        };
        nav.modalProperties = {
            size: 'lg',
            callFromGrid: false
        };

        nav.customDialogParameters = {
            operation: operacion,
            currency: money,
            type: typeOperation,
            amount: entities.RestructuringSummary.opCurrency
        };

        //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
        nav.openModalWindow(executeCommandCallbackEventArgs.commons.controlId, null);
        //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
        //nav.openModalWindow(id, args.modelRow);
    }
};
