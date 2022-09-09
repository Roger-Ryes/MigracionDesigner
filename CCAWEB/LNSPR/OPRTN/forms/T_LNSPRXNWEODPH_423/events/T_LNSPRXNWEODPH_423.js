//"TaskId": "T_LNSPRXNWEODPH_423"

task.gridRowCommand.VA_CHECKBOXGIYYTMJ_813800 = function (entities, gridRowCommandEventArgs) {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', gridRowCommandEventArgs.rowIndex, {
        selected: (gridRowCommandEventArgs.rowData.selected !== true)
    });

};
