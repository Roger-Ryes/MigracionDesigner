//Entity: PaymentForm
    //PaymentForm.clientFullName (TextInputButton) View: PaymentModeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_6386FQVBTKCYFWG_461216 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
        let disClientId: any = changeEventArgs.commons.api.navigation.getCustomDialogParameters().loan.clientID;
        let newClientId: any = entities.PaymentForm.clientId;
        if(newClientId != disClientId && changeEventArgs.oldValue != null){
            changeEventArgs.commons.execServer = false;
        }
    };