
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoansCreateForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    entities.OperationEntity.office = JSON.parse(sessionStorage.userOffice).code;
};