//Entity: OtherCharges
    //OtherCharges.iniDiv (TextInputBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_INIDIVGJKPNKHJF_695872 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
        let iniDiv: any = entities.OtherCharges.iniDiv;
        if (iniDiv < 0){
             changeEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBERZE_11977",false, null, this.ASSTS.timer); 
               return;
        }
    };