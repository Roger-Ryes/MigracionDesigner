
//SyndicatedListDefinitiveQuery Entity: SyndicatedList
task_executeQuery_Q_SYNDCEAL_LH97 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    let model: any = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.parameters.bankS = model.OperationEntity.operation ? model.OperationEntity.operation : null;


    if (model.OperationEntity.operation && model.OperationEntity.syndicated) {
        executeQueryEventArgs.commons.api.vc.viewState.G_LOANSOPENT_770518.visible = true;
        executeQueryEventArgs.commons.api.viewState.show('QV_GM97_JJJ11');
executeQueryEventArgs.commons.execServer = true;

    }else{

        executeQueryEventArgs.commons.execServer = false;
    }
};