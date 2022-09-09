


// (Button) 
task_executeCommand_VA_VABUTTONJVWDERX_391268 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let deferred: any = entities.DeferredItemsList;
    let spid: any = 0;
    let reportTitle: any = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
    let reportItem: any = "";
    let reportName: any = "DeferredItems";

    if(deferred){
        spid = deferred.data()[0].sesion;  
    }

    let args: any = [
           ['report.module','cartera'],
           ['report.name',reportName],
           ['operation',entities.Loan.loanBankID],
           ['operationType',entities.Loan.operationType],
           ['startDate',entities.Loan.startDate],
           ['clientName',entities.Loan.clientName],
           ['currency',entities.Loan.currencyName],
           ['balance', entities.Loan.amount],
           ['office', entities.Loan.office],
           ['officer', entities.Loan.officer],
           ['sesion', spid]
       ];


    Utils.generarReporte(reportItem,args,reportTitle);

    executeCommandEventArgs.commons.execServer = false;
};