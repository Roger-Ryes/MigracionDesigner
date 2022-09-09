//Start signature to Callback event to Q_SUMMUSYU_GO80
task_executeQueryCallback_Q_SUMMUSYU_GO80 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    let nav: any = executeQueryCallbackEventArgs.commons.api.navigation;
    if (entities.SummaryStatus.length > 0) {
        nav.label = "";
        nav.customAddress = {
            id: "LNSPR",
            url: "LNSPR/manual/DetalleLinea.html"
        };

        nav.scripts = [{
            module: "LNSPR",
            files: ["LNSPR/manual/DetalleLineaController.js"]
        }];

        nav.customDialogParameters = {
            entityList: entities.SummaryStatus
        };

        nav.registerCustomView('G_CURRENTUAN_658928');
    }
};
