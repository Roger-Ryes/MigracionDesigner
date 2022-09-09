//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: GeneralInformationMain
task_initData_VC_GENERALIAO_289119 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    let api: any=initDataEventArgs.commons.api;
    let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;
    let parameters: any = null;
    let xsell: any = 'N';

    if(this.ASSTS.tab.parameters){
        apiHeader.visibleSearchOption(false);
        parameters = this.ASSTS.tab.parameters;
        
        entities.Loan.adjustment       = parameters.adjustment;
        entities.Loan.amount           = parameters.amount;
        entities.Loan.categoryGroup    = parameters.categoryGroup;
        entities.Loan.clientID         = parameters.clientID;
        entities.Loan.clientName       = parameters.clientName;
        entities.Loan.codCurrency      = parameters.codCurrency;
        entities.Loan.currencyName     = parameters.currencyName;
        entities.Loan.desOperationType = parameters.desOperationType;
        entities.Loan.disbursementDate = parameters.disbursementDate;
        entities.Loan.expirationDate   = parameters.expirationDate;
        entities.Loan.group            = parameters.group;
        entities.Loan.loanBankID       = parameters.loanBankID;
        entities.Loan.loanID           = parameters.loanID;
        entities.Loan.migratedOper     = parameters.migratedOper;
        entities.Loan.numProcedure     = parameters.numProcedure;
        entities.Loan.officeID         = parameters.officeID;
        entities.Loan.officerID        = parameters.officerID;
        entities.Loan.previousOper     = parameters.previousOper;
        entities.Loan.redesCont        = parameters.redesCont;
        entities.Loan.status           = parameters.status;
        entities.Loan.tipo             = parameters.tipo;
    }else{
     parameters =api.navigation.getCustomDialogParameters();
    //entities.LoanInstancia = parameters.parameters.loanInstancia;
    entities.Loan = parameters.parameters.loan;
        
        if (parameters.parameters.menu == "0" || parameters.parameters.menu == "89170") {
            apiHeader.visibleSearchOption(false);
        }
    }

    initDataEventArgs.commons.api.viewState.hide('G_GENERALTAM_466193');

    if (entities.Loan.categoryGroup == "INDIVIDUAL") {
        entities.Loan.tipo = "I";
    } else {
        entities.Loan.tipo = "G";
    }

    //if (parameters.parameters.menu == "4") {
    if (entities.Loan.tipo == "I") {
        initDataEventArgs.commons.api.viewState.hide('G_GENERALMIN_860193');
        initDataEventArgs.commons.api.viewState.hide('G_GENERALOAT_762193');
    } else {
        initDataEventArgs.commons.api.viewState.show('G_GENERALMIN_860193');
        initDataEventArgs.commons.api.viewState.show('G_GENERALOAT_762193');
    }
    // }


    apiHeader.refreshActions();




    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
};
