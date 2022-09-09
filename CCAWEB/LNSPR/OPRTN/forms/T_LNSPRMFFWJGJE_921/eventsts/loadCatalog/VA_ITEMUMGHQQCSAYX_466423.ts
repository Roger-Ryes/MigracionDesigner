//Entity: 
    //.item (ComboBox) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_ITEMUMGHQQCSAYX_466423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
        loadCatalogDataEventArgs.commons.execServer = true;
    };