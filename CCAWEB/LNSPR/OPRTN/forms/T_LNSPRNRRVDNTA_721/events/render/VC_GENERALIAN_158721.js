//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: GeneralInformationLine
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    var apiHeader = renderEventArgs.commons.api.cobisPatterns.header;

    if (renderEventArgs.commons.api.parentVc && renderEventArgs.commons.api.parentVc.id == 'VC_LOANSLINSS_962737') {
    apiHeader.visibleSearchOption(true);
    } else {
        apiHeader.visibleSearchOption(false);
    }
    entities.LoansLinesHeader.monto = kendo.toString(Number(entities.LoansLinesHeader.monto), "n");
    entities.LoansLinesHeader.montoDisponible = kendo.toString(Number(entities.LoansLinesHeader.montoDisponible), "n");
    entities.LoansLinesHeader.montoUtilizado = kendo.toString(Number(entities.LoansLinesHeader.montoUtilizado), "n");
    entities.LoansLinesHeader.naturalezaOp = entities.LoansLinesHeader.naturalezaOp == 'A' ? 'ACTIVA' : 'PASIVA';

};
