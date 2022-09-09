//gridRowSelecting QueryView: QV_1987_42894
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_1987_42894 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;

        let selectedAccount: any = gridRowSelectingEventArgs.rowData;
        gridRowSelectingEventArgs.commons.api.navigation.closeModal(selectedAccount);
    };