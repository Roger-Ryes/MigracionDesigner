//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: BankAccountsListForm
    task_initData_VC_BANKACCOTT_940944 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;
        let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

        entities.Payment.customerID = dialogParameters.customerID;
        entities.Payment.paymentType = dialogParameters.paymentType;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };