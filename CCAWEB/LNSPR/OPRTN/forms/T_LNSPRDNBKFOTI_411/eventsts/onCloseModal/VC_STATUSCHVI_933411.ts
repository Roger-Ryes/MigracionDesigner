
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: StatusChangeMassive
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    
    if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        entities.LoanSearchFilter.numIdentification = data.code;
    }

};