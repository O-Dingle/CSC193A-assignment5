
function ShowAlert(){
    alert("Hello!");
}



function makeBigger(){
    var text_el = document.getElementById("textInput");
    text_el.style.fontSize = "2em";
}

function modifying(){
    var text_el = document.getElementById("textInput");
    var fancier_el = document.getElementById("fancier");
    var boring_el = document.getElementById("borier");

    if(fancier_el.checked){
        boring_el.checked = false;
        text_el.style.fontWeight = "bold";
        text_el.style.textDecoration = "underline";
        text_el.style.color = "blue";
        fancier_el.checked = false;
    }
    else if(boring_el.checked){
        fancier_el.checked = false;
        text_el.style.fontWeight = "normal";
        text_el.style.textDecoration = "none";
        text_el.style.color = "black";
        
    }
    
}
function Moo(){
    var text_el = document.getElementById("textInput");
    var text = text_el.value;
    
    var sentences = text.split(".");
    text_el.value = sentences.join("-Moo");
}