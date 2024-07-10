const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function shownotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
shownotes();

function create() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "effacer.png";
    img.className = "delete";
    notesContainer.appendChild(inputBox).appendChild(img);
}
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup=function(){
                    updateStorage();
                }
            });
        }
    }
)