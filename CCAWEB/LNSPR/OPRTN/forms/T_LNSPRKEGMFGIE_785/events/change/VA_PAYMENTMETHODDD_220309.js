//Entity: GeneralParametersQuery
//GeneralParametersQuery.paymentMethod (DropDownList) View: OperationLoansGeneralParametersForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PAYMENTMETHODDD_220309 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = true;
    var viewState = changedEventArgs.commons.api.viewState;

    //if (entities.GeneralParametersQuery && viewState.getDataItem("VA_PAYMENTMETHODDD_220309")){
        var category = null;
        if(
        viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria
        ){
        category = viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
        entities.GeneralParametersQuery.paymentCategory = category
        }else{
            category = entities.GeneralParametersQuery.paymentCategory
        }

        if(category == 'NDAH' || category == 'PLANO'){
            viewState.show('VA_VABUTTONOHXRHAO_106309');
        }else{
            viewState.hide('VA_VABUTTONOHXRHAO_106309');
        }

    /*  } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');//button establecer
        entities.GeneralParametersQuery.account = null;
      }*/
};