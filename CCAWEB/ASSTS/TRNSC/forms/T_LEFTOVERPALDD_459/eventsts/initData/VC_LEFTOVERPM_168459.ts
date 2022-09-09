//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: LeftoverPaymentsModal
    task_initData_VC_LEFTOVERPM_168459 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;

        let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

        entities.LeftOverPayment.paymentType = dialogParameters.leftOverPayment.paymentType;
        entities.LeftOverPayment.value = dialogParameters.leftOverPayment.value;
        entities.LeftOverPayment.currencyType = dialogParameters.leftOverPayment.currencyType;
        entities.LeftOverPayment.reference = dialogParameters.leftOverPayment.reference;
        entities.LeftOverPayment.note = dialogParameters.leftOverPayment.note;

        this.customerCode = dialogParameters.customerCode;
    };