//Start signature to Callback event to VA_ACCOUNTLISTZGSM_357515
task_loadCatalogCallback_VA_ACCOUNTLISTZGSM_357515 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
    //here your code
    let viewState: any = loadCatalogCallbackEventArgs.commons.api.viewState;

    let validation: any = angular.element($("#VA_ACCOUNTLISTZGSM_357515")).data('kendoExtComboBox').dataSource.data().length;
};
