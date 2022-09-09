//Entity: OtherCharges
    //OtherCharges.iniDiv (TextInputBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_INIDIVGJKPNKHJF_695872 = function(  entities, changeEventArgs ) {
        changeEventArgs.commons.execServer = false;
        var iniDiv = entities.OtherCharges.iniDiv      
        if (iniDiv < 0){
             changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11977",false, null, timer); 
               return;
        }
    };