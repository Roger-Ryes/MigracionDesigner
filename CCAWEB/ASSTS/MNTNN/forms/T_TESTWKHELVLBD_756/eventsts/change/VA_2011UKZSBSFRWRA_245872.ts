//Entity: OtherCharges
    //OtherCharges.value (TextInputBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_2011UKZSBSFRWRA_245872 = (entities: Model, changeEventArgs: any) => {
        let value: any = entities.OtherCharges.value;
        let valueMax: any = entities.OtherCharges.valueMax;
        let valueMin: any = entities.OtherCharges.valueMin;
        let reference: any = entities.OtherCharges.reference;

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