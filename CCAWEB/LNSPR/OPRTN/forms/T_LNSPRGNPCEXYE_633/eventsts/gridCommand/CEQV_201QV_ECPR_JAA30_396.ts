
//gridCommand (Button) QueryView: QV_ECPR_JAA30
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task_gridCommand_CEQV_201QV_ECPR_JAA30_396 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    updateFila = true;
    let filasSeleccionadas: any = gridExecuteCommandEventArgs.commons.api.grid.getSelectedRows('QV_ECPR_JAA30');
    if(filasSeleccionadas.length == 0){
        // Si no hay ninguna seleccionada se selecciona la primera
        let grid: any = $("#QV_ECPR_JAA30").data("kendoGrid");

        let row: any = grid.tbody.find(">tr:not(.k-grouping-row)").eq(0);
        grid.select(row);
    }
    let grid: any = $("#QV_ECPR_JAA30").data("kendoGrid");
    let sel: any = grid.select();
    let item: any = grid.dataItem(sel);
    let dataSource: any = grid.dataSource;
    let idx: any = dataSource.indexOf(item);
    let newItem: any = dataSource.insert(idx, {});
    newItem.dividend = item.dividend;
    newItem.balanceCapital = item.balanceCapital;
    if(item.dividend && item.dividend > 1){
        let strDate: any = (dataSource.data()[dataSource.indexOf(item)-2]).expirationDate;
        let dateDef: any = strDate;
        newItem.expirationDate = dateDef;
    }else{
        if(!item.dividend){
            newItem.dividend = dataSource.data().length + 1;
            newItem.balanceCapital = item.balanceCapital;
            let strDate: any = (dataSource.data()[dataSource.indexOf(item)-2]).expirationDate;
            let date: any = strDate;
            newItem.expirationDate = date;
        }else{
            newItem.expirationDate = entities.AmortizationFormEntity.valueDate;
        }
    }
    let newRow: any = grid.items().filter("[data-uid='" + newItem.uid + "']");
    grid.editRow(newRow);

    for (let i: any = item.dividend; i < dataSource.data().length-1; i++) {
        (dataSource.data()[i]).dividend = (dataSource.data()[i]).dividend + 1;
    }
};