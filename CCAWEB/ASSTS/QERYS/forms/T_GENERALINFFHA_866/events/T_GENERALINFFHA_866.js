//"TaskId": "T_GENERALINFFHA_866"
function loadChart(entities, args){
    angular.forEach(entities.SummaryLoanStatus.data(), function (loanStatus) {
        loanStatus.statusAmortization = args.commons.api.viewState.translate(loanStatus.statusAmortization).toUpperCase();
    });

    var nav = args.commons.api.navigation;
    nav.customAddress = {
        id: "ASSTS",
        url: "/ASSTS/QERYS/CHARTS/views/leftChart.html",
        useMinification: false
    };
    //CALL TO CONTROLLER
    nav.scripts = [{
        module: "ASSTS",
        files: ["/ASSTS/QERYS/CHARTS/controllers/LeftChartCtrl.js"]
    }];
    nav.registerCustomView('G_GENERALILC_131344');
};