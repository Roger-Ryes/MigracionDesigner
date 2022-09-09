//Start signature to Callback event to VA_ACCOUNTLISTZGSM_357515
task.loadCatalogCallback.VA_ACCOUNTLISTZGSM_357515 = function (entities, loadCatalogCallbackEventArgs) {
    //here your code
    var viewState = loadCatalogCallbackEventArgs.commons.api.viewState;
    var validation = angular.element($("#VA_ACCOUNTLISTZGSM_357515")).data('kendoExtComboBox').dataSource.data().length;
    //loadCatalogCallbackEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
};
