
//gridCommand (Button) QueryView: QV_NO93_ONZ78
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task.gridCommand.CEQV_201QV_NO93_ONZ78_630 = function (entities, gridExecuteCommandEventArgs) {
    
    var api = gridExecuteCommandEventArgs.commons.api
    if(filterError){
        api.grid.filter('QV_NO93_ONZ78', {field: "errorId", operator: "gte", value: 0});
    }else{
        api.grid.filter('QV_NO93_ONZ78', {field: "errorId", operator: "gte", value: 1});
    }
    filterError = !filterError;
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.CompaniesDiscountsFileList = true;
};