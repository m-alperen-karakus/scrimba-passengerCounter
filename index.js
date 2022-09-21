let count=0
let entries=[]

function increment(){
    count+=1
    document.getElementById("count-el").textContent=count
}

function save(){
    entries.push(count)
    let entriesText= "Previous entries: " + entries.toString()
    document.getElementById("save-el").textContent=entriesText

}
