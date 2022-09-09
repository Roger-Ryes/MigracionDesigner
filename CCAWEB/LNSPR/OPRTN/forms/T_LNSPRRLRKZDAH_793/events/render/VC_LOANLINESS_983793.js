//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoanLinesCreate
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Insert) {
        renderEventArgs.commons.api.viewState.hide('G_LOANLINRER_722461');
        renderEventArgs.commons.api.viewState.hide('G_LOANLINACR_870461');
        renderEventArgs.commons.api.viewState.hide('G_LOANLINTRE_952461');
    }

};
