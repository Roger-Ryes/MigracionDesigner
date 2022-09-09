//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: RatesModal
        task.render = function (entities, renderEventArgs) {
        renderEventArgs.commons.execServer = false;
 
        
        if (mode == 2) {
            entities.Rates.portfolioClass = portfolioClassAux;
        calculateTotal(1, entities.Rates, renderEventArgs);
        calculateTotal(2, entities.Rates, renderEventArgs);
        calculateTotal(3, entities.Rates, renderEventArgs);
            
        }
    };