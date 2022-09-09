
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: OperationLoansForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){
    
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            var data = onCloseModalEventArgs.result.selectedData;
            entities.OperationCRUDFormEntity.code = data.code;
            isGroup = data.isGroup;
            //entities.OperationCRUDFormEntity.fullName = data.name;
            //entities.OperationCRUDFormEntity.idNumber = data.documentId;
            
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" && 
        onCloseModalEventArgs.dialogCloseType == 0){
        entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }
};