//Entity: 
    //.sign (ComboBox) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task.loadCatalog.VA_SIGNKLSEFBDNEKD_114423 = function( loadCatalogDataEventArgs ) {
        loadCatalogDataEventArgs.commons.execServer = false;
        
        return [
            { code: '-', value: "-" }, 
            { code: '+', value: "+" }, 
            { code: '*', value: "*" }, 
            { code: '/', value: "/" }
        ];
    };