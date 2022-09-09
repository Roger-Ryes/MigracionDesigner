//gridRowInserting QueryView: QV_7324_98967
    task_gridRowInserting_QV_7324_98967 = (entities: Model, args: any) => {
        args.commons.execServer = false;
        let concept: any = args.rowData.concept;

        // VALIDA NO INGRESAR NUEVAMENTE EL MISMO RUBRO
        let itemList: any = entities.CondonationDetail;

        if(itemList.length>0) {
            for (let i: any = 1; i < itemList.length; i++) {
                if(concept===itemList[i].concept) {
                    args.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELRUBROAD_63160',false,null,this.ASSTS.timer);
                    args.cancel = true;
                    return;
                }
            }
        }
    };