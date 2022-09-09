//Entity: AmortizationFormEntity
//AmortizationFormEntity.typeAmortization (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TYPEAMORTIZATTN_681198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    $('.k-link.k-pager-nav.k-pager-first').click();
    let viewState: any = changedEventArgs.commons.api.viewState;
    let grid: any = changedEventArgs.commons.api.grid;
    if(tmpGridAmortization == null){
        tmpGridAmortization = entities.AmortizationEntity;
    }

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
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
   
        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        
        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
            viewState.show('G_OPERATIANT_136198');
        }else{
            viewState.hide('G_OPERATIANT_136198');
        }    */
        //viewState.show('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('G_OPERATIUYT_632198'); 
        break;
    case 'AGREGADA':
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
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
            viewState.show('G_OPERATIANT_136198');
        }else{
            viewState.hide('G_OPERATIANT_136198');
        }*/
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
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
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
   
        viewState.hide('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.hide('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.hide('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses

        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total // en CPN no se muestra este campo
            viewState.hide('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
        
        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.enable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        
        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
       // viewState.hide('G_OPERATIANT_136198');
        viewState.show('G_OPERATIUYT_632198');    
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        changedEventArgs.commons.api.grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length-1], 'edit');
        changedEventArgs.commons.api.grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length-1], 'delete');
 
        break;
    }
};