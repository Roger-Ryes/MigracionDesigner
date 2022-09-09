//gridCommand (Button) QueryView: QV_JQ56_BYK87
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task_gridCommand_CEQV_201QV_JQ56_BYK87_540 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.OfficialOfficeTransferList = true;

    for (let i: any = 0; i < entities.OfficialOfficeTransferList.length; i++) {
        if (allTrue) {
            gridExecuteCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', i, {
                selected: false
            });
        } else {
            gridExecuteCommandEventArgs.commons.api.grid.updateRow('OfficialOfficeTransferList', i, {
                selected: true
            });
        }
    }
    allTrue = !allTrue;
    if (!allTrue) {
        gridExecuteCommandEventArgs.commons.api.viewState.label("CEQV_201QV_JQ56_BYK87_540", "LNSPR.LBL_LNSPR_SELECCIRA_72320");
        gridExecuteCommandEventArgs.commons.api.viewState.enable('CM_TLNSPRXN_W2R');
    } else {
        gridExecuteCommandEventArgs.commons.api.viewState.label("CEQV_201QV_JQ56_BYK87_540", "LNSPR.LBL_LNSPR_DESELECIC_71224");
        gridExecuteCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
    }
};
