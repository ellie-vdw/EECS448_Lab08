function colorChange()
{
    let border = document.querySelector("#borderColor").value;
    let background = document.querySelector("#backgroundColor").value;
    let p = document.getElementById("bee");
    console.log(border, background, p);
    p.style.borderColor=border;
    p.style.backgroundColor=background;
}