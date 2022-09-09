//"TaskId": "T_ASSTSAMRZIFMF_594"

task.gridRowCommand.VA_CHECKBOXWFQPYPQ_909701 = function (entities, gridRowCommandEventArgs) {

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

task.gridRowCommand.VA_CHECKBOXVYTZVCZ_150701 = function (entities, gridRowCommandEventArgs) {

    gridRowCommandEventArgs.commons.execServer = false;
        gridRowCommandEventArgs.commons.api.grid.updateRow('RestructuringList', gridRowCommandEventArgs.rowIndex, {
            reest: (gridRowCommandEventArgs.rowData.reest !== true)
        });

};
