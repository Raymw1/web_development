const timeOut = 1000    //ms
const checking = () => console.log("Checking!")

let timer = setInterval(checking, timeOut);

setTimeout(() => {
    clearInterval(timer)
    console.log("Checked!")
}, 3000)
