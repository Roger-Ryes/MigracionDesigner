//"TaskId": "T_LNSPRGNPCEXYE_633"
/**
 * Suprimir las columnas adicionales en la tabla Amortización
 *
 * @param entities Contiene todas las entidades del formulario.
 * @param eventArgs Propiedades y métodos del evento que se está manipulando.
 * @param gridId id del Grid de amortización a Editar.
 */
suprColAmortization = (entities: Model, eventArgs: any, gridId: any) => {
    let grid: any = eventArgs.commons.api.grid;

    if (entities.AmortizationTitleEntity.dynamicField1 == null) {
        grid.hideColumn(gridId, 'dynamicField1');
        grid.disabledColumn(gridId, 'dynamicField1');
    } else {
        grid.title(gridId, 'dynamicField1', entities.AmortizationTitleEntity.dynamicField1);
        grid.showColumn(gridId, 'dynamicField1');
    }
    if (entities.AmortizationTitleEntity.dynamicField2 == null) {
        grid.hideColumn(gridId, 'dynamicField2');
        grid.disabledColumn(gridId, 'dynamicField2');
    } else {
        grid.title(gridId, 'dynamicField2', entities.AmortizationTitleEntity.dynamicField2);
        grid.showColumn(gridId, 'dynamicField2');
    }
    if (entities.AmortizationTitleEntity.dynamicField3 == null) {
        grid.hideColumn(gridId, 'dynamicField3');
        grid.disabledColumn(gridId, 'dynamicField3');
    } else {
        grid.title(gridId, 'dynamicField3', entities.AmortizationTitleEntity.dynamicField3);
        grid.showColumn(gridId, 'dynamicField3');
    }
    if (entities.AmortizationTitleEntity.dynamicField4 == null) {
        grid.hideColumn(gridId, 'dynamicField4');
        grid.disabledColumn(gridId, 'dynamicField4');
    } else {
        grid.title(gridId, 'dynamicField4', entities.AmortizationTitleEntity.dynamicField4);
        grid.showColumn(gridId, 'dynamicField4');
    }
    if (entities.AmortizationTitleEntity.dynamicField5 == null) {
        grid.hideColumn(gridId, 'dynamicField5');
        grid.disabledColumn(gridId, 'dynamicField5');
    } else {
        grid.title(gridId, 'dynamicField5', entities.AmortizationTitleEntity.dynamicField5);
        grid.showColumn(gridId, 'dynamicField5');
    }
    if (entities.AmortizationTitleEntity.dynamicField6 == null) {
        grid.hideColumn(gridId, 'dynamicField6');
        grid.disabledColumn(gridId, 'dynamicField6');
    } else {
        grid.title(gridId, 'dynamicField6', entities.AmortizationTitleEntity.dynamicField6);
        grid.showColumn(gridId, 'dynamicField6');
    }
    if (entities.AmortizationTitleEntity.dynamicField7 == null) {
        grid.hideColumn(gridId, 'dynamicField7');
        grid.disabledColumn(gridId, 'dynamicField7');
    } else {
        grid.title(gridId, 'dynamicField7', entities.AmortizationTitleEntity.dynamicField7);
        grid.showColumn(gridId, 'dynamicField7');
    }
    if (entities.AmortizationTitleEntity.dynamicField8 == null) {
        grid.hideColumn(gridId, 'dynamicField8');
        grid.disabledColumn(gridId, 'dynamicField8');
    } else {
        grid.title(gridId, 'dynamicField8', entities.AmortizationTitleEntity.dynamicField8);
        grid.showColumn(gridId, 'dynamicField8');
    }
    if (entities.AmortizationTitleEntity.dynamicField9 == null) {
        grid.hideColumn(gridId, 'dynamicField9');
        grid.disabledColumn(gridId, 'dynamicField9');
    } else {
        grid.title(gridId, 'dynamicField9', entities.AmortizationTitleEntity.dynamicField9);
        grid.showColumn(gridId, 'dynamicField9');
    }
    if (entities.AmortizationTitleEntity.dynamicField10 == null) {
        grid.hideColumn(gridId, 'dynamicField10');
        grid.disabledColumn(gridId, 'dynamicField10');
    } else {
        grid.title(gridId, 'dynamicField10', entities.AmortizationTitleEntity.dynamicField10);
        grid.showColumn(gridId, 'dynamicField10');
    }
    if (entities.AmortizationTitleEntity.dynamicField11 == null) {
        grid.hideColumn(gridId, 'dynamicField11');
        grid.disabledColumn(gridId, 'dynamicField11');
    } else {
        grid.title(gridId, 'dynamicField11', entities.AmortizationTitleEntity.dynamicField11);
        grid.showColumn(gridId, 'dynamicField11');
    }
    if (entities.AmortizationTitleEntity.dynamicField12 == null) {
        grid.hideColumn(gridId, 'dynamicField12');
        grid.disabledColumn(gridId, 'dynamicField12');
    } else {
        grid.title(gridId, 'dynamicField12', entities.AmortizationTitleEntity.dynamicField12);
        grid.showColumn(gridId, 'dynamicField12');
    }
    if (entities.AmortizationTitleEntity.dynamicField13 == null) {
        grid.hideColumn(gridId, 'dynamicField13');
        grid.disabledColumn(gridId, 'dynamicField13');
    } else {
        grid.title(gridId, 'dynamicField13', entities.AmortizationTitleEntity.dynamicField13);
        grid.showColumn(gridId, 'dynamicField13');
    }
    if (entities.AmortizationTitleEntity.dynamicField14 == null) {
        grid.hideColumn(gridId, 'dynamicField14');
        grid.disabledColumn(gridId, 'dynamicField14');
    } else {
        grid.title(gridId, 'dynamicField14', entities.AmortizationTitleEntity.dynamicField14);
        grid.showColumn(gridId, 'dynamicField14');
    }
    if (entities.AmortizationTitleEntity.dynamicField15 == null) {
        grid.hideColumn(gridId, 'dynamicField15');
        grid.disabledColumn(gridId, 'dynamicField15');
    } else {
        grid.title(gridId, 'dynamicField15', entities.AmortizationTitleEntity.dynamicField15);
        grid.showColumn(gridId, 'dynamicField15');
    }
    if (entities.AmortizationTitleEntity.dynamicField16 == null) {
        grid.hideColumn(gridId, 'dynamicField16');
        grid.disabledColumn(gridId, 'dynamicField16');
    } else {
        grid.title(gridId, 'dynamicField16', entities.AmortizationTitleEntity.dynamicField16);
        grid.showColumn(gridId, 'dynamicField16');
    }
    if (entities.AmortizationTitleEntity.dynamicField17 == null) {
        grid.hideColumn(gridId, 'dynamicField17');
        grid.disabledColumn(gridId, 'dynamicField17');
    } else {
        grid.title(gridId, 'dynamicField17', entities.AmortizationTitleEntity.dynamicField17);
        grid.showColumn(gridId, 'dynamicField17');
    }
    if (entities.AmortizationTitleEntity.dynamicField18 == null) {
        grid.hideColumn(gridId, 'dynamicField18');
        grid.disabledColumn(gridId, 'dynamicField18');
    } else {
        grid.title(gridId, 'dynamicField18', entities.AmortizationTitleEntity.dynamicField18);
        grid.showColumn(gridId, 'dynamicField18');
    }
    if (entities.AmortizationTitleEntity.dynamicField19 == null) {
        grid.hideColumn(gridId, 'dynamicField19');
        grid.disabledColumn(gridId, 'dynamicField19');
    } else {
        grid.title(gridId, 'dynamicField19', entities.AmortizationTitleEntity.dynamicField19);
        grid.showColumn(gridId, 'dynamicField19');
    }
    if (entities.AmortizationTitleEntity.dynamicField20 == null) {
        grid.hideColumn(gridId, 'dynamicField20');
        grid.disabledColumn(gridId, 'dynamicField20');
    } else {
        grid.title(gridId, 'dynamicField20', entities.AmortizationTitleEntity.dynamicField20);
        grid.showColumn(gridId, 'dynamicField20');
    }
}