//Entity: CondonationDetail
    //CondonationDetail.concept (ComboBox) View: CondonationDetailForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXVSD_563764 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.execServer = true;
        loadCatalogEventArgs.commons.serverParameters.ServerParameter = true;
    };