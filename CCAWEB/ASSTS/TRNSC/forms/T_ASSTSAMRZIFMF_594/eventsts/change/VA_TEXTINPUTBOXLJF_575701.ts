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
    //designer-hint: 2304: Cannot find name 'currentRowData'.
    currentRowData = changedEventArgs.rowData;
    
    if (changedEventArgs.newValue == 'N') { // Saldo Capital
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance;
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
        changedEventArgs.rowData.toPay = changedEventArgs.rowData.interestBalance+ changedEventArgs.rowData.otherItems;
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', changedEventArgs.rowData.toPay);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'S') { //Saldo Cap + interes
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance;
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);

        changedEventArgs.rowData.toPay = changedEventArgs.rowData.otherItems;
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', changedEventArgs.rowData.toPay);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'T') { //saldo cap+interes+otros
        changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance + changedEventArgs.rowData.otherItems;
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    } else {
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', 0.00);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', 0.00);
        //designer-hint: 2304: Cannot find name 'currentRowData'.
        changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);
//        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    }

};
