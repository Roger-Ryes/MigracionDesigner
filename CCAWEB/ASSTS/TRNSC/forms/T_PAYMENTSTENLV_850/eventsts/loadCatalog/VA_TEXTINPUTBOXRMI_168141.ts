//Entity: CondonationDetail
    //CondonationDetail.concept (ComboBox) View: PaymentsForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXRMI_168141 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = false;
    
        //loadCatalogDataEventArgs.commons.serverParameters.CondonationDetail = true;
    };