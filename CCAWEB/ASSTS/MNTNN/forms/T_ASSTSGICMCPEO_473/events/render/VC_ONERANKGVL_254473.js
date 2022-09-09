//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OneRankForm
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    var title1 = dataRow.title1 + " Min";
    var title2 = dataRow.title1 + " Max";
    var title3 = dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "minValue", title1, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "maxValue", title2, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "value", title3, false);


    switch (dataRow.dataType1) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '#,######0.000000', 6);
            break;
        default:
            // code block
    }


    switch (dataRow.dataTypeR2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '#,######0.000000', 6);
            break;
        default:
            // code block
    }

};
