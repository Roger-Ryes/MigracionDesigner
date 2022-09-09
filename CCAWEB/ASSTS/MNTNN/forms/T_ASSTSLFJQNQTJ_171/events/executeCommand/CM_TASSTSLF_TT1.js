// (Button) 
task.executeCommand.CM_TASSTSLF_TT1 = function(entities, executeCommandEventArgs) {
      executeCommandEventArgs.commons.execServer = false;
      var parameters = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
          
      var msgConfirm = "ASSTS.MSG_ASSTS_VAAREALME_44698";
      var showMessage = true;
    
      var diaActual = entities.ChangePayDayEntity.currentPayDay;
      var diaNuevo  = entities.ChangePayDayEntity.newPayDay;
      var motivo    = entities.ChangePayDayEntity.reason;
      
      if (motivo != undefined){
          if(diaActual == diaNuevo){
           executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_DADEPAGSE_14590', false, null, timer);
       
      }else{

             if (showMessage){			
			return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm(msgConfirm).then(function(resp){
				var response = false;
				switch(resp.buttonIndex){
					case 0 : //CANCEL
							executeCommandEventArgs.commons.execServer = false;
							break;
					case 1 : //ACCEPT										
							 executeCommandEventArgs.commons.execServer = true;
							 response = true;
							
							break;
				}
				return response;
			});
		  }
        } 
    }else {
       executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELMOTIVEE_44777', false, null, timer); 
    }
};