//"TaskId": "T_LNSPRDNBKFOTI_411"
task.gridRowCommand.VA_CHECKBOXDANDSPV_892293 = function(  entities, gridRowCommandEventArgs ) {
 
    gridRowCommandEventArgs.commons.execServer = false;
    
    gridRowCommandEventArgs.commons.api.grid.updateRow('LoanList',gridRowCommandEventArgs.rowIndex,{seleccion: (gridRowCommandEventArgs.rowData.seleccion !==true)});
     
};