//Start signature to Callback event to VA_OFFICIALFUSJDJB_630899
task.loadCatalogCallback.VA_OFFICIALFUSJDJB_630899 = function (entities, loadCatalogCallbackEventArgs) {
    var combobox = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALFUSJDJB_630899");

    for (var i = 0; combobox.length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox[i].value) {
            entities.OperationEntity.official = combobox[i].code;
            break;
        }

    }
};
