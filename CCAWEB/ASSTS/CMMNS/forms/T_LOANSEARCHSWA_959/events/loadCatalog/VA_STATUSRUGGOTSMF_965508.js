//Entity: LoanSearchFilter
//LoanSearchFilter.status (DropDownList) View: LoanSearchForm
    //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_STATUSRUGGOTSMF_965508 = function (loadCatalogDataEventArgs) {
    loadCatalogDataEventArgs.commons.api.vc.model.LoanSearchFilter.category = queryString.category;
    loadCatalogDataEventArgs.commons.serverParameters.LoanSearchFilter = true;

    loadCatalogDataEventArgs.commons.execServer = false;
    //loadCatalogDataEventArgs.commons.serverParameters.LoanSearchFilter = true;

    };