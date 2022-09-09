//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.preventionProgram (ComboBox) View: RefinanceLoansFilter
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task.loadCatalog.VA_PREVENTIONPRRAM_747515 = function( loadCatalogDataEventArgs ) {

    loadCatalogDataEventArgs.commons.execServer = true;
    
        //loadCatalogDataEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
    };