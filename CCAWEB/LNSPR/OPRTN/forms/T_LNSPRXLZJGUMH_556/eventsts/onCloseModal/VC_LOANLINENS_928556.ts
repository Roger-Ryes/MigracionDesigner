
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoanLineCreation
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            let data: any = onCloseModalEventArgs.result.selectedData;
            if(data.isGroup){
                entities.LoanLinesCreation.customerGroup = data.code;
                entities.LoanLinesCreation.customer = null;
            }else{
                entities.LoanLinesCreation.customer = data.code;
                entities.LoanLinesCreation.customerGroup = null;
            }
            entities.LoanLinesCreation.customerName = data.code + " - " + data.name;
        }
    }

};