//Start signature to Callback event to VA_OFFICIALHKVNOOZ_385221
task_loadCatalogCallback_VA_OFFICIALHKVNOOZ_385221 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
    let combobox: any = $("#VA_OFFICIALHKVNOOZ_385221").data("kendo-ext-drop-down-list");

    for (let i: any = 0; combobox.dataSource.data().length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox.dataSource.data()[i].value.split("-")[1].trim()) {
            entities.OperationEntity.official = combobox.dataSource[i].code;
            break;
        }
    }
};
