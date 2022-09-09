//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoansLineGuaranteesForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs) {
    onCloseModalEventArgs.commons.execServer = false;
    var search = entities.LoansLineGuarantee;
    var tg = onCloseModalEventArgs.result.tipoGarantia;
    var nav = onCloseModalEventArgs.commons.api.navigation;

    if (tg) {
        var tip = tg.tipo;
        var des = tg.descripcion;
        search.guaranteeType = tip + ' - ' + des;
        search.guaranteeTypeCode = tip;

    }
    
     if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
        onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        var data = onCloseModalEventArgs.result.selectedData;
        if (data) {
            entities.LoansLineGuarantee.clientCode = data.code;
            entities.LoansLineGuarantee.client = data.code + " - " + data.name;
           
        }
    }

};
