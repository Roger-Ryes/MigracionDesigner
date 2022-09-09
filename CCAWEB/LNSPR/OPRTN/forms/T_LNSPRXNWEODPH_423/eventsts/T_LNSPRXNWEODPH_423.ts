//"TaskId": "T_LNSPRXNWEODPH_423"

task_gridRowCommand_VA_CHECKBOXGIYYTMJ_813800 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', gridRowCommandEventArgs.rowIndex, {
        selected: (gridRowCommandEventArgs.rowData.selected !== true)
    });

};
