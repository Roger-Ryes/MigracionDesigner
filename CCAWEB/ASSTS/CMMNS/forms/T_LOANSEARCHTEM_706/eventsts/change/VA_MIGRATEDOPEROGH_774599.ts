//Entity: LoanSearchFilter
    //LoanSearchFilter.migratedOper (TextInputBox) View: LoanSearchCustomerForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_MIGRATEDOPEROGH_774599 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = true;
        //changeEventArgs.commons.serverParameters.LoanSearchFilter = true;
    };