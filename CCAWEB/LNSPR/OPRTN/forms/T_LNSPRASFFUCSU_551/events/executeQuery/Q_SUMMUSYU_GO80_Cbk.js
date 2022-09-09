//Start signature to Callback event to Q_SUMMUSYU_GO80
task.executeQueryCallback.Q_SUMMUSYU_GO80 = function (entities, executeQueryCallbackEventArgs) {

    var nav = executeQueryCallbackEventArgs.commons.api.navigation;
    if (entities.SummaryStatus.data().length > 0) {
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
            entityList: entities.SummaryStatus.data()
        };

        nav.registerCustomView('G_CURRENTUAN_658928');
    }
};
