//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: DocumentPrinting
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    /*renderEventArgs.commons.api.grid.fillFiltersQuery('Q_PRINTICM_3105', {
        mode: 0,
        operation: parameters.parameters.loan.desOperationType
    });*/
    renderEventArgs.commons.api.grid.refresh('QV_3105_20065');

};
