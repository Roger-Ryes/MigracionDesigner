
//Start signature to Callback event to Q_PAYMANAM_TY74
task.executeQueryCallback.Q_PAYMANAM_TY74 = function(entities, executeQueryCallbackEventArgs) {
    var nav = executeQueryCallbackEventArgs.commons.api.navigation;
    var grid = executeQueryCallbackEventArgs.commons.api.grid;
    if(nav.getCustomDialogParameters()){
        if(nav.getCustomDialogParameters().paymentCategory=='NDAH'){
            grid.hideColumn('QV_WX74_OJZ40','account');
            grid.showColumn('QV_WX74_OJZ40','institutionName');
        }else if(nav.getCustomDialogParameters().paymentCategory=='PLANO'){
            grid.showColumn('QV_WX74_OJZ40','account');
            grid.hideColumn('QV_WX74_OJZ40','institutionName');
        }else{
            grid.hideColumn('QV_WX74_OJZ40','account');
            grid.hideColumn('QV_WX74_OJZ40','institutionName');
        }
    }else{
        grid.hideColumn('QV_WX74_OJZ40','account'); //Cuenta
        grid.hideColumn('QV_WX74_OJZ40','institutionName'); //Institucion
    }  
};
