//Start signature to Callback event to VC_LOANSUPDEE_628908
task_initDataCallback_VC_LOANSUPDEE_628908 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
   
     if (initDataCallbackEventArgs.success) {
         let oe: any = entities.OperationEntity;
         let gi: any = entities.GeneralInformation;
         let grid: any = initDataCallbackEventArgs.commons.api.grid;
         let viewState: any = initDataCallbackEventArgs.commons.api.viewState;

         oe.financialDestination = gi.destinoFinanciero;
         oe.state = gi.estado;

         oe.creationDate = gi.fechaConcesion;
         oe.expirationDate = gi.fechaVencimiento;
         oe.firstDueDate = gi.fechaPrimerVencimiento;

         oe.money = gi.idMoneda;
         oe.official = gi.idOficial;
         oe.amountApproved = gi.montoAprobado
         oe.amount = gi.montoOperacion;
         oe.operation = gi.numeroOperacion;
         oe.office = gi.oficina;
         oe.typeOperation = gi.tipoOperacionId;
         oe.sector = entities.GeneralParametersQuery.sector;
         oe.economicActivity = gi.actividadEconomica;

         entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
         entities.AmortizationFormEntity.operationType = entities.OperationEntity.typeOperation;
         entities.AmortizationFormEntity.valueDate = entities.OperationEntity.creationDate;
         entities.AmortizationFormEntity.typeAmortization = entities.AmortizationFormEntity.typeAmortization ? entities.AmortizationFormEntity.typeAmortization?.trim() : "";
         entities.AmortizationFormEntity.typeFee = entities.AmortizationFormEntity.typeFee ? entities.AmortizationFormEntity.typeFee?.trim() : "";
         entities.AmortizationFormEntity.firstDueDate = entities.OperationEntity.firstDueDate;

         viewState.hide('VA_EXTENDEDPAYMEDA_710198');
         if (entities.GeneralParametersQuery.readjustable == 'S') {
             viewState.enable('VA_PERIODICITYEHNN_689309');//parametros generales - Periodo Reajuste
         } else {
             viewState.disable('VA_PERIODICITYEHNN_689309');//parametros generales - Periodo de Reajuste
         }

         if (entities.AmortizationFormEntity.typeAmortization != null) {
             switch (entities.AmortizationFormEntity.typeAmortization) {
                 case 'ALEMANA':
                     grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');            
                     grid.hideColumn('QV_ECPR_JAA30','cmdEdition');
                        
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
                     viewState.hide('VA_EXTENDEDPAYMEDA_710198');
                     viewState.hide('G_OPERATIUYT_632198'); 
                     break;
                 case 'FRANCESA':
                     grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                     grid.hideColumn('QV_ECPR_JAA30','cmdEdition');
                        
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
                    /* if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                         viewState.show('G_OPERATIANT_136198');
                     }else{
                         viewState.hide('G_OPERATIANT_136198');
                     }*/
                     //viewState.show('VA_EXTENDEDPAYMEDA_710198');
                     viewState.hide('VA_EXTENDEDPAYMEDA_710198');
                     viewState.hide('G_OPERATIUYT_632198');    
                     break;
                 case 'MANUAL':
                     grid.showToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
                     grid.showColumn('QV_ECPR_JAA30','cmdEdition');
                        
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
                     grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length-1], 'edit');
                     grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length-1], 'delete');
                     //grid.selectRow('QV_ECPR_JAA30', {dividend:1}, 1);
                     break;
             }
         }

         //control si el estado es distinto a NO VIGENTE
         if(gi.codState != stateOp ){    
             //OCULTAR TABS
             //viewState.hide('VC_SLGEFSJAUA_161908');// Parametros generales
             viewState.hide('VC_UTMLTUSZMJ_714908');// Amortizacion
            viewState.disable('VA_9193TCVDUUBRZAN_137309');
            viewState.disable('VA_READJUSTABLELXP_279309');
            viewState.disable('VA_PERIODICITYEHNN_689309');
             
             //Deshabilitar btn guardar
             viewState.hide('VA_VAVABUTTONTR__P_260587');//Boton guardar 
             
            }

         this.suprColAmortization(entities, initDataCallbackEventArgs, 'QV_ECPR_JAA30');
     }
};
