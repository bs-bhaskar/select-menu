var selectText=document.getElementById("selectText");
var selectField=document.getElementById("selectField");
var options=document.getElementsByClassName("options");
var list=document.getElementById("list");
var arrowIcon=document.getElementById("arrow-icon");

selectField.onclick=function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

for (let option of options) {
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}