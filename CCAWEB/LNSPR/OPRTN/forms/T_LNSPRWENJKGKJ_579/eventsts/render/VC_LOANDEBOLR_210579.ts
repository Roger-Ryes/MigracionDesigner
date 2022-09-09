
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanDebtorList
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;
    api.grid.refresh('QV_VI44_NQR57');
};