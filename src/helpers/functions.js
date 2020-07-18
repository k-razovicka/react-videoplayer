export const convertSecondsToMinutes = (videoTime) => {
    return new Date(videoTime * 1000).toISOString().substr(11, 8)
}

export function getCurrentDate() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    return `${year}/${month < 10 ? `0${month}` : `${month}`}/${date} ${hours}:${minutes < 10 ? `0${minutes}` : `${minutes}`}` 
}