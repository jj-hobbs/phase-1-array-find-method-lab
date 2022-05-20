// code your solution here
function superbowlWin(record) {
    let winningYear = record.find(record => record.result === "W");
        if (winningYear){
            return winningYear.year;
        } else {
            return undefined;
        }
        
    }
// function superbowlWin(win) {
//     let date = win.find(pizza => pizza.result === "W" )
// }