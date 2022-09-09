//Start signature to callBack event to QV_5973_48889
    task.gridRowDeletingCallback.QV_5973_48889 = function(entities, gridRowDeletingEventArgs) {

    if (gridRowDeletingEventArgs.success && gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
        diferencia = entities.DisbursementResult.difference;
    }
    };