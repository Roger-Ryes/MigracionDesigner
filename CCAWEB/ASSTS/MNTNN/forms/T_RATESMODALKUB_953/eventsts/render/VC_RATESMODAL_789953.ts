//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: RatesModal
        task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
        renderEventArgs.commons.execServer = false;
 
        
        if (this.mode == 2) {
            entities.Rates.portfolioClass = this.portfolioClassAux;
        this.calculateTotal(1, entities.Rates, renderEventArgs);
        this.calculateTotal(2, entities.Rates, renderEventArgs);
        this.calculateTotal(3, entities.Rates, renderEventArgs);
            
        }
    };