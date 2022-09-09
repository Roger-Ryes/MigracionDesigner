

//Entity: OperationEntity
//OperationEntity.official (DropDownList) View: OperationForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_OFFICIALHKVNOOZ_385221 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

};