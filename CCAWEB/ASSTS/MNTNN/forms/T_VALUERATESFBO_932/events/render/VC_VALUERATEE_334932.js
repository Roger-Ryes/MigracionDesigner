//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: ValueRates
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.hideToolBarButton('QV_5693_54772', 'create');

};
