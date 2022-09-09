//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansLineGuaranteesForm
task_initData_VC_LOANSLINER_641705 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.api.viewState.disable('VA_VABUTTONZLYUQVN_789308');
   

    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
        entities.LoansLineGuarantee.guaranteeStatus = 'V';
        entities.LoansLineGuarantee.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
        entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;

        initDataEventArgs.commons.execServer = false;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {

        entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea;

        initDataEventArgs.commons.execServer = true;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
        entities.LoansLineGuarantee.guaranteeStatus = 'V';
        entities.LoansLineGuarantee.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
        entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;
      

        initDataEventArgs.commons.execServer = true;
    }




};
