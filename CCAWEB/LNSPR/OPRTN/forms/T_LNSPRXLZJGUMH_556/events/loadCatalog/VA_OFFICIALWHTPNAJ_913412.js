

//Entity: LoansLinesHeader
//LoansLinesHeader.official (DropDownList) View: LoanLineCreation
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_OFFICIALWHTPNAJ_913412 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

};