
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: CompanyCreateForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    var api = renderEventArgs.commons.api;
    var mode = renderEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Insert){
        api.viewState.label('CM_TASSTSVI_S4A','ASSTS.LBL_ASSTS_CREAROWFP_92542');//Crear
        api.viewState.label('CM_TASSTSVI_9TC','ASSTS.LBL_ASSTS_CANCELARR_70217');//Cancelar
    }else if(api.vc.mode == mode.Update){
        api.viewState.label('CM_TASSTSVI_S4A','ASSTS.LBL_ASSTS_GUARDARRI_81055');//Guardar
        api.viewState.label('CM_TASSTSVI_9TC','ASSTS.LBL_ASSTS_CERRARGRF_18229');//Cerrar
    }else if(api.vc.mode == mode.Query){
        api.viewState.hide('CM_TASSTSVI_S4A');//Cmd Crear
        api.viewState.label('CM_TASSTSVI_9TC','ASSTS.LBL_ASSTS_CERRARGRF_18229');//Cerrar
        api.viewState.disable('VA_PAYMENTSERVICCC_447399') //Forma Pago Servicio
        api.viewState.disable('VA_PAYMENTFREQUNCN_755399') //Frecuencia Descuento
        api.viewState.disable('VA_PAYMENTUVUDGASL_450399') //Forma de Pago
        api.viewState.disable('VA_STATEENISMIMLSA_521399') //Estado
        api.viewState.disable('VA_AGREEMENTZHTVHP_162399') //Convenio 
        api.viewState.disable('VA_CLIENTRGTMTTEWO_906399') //Botton Cliente
        api.viewState.disable('VA_ACCOUNTNAAOFHSO_558399') //Botton Nueva Cuenta
    }
};