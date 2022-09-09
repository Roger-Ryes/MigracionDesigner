//"TaskId": "T_LNSPRNRRVDNTA_721"
function getParams() {
    var url = "",
        urlParams = {};
    if (cobis.container.tabs.getCurrentTab()) {
        url = cobis.container.tabs.getCurrentTab().url;
    } else {
        url = location.href;
    }



    if (url.split('?').length > 1) {
        url.split('?')[1].split('&').forEach(function (paramString) {
            urlParams[paramString.split('=')[0]] = paramString.split('=')[1];
        })
    }
    return urlParams;
}
