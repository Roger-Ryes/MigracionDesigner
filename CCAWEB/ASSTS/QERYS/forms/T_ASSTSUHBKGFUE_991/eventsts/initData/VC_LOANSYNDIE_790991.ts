
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSyndicatedListForm
task_initData_VC_LOANSYNDIE_790991 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;

};