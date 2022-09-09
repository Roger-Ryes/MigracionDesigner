
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanSearchForm
task.render = function (entities, renderEventArgs){
    entities.ReadjustmentMEntity.sign = null;
    entities.ReadjustmentMEntity.factor = null;
    entities.ReadjustmentMEntity.percentage = null;
    renderEventArgs.commons.execServer = false;
};