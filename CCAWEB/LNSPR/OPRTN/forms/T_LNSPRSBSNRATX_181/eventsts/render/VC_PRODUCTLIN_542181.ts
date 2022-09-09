//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: ProductLineDistributionForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Update) {
        renderEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');
    } else if (renderEventArgs.commons.api.vc.mode == renderEventArgs.commons.constants.mode.Insert) {
         renderEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');
    }

    if (entities.ProductLineDistribution.nature == "A") {
        renderEventArgs.commons.api.viewState.show('VA_OPTYPEACPEUXTGS_100676');
    } else {
        renderEventArgs.commons.api.viewState.show('VA_OPTYPEPASINULZZ_450676');
    }

};
