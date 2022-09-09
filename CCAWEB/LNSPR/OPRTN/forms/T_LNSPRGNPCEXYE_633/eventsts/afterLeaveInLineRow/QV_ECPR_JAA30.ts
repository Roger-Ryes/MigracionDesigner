//gridAfterLeaveInLineRow QueryView: QV_ECPR_JAA30
//Evento GridAfterLeavenlineRow: Se ejecuta después de aceptar la edición o inserción en línea de la grilla.
task_gridAfterLeaveInLineRow_QV_ECPR_JAA30 = (
    entities: Model,
    gridAfterLeaveInLineRowEventArgs: CobisModelGridAfterLeaveInLineRowEventArgs
) => {
    gridAfterLeaveInLineRowEventArgs.commons.execServer = false;
    if (gridAfterLeaveInLineRowEventArgs.cancelEdition) {
        for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
            entities.AmortizationEntity[a].dividend = (+a + 1);
        }
    } else {
        if (updateFila) {
            let fechaMenor: any;
            let fechaMayor: any;
            let aux: any;
            //var datosGrid = entities.AmortizationEntity;
            for (let i: any = 0; i < entities.AmortizationEntity.length - 1; i++) {
                fechaMenor = entities.AmortizationEntity[i].expirationDate.getTime();
                for (let j: any = i + 1; j < entities.AmortizationEntity.length - 1; j++) {
                    fechaMayor = entities.AmortizationEntity[j].expirationDate.getTime();
                    if (fechaMenor > fechaMayor) {
                        fechaMenor = fechaMayor
                        aux = entities.AmortizationEntity[i];
                        entities.AmortizationEntity.data()[i] = entities.AmortizationEntity[j];
                        entities.AmortizationEntity[j] = aux;
                    }
                }
            }
            for (let k: any = 0; k < entities.AmortizationEntity.length - 1; k++) {
                entities.AmortizationEntity[k].dividend = (+k + 1);
            }
            updateFila = false;
            gridAfterLeaveInLineRowEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
        }
    }
};