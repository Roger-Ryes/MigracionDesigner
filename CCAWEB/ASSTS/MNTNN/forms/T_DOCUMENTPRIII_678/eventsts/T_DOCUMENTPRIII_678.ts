//"TaskId": "T_DOCUMENTPRIII_678"

task_gridRowCommand_VA_TEXTINPUTBOXDUI_728334 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {

    gridRowCommandEventArgs.commons.execServer = false;

    gridRowCommandEventArgs.commons.api.grid.updateRow('PrintingDocuments', gridRowCommandEventArgs.rowIndex, {
        item: (gridRowCommandEventArgs.rowData.item !== true)
    });




};
