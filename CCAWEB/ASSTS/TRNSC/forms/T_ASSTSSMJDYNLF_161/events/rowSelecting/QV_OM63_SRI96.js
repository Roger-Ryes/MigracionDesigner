
//gridRowSelecting QueryView: QV_OM63_SRI96
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_OM63_SRI96 = function (entities,gridRowSelectingEventArgs) {
    gridRowSelectingEventArgs.commons.execServer = false;
    var api = gridRowSelectingEventArgs.commons.api;
    if ( api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
        api.vc.closeModal({
            response: {
                data: gridRowSelectingEventArgs.rowData
            }
        });
    }

};