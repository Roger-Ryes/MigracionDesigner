
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: PassivePortfolioCreation
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    let viewState: any = renderEventArgs.commons.api.viewState;
    //Amortizacion Agregada
    if(entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA'){
        viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }
    //Numero dividendos gracia
    if(entities.AmortizationFormEntity.typeGrace == 'S'){
        viewState.show('VA_9468GILHMJRMZIF_745198');
    }else{
        viewState.hide('VA_9468GILHMJRMZIF_745198');
    }
};