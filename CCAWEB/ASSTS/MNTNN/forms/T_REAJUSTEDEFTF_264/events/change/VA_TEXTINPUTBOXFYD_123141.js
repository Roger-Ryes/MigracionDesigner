//Entity: ReadjustmentDetalilsLoan
    //ReadjustmentDetalilsLoan.referencial (ComboBox) View: ReadjustmentDetalilsLoanForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_TEXTINPUTBOXFYD_123141 = function( entities, changeEventArgs ) {
        changeEventArgs.commons.execServer = false;

			var api = changeEventArgs.commons.api;
			var selectedRow = api.vc.grids.QV_2618_23821.selectedRow;

    if (changeEventArgs.newValue) {
				selectedRow.set('porcentaje', null);
			}

    };