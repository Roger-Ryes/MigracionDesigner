//"TaskId": "T_ASSTSGGBHCCXI_580"
function enableMyCommand(entities,viewState){
    if(entities.CompaniesBatch.statusId==0){//Sin Generar
        viewState.enable('CM_TASSTSGG_SSC')
        viewState.disable('CM_TASSTSGG_TSR')
        viewState.disable('CM_TASSTSGG_SS5')
        viewState.disable('CM_TASSTSGG_ATT')
        viewState.show('G_COMPANISOU_899960')
        viewState.hide('G_COMPANIOIE_551960')
        viewState.enable('VA_VABUTTONNDPYCNC_590960')
        viewState.disable('VA_FILENAMEZIQSOOZ_192960')
        viewState.disable('VA_EXECUTEONLINEEE_346960')
        viewState.hide('G_COMPANISII_134960')
    }else if(entities.CompaniesBatch.statusId==1){//Grabado o Generado
        viewState.disable('CM_TASSTSGG_SSC')
        viewState.enable('CM_TASSTSGG_TSR')
        viewState.disable('CM_TASSTSGG_SS5')
        viewState.enable('CM_TASSTSGG_ATT')
        viewState.show('G_COMPANISOU_899960')
        viewState.show('G_COMPANIOIE_551960')
        viewState.enable('VA_FILENAMEZIQSOOZ_192960')
        viewState.disable('VA_VABUTTONNDPYCNC_590960')
        viewState.disable('VA_EXECUTEONLINEEE_346960')
        viewState.show('G_COMPANISII_134960')
    }else if(entities.CompaniesBatch.statusId==2){//Aprobado
        viewState.disable('CM_TASSTSGG_SSC')
        viewState.disable('CM_TASSTSGG_TSR')
        viewState.enable('CM_TASSTSGG_SS5')
        viewState.enable('CM_TASSTSGG_ATT')
        viewState.show('G_COMPANISOU_899960')
        viewState.show('G_COMPANIOIE_551960')
        viewState.disable('VA_FILENAMEZIQSOOZ_192960')
        viewState.disable('VA_VABUTTONNDPYCNC_590960')
        viewState.enable('VA_EXECUTEONLINEEE_346960')
        viewState.show('G_COMPANISII_134960')
    }else if(entities.CompaniesBatch.statusId==3){//Procesado
        viewState.disable('CM_TASSTSGG_SSC')
        viewState.disable('CM_TASSTSGG_TSR')
        viewState.disable('CM_TASSTSGG_SS5')
        viewState.disable('CM_TASSTSGG_ATT')
        viewState.show('G_COMPANISOU_899960')
        viewState.show('G_COMPANIOIE_551960')
        viewState.disable('VA_FILENAMEZIQSOOZ_192960')
        viewState.disable('VA_VABUTTONNDPYCNC_590960')
        viewState.disable('VA_EXECUTEONLINEEE_346960')
        viewState.show('G_COMPANISII_134960')
    }else{
        viewState.enable('CM_TASSTSGG_SSC') //Command Grabar 
        viewState.disable('CM_TASSTSGG_TSR') //Command Aprobar
        viewState.disable('CM_TASSTSGG_SS5') //Command Procesar
        viewState.disable('CM_TASSTSGG_ATT') //Command Eliminar
        viewState.show('G_COMPANISOU_899960') //Pestaña Generar Archivo
        viewState.hide('G_COMPANIOIE_551960') //Pestaña Subir Archivo
        viewState.disable('VA_FILENAMEZIQSOOZ_192960') // Cargar Archivo
        viewState.enable('VA_VABUTTONNDPYCNC_590960')//Button Generar
        viewState.disable('VA_EXECUTEONLINEEE_346960') // Procesar En Linea
        viewState.hide('G_COMPANISII_134960') //Grid File List
    }
}

function clearForm(entities,opt){
    if(opt==1){ //Comando Limpiar
        entities.CompaniesBatch.company = null
        entities.CompaniesBatch.companyName = null
        entities.CompaniesBatch.sequential = null
        entities.CompaniesBatch.statusId = null
        entities.CompaniesBatch.statusName = null
        entities.CompaniesBatch.dateCreate = null
        entities.CompaniesBatch.dateMove = null
        entities.CompaniesBatch.fileError = null
        entities.CompaniesBatch.description = null
        entities.CompaniesBatch.executeOnline = null
        entities.CompaniesBatch.path = null
    }else if(opt==2){ //Comando Eliminar -- Change Company 
        entities.CompaniesBatch.sequential = null
        entities.CompaniesBatch.statusId = null
        entities.CompaniesBatch.statusName = null
        entities.CompaniesBatch.dateCreate = null
        entities.CompaniesBatch.dateMove = null
        entities.CompaniesBatch.fileError = null
        entities.CompaniesBatch.description = null
        entities.CompaniesBatch.executeOnline = null
        entities.CompaniesBatch.path = null
    }else if(opt==3){ //Change Lote
        entities.CompaniesBatch.fileError = null
    }else{
        entities.CompaniesBatch.company = null
        entities.CompaniesBatch.companyName = null
        entities.CompaniesBatch.sequential = null
        entities.CompaniesBatch.statusId = null
        entities.CompaniesBatch.statusName = null
        entities.CompaniesBatch.dateCreate = null
        entities.CompaniesBatch.dateMove = null
        entities.CompaniesBatch.fileError = null
        entities.CompaniesBatch.description = null
        entities.CompaniesBatch.executeOnline = null
        entities.CompaniesBatch.path = null
    }
}