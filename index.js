let count=0
let entries=[0,5]

function increment(){
    count+=1
    document.getElementById("count-el") = count
}

function save(){
    entries.push(count)
    document.getElementById("save-el") = count

}