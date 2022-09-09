
//DetailTransactionQueryQuery Entity: DetailTransactionQuery
task_executeQuery_Q_DETARTNC_LQ51 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    
     executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.numberLoan; 
    
    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.secOpe; 

    executeQueryEventArgs.parameters.transaction = 
    executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().transaction; 
    
    executeQueryEventArgs.parameters.dateRef = 
    executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.transactionRef;
    
    executeQueryEventArgs.parameters.operation = 
    executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.sequential;
       
      executeQueryEventArgs.parameters.pagDivi= null;
      
      executeQueryEventArgs.parameters.pagEstado=null;
      
      if(executeQueryEventArgs.parameters.transaction != 'PRV'){
        executeQueryEventArgs.parameters.pagCon= null;
      }else{
        executeQueryEventArgs.parameters.pagCon = 
        executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.transaction;   
      }
    
      executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_GS51_LPN26', ['dividend','entry','state'], executeQueryEventArgs);
      if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.pagDivi = executeQueryEventArgs.parameters.dividend;
      executeQueryEventArgs.parameters.pagCon = executeQueryEventArgs.parameters.entry;
      executeQueryEventArgs.parameters.pagEstado= executeQueryEventArgs.parameters.state;
      executeQueryEventArgs.parameters.operation = null;    
      }
    
      
    
     executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailTransactionQuery = true;
    

};