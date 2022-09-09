//gridRowSelecting QueryView: QV_1987_24851
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_1987_24851 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        let selectedAccount: any = gridRowSelectingEventArgs.rowData;
        gridRowSelectingEventArgs.commons.api.navigation.closeModal(selectedAccount);
    };