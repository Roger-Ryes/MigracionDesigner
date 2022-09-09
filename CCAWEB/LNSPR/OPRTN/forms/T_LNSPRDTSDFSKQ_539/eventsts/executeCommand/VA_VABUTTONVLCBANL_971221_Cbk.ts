
//Start signature to Callback event to VA_VABUTTONVLCBANL_971221
task_executeCommandCallback_VA_VABUTTONVLCBANL_971221 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     //here your code
    if (entities.DebtorReportedEntity.length > 1) {
        //Open Modal
        let nav: any = executeCommandCallbackEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_ATENCINRI_16964');
        nav.address = {
            moduleId: 'LOANS',
            subModuleId: 'TRNSC',
            taskId: 'T_LOANSYTHKWJPP_439',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_DEBTORREDE_491439'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            entities: entities
        };

        //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
        nav.openModalWindow(executeCommandCallbackEventArgs.commons.controlId, null);
        //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
        //nav.openModalWindow(id, executeCommandCallbackEventArgs.modelRow);
        //addDebtorToGrid(entities, executeCommandCallbackEventArgs);
    }
    if (executeCommandCallbackEventArgs.success) {
        this.addDebtorToGrid(entities, executeCommandCallbackEventArgs);
    }
};
