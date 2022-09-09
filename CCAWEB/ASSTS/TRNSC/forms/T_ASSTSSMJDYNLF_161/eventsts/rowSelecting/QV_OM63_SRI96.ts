
//gridRowSelecting QueryView: QV_OM63_SRI96
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_OM63_SRI96 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;
    if ( api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
        api.vc.closeModal({
            response: {
                data: gridRowSelectingEventArgs.rowData
            }
        });
    }
};