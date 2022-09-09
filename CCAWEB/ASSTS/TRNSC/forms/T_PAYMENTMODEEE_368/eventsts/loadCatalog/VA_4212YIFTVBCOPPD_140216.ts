//Entity: PaymentForm
    //PaymentForm.currencyId (ComboBox) View: PaymentModeForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_4212YIFTVBCOPPD_140216 = (loadCatalogEventArgs: any) => {
 
        loadCatalogEventArgs.commons.execServer = true;
        //loadCatalogEventArgs.commons.serverParameters.PaymentForm = true;
    };