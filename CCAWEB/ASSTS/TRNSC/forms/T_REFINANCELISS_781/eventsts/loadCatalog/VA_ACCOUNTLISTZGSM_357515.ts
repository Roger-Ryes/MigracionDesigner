//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.accountList (ComboBox) View: RefinanceLoansFilter
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
//designer-hint: 2304: Cannot find name 'task_loadCatalog_VA_ACCOUNTLISTZGSM_357515'.
//designer-hint: 2304: Cannot find name 'CobisModelLoadCatalogEventArgs'.
task_loadCatalog_VA_ACCOUNTLISTZGSM_357515 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = false;
    //loadCatalogDataEventArgs.commons.serverParameters.Catalog3Item = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    loadCatalogDataEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
};