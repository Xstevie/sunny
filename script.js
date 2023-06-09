function toggleContent(){
    var content = document.querySelector("ul.list");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else{
        content.style.display = "none";
    }
}