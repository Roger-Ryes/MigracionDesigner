
//gridRowSelecting QueryView: QV_VI44_NQR57
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_VI44_NQR57 = function (entities,gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    var api = gridRowSelectingEventArgs.commons.api;
    if ( api.parentVc && (api.parentVc.id == 'VC_REPAYMENTT_461527')) {
        api.vc.closeModal({
            response: {
                customerID: gridRowSelectingEventArgs.rowData.client,
                customerName: gridRowSelectingEventArgs.rowData.clientName,
                role: gridRowSelectingEventArgs.rowData.clientRol
            }
        });
    }

};




