//Start signature to Callback event to VA_VAVABUTTONTR__P_260587
task_executeCommandCallback_VA_VAVABUTTONTR__P_260587 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, timer);
        let parentVc: any = executeCommandCallbackEventArgs.commons.api.parentVc;

        if (!parentVc || (parentVc && parentVc.id == 'VC_LOANSEARCH_100921')) {
            let grid: any = executeCommandCallbackEventArgs.commons.api.grid;

            if (entities.AmortizationTitleEntity.dynamicField1 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField1');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField1');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField1', entities.AmortizationTitleEntity.dynamicField1);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField1');
            }
            if (entities.AmortizationTitleEntity.dynamicField2 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField2');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField2');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField2', entities.AmortizationTitleEntity.dynamicField2);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField2');
            }
            if (entities.AmortizationTitleEntity.dynamicField3 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField3');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField3');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField3', entities.AmortizationTitleEntity.dynamicField3);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField3');
            }
            if (entities.AmortizationTitleEntity.dynamicField4 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField4');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField4');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField4', entities.AmortizationTitleEntity.dynamicField4);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField4');
            }
            if (entities.AmortizationTitleEntity.dynamicField5 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField5');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField5');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField5', entities.AmortizationTitleEntity.dynamicField5);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField5');
            }
            if (entities.AmortizationTitleEntity.dynamicField6 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField6');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField6');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField6', entities.AmortizationTitleEntity.dynamicField6);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField6');
            }
            if (entities.AmortizationTitleEntity.dynamicField7 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField7');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField7');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField7', entities.AmortizationTitleEntity.dynamicField7);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField7');
            }
            if (entities.AmortizationTitleEntity.dynamicField8 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField8');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField8');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField8', entities.AmortizationTitleEntity.dynamicField8);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField8');
            }
            if (entities.AmortizationTitleEntity.dynamicField9 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField9');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField9');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField9', entities.AmortizationTitleEntity.dynamicField9);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField9');
            }
            if (entities.AmortizationTitleEntity.dynamicField10 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField10');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField10');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField10', entities.AmortizationTitleEntity.dynamicField10);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField10');
            }
            if (entities.AmortizationTitleEntity.dynamicField11 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField11');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField11');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField11', entities.AmortizationTitleEntity.dynamicField11);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField11');
            }
            if (entities.AmortizationTitleEntity.dynamicField12 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField12');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField12');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField12', entities.AmortizationTitleEntity.dynamicField12);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField12');
            }
            if (entities.AmortizationTitleEntity.dynamicField13 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField13');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField13');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField13', entities.AmortizationTitleEntity.dynamicField13);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField13');
            }
            if (entities.AmortizationTitleEntity.dynamicField14 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField14');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField14');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField14', entities.AmortizationTitleEntity.dynamicField14);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField14');
            }
            if (entities.AmortizationTitleEntity.dynamicField15 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField15');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField15');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField15', entities.AmortizationTitleEntity.dynamicField15);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField15');
            }
            if (entities.AmortizationTitleEntity.dynamicField16 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField16');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField16');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField16', entities.AmortizationTitleEntity.dynamicField16);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField16');
            }
            if (entities.AmortizationTitleEntity.dynamicField17 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField17');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField17');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField17', entities.AmortizationTitleEntity.dynamicField17);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField17');
            }
            if (entities.AmortizationTitleEntity.dynamicField18 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField18');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField18');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField18', entities.AmortizationTitleEntity.dynamicField18);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField18');
            }
            if (entities.AmortizationTitleEntity.dynamicField19 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField19');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField19');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField19', entities.AmortizationTitleEntity.dynamicField19);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField19');
            }
            if (entities.AmortizationTitleEntity.dynamicField20 == null) {
                grid.hideColumn('QV_ECPR_JAA30', 'dynamicField20');
                grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField20');
            } else {
                grid.title('QV_ECPR_JAA30', 'dynamicField20', entities.AmortizationTitleEntity.dynamicField20);
                grid.showColumn('QV_ECPR_JAA30', 'dynamicField20');
            }
        }
    }

};
