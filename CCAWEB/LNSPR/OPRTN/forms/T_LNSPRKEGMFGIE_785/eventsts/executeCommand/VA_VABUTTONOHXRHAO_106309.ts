//Entity: GeneralParametersQuery
//GeneralParametersQuery. (Button) View: OperationGeneralParametersForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VABUTTONOHXRHAO_106309 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let paymentCategory: any = executeCommandEventArgs.commons.api.viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
    if (paymentCategory == 'NDAH' || paymentCategory == 'PLANO') {
        //open modal
        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_DETALLELG_12706');
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRACJAQDUP_527',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_REPAYMENTT_461527'
        };

        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md'
        };
        nav.customDialogParameters = {
            banco: entities.OperationEntity.operation,
            paymentMethod: entities.GeneralParametersQuery.paymentMethod,
            paymentCategory: paymentCategory
        };
        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    }
};