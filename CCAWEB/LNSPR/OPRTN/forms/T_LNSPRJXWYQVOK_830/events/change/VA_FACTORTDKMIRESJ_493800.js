//Entity: OperationItemsList
//OperationItemsList.factor (TextInputBox) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FACTORTDKMIRESJ_493800 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    var percentage;

    switch (entities.OperationItemsList.signo) {
        case "+":
            percentage = changedEventArgs.newValue + entities.OperationItemsList.associateValue;
            break;
        case "-":
            percentage = changedEventArgs.newValue - entities.OperationItemsList.associateValue;
            break;
        case "*":
            if (entities.OperationItemsList.associateValue) {
                percentage = changedEventArgs.newValue * entities.OperationItemsList.associateValue;
            } else {
                percentage = changedEventArgs.newValue;
            }

            break;
        case "/":
            if (entities.OperationItemsList.associateValue) {
                percentage = changedEventArgs.newValue / entities.OperationItemsList.associateValue;
            } else {
                percentage = changedEventArgs.newValue;
            }

            break;
        default:
            percentage = changedEventArgs.newValue + entities.OperationItemsList.associateValue;
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
