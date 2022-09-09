
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: GeneralInformationMain
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){
    var apiHeader = onCloseModalEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions(onCloseModalEventArgs);
    
    onCloseModalEventArgs.commons.execServer = true;

};