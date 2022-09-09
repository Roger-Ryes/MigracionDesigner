//Entity: Payment
//Payment.paymentType (DropDownList) View: PaymentsForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_TEXTINPUTBOXCFY_310141 = function (loadCatalogDataEventArgs) {
    loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

    };