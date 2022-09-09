//gridRowSelecting QueryView: QV_EF50_UVK53
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_EF50_UVK53 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    if(LNSPR.getQueryStrings().type == 'U'){
        //Navigation between forms
        let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_ACTUALIZN_20307');
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRVJAKOEIC_908',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSUPDEE_628908'
        };
        nav.queryParameters = {
            mode: 2,
            rechargeLifeCycle: true
        };
        nav.customDialogParameters = {
            client: gridRowSelectingEventArgs.rowData.client,
            clientCode: gridRowSelectingEventArgs.rowData.clientCode,
            loanBankID: gridRowSelectingEventArgs.rowData.loanBankID,
            state: gridRowSelectingEventArgs.rowData.state,
            numProcedure: gridRowSelectingEventArgs.rowData.numProcedure,
            desOperationType: gridRowSelectingEventArgs.rowData.desOperationType,
            currency: gridRowSelectingEventArgs.rowData.currency,
            amount: gridRowSelectingEventArgs.rowData.currency
        };
        nav.navigate(gridRowSelectingEventArgs.commons.controlId);
    }

};