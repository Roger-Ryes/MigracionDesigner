
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: OperationGeneralParametersForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
        }
    }

};