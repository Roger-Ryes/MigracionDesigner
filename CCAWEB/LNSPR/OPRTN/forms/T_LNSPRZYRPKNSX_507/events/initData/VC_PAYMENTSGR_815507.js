
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: PaymentsForm
task.initData.VC_PAYMENTSGR_815507 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.api.vc.viewState.G_PAYMENTSSS_757199.visible = false;//Solo es necesaria por la entidad
    initDataEventArgs.commons.api.viewState.disable('CM_TLNSPRZY_1_0');
    entities.Payment.value = 0;// Valor inicial
    entities.Payment.date = new Date(cobis.containerScope.preferences.processDate);//Fecha del campo inicial

    // Campo Cancelar de la modal
    initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_1_0");
    initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRZY_N35");

    initDataEventArgs.commons.execServer = false;
};