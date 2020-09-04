
//날짜 포맷
export const FormatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if(mm.toString().length < 2) {
        mm = `0${mm}`;
    }

    if(dd.toString().length < 2) {
        dd = `0${dd}`;
    }

    return `${yyyy}-${mm}-${dd}`;
}