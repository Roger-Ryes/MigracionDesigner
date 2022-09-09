// (Button) - Recalcular
task.executeCommand.VA_VAVABUTTONOH3FZ_246198 = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    if (stateCalculate == 'V') {
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUEA_62246").then(function (resp) {
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
        });
    } else if (stateCalculate == 'C') {
        stateCalculate = 'V';
    } else if (stateCalculate == 'A') {
        stateCalculate = 'V';
        var succes = true;
        if ($('.k-grid-cancel').length) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIENECADI_92589", false, null, timer);
        }
        if (succes && entities.AmortizationEntity._data.length == 1) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIDS_88978", false, null, timer);
        }
        var numDaysYear = 360;
        var startDate = entities.OperationEntity.creationDate;
        var interest = 0;
        var amount = entities.AmortizationFormEntity.amount;
        var capital = 0;

        if (entities.AmortizationEntity._data.length == 2) {
            numDaysYear = 365;
        }
        if (succes && !changeAmortization) {
            succes = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOHAYCAMC_91338", false, null, timer);
        }

        if (succes && changeAmortization) {
            changeAmortization = false;
            var infoItems = [];
            var totales = [];
            totales['balanceCapital'] = 0;  
            totales['dynamicField1'] = 0;
                
            for (var a = 0; a < entities.AmortizationEntity._data.length - 1; a++) {
                totales['dynamicField1'] += parseFloat(entities.AmortizationEntity._data[a]['dynamicField1']);

                var discount = 0;
                
                discount += parseFloat(entities.AmortizationEntity._data[a]['dynamicField1']);
                if (a == 0) {
                    entities.AmortizationEntity._data[a].balanceCapital = amount;                    
                }

                entities.AmortizationEntity._data[a + 1].balanceCapital = entities.AmortizationEntity._data[a].balanceCapital - discount;
                amount = amount - discount;
            }
            
            if((entities.AmortizationEntity._data[entities.AmortizationEntity._data.length-1].balanceCapital).toFixed(2)==0.00){
                entities.AmortizationEntity._data[entities.AmortizationEntity._data.length-1].balanceCapital = 0.00;
            }
            executeCommandEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONNPM_2_987198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
        }
    }
}