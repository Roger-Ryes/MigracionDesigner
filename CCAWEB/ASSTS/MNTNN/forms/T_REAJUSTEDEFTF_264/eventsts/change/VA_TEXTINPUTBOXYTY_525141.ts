//Entity: ReadjustmentDetalilsLoan
    //ReadjustmentDetalilsLoan.factor (TextInputBox) View: ReadjustmentDetalilsLoanForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TEXTINPUTBOXYTY_525141 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;

        let api: any = changeEventArgs.commons.api;
        let selectedRow: any = api.vc.grids.QV_2618_23821.selectedRow;

        if (changeEventArgs.newValue) {
                    selectedRow.set('porcentaje', null);
                }
    };