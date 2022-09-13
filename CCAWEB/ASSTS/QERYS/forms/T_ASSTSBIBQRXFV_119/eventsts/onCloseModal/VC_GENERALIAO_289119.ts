
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: GeneralInformationMain
//designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
//designer-hint: 6133: 'entities' is declared but its value is never read.
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    let apiHeader: any = onCloseModalEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    onCloseModalEventArgs.commons.execServer = true;
};