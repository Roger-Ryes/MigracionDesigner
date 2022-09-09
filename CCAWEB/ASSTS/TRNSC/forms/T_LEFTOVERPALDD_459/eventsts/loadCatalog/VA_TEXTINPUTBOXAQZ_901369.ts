//Entity: LeftOverPayment
    //LeftOverPayment.paymentType (ComboBox) View: LeftoverPaymentsModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXAQZ_901369 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.execServer = true;
        //loadCatalogEventArgs.commons.serverParameters.LeftOverPayment = true;
    };