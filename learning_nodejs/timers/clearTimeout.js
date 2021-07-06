const timeOut = 3000    //ms
const finished = () => console.log("Finished!")

let timer = setTimeout(finished, timeOut);

clearTimeout(timer)
