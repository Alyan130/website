const black=document.querySelector("#black");
const purple=document.getElementById("purple");
const body=document.querySelector("body")

black.addEventListener("click",e=>{
body.style.backgroundColor="black";
purple.style.display="none";
black.style.width="50px";
black.style.borderRaduis="25px";
});

purple.addEventListener("click",()=>{
    body.style.backgroundColor="#010231";
    purple.style.display="none";
})