//Entity: ReadjustmentDetalilsLoan
    //ReadjustmentDetalilsLoan.referencial (ComboBox) View: ReadjustmentDetalilsLoanForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
    task_loadCatalog_VA_TEXTINPUTBOXFYD_123141 = (loadCatalogEventArgs: any) => {
        loadCatalogEventArgs.commons.execServer = true;
        //loadCatalogEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;
    };