
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanDebtorList
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    var api = renderEventArgs.commons.api;
    api.grid.refresh('QV_VI44_NQR57');
};