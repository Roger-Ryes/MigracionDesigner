//Start signature to callBack event to CM_TPAYMENT_NS7
    task_executeCommandCallback_CM_TPAYMENT_NS7 = (
      entities: Model,
      executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
    if (executeCommandEventArgs.success) {
      let api: any = executeCommandEventArgs.commons.api;
      entities.PaymentForm.currencyName = api.vc.catalogs.VA_4212YIFTVBCOPPD_140216.get(entities.PaymentForm.currencyId);

      let dataGrid: any = {
         index: api.navigation.getCustomDialogParameters().rowIndex,
         mode: api.vc.mode,
         data:  entities.PaymentForm
      };

      api.navigation.closeModal(dataGrid);
    }

    };