//Entity: ReadjustmentDetalilsLoan
    //ReadjustmentDetalilsLoan.porcentaje (TextInputBox) View: ReadjustmentDetalilsLoanForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_TEXTINPUTBOXAAA_377141 = function( entities, changeEventArgs ) {
        changeEventArgs.commons.execServer = false;

			var api = changeEventArgs.commons.api;
			var selectedRow = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
				selectedRow.set('referencial', null);
				selectedRow.set('signo', null);
				selectedRow.set('factor', null);
			}

    };