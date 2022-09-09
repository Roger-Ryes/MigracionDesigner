//ModalReferentialEntityQuery Entity: ModalReferentialEntity
    task_executeQuery_Q_MODAANIN_EP53 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
         executeQueryEventArgs.commons.execServer = true;
        executeQueryEventArgs.commons.execServer = true;
        if (executeQueryEventArgs.config?.appendRecords == true) {
            executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_UG53_BFT63', ['typeValue'], executeQueryEventArgs);
        }
    };