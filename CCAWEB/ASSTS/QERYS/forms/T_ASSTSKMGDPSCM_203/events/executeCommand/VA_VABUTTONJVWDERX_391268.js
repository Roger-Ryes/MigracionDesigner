


// (Button) 
task.executeCommand.VA_VABUTTONJVWDERX_391268 = function(  entities, executeCommandEventArgs ) {
     var deferred = entities.DeferredItemsList;
     var spid = 0;
     var reportTitle = cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
     var reportItem = "";
     var reportName = "DeferredItems";//Nombre del archivo
     
     if(deferred){
         spid = deferred.data()[0].sesion;  
     }
        
     var args = [
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