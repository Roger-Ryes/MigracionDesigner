//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: BatchMassivePaymentsForm
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');

};
