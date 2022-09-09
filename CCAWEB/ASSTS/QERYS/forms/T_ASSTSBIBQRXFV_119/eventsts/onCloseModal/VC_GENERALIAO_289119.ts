
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: GeneralInformationMain
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    let apiHeader: any = onCloseModalEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    onCloseModalEventArgs.commons.execServer = true;
};