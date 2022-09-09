//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: TwoRangesForm
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;

    var title1 = dataRow.title1 + " Min";
    var title2 = dataRow.title1 + " Max";
    var title3 = dataRow.title2 + " Min";
    var title4 = dataRow.title2 + " Max";
    var title5 = dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue1", title1, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue1", title2, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue2", title3, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue2", title4, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "variable", title5, false);



    switch (dataRow.dataType1) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '#,######0.000000', 6);
            break;
        default:
            // code block
    }

    switch (dataRow.dataType2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '#,######0.000000', 6);
            break;
        default:
            // code block
    }



    switch (dataRow.dataTypeR2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,######0.000000', 6);
            break;
        case 'M':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,##0.00', 2);
            break;
        default:
            // code block
    }
};
