//Entity: LoanItemsList
//LoanItemsList.associateValue (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_ASSOCIATEVALUEE_791980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let percentage: any;

    switch (entities.LoanItemsList.signo) {
        case "+":
            percentage = entities.LoanItemsList.factor + changedEventArgs.newValue;
            break;
        case "-":
            percentage = entities.LoanItemsList.factor - changedEventArgs.newValue;
            break;
        case "*":
            if (changedEventArgs.newValue) {
                percentage = entities.LoanItemsList.factor * changedEventArgs.newValue;
            } else {
                percentage = entities.LoanItemsList.factor;
            }

            break;
        case "/":
            if (changedEventArgs.newValue) {
                percentage = entities.LoanItemsList.factor / changedEventArgs.newValue;
            } else {
                percentage = entities.LoanItemsList.factor;
            }

            break;
        default:
            percentage = entities.LoanItemsList.factor + changedEventArgs.newValue;
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
