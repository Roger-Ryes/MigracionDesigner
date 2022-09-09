

//Entity: OperationEntity
//OperationEntity.official (DropDownList) View: PassivePortfolioCreation
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_OFFICIALFUSJDJB_630899 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

};