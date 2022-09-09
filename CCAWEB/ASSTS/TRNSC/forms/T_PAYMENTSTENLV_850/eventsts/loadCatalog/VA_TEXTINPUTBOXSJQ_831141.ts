//Entity: Payment
    //Payment.bank (ComboBox) View: PaymentsForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXSJQ_831141 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.execServer = false;
        //loadCatalogEventArgs.commons.serverParameters.Payment = true;
    };