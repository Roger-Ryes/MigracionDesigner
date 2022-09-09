//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.accountList (ComboBox) View: RefinanceLoansFilter
//Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
task.loadCatalog.VA_ACCOUNTLISTZGSM_357515 = function (loadCatalogDataEventArgs) {

    loadCatalogDataEventArgs.commons.execServer = false;
    //loadCatalogDataEventArgs.commons.serverParameters.Catalog3Item = true;
    //loadCatalogDataEventArgs.commons.serverParameters.Loan = true;
    loadCatalogDataEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
};