

//Entity: OperationEntity
//OperationEntity.ubication (DropDownList) View: OperationForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_UBICATIONZGLTDO_878221 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

};