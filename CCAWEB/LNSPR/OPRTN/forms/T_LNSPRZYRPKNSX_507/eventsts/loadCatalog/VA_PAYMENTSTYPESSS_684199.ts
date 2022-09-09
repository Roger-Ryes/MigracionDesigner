

//Entity: Payment
//Payment.paymentType (ComboBox) View: PaymentsForm
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_PAYMENTSTYPESSS_684199 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.navigation.getCustomDialogParameters().LoanSearchFilter = loadCatalogDataEventArgs.commons.api.parentVc?.model.LoanSearchFilter;
    loadCatalogDataEventArgs.commons.api.vc.model.Payment.currencyType = loadCatalogDataEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYXLRJUPE_746199").code;
    loadCatalogDataEventArgs.commons.serverParameters.Payment = true;
    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Payment = true;

};