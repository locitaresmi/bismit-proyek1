var btn = document.querySelector("#upBtn");
btn.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// GALLERY

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    var imgDesc = document.getElementById("tulisan")
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.title;
    imgDesc.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}
