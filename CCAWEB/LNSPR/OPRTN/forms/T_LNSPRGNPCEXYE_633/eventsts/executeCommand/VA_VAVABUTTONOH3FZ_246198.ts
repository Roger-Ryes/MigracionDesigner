// (Button) - Recalcular
task_executeCommand_VA_VAVABUTTONOH3FZ_246198 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    if (stateCalculate == 'V') {
        let resp: any = await firstValueFrom(
            executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUEA_62246")
        );

        switch (resp.buttonIndex) {
            case 0:                
                stateCalculate = 'C';
                $('#VA_VAVABUTTONOH3FZ_246198').click();
                return false;
            case 1:
                stateCalculate = 'A';
                $('#VA_VAVABUTTONOH3FZ_246198').click();
                return true;
            }
    } else if (stateCalculate == 'C') {
        stateCalculate = 'V';
    } else if (stateCalculate == 'A') {
        stateCalculate = 'V';
        let succes: any = true;
        if ($('.k-grid-cancel').length) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIENECADI_92589", false, null, timer);
        }
        if (succes && entities.AmortizationEntity.length == 1) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIDS_88978", false, null, timer);
        }
        let numDaysYear: any = 360;
        let startDate: any = entities.OperationEntity.creationDate;
        let interest: any = 0;
        let amount: any = entities.AmortizationFormEntity.amount;
        let capital: any = 0;

        if (entities.AmortizationEntity.length == 2) {
            numDaysYear = 365;
        }
        if (succes && !changeAmortization) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOHAYCAMC_91338", false, null, timer);
        }

        if (succes && changeAmortization) {
            changeAmortization = false;
            let infoItems: any = [];
            let totales: any = [];
            totales['balanceCapital'] = 0;
            totales['dynamicField1'] = 0;

            for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
                totales['dynamicField1'] += parseFloat(entities.AmortizationEntity[a]['dynamicField1']);

                let discount: any = 0;

                discount += parseFloat(entities.AmortizationEntity[a]['dynamicField1']);
                if (a == 0) {
                    entities.AmortizationEntity[a].balanceCapital = amount;                    
                }

                entities.AmortizationEntity._data[a + 1].balanceCapital = entities.AmortizationEntity[a].balanceCapital - discount;
                amount = amount - discount;
            }

            if((entities.AmortizationEntity._data[entities.AmortizationEntity.length-1].balanceCapital).toFixed(2)==0.00){
                entities.AmortizationEntity._data[entities.AmortizationEntity.length-1].balanceCapital = 0.00;
            }
            executeCommandEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONNPM_2_987198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
        }
    }
}