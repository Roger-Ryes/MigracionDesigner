
//gridCommand (Button) QueryView: QV_ECPR_JAA30
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task.gridCommand.CEQV_201QV_ECPR_JAA30_396 = function (entities, gridExecuteCommandEventArgs) {
    gridExecuteCommandEventArgs.commons.execServer = false;
    updateFila = true;
    var filasSeleccionadas = gridExecuteCommandEventArgs.commons.api.grid.getSelectedRows('QV_ECPR_JAA30');
    if(filasSeleccionadas.length == 0){ // Si no hay ninguna seleccionada se selecciona la primera
        var grid = $("#QV_ECPR_JAA30").data("kendoGrid"); 
        var row = grid.tbody.find(">tr:not(.k-grouping-row)").eq(0);
        grid.select(row);
    }
    var grid = $("#QV_ECPR_JAA30").data("kendoGrid"); 
    var sel = grid.select();        
    var item = grid.dataItem(sel);    
    var dataSource = grid.dataSource;
    var idx = dataSource.indexOf(item);
    var newItem = dataSource.insert(idx, {});
    newItem.dividend = item.dividend;
    newItem.balanceCapital = item.balanceCapital;
    if(item.dividend && item.dividend > 1){ 
        var strDate = (dataSource.data()[dataSource.indexOf(item)-2]).expirationDate;
        var dateDef = strDate;
        newItem.expirationDate = dateDef;
    }else{
        if(!item.dividend){
            newItem.dividend = dataSource.data().length + 1;
            newItem.balanceCapital = item.balanceCapital;
            var strDate = (dataSource.data()[dataSource.indexOf(item)-2]).expirationDate;
            var date = strDate;
            newItem.expirationDate = date;
        }else{
            newItem.expirationDate = entities.AmortizationFormEntity.valueDate;
        }
    }
    var newRow = grid.items().filter("[data-uid='" + newItem.uid + "']");
    grid.editRow(newRow);
    
    for(var i = item.dividend; i < dataSource.data().length-1; i++){
        (dataSource.data()[i]).dividend = (dataSource.data()[i]).dividend + 1;
    }
    
};