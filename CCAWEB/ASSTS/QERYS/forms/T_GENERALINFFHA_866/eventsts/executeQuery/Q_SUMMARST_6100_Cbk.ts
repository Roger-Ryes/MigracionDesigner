//Start signature to Callback event to Q_SUMMARST_6100
task_executeQueryCallback_Q_SUMMARST_6100 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    //here your code
    let consolidated: any = [];

    executeQueryCallbackEventArgs.commons.api.navigation.close("ASSTS")
    let nav: any = executeQueryCallbackEventArgs.commons.api.navigation;
    if(entities.SummaryLoanStatus && entities.SummaryLoanStatus){
        for (let i: any=0; i< entities.SummaryLoanStatus.length-1; i++) {
           consolidated[i] = entities.SummaryLoanStatus[i];
        }
    }
    entities.ConsolidatedLoanStatus = consolidated;

    if (entities.SummaryLoanStatus.length > 0) {
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
            entityList: entities.SummaryLoanStatus
        };

        nav.registerCustomView('G_GENERALILC_131344');
    }
};
