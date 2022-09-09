//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: LoanStatusChangeMain
    task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
        renderEventArgs.commons.execServer = false;
    this.ASSTS.Amortization.CapitalBalance(entities.Amortization);


    };