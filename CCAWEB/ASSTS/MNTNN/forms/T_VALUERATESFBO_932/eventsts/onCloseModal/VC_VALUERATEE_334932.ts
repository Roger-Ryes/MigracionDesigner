//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: ValueRates
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        let isAccept: any;

        if (onCloseModalEventArgs.closedViewContainerId == 'VC_TYPERATEDA_850545') {
            if (typeof onCloseModalEventArgs.result === "boolean") {
                isAccept = onCloseModalEventArgs.result;
            }
            if (isAccept) {
                //Refrescar e grid de tipos de tasas
            /* if (entities.ServerParameter.refresGridFlag == false || entities.ServerParameter.refresGridFlag == null) {
                    entities.ServerParameter.refresGridFlag = true;
                } else {
                    entities.ServerParameter.refresGridFlag = false;
             }*/

            onCloseModalEventArgs.commons.api.grid.refresh('QV_1722_99596');
            onCloseModalEventArgs.commons.api.grid.hideToolBarButton('QV_5693_54772', 'create');
            }
        }

        if (onCloseModalEventArgs.closedViewContainerId == 'VC_RATESMODAL_789953') {
            if (typeof onCloseModalEventArgs.result === "boolean") {
                isAccept = onCloseModalEventArgs.result;
            }
            if (isAccept) {
                //Refrescar e grid de valores de tasa
            /*if (entities.ServerParameter.refresGrid2Flag == false || entities.ServerParameter.refresGrid2Flag == null) {
                    entities.ServerParameter.refresGrid2Flag = true;
                } else {
                    entities.ServerParameter.refresGrid2Flag = false;
            }*/
            onCloseModalEventArgs.commons.api.grid.refresh('QV_5693_54772');
            }
        }
    };