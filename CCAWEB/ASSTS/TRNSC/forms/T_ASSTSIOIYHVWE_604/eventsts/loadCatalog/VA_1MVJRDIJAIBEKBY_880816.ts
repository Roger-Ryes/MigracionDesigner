//Entity: Payment
    //Payment.paymentType (ComboBox) View: PaymentsFormGroup
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_1MVJRDIJAIBEKBY_880816 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
        loadCatalogDataEventArgs.commons.execServer = true;
        loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    };