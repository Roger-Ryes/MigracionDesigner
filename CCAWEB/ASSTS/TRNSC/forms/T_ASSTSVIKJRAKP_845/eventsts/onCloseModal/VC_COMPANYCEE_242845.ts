
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: CompanyCreateForm
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            let data: any = onCloseModalEventArgs.result.selectedData;
            entities.Company.client = data.code;
            entities.Company.clientName = data.name;
            //onCloseModalEventArgs.commons.api.viewState.disable('VA_FULLNAMENVMNPEV_901221');
        }
    }
    
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.Company.account = onCloseModalEventArgs.result.response.code;
        }
    }

};