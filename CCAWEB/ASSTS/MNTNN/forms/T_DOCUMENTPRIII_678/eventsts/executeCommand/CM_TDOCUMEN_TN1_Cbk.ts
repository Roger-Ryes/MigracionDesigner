//Start signature to Callback event to CM_TDOCUMEN_TN1
task_executeCommandCallback_CM_TDOCUMEN_TN1 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    let dataGrid: any = entities.PrintingDocuments;
    let itemReporte: any = "";
    let reportTitle: any = "";
    let args: any = [];
    let flag: any = 0;
    let reportName: any = "";
    for (let i: any = 0; i < dataGrid.length; i++) {
        if (dataGrid[i].item === true) {
            flag++;
        }
    }
    if (flag > 0) {
        reportTitle = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
        itemReporte = "";
        reportName = 'FileList';
        args = [['report.module', 'cartera'], ['report.name', reportName], ['creditNum', entities.Loan.loanBankID], ['clientNum', entities.Loan.clientID], ["completeName", entities.Loan.clientName], ['operationType', entities.Loan.desOperationType], ['cashRecieved', entities.Loan.amount], ['beginDateDay', entities.Loan.startDate], ["officeName", JSON.parse(sessionStorage.userOffice).value]];
        Utils.generarReporte(itemReporte, args, reportTitle);
    }
};
