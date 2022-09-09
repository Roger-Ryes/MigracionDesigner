//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoansLineGuaranteesForm
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let search: any = entities.LoansLineGuarantee;
    let tg: any = onCloseModalEventArgs.result.tipoGarantia;
    let nav: any = onCloseModalEventArgs.commons.api.navigation;

    if (tg) {
        let tip: any = tg.tipo;
        let des: any = tg.descripcion;
        search.guaranteeType = tip + ' - ' + des;
        search.guaranteeTypeCode = tip;
    }

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
       onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        if (data) {
            entities.LoansLineGuarantee.clientCode = data.code;
            entities.LoansLineGuarantee.client = data.code + " - " + data.name;
           
        }
    }
};
