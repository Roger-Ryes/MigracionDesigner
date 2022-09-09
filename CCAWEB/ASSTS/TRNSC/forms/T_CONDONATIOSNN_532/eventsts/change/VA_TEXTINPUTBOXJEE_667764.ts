//Entity: CondonationDetail
    //CondonationDetail.description (TextInputButton) View: CondonationDetailForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TEXTINPUTBOXJEE_667764 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = true;
        //changeEventArgs.commons.serverParameters.CondonationDetail = true;
    };