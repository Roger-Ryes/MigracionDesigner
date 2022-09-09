//Entity: RestructuringList
//RestructuringList.capitalize (DropDownList) View: LoansRestructuring
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TEXTINPUTBOXLJF_575701 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;

    if (changedEventArgs.newValue == 'N') { // Saldo Capital
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance;
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
        changedEventArgs.rowData.toPay = changedEventArgs.rowData.interestBalance+ changedEventArgs.rowData.otherItems;
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'S') { //Saldo Cap + interes
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance;
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);

        changedEventArgs.rowData.toPay = changedEventArgs.rowData.otherItems;
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'T') { //saldo cap+interes+otros
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance + changedEventArgs.rowData.otherItems;
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    } else {
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', 0.00);
        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    }

};
