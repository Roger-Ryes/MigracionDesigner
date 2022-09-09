//Entity: LoanSearchFilter
//LoanSearchFilter.status (DropDownList) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_STATUSRUGGOTSMF_965508 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.api.vc.model.LoanSearchFilter.category = this.queryString.category;
    loadCatalogDataEventArgs.commons.serverParameters.LoanSearchFilter = true;

    loadCatalogDataEventArgs.commons.execServer = false;
    //loadCatalogDataEventArgs.commons.serverParameters.LoanSearchFilter = true;

    };