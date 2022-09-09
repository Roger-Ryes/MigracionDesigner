//gridRowInserting QueryView: QV_7324_98967
    task.gridRowInserting.QV_7324_98967 = function (entities,args) {
        args.commons.execServer = false;
        var concept = args.rowData.concept;
        // VALIDA NO INGRESAR NUEVAMENTE EL MISMO RUBRO
        var itemList = entities.CondonationDetail.data();
        if(itemList.length>0) {
            for (var i = 1; i < itemList.length; i++) {
                if(concept===itemList[i].concept) {
                    args.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELRUBROAD_63160',false,null,timer);
                    args.cancel = true;
                    return;
                }
            }
        }
    };