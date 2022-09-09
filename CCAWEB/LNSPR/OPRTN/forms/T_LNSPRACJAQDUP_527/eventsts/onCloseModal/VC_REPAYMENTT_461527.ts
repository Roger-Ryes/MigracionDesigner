
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: RePaymentCreateForm
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    
   /* if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            var data = onCloseModalEventArgs.result.selectedData;
            entities.PaymentAutomatic.client= data.code;
            entities.PaymentAutomatic.clientName = data.name;
        }
    }*/
    
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIEEE_220144' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.PaymentAutomatic.institution = onCloseModalEventArgs.result.response.institution;
            entities.PaymentAutomatic.institutionName = onCloseModalEventArgs.result.response.companyName;
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_LOANDEBOLR_210579' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.PaymentAutomatic.client = onCloseModalEventArgs.result.response.customerID;
            entities.PaymentAutomatic.clientName = onCloseModalEventArgs.result.response.customerName;
            entities.PaymentAutomatic.clientRole = onCloseModalEventArgs.result.response.role
        }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' && 
        onCloseModalEventArgs.dialogCloseType == 0) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
            entities.PaymentAutomatic.account = onCloseModalEventArgs.result.response.code;
        }
    }
};