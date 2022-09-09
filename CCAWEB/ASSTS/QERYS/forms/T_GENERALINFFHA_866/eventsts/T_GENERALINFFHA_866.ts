//"TaskId": "T_GENERALINFFHA_866"
loadChart = (entities: Model, args: any) => {
    // TODO
    // angular.forEach(entities.SummaryLoanStatus, (loanStatus: any) => {
    //     loanStatus.statusAmortization = args.commons.api.viewState.translate(loanStatus.statusAmortization).toUpperCase();
    // });

    let nav: any = args.commons.api.navigation;
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
}