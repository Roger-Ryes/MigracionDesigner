//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ModalLoanItemsForm
task_initData_VC_MODALLOAIS_799445 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    entities.Loan = initDataEventArgs.commons.api.parentApi()?.parentVc?.model.Loan;

};
