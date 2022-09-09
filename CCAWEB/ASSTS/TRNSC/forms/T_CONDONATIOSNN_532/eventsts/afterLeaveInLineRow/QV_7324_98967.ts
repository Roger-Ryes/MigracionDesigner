//gridAfterLeaveInLineRow QueryView: QV_7324_98967
    //Evento GridAfterLeavenlineRow: Se ejecuta después de aceptar la edición o inserción en línea de la grilla.
    task_gridAfterLeaveInLineRow_QV_7324_98967 = (
        entities: Model,
        gridAfterLeaveInLineRowEventArgs: CobisModelGridAfterLeaveInLineRowEventArgs
    ) => {
        gridAfterLeaveInLineRowEventArgs.commons.execServer = false;
        
    };