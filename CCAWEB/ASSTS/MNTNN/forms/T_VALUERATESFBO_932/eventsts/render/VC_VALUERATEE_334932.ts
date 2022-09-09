//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: ValueRates
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.hideToolBarButton('QV_5693_54772', 'create');

};
