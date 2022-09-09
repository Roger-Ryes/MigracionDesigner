

//Entity: LoanSearchFilter
//LoanSearchFilter.state (DropDownList) View: StatusChangeMassive
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_STATESICWPQOPFM_485293 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoanSearchFilter = true;

};