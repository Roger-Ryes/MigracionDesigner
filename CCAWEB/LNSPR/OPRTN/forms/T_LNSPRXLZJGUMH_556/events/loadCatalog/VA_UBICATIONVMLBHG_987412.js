

//Entity: LoansLinesHeader
//LoansLinesHeader.ubication (DropDownList) View: LoanLineCreation
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_UBICATIONVMLBHG_987412 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

};