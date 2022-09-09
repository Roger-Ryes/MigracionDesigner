//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: LoansLines
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    /*OCULTA CRITERIOS SECUNDARIOS*/
    renderEventArgs.commons.api.viewState.hide('VA_NUMLINEACKAOJVB_120383');
    renderEventArgs.commons.api.viewState.hide('VA_TERMARNTGODSCVL_846615');
    renderEventArgs.commons.api.viewState.hide('VA_SECUENCIALSNTIQ_132615');
    renderEventArgs.commons.api.viewState.hide('VA_NUMLINEAGTDCSGM_878383');
    renderEventArgs.commons.api.viewState.hide('VA_NUMTRAMITEUFKMW_361383');
    renderEventArgs.commons.api.viewState.hide('VA_OFICINANRBOTWYT_467383');
    renderEventArgs.commons.api.viewState.hide('VA_MONEDAXWNJSQNUF_555383');
    renderEventArgs.commons.api.viewState.hide('VA_DATEINIHDUJJRBN_500383');
    renderEventArgs.commons.api.viewState.hide('VA_DATEVTOIOLFWTXY_452383');
    renderEventArgs.commons.api.viewState.hide('VA_ESTADOZXSPUMQFP_238383');
    renderEventArgs.commons.api.viewState.hide('VA_NUMPRESTAMORRMP_430383');

    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;

    if (api.parentVc && (api.parentVc.id == 'VC_PASSIVEPTE_108832' || api.parentVc.id == 'VC_LOANSCREAA_299193' || api.parentVc.id == 'VC_LOANSSIMOO_401626' || api.parentVc.id == 'VC_OPERATIONL_208539')) {
        api.viewState.hide('G_LOANSLINNS_696383');

        api.grid.refresh('QV_OS86_OQI18');
    } else {
        api.viewState.show('G_LOANSLINNS_696383');
    }
};
