//LoanListQuery Entity: LoanList
task_executeQuery_Q_LOANSILT_NX50 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = true;
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');

    executeQueryEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeQueryEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    executeQueryEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
    executeQueryEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
    //oculta btn carga archivo
    executeQueryEventArgs.commons.api.viewState.disable('VA_ARCHIVOJFAGWZSQ_219423');

    let model: any = executeQueryEventArgs.commons.api.vc.model;
    model.LoanSearchFilter.codCurrecy = model.LoanSearchFilter.codCurrecy ? model.LoanSearchFilter.codCurrecy : null;
    model.LoanSearchFilter.migratedOperation = model.LoanSearchFilter.migratedOperation ? model.LoanSearchFilter.migratedOperation : null;
    model.LoanSearchFilter.numIdentification = model.LoanSearchFilter.numIdentification ? model.LoanSearchFilter.numIdentification : null;
    model.LoanSearchFilter.numProcedures = model.LoanSearchFilter.numProcedures ? model.LoanSearchFilter.numProcedures : null;
    model.LoanSearchFilter.office = model.LoanSearchFilter.office ? model.LoanSearchFilter.office : null;
    model.LoanSearchFilter.type = model.LoanSearchFilter.type ? model.LoanSearchFilter.type : null;
    model.LoanSearchFilter.operation = model.LoanSearchFilter.operation ? model.LoanSearchFilter.operation : null;

    if ((model.LoanSearchFilter.numIdentification) ||
        (model.LoanSearchFilter.operation) ||
        (model.LoanSearchFilter.numProcedures) ||
        (model.LoanSearchFilter.office)) {

        execServer = true;
        executeQueryEventArgs.parameters.numIdentification = model.LoanSearchFilter.numIdentification;
        executeQueryEventArgs.parameters.loanBankID = model.LoanSearchFilter.operation;
        executeQueryEventArgs.parameters.numProcedure = model.LoanSearchFilter.numProcedures;
        executeQueryEventArgs.parameters.office = model.LoanSearchFilter.office;
        executeQueryEventArgs.parameters.currency = model.LoanSearchFilter.codCurrency;
        executeQueryEventArgs.parameters.disbursementDate = model.LoanSearchFilter.disbursementDate;
        executeQueryEventArgs.parameters.state = model.LoanSearchFilter.state;
        executeQueryEventArgs.parameters.migratedOperation = model.LoanSearchFilter.migratedOperation;
        executeQueryEventArgs.parameters.categoryGroup = "10";
        executeQueryEventArgs.parameters.type = model.LoanSearchFilter.type;
        executeQueryEventArgs.commons.serverParameters.MassiveCommissionsMistakes = true;
        executeQueryEventArgs.parameters.MassiveCommissionsMistakes = model.MassiveCommissionsMistakes;
            
        executeQueryEventArgs.parameters.selectedOperationsArray = listaSeleccionados;
        executeQueryEventArgs.commons.serverParameters.ErrorMassivePayments = true;
        executeQueryEventArgs.parameters.ErrorMassivePayments = model.ErrorMassivePayments;
        if (LNSPR.getQueryStrings().type == 'U') {
            executeQueryEventArgs.parameters.categoryGroup = "2";
        }

        if (LNSPR.getQueryStrings().type === 'P') {
            executeQueryEventArgs.commons.api.viewState.disable('VA__174423');
        }
        
        executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_EF50_UVK53', ['numIdentification',
                                                                                           'loanBankID',
                                                                                           'numProcedure',
                                                                                           'office',
                                                                                           'currency',
                                                                                           'disbursementDate',
                                                                                           'state',
                                                                                           'migratedOperation',
                                                                                           'categoryGroup'],
            executeQueryEventArgs);
    } else {
        executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173', false,null,timer);
        model.ErrorMassivePayments = null;
        model.MassiveCommissionsMistakes = null;

        execServer = false;
    }


    executeQueryEventArgs.commons.execServer = execServer;
};
