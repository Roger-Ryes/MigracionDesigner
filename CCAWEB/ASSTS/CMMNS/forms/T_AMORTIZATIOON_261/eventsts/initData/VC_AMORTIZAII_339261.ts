//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AmortizationForm
task_initData_VC_AMORTIZAII_339261 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.parentVc?.model.Loan;
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;

};