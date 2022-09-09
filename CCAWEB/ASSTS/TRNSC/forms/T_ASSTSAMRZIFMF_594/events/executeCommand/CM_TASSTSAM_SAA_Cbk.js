//Start signature to Callback event to CM_TASSTSAM_SAA
task.executeCommandCallback.CM_TASSTSAM_SAA = function (entities, executeCommandCallbackEventArgs) {

    if (executeCommandCallbackEventArgs.success) {

        for (var i = 0; i < entities.RestructuringList.data().length; i++) {
            if (entities.RestructuringList.data()[i].finalOp) {
                operacion = entities.RestructuringList.data()[i].bank;
                money = entities.RestructuringList.data()[i].currency;
                typeOperation = entities.RestructuringList.data()[i].typeLoan;
                break;
            }
        }
        entities.OperationEntity.operation = operacion;
        //Open Modal
        var nav = executeCommandCallbackEventArgs.commons.api.navigation;
        nav.label = cobis.translate('ASSTS.LBL_ASSTS_REESTRUCA_18926');
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
