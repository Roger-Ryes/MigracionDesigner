

//Entity: MethodsRetention
//MethodsRetention.paymentMethods (DropDownList) View: PaymentMaintenanceModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_PAYMENTMETHODSD_816701 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.MethodsRetention = true;

    };