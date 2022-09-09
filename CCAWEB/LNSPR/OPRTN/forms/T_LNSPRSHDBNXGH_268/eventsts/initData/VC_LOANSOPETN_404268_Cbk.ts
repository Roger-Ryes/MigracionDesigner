//Start signature to Callback event to VC_LOANSOPETN_404268
task_initDataCallback_VC_LOANSOPETN_404268 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    let parentVc: any = initDataCallbackEventArgs.commons.api.parentVc;
    let model: any = initDataCallbackEventArgs.commons.api.vc.model;

    if (initDataCallbackEventArgs.success) {
        valorAprobado = entities.OperationEntity.amountApproved;
        valorOperacion = entities.OperationEntity.amount;
        fechaCreacion = entities.OperationEntity.creationDate;
        codOperacion = entities.OperationEntity.codOperation;

        if (parentVc && parentVc.id === 'VC_LOANPARTIR_265871') {
            if (!model.OperationEntity.syndicated) {
                initDataCallbackEventArgs.commons.api.vc.viewState.G_LOANSOPENT_770518.visible = false;
                initDataCallbackEventArgs.commons.api.viewState.hide('QV_GM97_JJJ11');
            }
        }
    }
};