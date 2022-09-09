//"TaskId": "T_LNSPRMFFWJGJE_921"
task_gridRowCommand_VA_CHECKBOXYLXHRAO_645423 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {
    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('ReadjustmenMList',gridRowCommandEventArgs.rowIndex,{seleccion: (gridRowCommandEventArgs.rowData.seleccion !==true)});

    let datos: any = entities.ReadjustmenMList;
    let contDatos: any = 0;

    for (let i: any = 0; i<datos.length; i++) {
        let dato: any = datos[i];

        if(dato.seleccion){
            contDatos++;
        }
    }

    if(contDatos>0){
        gridRowCommandEventArgs.commons.api.viewState.enable('CM_LOANSEAR_R04');
    }else{
        gridRowCommandEventArgs.commons.api.viewState.disable('CM_LOANSEAR_R04');
    }
};