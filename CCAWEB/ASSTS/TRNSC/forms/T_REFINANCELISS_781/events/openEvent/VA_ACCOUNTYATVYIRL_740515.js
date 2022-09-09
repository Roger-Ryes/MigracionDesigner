task.textInputButtonEvent.VA_ACCOUNTYATVYIRL_740515 = function( textInputButtonEventArgs ) {
      textInputButtonEventArgs.commons.execServer = false;
      /*if (textInputButtonEventArgs.model.RefinanceLoanFilter.clientName != null && textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType != null){
         var nav = textInputButtonEventArgs.commons.api.navigation;
			nav.address = {
				moduleId: "BUSIN",
				subModuleId: 'FLCRE',
				taskId: 'T_FLCRE_94_BYLET28',
				taskVersion: "1.0.0",
				viewContainerId: 'VC_BYLET28_DTBCT_453'
			};
			nav.queryParameters = { mode: textInputButtonEventArgs.commons.args.mode };			
         nav.label = cobis.translate('BUSIN.LBL_BUSIN_CUENTAARH_14595');
         nav.modalProperties = {
               size: 'lg'
         };
         nav.queryParameters = {
               mode: textInputButtonEventArgs.commons.constants.mode.Insert
         };
         var customerSearch = []
         customerSearch[0] = {Customer: textInputButtonEventArgs.model.RefinanceLoanFilter.clientName, CustomerId:textInputButtonEventArgs.model.RefinanceLoanFilter.clientID};
         nav.customDialogParameters = {
            customerSearch,
            warrantyGeneral:{currency:textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType},
            warrantyType: "AHORRO",
            currencyCode: textInputButtonEventArgs.model.RefinanceLoanFilter.currencyType
         }; 
      }else{
         textInputButtonEventArgs.commons.messageHandler.showMessagesError("ASSTS.LBL_ASSTS_CLIENTEWV_22562",true);
      }*/
    
            
    if (textInputButtonEventArgs.commons.api.vc.model.RefinanceLoanFilter.clientID) {
        //Open Modal
        var nav = textInputButtonEventArgs.commons.api.navigation;

        nav.label = cobis.translate('ASSTS.LBL_ASSTS_CUENTASAT_41675'); //Cuentas 
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_BANKACCOUNTIS_944',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_BANKACCOTT_940944'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            customerID: textInputButtonEventArgs.model.RefinanceLoanFilter.clientID,
            paymentType: textInputButtonEventArgs.model.RefinanceLoanFilter.payMethodCurrency
        };
    } else {
        textInputButtonEventArgs.cancel = true;
        textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DEDESELCA_14854", false, null, timer);
      }
    };