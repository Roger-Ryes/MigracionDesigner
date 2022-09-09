//Entity: PaymentForm
//PaymentForm.currencyId (DropDownList) View: PaymentModeForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_4212YIFTVBCOPPD_140216 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {


    changedEventArgs.commons.api.viewState.label("VA_8983QPJHQZZOSML_321216", this.cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284") + " " + "(" +
        changedEventArgs.commons.api.viewState.getDataItem("VA_4212YIFTVBCOPPD_140216").value + ")");
    changedEventArgs.commons.execServer = true;

    };