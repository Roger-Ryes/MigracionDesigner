//Start signature to Callback event to CM_TDOCUMEN_TN1
task.executeCommandCallback.CM_TDOCUMEN_TN1 = function (entities, executeCommandCallbackEventArgs) {
    var dataGrid = entities.PrintingDocuments.data();
    var itemReporte = "";
    var reportTitle = "";
    var args = [];
    var flag = 0;
    var reportName = "";
    for (var i = 0; i < dataGrid.length; i++) {
        if (dataGrid[i].item === true) {
            flag++;
        }
    }
    if (flag > 0) {
        reportTitle = cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
        itemReporte = "";
        reportName = 'FileList';
        args = [['report.module', 'cartera'], ['report.name', reportName], ['creditNum', entities.Loan.loanBankID], ['clientNum', entities.Loan.clientID], ["completeName", entities.Loan.clientName], ['operationType', entities.Loan.desOperationType], ['cashRecieved', entities.Loan.amount], ['beginDateDay', entities.Loan.startDate], ["officeName", JSON.parse(sessionStorage.userOffice).value]];
        Utils.generarReporte(itemReporte, args, reportTitle);
    }
};
