

//Entity: LoansLinesHeader
//LoansLinesHeader.ubication (DropDownList) View: LoanLineCreation
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_UBICATIONVMLBHG_987412 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

};