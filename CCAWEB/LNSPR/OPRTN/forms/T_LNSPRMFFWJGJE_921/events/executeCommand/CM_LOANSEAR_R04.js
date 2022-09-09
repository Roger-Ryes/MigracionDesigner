//BtnGuardar (Button) 
task.executeCommand.CM_LOANSEAR_R04 = function (entities, executeCommandEventArgs) {
    var datos = entities.ReadjustmenMList._data;
    
    for(let i = 0; i<datos.length ;i++){
        let dato = datos[i];
        if(!dato.seleccion){
            dato.seleccion = false;  
        }
                   
    }
    executeCommandEventArgs.commons.execServer = true;
};
