//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OfficialOfficeTransferForm
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    entities.OfficialOfficeTransferFilter.transferType = 'N';
    renderEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');

};
