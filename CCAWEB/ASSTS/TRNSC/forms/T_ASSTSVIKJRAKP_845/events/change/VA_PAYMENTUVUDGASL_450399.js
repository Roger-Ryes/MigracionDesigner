

//Entity: Company
//Company.paymentForm (DropDownList) View: CompanyCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PAYMENTUVUDGASL_450399 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    var viewState = changedEventArgs.commons.api.viewState;

    if (viewState.getDataItem("VA_PAYMENTUVUDGASL_450399") 
        && viewState.getDataItem("VA_PAYMENTUVUDGASL_450399").pCobis == 4) {
            viewState.enable('VA_ACCOUNTNAAOFHSO_558399');
    } else {
        viewState.disable('VA_ACCOUNTNAAOFHSO_558399');
        entities.Company.account = null;
    }
};