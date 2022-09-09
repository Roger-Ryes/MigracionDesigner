//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ModalLoanItemsForm
task.initData.VC_MODALLOAIS_799445 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = false;
    entities.Loan = initDataEventArgs.commons.api.parentVc.parentVc.model.Loan;

};
