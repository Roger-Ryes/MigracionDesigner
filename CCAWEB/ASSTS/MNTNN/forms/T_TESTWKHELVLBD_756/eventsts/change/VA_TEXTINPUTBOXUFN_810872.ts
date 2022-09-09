//Entity: OtherCharges
    //OtherCharges.concept (ComboBox) View: ProjectOtherCharges
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TEXTINPUTBOXUFN_810872 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = true;
        //changeEventArgs.commons.serverParameters.OtherCharges = true;
    };