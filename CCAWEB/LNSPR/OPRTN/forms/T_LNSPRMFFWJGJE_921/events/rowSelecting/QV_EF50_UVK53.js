//gridRowSelecting QueryView: QV_EF50_UVK53
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_EF50_UVK53 = function (entities,gridRowSelectingEventArgs) {
    gridRowSelectingEventArgs.commons.execServer = false;
    if(getQueryStrings().type == 'U'){
        //Navigation between forms
        var nav = gridRowSelectingEventArgs.commons.api.navigation;
        nav.label = cobis.translate('LNSPR.LBL_LNSPR_ACTUALIZN_20307');
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