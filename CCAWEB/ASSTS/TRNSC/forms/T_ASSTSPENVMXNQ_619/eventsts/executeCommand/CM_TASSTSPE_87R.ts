// (Button) 
task_executeCommand_CM_TASSTSPE_87R = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let reportTitle: any = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
    let reportItem: any = "";
    let reportName: any = "SimulationReadjustement";
    let infoDate: any = kendo.toString(kendo.parseDate(entities.SearchProjectionReadjustement.dateReadjustment),JSON.parse(sessionStorage.dateFormat));//Nombre del archivo

    let args: any = [
        ['report.module','cartera'],
        ['report.name',reportName],
        ['bank',entities.Loan.loanBankID],
        ['percentage',entities.SearchProjectionReadjustement.percentage],
        ['dateReadjustment',infoDate],
        ['cliente',entities.Loan.clientName],
        ['tipoOperacion', (entities.Loan.operationTypeID + ' - ' + entities.Loan.loanBankID)],
        ['moneda',entities.Loan.currencyName],
        ['monto', entities.Loan.balanceDue]
    ];

    Utils.generarReporte(reportItem,args,reportTitle);

    executeCommandEventArgs.commons.execServer = false;
};