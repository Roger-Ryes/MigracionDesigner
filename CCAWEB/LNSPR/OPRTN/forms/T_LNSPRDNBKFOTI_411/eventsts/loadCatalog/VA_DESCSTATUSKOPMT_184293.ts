

//Entity: StatesAssetsLoan
//StatesAssetsLoan.descStatus (DropDownList) View: StatusChangeMassiveForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_DESCSTATUSKOPMT_184293 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.StatesAssetsLoan = true;

};