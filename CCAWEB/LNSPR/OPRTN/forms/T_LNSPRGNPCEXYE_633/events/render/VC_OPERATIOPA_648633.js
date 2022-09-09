
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OperationPaymentDayUpdateForm
task.render = function (entities, renderEventArgs){
    var viewState = renderEventArgs.commons.api.viewState;
    var parentVc = renderEventArgs.commons.api.parentVc;
    var typeAggregate = entities.GeneralParametersQuery.aggregate;
    renderEventArgs.commons.execServer = false;

    if (renderEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
        renderEventArgs.commons.api.viewState.disable('G_OPERATIAEO_858198');
    }
    renderEventArgs.commons.api.viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    
    //Amortizacion Agregada
    if(entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA'){
        viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }
    
    //ocultar si es AGREGADA y en reestructura
    if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){    
        viewState.disable('VA_TERMGRACECAPTAT_881198'); //Periodo gracia capital 
        viewState.disable('VA_TERMGRACEINTTET_849198'); //Periodo gracia interes
        viewState.disable('VA_TYPEGRACEBHAAVJ_350198'); //Forma cobro gracia
        viewState.disable('VA_9468GILHMJRMZIF_745198'); //Num div a distribuir
    }
};