//Start signature to Callback event to VA_ACCOUNTLISTZGSM_357515
//designer-hint: 2304: Cannot find name 'task_loadCatalogCallback_VA_ACCOUNTLISTZGSM_357515'.
task_loadCatalogCallback_VA_ACCOUNTLISTZGSM_357515 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelLoadCatalogCallbackEventArgs'.
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
    //here your code
    //designer-hint: 6133: 'viewState' is declared but its value is never read.
    let viewState: any = loadCatalogCallbackEventArgs.commons.api.viewState;

    //designer-hint: 2304: Cannot find name 'angular'.
    //designer-hint: 2581: Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.
    //designer-hint: 6133: 'validation' is declared but its value is never read.
    let validation: any = angular.element($("#VA_ACCOUNTLISTZGSM_357515")).data('kendoExtComboBox').dataSource.data().length;
};
