//Entity: PaymentForm
//PaymentForm.payFormId (DropDownList) View: PaymentModeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.Spacer2675 = function (entities, changedEventArgs) {


    var api = changedEventArgs.commons.api;
    var viewState = api.viewState;

    /*if (changeEventArgs.newValue == "CHOTBCOS") {
        api.viewState.show('Spacer2495');
        api.viewState.show('Spacer2547');
        }else{
        api.viewState.hide('Spacer2495');
        api.viewState.hide('Spacer2547');
    }*/

    //Subsidio promotoras
    if(changedEventArgs.newValue == "SUBPRO"){
          viewState.show('VA_4894WDHQNMCYSAK_586216');
    }else{
           viewState.hide('VA_4894WDHQNMCYSAK_586216');
    }
    
    if (changedEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
        $("#VA_2481BBVZTGCBDCR_830216").attr("readonly", true);
    } else {
        $("#VA_2481BBVZTGCBDCR_830216").attr("readonly", false);
    }
    entities.PaymentForm.accountNumber = null;
    changedEventArgs.commons.execServer = false;
    };