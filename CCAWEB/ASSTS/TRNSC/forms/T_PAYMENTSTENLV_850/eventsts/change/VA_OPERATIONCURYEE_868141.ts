//Entity: Payment
//Payment.operationCurrencyType (DropDownList) View: PaymentsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_OPERATIONCURYEE_868141 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.viewState.label("VA_AMOUNTPREPAYTME_876141", this.cobis.translate("ASSTS.LBL_ASSTS_SALDOPRCN_87630") + " " + "(" +
        changedEventArgs.commons.api.viewState.getDataItem("VA_OPERATIONCURYEE_868141").value + ")");


};
