//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoansUpdateForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    var viewState = renderEventArgs.commons.api.viewState;
    viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    if (entities.GeneralParametersQuery){
        entities.GeneralParametersQuery.paymentMethod = entities.GeneralParametersQuery.wayPayment
        if (
            entities.GeneralParametersQuery.paymentCategory == 'NDAH' || 
            entities.GeneralParametersQuery.paymentCategory == 'PLANO'
        ) {
            viewState.show('VA_VABUTTONOHXRHAO_106309');
        }else{
            viewState.hide('VA_VABUTTONOHXRHAO_106309');
        }
    } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');//button establecer
        entities.GeneralParametersQuery.account = null;
    }
    
        //Beneficio interes
     viewState.disable('VA_4223IMHHOSVYCXY_300309');
    
    if(entities.GeneralParametersQuery.benefitInterestRate == 'S'){
          viewState.enable('VA_9193TCVDUUBRZAN_137309');//parametros generales - Tasa Base Beneficio
       }else{
          entities.GeneralParametersQuery.benefitBaseRate = null;
          viewState.disable('VA_9193TCVDUUBRZAN_137309'); //parametros generales - Tasa Base Beneficio
       }
    
    //Amortizacion Agregada
    if(entities.AmortizationFormEntity.typeAmortization == 'AGREGADA'){
        viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }else{
        viewState.enable('VA_TYPEAMORTIZATTN_681198');
    }
    
    //Numero dividendos gracia
    if(entities.AmortizationFormEntity.typeGrace == 'S'){
        viewState.show('VA_9468GILHMJRMZIF_745198');
    }else{
        viewState.hide('VA_9468GILHMJRMZIF_745198');
    }
};