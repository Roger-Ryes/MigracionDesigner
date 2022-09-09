//Entity: PaymentGroup
    //PaymentGroup.paymentsType (ComboBox) View: PaymentsFormGroup
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_1MVJRDIJAIBEKBY_880816 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.execServer = true;
        if (changedEventArgs.newValue === 'NDAH_FINAN'){
            changedEventArgs.commons.api.viewState.disable('VA_2PVZZFNDSNWIITT_119816');
        } else {
            changedEventArgs.commons.api.viewState.enable('VA_2PVZZFNDSNWIITT_119816');
        }
    };