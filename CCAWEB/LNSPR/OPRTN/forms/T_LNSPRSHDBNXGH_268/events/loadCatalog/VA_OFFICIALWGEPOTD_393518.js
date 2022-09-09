

//Entity: OperationEntity
//OperationEntity.official (DropDownList) View: LoansOperationUpdate
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_OFFICIALWGEPOTD_393518 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

};