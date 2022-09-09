//"TaskId": "T_DOCUMENTPRIII_678"

task.gridRowCommand.VA_TEXTINPUTBOXDUI_728334 = function (entities, gridRowCommandEventArgs) {

    gridRowCommandEventArgs.commons.execServer = false;

    gridRowCommandEventArgs.commons.api.grid.updateRow('PrintingDocuments', gridRowCommandEventArgs.rowIndex, {
        item: (gridRowCommandEventArgs.rowData.item !== true)
    });




};
