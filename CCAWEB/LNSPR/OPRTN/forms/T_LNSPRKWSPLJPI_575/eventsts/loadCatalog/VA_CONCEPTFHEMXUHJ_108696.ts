//Entity: OtherCharges
//OtherCharges.concept (DropDownList) View: ProjectOtherCharges
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task_loadCatalog_VA_CONCEPTFHEMXUHJ_108696 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.vc.model.OtherCharges.currency = loadCatalogDataEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYTRTBCCA_970696").code;
    loadCatalogDataEventArgs.commons.api.vc.model.OtherCharges.typeOp = loadCatalogDataEventArgs.commons.api.parentVc?.model.LoanSearchFilter.type;
    loadCatalogDataEventArgs.commons.serverParameters.OtherCharges = true;
    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OtherCharges = true;

};