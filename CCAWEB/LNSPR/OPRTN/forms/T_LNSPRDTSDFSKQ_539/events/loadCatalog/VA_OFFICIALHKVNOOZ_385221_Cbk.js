//Start signature to Callback event to VA_OFFICIALHKVNOOZ_385221
task.loadCatalogCallback.VA_OFFICIALHKVNOOZ_385221 = function(entities, loadCatalogCallbackEventArgs) {

    var combobox = $("#VA_OFFICIALHKVNOOZ_385221").data("kendo-ext-drop-down-list");

    for (var i = 0; combobox.dataSource.data().length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox.dataSource.data()[i].value.split("-")[1].trim()) {
            entities.OperationEntity.official = combobox.dataSource.data()[i].code;
            break;
        }
    }
};
