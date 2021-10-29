function myMainFunction () {
console.log("Welcome to log 1, the program has started successfully!");

window.onload = () => {
    console.log("log 2: server side and other delayed funcs will run here")
}

applyBasicStylesAndActions();

}

myMainFunction();

function applyBasicStylesAndActions() {
    applyFilterClickActions();
}


function applyFilterClickActions(){
    document.getElementById("filtermom").addEventListener("click",(e)=>{
        const myImage =  document.getElementById("filtermom").querySelectorAll("img")[0];
        const myText = document.getElementById("filtermom").querySelectorAll("span")[0];
        const filtermom = document.querySelectorAll(".myfilters")[0];
        const itemsmom = document.querySelectorAll(".myitems")[0];
        const oldSrc = "https://ismizo.com/resources/icons/filter_icon_off.svg";
        const newSrc = "https://ismizo.com/resources/icons/filter_icon.svg";
        if(myImage.src===oldSrc){
            myImage.src = newSrc;
            myText.innerHTML = "Hide Filters";
            filtermom.style.display = "flex";
            filtermom.style.flexFlow = "column";
            filtermom.style.justifyContent = "flex-start";
            filtermom.style.alignItems = "flex-end";
            itemsmom.style.paddingLeft = "12px";
            itemsmom.style.width = "76%";
        }else{
            myImage.src = oldSrc;
            myText.innerHTML = "Show Filters";
            filtermom.style.display = "none";
            itemsmom.style.width = "100%";
            itemsmom.style.paddingLeft = "2.5%";
        }
    })
}