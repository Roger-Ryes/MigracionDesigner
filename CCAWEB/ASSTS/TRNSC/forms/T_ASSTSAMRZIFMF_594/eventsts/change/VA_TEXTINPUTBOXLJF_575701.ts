//Entity: RestructuringList
//RestructuringList.capitalize (DropDownList) View: LoansRestructuring
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
//designer-hint: 2304: Cannot find name 'task_change_VA_TEXTINPUTBOXLJF_575701'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
//designer-hint: 6133: 'entities' is declared but its value is never read.
task_change_VA_TEXTINPUTBOXLJF_575701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    //Recuperación de fila en edición
    let currentRowData: any = changedEventArgs.rowData;

    if (changedEventArgs.newValue == 'N') { // Saldo Capital
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.capitalBalance);

        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', (changedEventArgs.rowData.interestBalance+ changedEventArgs.rowData.otherItems));
    } else if (changedEventArgs.newValue == 'S') { //Saldo Cap + interes
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', (changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance));

        changedEventArgs.rowData.toPay = changedEventArgs.rowData.otherItems;
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', (changedEventArgs.rowData.otherItems));
    } else if (changedEventArgs.newValue == 'T') { //saldo cap+interes+otros
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', (changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance + changedEventArgs.rowData.otherItems));

        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);

    } else {
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', 0.00);

        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);
    }
};
