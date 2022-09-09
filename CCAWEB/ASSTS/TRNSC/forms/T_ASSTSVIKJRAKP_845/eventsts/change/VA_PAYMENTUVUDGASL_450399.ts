

//Entity: Company
//Company.paymentForm (DropDownList) View: CompanyCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_PAYMENTUVUDGASL_450399 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (viewState.getDataItem("VA_PAYMENTUVUDGASL_450399") 
        && viewState.getDataItem("VA_PAYMENTUVUDGASL_450399").pCobis == 4) {
            viewState.enable('VA_ACCOUNTNAAOFHSO_558399');
    } else {
        viewState.disable('VA_ACCOUNTNAAOFHSO_558399');
        entities.Company.account = null;
    }
};