let myImage = document.querySelector("img");

myImage.onclick = function(){
    let MySrc = myImage.getAttribute("src");
    if(MySrc === "images/firefox-icon.png"){
        myImage.setAttribute ("src","images/firefox2.png");
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}