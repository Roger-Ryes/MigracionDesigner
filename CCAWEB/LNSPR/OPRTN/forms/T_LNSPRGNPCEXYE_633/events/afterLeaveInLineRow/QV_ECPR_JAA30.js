//gridAfterLeaveInLineRow QueryView: QV_ECPR_JAA30
//Evento GridAfterLeavenlineRow: Se ejecuta después de aceptar la edición o inserción en línea de la grilla.
task.gridAfterLeaveInLineRow.QV_ECPR_JAA30 = function (entities, gridAfterLeaveInLineRowEventArgs) {
    gridAfterLeaveInLineRowEventArgs.commons.execServer = false;
    if (gridAfterLeaveInLineRowEventArgs.cancelEdition) {
        for (var a = 0; a < entities.AmortizationEntity._data.length - 1; a++) {
            entities.AmortizationEntity._data[a].dividend = (+a + 1);
        }
    } else {
        if (updateFila) {
            var fechaMenor;
            var fechaMayor;
            var aux;
            //var datosGrid = entities.AmortizationEntity.data();
            for (var i = 0; i < entities.AmortizationEntity.data().length - 1; i++) {
                fechaMenor = entities.AmortizationEntity.data()[i].expirationDate.getTime();
                for (var j = i + 1; j < entities.AmortizationEntity.data().length - 1; j++) {
                    fechaMayor = entities.AmortizationEntity.data()[j].expirationDate.getTime();
                    if (fechaMenor > fechaMayor) {
                        fechaMenor = fechaMayor
                        aux = entities.AmortizationEntity.data()[i];
                        entities.AmortizationEntity.data()[i] = entities.AmortizationEntity.data()[j];
                        entities.AmortizationEntity.data()[j] = aux;
                    }
                }
            }
            for (var k = 0; k < entities.AmortizationEntity.data().length - 1; k++) {
                entities.AmortizationEntity.data()[k].dividend = (+k + 1);
            }
            updateFila = false;
            gridAfterLeaveInLineRowEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
        }
    }
};