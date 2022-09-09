//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: LoanSearchForm
    task_initData_VC_LOANSEARHC_144959 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        this.queryString = this.ASSTS.Utils.getQueryStrings();
    initDataEventArgs.commons.execServer = false;
        
    };