//Entity: 
    //.sign (ComboBox) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_SIGNKLSEFBDNEKD_114423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
        loadCatalogDataEventArgs.commons.execServer = false;
        
        return [
            { code: '-', value: "-" }, 
            { code: '+', value: "+" }, 
            { code: '*', value: "*" }, 
            { code: '/', value: "/" }
        ];
    };