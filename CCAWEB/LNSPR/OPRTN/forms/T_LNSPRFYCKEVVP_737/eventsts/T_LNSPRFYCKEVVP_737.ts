//"TaskId": "T_LNSPRFYCKEVVP_737"

formatDateJs = (date: any) => {
    let d: any = new Date(date), month: any = '' + (d.getMonth() + 1), day: any = '' + d.getDate(), year: any = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [month, day, year].join('/');
}
