//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: LoansRestructuring
//designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == 'findCustomer') {

        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.selectedData) {
            entities.RestructuringFilter.codClient = onCloseModalEventArgs.result.selectedData.code;
            entities.RestructuringFilter.nameClient = onCloseModalEventArgs.result.selectedData.code + " - " + onCloseModalEventArgs.result.selectedData.name
        }
    }

    //SI DA TRANSMITIR
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_RESTRUCTEG_166525') {
        if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.response) {

            onCloseModalEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
            //onCloseModalEventArgs.commons.api.viewState.disable('VA_VABUTTONKFPIHHU_274701');
            for (let i: any = 0; i < entities.RestructuringList.length; i++) {
                onCloseModalEventArgs.commons.api.grid.hideGridRowCommand('QV_UY75_AYT30', entities.RestructuringList[i], 'edit');
            }
        }
    }


};
