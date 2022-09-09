//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: RefinanceLoansFilter
//designer-hint: 2304: Cannot find name 'task_render'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelRenderEventArgs'.
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    entities.RefinanceLoanFilter.capitalizeBalance = 'S';

};
