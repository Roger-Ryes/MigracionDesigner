//"TaskId": "T_LNSPRDTSDFSKQ_539"

/**
 * Comprueba si un elemento está vacío o no está en ['', null, undefined].
 *
 * @param item Elemento a comprobar si está vacío o no.
 * @param bool withZero Considera a cero (0) como valor vacío.
 * @returns {boolean}
 */
isEmpty = (item: any, withZero: any) => {
    let MY_EMPTY: any = EMPTY.slice();

    if (withZero) {
        MY_EMPTY.push(0);
        MY_EMPTY.push(0.00);
    }
    return MY_EMPTY.indexOf(item) !== NOT_FOUND;
}

/**
 * Agrega un deudor a la grilla, pestaña Información general
 *
 * @param entities Contiene todas las entidades del formulario.
 * @param eventArgs Propiedades y métodos del evento que se está manipulando.
 */
addDebtorToGrid = (entities: Model, eventArgs: any) => {
    let grid: any = eventArgs.commons.api.grid;
    let viewState: any = eventArgs.commons.api.viewState;
    let entity: any = 'DebtorEntity';
    let debtor: any;

    if (!this.isEmpty(entities.OperationCRUDFormEntity.fullName) &&
        this.isEmpty(entities.OperationCRUDFormEntity.idNumber) &&
        $.inArray(funcionality, ['SCO', 'TA']) !== NOT_FOUND) {
        grid.removeAllRows(entity);

        debtor = {
            role: 'D',
            fullName: entities.OperationCRUDFormEntity.fullName,
            idNumber: 0,
            code: 0,
            score: null,
            type: null,
            description: null
        };
        grid.addRow(entity, debtor, true);
        viewState.hide('G_OPERATINOS_396221');  
    } else {
        let role: any = 'C';

        if (entities.OperationCRUDFormEntity.role) {
            role = 'D';
        }
        debtor = {
            role: role,
            fullName: entities.OperationCRUDFormEntity.fullName,
            idNumber: entities.OperationCRUDFormEntity.idNumber,
            code: entities.OperationCRUDFormEntity.code,
            score: null,
            type: null,
            description: null
        };
        let mainDebtor: any = false;
        let alreadyRegisterDebtor: any = false;
        let emptyDebtor: any;

        entities[entity].data().forEach((_debtor: any) => {
            if (_debtor.role === debtor.role && role === 'D') {
                mainDebtor = true;
                eventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_YAFUERENE_35185', false, null, timer);
            }
        });

        if (!mainDebtor) {
            entities[entity].data().forEach((_debtor: any) => {
                if (_debtor.code === debtor.code) {
                    alreadyRegisterDebtor = true;
                    eventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELCONSUDA_15519', false, null, timer);
                }
            });
        }

        emptyDebtor = [debtor.fullName, debtor.idNumber, debtor.code].some(this.isEmpty);

        if (!mainDebtor && !alreadyRegisterDebtor && !emptyDebtor) {
            grid.addRow(entity, debtor, true);
            if (debtor.role === 'D') {
                entities.OperationEntity.mainDebtor = entities.OperationCRUDFormEntity.code;


            }
            entities.OperationCRUDFormEntity.fullName = null;
            entities.OperationCRUDFormEntity.idNumber = null;
            entities.OperationCRUDFormEntity.code = null;
            entities.OperationCRUDFormEntity.role = null;
            entities.OperationCRUDFormEntity.officer = null;            
            entities.OperationCRUDFormEntity.company = null; 
        }
    }
}

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