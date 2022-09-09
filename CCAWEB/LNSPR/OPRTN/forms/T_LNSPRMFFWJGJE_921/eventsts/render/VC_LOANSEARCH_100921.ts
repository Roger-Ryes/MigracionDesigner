
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanSearchForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    entities.ReadjustmentMEntity.sign = null;
    entities.ReadjustmentMEntity.factor = null;
    entities.ReadjustmentMEntity.percentage = null;
    renderEventArgs.commons.execServer = false;
};