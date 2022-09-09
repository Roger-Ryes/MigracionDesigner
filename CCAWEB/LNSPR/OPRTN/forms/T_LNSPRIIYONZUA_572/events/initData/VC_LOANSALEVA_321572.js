
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSaleForm
task.initData.VC_LOANSALEVA_321572 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    var viewState = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRII_6S6'); //boton guardar
    viewState.hide('G_LOANSALEEE_654584'); //grid detail
    
};