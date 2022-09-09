//Entity: Payment
    //Payment.paymentType (ComboBox) View: PaymentsFormGroup
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task.loadCatalog.VA_1MVJRDIJAIBEKBY_880816 = function( loadCatalogDataEventArgs ) {
        loadCatalogDataEventArgs.commons.execServer = true;
        loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    };