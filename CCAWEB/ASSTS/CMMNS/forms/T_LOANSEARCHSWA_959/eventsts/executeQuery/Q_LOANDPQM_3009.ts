//LoanQuery_3009 Entity: 
    task_executeQuery_Q_LOANDPQM_3009 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
        executeQueryEventArgs.commons.serverParameters.LoanSearchFilter = true;
        let executeServer: any = true;
        let transactNumber: any = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures;
        let clientCode: any = parseInt(executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification);
        if (transactNumber > 2147483647) {
            executeServer = false;
        } else {
            if (!isNaN(clientCode)) {
                if (clientCode > 2147483647) {
                    executeServer = false;
                }
            }
        }

        if (this.queryString.menu == Constants.MENU_DISBUSMNT_PART) {
            executeQueryEventArgs.parameters.isDisbursment = 'S';
        } else {
            executeQueryEventArgs.parameters.isDisbursment = 'N';
        }

        executeQueryEventArgs.parameters.category = this.queryString.category ? this.queryString.category : 0;
        executeQueryEventArgs.parameters.desempar = this.queryString.category == 10 && this.queryString.menu == 17 ? 'S' : "N";

        let LoanSearchFilter: any = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter;
        executeQueryEventArgs.parameters.operation = LoanSearchFilter.operation ? LoanSearchFilter.operation : null;
        executeQueryEventArgs.parameters.numProcedure = LoanSearchFilter.numProcedures ? LoanSearchFilter.numProcedures : null;
        executeQueryEventArgs.parameters.numIdentification = LoanSearchFilter.numIdentification ? LoanSearchFilter.numIdentification : null;
        executeQueryEventArgs.parameters.office = LoanSearchFilter.office;
        executeQueryEventArgs.parameters.codCurrency = LoanSearchFilter.codCurrency;
        executeQueryEventArgs.parameters.disbursementDate = LoanSearchFilter.disbursementDate ? LoanSearchFilter.disbursementDate : null;
        executeQueryEventArgs.parameters.status = LoanSearchFilter.status;
        executeQueryEventArgs.parameters.migratedOper = LoanSearchFilter.migratedOper?LoanSearchFilter.migratedOper:null;
        executeQueryEventArgs.parameters.group = LoanSearchFilter.group;
        executeQueryEventArgs.parameters.type = LoanSearchFilter.type;


        executeQueryEventArgs.commons.execServer = executeServer;
    };