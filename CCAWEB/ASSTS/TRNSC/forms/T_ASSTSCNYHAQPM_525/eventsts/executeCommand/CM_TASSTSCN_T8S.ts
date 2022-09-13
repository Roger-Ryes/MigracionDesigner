// (Button) 
task_executeCommand_CM_TASSTSCN_T8S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    if (openConfirmation) {
        let nav: any = executeCommandEventArgs.commons.api.navigation;
        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_INACINMEZ_95635');
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_ASSTSEGPPJJUA_289',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_RESTRUCTRR_543289'
        };

        nav.queryParameters = {
            mode: 8
        };
        nav.modalProperties = {
            size: 'sm',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            operation: params.operation

        };

        //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
        //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
        //nav.openModalWindow(id, args.modelRow);
    } else {
        executeCommandEventArgs.commons.api.navigation.closeModal({
            response: true
        });
    }
};
