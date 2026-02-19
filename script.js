function goToRemembrance(){
    window.location.href = "memories.html";
}


// Fade in page on load
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

// Start music after first interaction (Chrome policy)
document.addEventListener("click", function startMusic() {
    const music = document.getElementById("remembranceMusic");
    if(music){
        music.volume = 0.2;
        music.play();
    }
    document.removeEventListener("click", startMusic);
});

// Ending fade
function endMemory(){
    document.body.classList.add("fade-out");
    setTimeout(()=>{
        document.body.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Georgia,serif;color:#b76e79;font-size:24px;">
                Always wishing you happiness.
                                  - Lover Boy Amar.
            </div>
            <button class="back-btn" onclick="goBackHome()">
                ⟵ Back to where it all began
            </button>
        `;
    },1500);
}

function goBackHome(){
    document.body.classList.add("fade-out");
    setTimeout(()=>{
        window.location.href = "index.html";
    }, 800);
}
