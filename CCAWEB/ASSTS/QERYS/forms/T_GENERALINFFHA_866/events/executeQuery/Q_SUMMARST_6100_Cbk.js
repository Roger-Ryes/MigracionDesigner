//Start signature to Callback event to Q_SUMMARST_6100
task.executeQueryCallback.Q_SUMMARST_6100 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    var consolidated = [];
    executeQueryCallbackEventArgs.commons.api.vc.closeDialog("ASSTS")
    var nav = executeQueryCallbackEventArgs.commons.api.navigation;
    if(entities.SummaryLoanStatus && entities.SummaryLoanStatus.data()){
        for(var i=0; i< entities.SummaryLoanStatus.data().length-1;i++){
           consolidated[i] = entities.SummaryLoanStatus.data()[i];
        }
    }
    entities.ConsolidatedLoanStatus = consolidated;
   
    if (entities.SummaryLoanStatus.data().length > 0) {
        nav.label = "";
        nav.customAddress = {
            id: "ASSTS",
            url: "ASSTS/QERYS/CHARTS/views/LoansDetail.html"
        };

        nav.scripts = [{
            module: "ASSTS",
            files: ["ASSTS/QERYS/CHARTS/controllers/LoansDetail.js"]
        }];

        nav.customDialogParameters = {
            entityList: entities.SummaryLoanStatus.data()
        };

        nav.registerCustomView('G_GENERALILC_131344');
    }
};
