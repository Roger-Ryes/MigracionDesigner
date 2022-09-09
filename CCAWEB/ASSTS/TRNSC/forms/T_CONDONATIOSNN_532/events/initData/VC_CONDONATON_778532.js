//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: CondonationDetailForm
    task.initData.VC_CONDONATON_778532 = function (entities, initDataEventArgs){
        initDataEventArgs.commons.execServer = false;
        var dialogParameters = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
        entities.ServerParameter.loanBankID = dialogParameters.bankNum;
        entities.ServerParameter.amount = dialogParameters.amount;
    if (dialogParameters.condonationDetail2 && dialogParameters.condonationDetail2._data.length > 0) {
        initDataEventArgs.commons.api.grid.addAllRows("CondonationDetail", dialogParameters.condonationDetail2._data, false);
    }

    };