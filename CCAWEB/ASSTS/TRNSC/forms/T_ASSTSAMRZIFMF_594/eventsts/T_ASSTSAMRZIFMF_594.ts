//"TaskId": "T_ASSTSAMRZIFMF_594"

//designer-hint: 2304: Cannot find name 'task_gridRowCommand_VA_CHECKBOXWFQPYPQ_909701'.
task_gridRowCommand_VA_CHECKBOXWFQPYPQ_909701 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowCommandExecuteEventArgs'.
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('RestructuringList', gridRowCommandEventArgs.rowIndex, {
        finalOp: (gridRowCommandEventArgs.rowData.finalOp !== true)
    });

    if (gridRowCommandEventArgs.rowData.finalOp) {
        onlyOne++;
    } else {
        onlyOne--
        }

};

//designer-hint: 2304: Cannot find name 'task_gridRowCommand_VA_CHECKBOXVYTZVCZ_150701'.
task_gridRowCommand_VA_CHECKBOXVYTZVCZ_150701 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowCommandExecuteEventArgs'.
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {

    gridRowCommandEventArgs.commons.execServer = false;
        gridRowCommandEventArgs.commons.api.grid.updateRow('RestructuringList', gridRowCommandEventArgs.rowIndex, {
            reest: (gridRowCommandEventArgs.rowData.reest !== true)
        });

};
