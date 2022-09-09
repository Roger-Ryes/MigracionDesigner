//Start signature to Callback event to VC_OPERATIOPA_648633
task.initDataCallback.VC_OPERATIOPA_648633 = function (entities, initDataCallbackEventArgs) {
    if (initDataCallbackEventArgs.success) {
        var grid = initDataCallbackEventArgs.commons.api.grid;
        var viewState = initDataCallbackEventArgs.commons.api.viewState;

        entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
        entities.AmortizationFormEntity.operationType = initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().typeOperation;
        
        if (initDataCallbackEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
            entities.AmortizationFormEntity.valueDate = fechaCreacion;
        }
        
        entities.OperationEntity.creationDate = entities.AmortizationFormEntity.valueDate;
        entities.AmortizationFormEntity.typeAmortization = entities.AmortizationFormEntity.typeAmortization ? entities.AmortizationFormEntity.typeAmortization.trim() : "";
        entities.AmortizationFormEntity.typeFee = entities.AmortizationFormEntity.typeFee ? entities.AmortizationFormEntity.typeFee.trim() : "";
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');

        if (entities.AmortizationFormEntity.typeAmortization != null) {
            switch (entities.AmortizationFormEntity.typeAmortization.trim()) {
                case 'ALEMANA':
                    grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                    grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');
                       
                    viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
                    viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
                    viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
                    viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
                    viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
                    viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
                    viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
                    viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
                    viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
                    viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
                    viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
                    viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
                    //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
                    viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
                    viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
                    viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
                    //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
                    //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
                    //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
                    viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
                    viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
                    viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
                    viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
                    viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
                    viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
                    viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar

                   /* if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                        viewState.show('G_OPERATIANT_136198');
                    }else{
                        viewState.hide('G_OPERATIANT_136198');
                    }   */ 
                    //viewState.show('VA_EXTENDEDPAYMEDA_710198');
                    viewState.hide('G_OPERATIUYT_632198');

                    break;
                case 'FRANCESA':
                    grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                    grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');
                       
                    viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
                    viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
                    viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
                    viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
                    viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
                    viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
                    viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
                    viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
                    viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
                    viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
                    viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
                    viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
                    //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
                    viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
                    viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
                    viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
                    //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
                    //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
                    //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
                    viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
                    viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
                    viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
                    viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
                    viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
                    viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
                    viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
                    grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
                  /*  if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                        viewState.show('G_OPERATIANT_136198');
                    }else{
                        viewState.hide('G_OPERATIANT_136198');
                    }*/
                    //viewState.show('VA_EXTENDEDPAYMEDA_710198');
                    viewState.hide('G_OPERATIUYT_632198');
                    break;
                case 'AGREGADA':
                    grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                    grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');
                       
                    viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
                    viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
                    viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
                    viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
                    viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
                    viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
                    viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
                    viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
                    viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
                    viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
                    viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
                    viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
                    //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
                    viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
                    viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
                    viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
                    //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
                    //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
                    //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
                    viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
                    viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
                    viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
                    viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
                    viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
                    viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
                    viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
                    grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
                  /*  if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                        viewState.show('G_OPERATIANT_136198');
                    }else{
                        viewState.hide('G_OPERATIANT_136198');
                    }*/
                    //viewState.show('VA_EXTENDEDPAYMEDA_710198');
                    viewState.hide('G_OPERATIUYT_632198');
                    break;
                case 'MANUAL':
                    grid.showToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                    grid.showColumn('QV_ECPR_JAA30', 'cmdEdition');
                       
                    viewState.hide('VA_FEEOFWVFIUKFNPP_635198'); // cuota
                    viewState.hide('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
                    viewState.hide('VA_TERMMUMJBESVPSA_498198'); // plazo
                    viewState.hide('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
                    viewState.hide('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
                    viewState.hide('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
                    viewState.hide('VA_TERMINTERESTGWH_345198'); // periodo interes
                    viewState.hide('VA_TERMCAPITALLSSH_857198'); // periodo capital
                    viewState.hide('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
                    viewState.hide('VA_PAYMENTDAYEFRJN_549198'); // dia pago
                    viewState.hide('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
                    viewState.hide('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
                    //viewState.hide('VA_GENERATEINSUENC_694198'); // generar seguros
                    viewState.hide('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
                    viewState.hide('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
                    viewState.hide('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
                    //viewState.hide('VA_INITIALINTERTSE_643198'); // cuota inicial int
                    //viewState.hide('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
                    //viewState.hide('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
                    viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total // en CPN no se muestra este campo
                    viewState.hide('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
                    viewState.disable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
                    viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
                    viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
                    viewState.enable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
                    viewState.enable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
                    
                    //grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
                    //viewState.hide('G_OPERATIANT_136198');
                    viewState.show('G_OPERATIUYT_632198');
                    viewState.hide('VA_EXTENDEDPAYMEDA_710198');
                    grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.data().length - 1], 'edit');
                    grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.data().length - 1], 'delete');
                    //grid.selectRow('QV_ECPR_JAA30', {dividend:1}, 1);
                    break;
            }
        }

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

};
