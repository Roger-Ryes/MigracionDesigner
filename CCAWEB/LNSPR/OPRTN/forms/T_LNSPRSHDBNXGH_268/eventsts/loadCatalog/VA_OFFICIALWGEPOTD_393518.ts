

//Entity: OperationEntity
//OperationEntity.official (DropDownList) View: LoansOperationUpdate
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_OFFICIALWGEPOTD_393518 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

};