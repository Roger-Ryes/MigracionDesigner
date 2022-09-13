// (Button) 
    task_executeCommand_CM_TLOANDIS_S5N = (
      entities: Model,
      executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        
        
      if(entities.LiquidateResult.sumTotal?.toFixed(2)! > entities.DisbursementResult.sumTotal?.toFixed(2)!){
         executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(this.cobis.translate('ASSTS.MSG_ASSTS_ERRORELDR_83907'), false, null, this.ASSTS.timer);
      }else{
      executeCommandEventArgs.commons.execServer = true;
      }
    };