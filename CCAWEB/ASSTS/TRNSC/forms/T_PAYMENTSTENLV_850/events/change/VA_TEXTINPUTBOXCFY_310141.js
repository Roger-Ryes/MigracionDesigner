//Entity: Payment
//Payment.paymentType (DropDownList) View: PaymentsForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TEXTINPUTBOXCFY_310141 = function (entities, changedEventArgs) {

    var api = changedEventArgs.commons.api;
    var parameters = api.navigation.getCustomDialogParameters();
    entities.Payment.customer = null;
    entities.Payment.customerID = null;
    entities.Payment.reference = null;
        if (entities.Loan.tipo === "I") {

        entities.Payment.retention = changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").retencion;
        if (changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
            changedEventArgs.commons.api.viewState.show('VA_TEXTINPUTBOXHQX_290141');
            changedEventArgs.commons.api.viewState.isReadOnly('VA_REFERENCECGUXXB_239141');
            $("#VA_REFERENCECGUXXB_239141").attr("readonly", true);
            } else {
            changedEventArgs.commons.api.viewState.hide('VA_TEXTINPUTBOXHQX_290141');
            $("#VA_REFERENCECGUXXB_239141").attr("readonly", false);
            }

        if (changedEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").atx == 'S') {
            changedEventArgs.commons.api.viewState.disable('VA_NEGOTIATEDHPDLB_812141');
            entities.Payment.negotiated = 'S';
            entities.Payment.onLine = false;
            changedEventArgs.commons.api.viewState.disable('VA_CHECKBOXIPQLEBS_550141');
        } else {
            changedEventArgs.commons.api.viewState.disable('VA_NEGOTIATEDHPDLB_812141');
            entities.Payment.negotiated = 'N';
            changedEventArgs.commons.api.viewState.enable('VA_CHECKBOXIPQLEBS_550141');
            entities.Payment.onLine = true;
        }
        }

    };