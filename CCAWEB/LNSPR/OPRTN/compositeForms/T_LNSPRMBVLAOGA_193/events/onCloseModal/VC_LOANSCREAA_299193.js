
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoansCreateComp
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    var constants = onCloseModalEventArgs.commons.constants;
    var resultArgs = onCloseModalEventArgs.result.resultArgs;
    
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            var data = onCloseModalEventArgs.result.selectedData;
            entities.OperationCRUDFormEntity.code = data.code;
            //entities.OperationCRUDFormEntity.fullName = data.name;
            //entities.OperationCRUDFormEntity.idNumber = data.documentId;
            //onCloseModalEventArgs.commons.api.viewState.disable('VA_FULLNAMENVMNPEV_901221');
        }
    }
    
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
        if (onCloseModalEventArgs.dialogCloseType !== constants.dialogCloseType.NonInteractive) {
            if (resultArgs.mode === constants.mode.Insert) {
                onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
            } else if (resultArgs.mode === constants.mode.Update) {
                onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
            }
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" && onCloseModalEventArgs.dialogCloseType == 0){
        entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_SYNDICATDI_660858" && onCloseModalEventArgs.dialogCloseType == 0) {
        onCloseModalEventArgs.commons.api.grid.refresh('QV_VE29_XZB37');
        onCloseModalEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = true;
    }


};