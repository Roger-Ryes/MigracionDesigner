//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: BatchMassivePaymentsForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');

};
