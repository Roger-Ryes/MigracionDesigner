//Start signature to callBack event to QV_5973_48889
    task_gridRowDeletingCallback_QV_5973_48889 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
    ) => {

    if (gridRowDeletingEventArgs.success && gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
        diferencia = entities.DisbursementResult.difference;
    }
    };