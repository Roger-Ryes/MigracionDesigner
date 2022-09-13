// (Button) 
//designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSPE_87R'.
task_executeCommand_CM_TASSTSPE_87R = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let reportTitle: any = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
    let reportItem: any = "";
    let reportName: any = "SimulationReadjustement";
    //designer-hint: 2304: Cannot find name 'kendo'.
    // TODO
    // let infoDate: any = kendo.toString(entities.SearchProjectionReadjustement.dateReadjustment,JSON.parse(sessionStorage.dateFormat));//Nombre del archivo
    let infoDate: any = entities.SearchProjectionReadjustement.dateReadjustment;//Nombre del archivo

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

    //designer-hint: 2304: Cannot find name 'Utils'.
    this.ASSTS.Utils.generarReporte(reportItem,args,reportTitle);

    executeCommandEventArgs.commons.execServer = false;
};