
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: CompaniesBatchForm
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.refresh("QV_OM63_SRI96");
};