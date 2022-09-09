
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: PassivePortfolioCreation
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let resultArgs: any = onCloseModalEventArgs.result.resultArgs;

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            let data: any = onCloseModalEventArgs.result.selectedData;
            entities.OperationCRUDFormEntity.code = data.code;
            entities.OperationCRUDFormEntity.fullName = data.name;
            entities.OperationCRUDFormEntity.idNumber = data.documentId;
            onCloseModalEventArgs.commons.api.viewState.disable('VA_FULLNAMENVMNPEV_901221');
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" && onCloseModalEventArgs.dialogCloseType == 0) {
        entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.GeneralOperationParameters.account = onCloseModalEventArgs.result.response.code;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
        if (onCloseModalEventArgs.dialogCloseType !== onCloseModalEventArgs.commons.constants.dialogCloseType.NonInteractive) {
            if (resultArgs.mode === onCloseModalEventArgs.commons.constants.mode.Insert) {
                onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
            } else if (resultArgs.mode === onCloseModalEventArgs.commons.constants.mode.Update) {
                onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
            }
        }
    }
};