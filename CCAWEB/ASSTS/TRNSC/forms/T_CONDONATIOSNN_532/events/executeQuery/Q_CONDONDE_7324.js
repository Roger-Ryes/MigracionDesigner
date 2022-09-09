//CondonationDetailQuery Entity: 
task.executeQuery.Q_CONDONDE_7324 = function (executeQueryEventArgs) {
    if (executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().condonationDetail2 && executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().condonationDetail2._data.length > 0) {
        executeQueryEventArgs.commons.execServer = false;
    } else {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().bankNum;
    executeQueryEventArgs.commons.execServer = true;
    }


    //executeQueryEventArgs.commons.serverParameters. = true;
};
