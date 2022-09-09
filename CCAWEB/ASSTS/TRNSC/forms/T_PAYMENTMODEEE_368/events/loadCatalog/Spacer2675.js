//Entity: PaymentForm
    //PaymentForm.payFormId (ComboBox) View: PaymentModeForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task.loadCatalog.Spacer2675 = function(loadCatalogEventArgs ) {
    loadCatalogEventArgs.commons.serverParameters.PaymentForm = true;
    loadCatalogEventArgs.commons.api.vc.model.PaymentForm.currencyFlagAux = '1';
        loadCatalogEventArgs.commons.execServer = true;

    };