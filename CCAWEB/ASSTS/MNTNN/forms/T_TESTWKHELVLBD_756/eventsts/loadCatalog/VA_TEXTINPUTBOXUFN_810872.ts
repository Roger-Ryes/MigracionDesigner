//Entity: OtherCharges
    //OtherCharges.concept (ComboBox) View: ProjectOtherCharges
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXUFN_810872 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.api.navigation.getCustomDialogParameters().entity = loadCatalogEventArgs.commons.api.parentVc?.model.Loan;
        loadCatalogEventArgs.commons.execServer = true;        
        //loadCatalogEventArgs.commons.serverParameters.OtherCharges = true;
    };