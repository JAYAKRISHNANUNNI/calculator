// function to display content
const displayContent = (content)=>{
    result.value += content
}
// clear input
function calclear(){
    result.value=""
}
// result
function calOutput(){
    result.value = eval(result.value)
}
// backspace
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}