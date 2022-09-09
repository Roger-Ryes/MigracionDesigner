//Entity: Payment
//Payment.paymentType (DropDownList) View: PaymentsForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_TEXTINPUTBOXCFY_310141 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

    };