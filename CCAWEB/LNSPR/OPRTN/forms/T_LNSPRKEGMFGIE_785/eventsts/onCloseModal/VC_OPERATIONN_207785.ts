
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: OperationGeneralParametersForm
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
        }
    }

};