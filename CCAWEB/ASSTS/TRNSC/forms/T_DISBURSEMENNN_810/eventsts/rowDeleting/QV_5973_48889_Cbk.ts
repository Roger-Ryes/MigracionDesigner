//Start signature to callBack event to QV_5973_48889
    //designer-hint: 2304: Cannot find name 'task_gridRowDeletingCallback_QV_5973_48889'.
    task_gridRowDeletingCallback_QV_5973_48889 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionCallbackEventArgs'.
        gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
    ) => {

    if (gridRowDeletingEventArgs.success && gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
        //designer-hint: 2304: Cannot find name 'diferencia'.
        // TODO - ALE 
        diferencia = entities.DisbursementResult.difference;
    }
    };