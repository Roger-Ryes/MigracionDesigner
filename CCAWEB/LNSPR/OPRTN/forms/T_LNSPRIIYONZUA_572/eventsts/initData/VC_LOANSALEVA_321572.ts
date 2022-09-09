
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSaleForm
task_initData_VC_LOANSALEVA_321572 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRII_6S6'); //boton guardar
    viewState.hide('G_LOANSALEEE_654584'); //grid detail
};