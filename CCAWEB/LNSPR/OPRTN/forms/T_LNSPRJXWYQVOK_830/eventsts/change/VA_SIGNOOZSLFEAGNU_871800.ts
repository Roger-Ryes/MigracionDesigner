//Entity: OperationItemsList
//OperationItemsList.signo (DropDownList) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_SIGNOOZSLFEAGNU_871800 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let percentage: any;
    switch (changedEventArgs.newValue) {
        case "+":
            percentage = entities.OperationItemsList.factor + entities.OperationItemsList.associateValue;
            break;
        case "-":
            percentage = entities.OperationItemsList.factor - entities.OperationItemsList.associateValue;
            break;
        case "*":
            if (entities.OperationItemsList.associateValue) {
                percentage = entities.OperationItemsList.factor * entities.OperationItemsList.associateValue;
            } else {
                entities.OperationItemsList.percentage = entities.OperationItemsList.factor;
            }

            break;
        case "/":
            if (entities.OperationItemsList.associateValue) {
                percentage = entities.OperationItemsList.factor / entities.OperationItemsList.associateValue;
            } else {
                percentage = entities.OperationItemsList.factor;
            }

            break;
        default:
            percentage = entities.OperationItemsList.factor + entities.OperationItemsList.associateValue;
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
