//"TaskId": "T_LNSPRMFFWJGJE_921"
task.gridRowCommand.VA_CHECKBOXYLXHRAO_645423 = function(  entities, gridRowCommandEventArgs ) {
 
    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('ReadjustmenMList',gridRowCommandEventArgs.rowIndex,{seleccion: (gridRowCommandEventArgs.rowData.seleccion !==true)});
    
    var datos = entities.ReadjustmenMList._data;
    var contDatos = 0;
    
    for(let i = 0;i<datos.length;i++){
       let dato = datos[i];
        
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