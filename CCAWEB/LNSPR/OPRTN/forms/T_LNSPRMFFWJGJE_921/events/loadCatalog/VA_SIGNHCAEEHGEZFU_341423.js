//Entity: ReadjustmenMList
    //ReadjustmenMList.sign (ComboBox) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task.loadCatalog.VA_SIGNHCAEEHGEZFU_341423 = function( loadCatalogDataEventArgs ) {
        loadCatalogDataEventArgs.commons.execServer = false;
        return [            
            { code: '-', value: "-" }, 
            { code: '+', value: "+" }, 
            { code: '*', value: "*" }, 
            { code: '/', value: "/" }
        ];
    };