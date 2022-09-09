//Start signature to Callback event to VA_OFFICIALFUSJDJB_630899
task_loadCatalogCallback_VA_OFFICIALFUSJDJB_630899 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
    let combobox: any = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALFUSJDJB_630899");

    for (let i: any = 0; combobox.length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox[i].value) {
            entities.OperationEntity.official = combobox[i].code;
            break;
        }

    }
};
