export function extractVideoID(url){
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    if ( match && match[7].length == 11 ){
        return "http://img.youtube.com/vi/"+ match[7] +"/hqdefault.jpg";
    } else {
        console.log("Invalid URL.");
    }
}