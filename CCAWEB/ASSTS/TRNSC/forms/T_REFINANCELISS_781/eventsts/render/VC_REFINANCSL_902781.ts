//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: RefinanceLoansFilter
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    entities.RefinanceLoanFilter.capitalizeBalance = 'S';

};
