let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count=0
function increment(){
count=count+1
countEl.textContent=count
}

function save(){
let savedCount=+count+ " - "
saveEl.textContent=saveEl.textContent+savedCount
count=0
countEl.textContent=count
}