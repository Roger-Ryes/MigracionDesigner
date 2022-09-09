//Entity: ReadjustmentDetalilsLoan
    //ReadjustmentDetalilsLoan.factor (TextInputBox) View: ReadjustmentDetalilsLoanForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_TEXTINPUTBOXYTY_525141 = function( entities, changeEventArgs ) {
        changeEventArgs.commons.execServer = false;

			var api = changeEventArgs.commons.api;
			var selectedRow = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
				selectedRow.set('porcentaje', null);
			}


    };