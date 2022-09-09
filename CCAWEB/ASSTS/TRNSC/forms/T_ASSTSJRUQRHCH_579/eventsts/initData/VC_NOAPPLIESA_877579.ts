
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: NoAppliedPaymentsForm
task_initData_VC_NOAPPLIESA_877579 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any=initDataEventArgs.commons.api;
    let parameters: any=api.navigation.getCustomDialogParameters();

    entities.Loan = parameters.parameters.loan;

    initDataEventArgs.commons.execServer = false;
};