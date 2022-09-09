// (Button) 
    task.executeCommand.CM_TLOANDIS_S5N = function(entities, executeCommandEventArgs) {
        
        
      if(entities.LiquidateResult.sumTotal.toFixed(2) > entities.DisbursementResult.sumTotal.toFixed(2)){
         executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(cobis.translate('ASSTS.MSG_ASSTS_ERRORELDR_83907'), false, null, timer);
      }else{
      	executeCommandEventArgs.commons.execServer = true;	
      }
    };