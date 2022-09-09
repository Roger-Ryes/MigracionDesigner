//Entity: LoanItemsList
//LoanItemsList.factor (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FACTOROWCCFAZFG_876980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let percentage: any;

    switch (entities.LoanItemsList.signo) {
        case "+":
            percentage = changedEventArgs.newValue + entities.LoanItemsList.associateValue;
            break;
        case "-":
            percentage = changedEventArgs.newValue - entities.LoanItemsList.associateValue;
            break;
        case "*":
            if (entities.LoanItemsList.associateValue) {
                percentage = changedEventArgs.newValue * entities.LoanItemsList.associateValue;
            } else {
                percentage = changedEventArgs.newValue;
            }

            break;
        case "/":
            if (entities.LoanItemsList.associateValue) {
                percentage = changedEventArgs.newValue / entities.LoanItemsList.associateValue;
            } else {
                percentage = changedEventArgs.newValue;
            }

            break;
        default:
            percentage = changedEventArgs.newValue + entities.LoanItemsList.associateValue;
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
