//Start signature to Callback event to VA_OFFICIALWHTPNAJ_913412
task_loadCatalogCallback_VA_OFFICIALWHTPNAJ_913412 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
) => {
    let combobox: any = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALWHTPNAJ_913412");

    for (let i: any = 0; combobox.length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox[i].value.split('-')[1].trim()) {
            entities.LoanLinesCreation.official = combobox[i].code;
            break;
        }

    }
};
