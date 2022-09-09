//Entity: LeftOverPayment
    //LeftOverPayment.currencyType (ComboBox) View: LeftoverPaymentsModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXSZZ_277369 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.execServer = true;
        //loadCatalogEventArgs.commons.serverParameters.LeftOverPayment = true;
    };