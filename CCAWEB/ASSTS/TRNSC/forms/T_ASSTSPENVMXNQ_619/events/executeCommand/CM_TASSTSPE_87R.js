// (Button) 
task.executeCommand.CM_TASSTSPE_87R = function(entities, executeCommandEventArgs) {

    var reportTitle = cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
        var reportItem = "";
        var reportName = "SimulationReadjustement";//Nombre del archivo
        
        var infoDate = kendo.toString(kendo.parseDate(entities.SearchProjectionReadjustement.dateReadjustment),JSON.parse(sessionStorage.dateFormat));
            
        var args = [
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