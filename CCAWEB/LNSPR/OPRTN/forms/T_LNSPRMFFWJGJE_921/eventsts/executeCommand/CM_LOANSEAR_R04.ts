//BtnGuardar (Button) 
task_executeCommand_CM_LOANSEAR_R04 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let datos: any = entities.ReadjustmenMList;

    for (let i: any = 0; i<datos.length; i++) {
        let dato: any = datos[i];
        if(!dato.seleccion){
            dato.seleccion = false;  
        }
    }
    executeCommandEventArgs.commons.execServer = true;
};
