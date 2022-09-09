//Start signature to Callback event to VA_OFFICIALWHTPNAJ_913412
task.loadCatalogCallback.VA_OFFICIALWHTPNAJ_913412 = function(entities, loadCatalogCallbackEventArgs) {
    var combobox = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALWHTPNAJ_913412");

    for (var i = 0; combobox.length > i; i++) {
        if (JSON.parse(sessionStorage.UserName) == combobox[i].value.split('-')[1].trim()) {
            entities.LoanLinesCreation.official = combobox[i].code;
            break;
        }

    }
};
