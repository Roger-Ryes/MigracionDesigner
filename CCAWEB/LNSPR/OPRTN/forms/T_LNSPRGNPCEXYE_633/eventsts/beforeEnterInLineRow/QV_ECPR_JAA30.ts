//gridBeforeEnterInLineRow QueryView: undefined
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task_gridBeforeEnterInLineRow_QV_ECPR_JAA30 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
) => {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
    updateFila = true;
    let grid: any=gridBeforeEnterInLineRowEventArgs.commons.api.grid;
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField2');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField3');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField4');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField5');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField6');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField7');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField8');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField9');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField10');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField11');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField12');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField13');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField14');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField15');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField16');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField17');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField18');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField19');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField20');

    grid.disabledColumn('QV_ECPR_JAA30', 'dividend');
    grid.disabledColumn('QV_ECPR_JAA30', 'balanceCapital');
    grid.disabledColumn('QV_ECPR_JAA30', 'fee');

    let columnas: any = gridBeforeEnterInLineRowEventArgs.commons.api.vc.viewState.QV_ECPR_JAA30.column;
    if (entities.AmortizationTitleEntity.dynamicType1 && entities.AmortizationTitleEntity.dynamicType1 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_201198');
        columnas.dynamicField1.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType2 && entities.AmortizationTitleEntity.dynamicType2 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD222_976198');
        columnas.dynamicField2.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType3 && entities.AmortizationTitleEntity.dynamicType3 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD333_680198');
        columnas.dynamicField3.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType4 && entities.AmortizationTitleEntity.dynamicType4 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD444_619198');
        columnas.dynamicField4.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType5 && entities.AmortizationTitleEntity.dynamicType5 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD555_803198');
        columnas.dynamicField5.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType6 && entities.AmortizationTitleEntity.dynamicType6 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD666_861198');
        columnas.dynamicField6.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType7 && entities.AmortizationTitleEntity.dynamicType7 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD777_256198');
        columnas.dynamicField7.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType8 && entities.AmortizationTitleEntity.dynamicType8 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD888_910198');
        columnas.dynamicField8.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType9 && entities.AmortizationTitleEntity.dynamicType9 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD999_904198');
        columnas.dynamicField9.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType10 && entities.AmortizationTitleEntity.dynamicType10 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD011_387198');
        columnas.dynamicField10.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType11 && entities.AmortizationTitleEntity.dynamicType11 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_909198');
        columnas.dynamicField11.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType12 && entities.AmortizationTitleEntity.dynamicType12 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD121_508198');
        columnas.dynamicField12.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType13 && entities.AmortizationTitleEntity.dynamicType13 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD311_753198');
        columnas.dynamicField13.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType14 && entities.AmortizationTitleEntity.dynamicType14 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD411_866198');
        columnas.dynamicField14.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType15 && entities.AmortizationTitleEntity.dynamicType15 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD551_120198');
        columnas.dynamicField15.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType16 && entities.AmortizationTitleEntity.dynamicType16 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_346198');
        columnas.dynamicField16.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType17 && entities.AmortizationTitleEntity.dynamicType17 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD777_257198');
        columnas.dynamicField17.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType18 && entities.AmortizationTitleEntity.dynamicType18 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD181_740198');
        columnas.dynamicField18.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType19 && entities.AmortizationTitleEntity.dynamicType19 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD911_217198');
        columnas.dynamicField19.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType20 && entities.AmortizationTitleEntity.dynamicType20 == "I") {
        //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD000_944198');
        columnas.dynamicField20.enabled = false
    }
};