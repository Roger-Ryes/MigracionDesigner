//Entity: RestructuringList
//RestructuringList.capitalize (DropDownList) View: LoansRestructuring
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TEXTINPUTBOXLJF_575701 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    //Recuperación de fila en edición
    var currentRowData = changedEventArgs.rowData;
    
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
