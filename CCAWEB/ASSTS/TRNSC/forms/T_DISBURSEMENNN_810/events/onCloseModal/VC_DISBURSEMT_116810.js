
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: DisbursementForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    //onCloseModalEventArgs.commons.serverParameters.entityName = true;
    
    onCloseModalEventArgs.commons.api.grid.refresh('QV_5973_48889');

};