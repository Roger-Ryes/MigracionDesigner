

//Entity: Rates
//Rates.referenceValue (DropDownList) View: RatesModal
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_REFERENCEVALEEE_875778 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Rates = true;

    };