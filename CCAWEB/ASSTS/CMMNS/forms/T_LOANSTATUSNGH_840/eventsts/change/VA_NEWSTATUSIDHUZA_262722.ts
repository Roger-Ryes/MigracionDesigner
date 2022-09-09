//Entity: Loan
    //Loan.newStatusID (TextInputButton) View: LoanStatusChangeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_NEWSTATUSIDHUZA_262722 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = true;
        //changeEventArgs.commons.serverParameters.Loan = true;
    };