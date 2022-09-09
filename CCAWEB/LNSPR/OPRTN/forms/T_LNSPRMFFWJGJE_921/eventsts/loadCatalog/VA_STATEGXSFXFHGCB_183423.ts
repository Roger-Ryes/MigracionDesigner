//Entity: LoanSearchFilter
    //LoanSearchFilter.state (ComboBox) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_STATEGXSFXFHGCB_183423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
        loadCatalogDataEventArgs.commons.execServer = true;
    };