

//Entity: StatesAssetsLoan
//StatesAssetsLoan.descStatus (DropDownList) View: StatusChangeMassiveForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_DESCSTATUSKOPMT_184293 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.StatesAssetsLoan = true;

};