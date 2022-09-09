//Entity: OtherCharges
    //OtherCharges.value (TextInputBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_2011UKZSBSFRWRA_245872 = function(  entities, changeEventArgs ) {
        var value = entities.OtherCharges.value;  
        var valueMax = entities.OtherCharges.valueMax;  
        var valueMin = entities.OtherCharges.valueMin;  
        var reference = entities.OtherCharges.reference;  
        
        if (!reference){
            if (value > valueMax) {
            changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11973",false,null,timer);
            return;
            }
            if (value < valueMin) {
                changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11974",false,null,timer);
                return;
            }            
        }                
        changeEventArgs.commons.execServer = false;
    };