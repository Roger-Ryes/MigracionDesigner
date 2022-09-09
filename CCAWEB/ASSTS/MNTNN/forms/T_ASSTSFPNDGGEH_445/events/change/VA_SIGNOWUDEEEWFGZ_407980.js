//Entity: LoanItemsList
//LoanItemsList.signo (DropDownList) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_SIGNOWUDEEEWFGZ_407980 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    var percentage;
    switch (changedEventArgs.newValue) {
        case "+":
            percentage = entities.LoanItemsList.factor + entities.LoanItemsList.associateValue;
            break;
        case "-":
            percentage = entities.LoanItemsList.factor - entities.LoanItemsList.associateValue;
            break;
        case "*":
            if (entities.LoanItemsList.associateValue) {
                percentage = entities.LoanItemsList.factor * entities.LoanItemsList.associateValue;
            } else {
                entities.LoanItemsList.percentage = entities.LoanItemsList.factor;
            }

            break;
        case "/":
            if (entities.LoanItemsList.associateValue) {
                percentage = entities.LoanItemsList.factor / entities.LoanItemsList.associateValue;
            } else {
                percentage = entities.LoanItemsList.factor;
            }

            break;
        default:
            percentage = entities.LoanItemsList.factor + entities.LoanItemsList.associateValue;
    }


    if (entities.LoanItemsList.typeItem == "V") {
        entities.LoanItemsList.amount = percentage;
        entities.LoanItemsList.percentage = null;

    } else if (entities.LoanItemsList.typeItem == "Q" || entities.LoanItemsList.typeItem == "I" || entities.LoanItemsList.typeItem == "F" ||
        entities.LoanItemsList.typeItem == "O" || entities.LoanItemsList.typeItem == 'S') {
        entities.LoanItemsList.percentage = percentage;
        entities.LoanItemsList.amount = null;
    }

};
