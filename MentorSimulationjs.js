let indexImage = 2;
let indexText = 2;
const container = document.querySelector(".container");
container.addEventListener("click",(event)=> {
    const tlContent = gsap.timeline();
    const tlImage = gsap.timeline();

    tlImage
    .to(".image", {
        x : "100%",
        duration : 1,
        onComplete : () => {
            document.querySelector(".image").style.backgroundImage = `url("images/${indexImage}.jpg")`;
        },
    })
    .from(".image",{
        x : "0",
        delay : 0.4,
        onComplete : () => {
            if(indexImage ===7) {
                indexImage = 1;
            } else {
                indexImage += 1;
            }
        },
    });
    tlContent
    .to(".text-content", {
        x : "-100%",
        duration : 1,
        onComplete : () => {
            document.querySelector(".text-content h1").textContent = `Gambar ${indexText}`;
        },
    })
    .from(".text-content",{
        x : "0",
        delay : 0.4,
        onComplete : () => {
            if(indexText ===7) {
                indexText = 1;
            } else {
                indexText += 1;
            }
        },
    });
});