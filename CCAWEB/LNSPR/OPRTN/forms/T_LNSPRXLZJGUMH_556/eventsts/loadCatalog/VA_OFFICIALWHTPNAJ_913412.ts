

//Entity: LoansLinesHeader
//LoansLinesHeader.official (DropDownList) View: LoanLineCreation
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_OFFICIALWHTPNAJ_913412 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

};