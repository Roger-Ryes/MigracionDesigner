//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: PaymentsForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs) {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
            var data = onCloseModalEventArgs.result.selectedData;

            entities.Payment.customerID = data.code;
            entities.Payment.customer = data.code + " - " + data.name;
        }
    }

};
