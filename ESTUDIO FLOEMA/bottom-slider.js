let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollContainer = document.querySelector(".bottom-slider")

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 570;
})
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 570;
})

/*setInterval(()=>{
    scrollContainer.scrollLeft += 570;
},1000)
*/