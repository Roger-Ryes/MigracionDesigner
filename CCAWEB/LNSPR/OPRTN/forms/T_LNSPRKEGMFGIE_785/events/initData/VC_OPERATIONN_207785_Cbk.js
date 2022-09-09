//Start signature to Callback event to VC_OPERATIONN_207785
task.initDataCallback.VC_OPERATIONN_207785 = function(entities, initDataCallbackEventArgs) {

    var viewState = initDataCallbackEventArgs.commons.api.viewState;
    var parentVc = initDataCallbackEventArgs.commons.api.parentVc;
    var typeAggregate = entities.GeneralParametersQuery.aggregate;

    if (entities.GeneralParametersQuery.readjustable == 'N') {
        initDataCallbackEventArgs.commons.api.viewState.disable('VA_PERIODICITYEHNN_689309');
        entities.GeneralParametersQuery.periodicity = null;
    }
    
    //ocultar si es AGREGADA y en reestructura
    if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){    
        viewState.disable('VA_READJUSTABLELXP_279309'); //Reajustable 
        viewState.disable('VA_PERIODICITYEHNN_689309'); //Periodo Reajuste
        viewState.disable('VA_INTERESTPAYMNNE_508309'); //Pago interes
        viewState.disable('VA_KINDPAYMENTDUCW_586309'); //Tipo Pago
        viewState.disable('VA_4223IMHHOSVYCXY_300309'); //Beneficio tasa interes 
        viewState.disable('VA_9193TCVDUUBRZAN_137309'); //Tasa base para beneficio
    }

};
