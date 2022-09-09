
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: StatusChangeMassive
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    
    if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        var data = onCloseModalEventArgs.result.selectedData;
        entities.LoanSearchFilter.numIdentification = data.code;
    }

};