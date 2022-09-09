
//gridRowSelecting QueryView: QV_VI44_NQR57
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_VI44_NQR57 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;
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




