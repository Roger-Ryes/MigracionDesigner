//Entity: OtherCharges
    //OtherCharges.divUp (TextInputBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_DIVUPQPVWWEQDNI_233872 = function(  entities, changeEventArgs ) {
        changeEventArgs.commons.execServer = false;
        var iniDiv = entities.OtherCharges.iniDiv   
        var divUp = entities.OtherCharges.divUp
        if (divUp < 0){
            changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11972",false,null,timer); 
               return;
        }        
        if (iniDiv < 0){
             changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11977",false,null,timer); 
               return;
        }
        if (iniDiv > divUp){
           changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11969",false,null,timer); 
           return;
        }
    };