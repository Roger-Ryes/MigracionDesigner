//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: BankAccountsModal
    task_initData_VC_BANKACCOMU_224777 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.entityName = true;
    };