//"TaskId": "T_LNSPRDNBKFOTI_411"
task_gridRowCommand_VA_CHECKBOXDANDSPV_892293 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {
 
    gridRowCommandEventArgs.commons.execServer = false;
    
    gridRowCommandEventArgs.commons.api.grid.updateRow('LoanList',gridRowCommandEventArgs.rowIndex,{seleccion: (gridRowCommandEventArgs.rowData.seleccion !==true)});
     
};