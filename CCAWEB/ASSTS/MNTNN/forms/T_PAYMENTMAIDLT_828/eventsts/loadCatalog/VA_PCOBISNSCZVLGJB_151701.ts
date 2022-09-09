

//Entity: MethodsRetention
//MethodsRetention.pcobis (DropDownList) View: PaymentMaintenanceModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_PCOBISNSCZVLGJB_151701 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.MethodsRetention = true;

    };