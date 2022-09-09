//Entity: OperationItemsList
//OperationItemsList.associateValue (TextInputBox) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ASSOCIATEVALEUU_342800 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    var percentage;

    switch (entities.OperationItemsList.signo) {
        case "+":
            percentage = entities.OperationItemsList.factor + changedEventArgs.newValue;
            break;
        case "-":
            percentage = entities.OperationItemsList.factor - changedEventArgs.newValue;
            break;
        case "*":
            if (changedEventArgs.newValue) {
                percentage = entities.OperationItemsList.factor * changedEventArgs.newValue;
            } else {
                percentage = entities.OperationItemsList.factor;
            }

            break;
        case "/":
            if (changedEventArgs.newValue) {
                percentage = entities.OperationItemsList.factor / changedEventArgs.newValue;
            } else {
                percentage = entities.OperationItemsList.factor;
            }

            break;
        default:
            percentage = entities.OperationItemsList.factor + changedEventArgs.newValue;
    }

    if (entities.OperationItemsList.typeItem == "V") {
        entities.OperationItemsList.amount = percentage;
        entities.OperationItemsList.percentage = null;

    } else if (entities.OperationItemsList.typeItem == "Q" || entities.OperationItemsList.typeItem == "I" || entities.OperationItemsList.typeItem == "F" ||
        entities.OperationItemsList.typeItem == "O" || entities.OperationItemsList.typeItem == 'S') {
        entities.OperationItemsList.percentage = percentage;
        entities.OperationItemsList.amount = null;
    }

};
