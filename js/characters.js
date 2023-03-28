let selectVisible = (id) => {  
    let selects = document.getElementsByClassName("select");
    let selected = document.getElementsByClassName(id)[0];
    for(let i = 0; i<4; i++) {
        selects[i].style.visibility = "hidden";
    }

    selected.style.visibility = "visible";
}