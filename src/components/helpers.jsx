export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    } , 1000)
}
const checkWin = function(correct,wrong,word) {
    let status='win';
    console.log(wrong.length);
    //check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)) {
            status='';
        }
    })

    //check for loss
    if (wrong.length >= 6) {
        status='lose';
    } 

    return status;
}
export default checkWin;