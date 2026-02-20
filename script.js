function goToRemembrance(){
    window.location.href = "memories.html";
}

function goToPoems(){
    window.location.href = "poems.html";
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
           <div class="final-section">

                <div class="final-message">
                    Always wishing you happiness.<br>
                    <span class="signature">– Lover Boy Amar</span>
                </div>

                <p class="soft-confession">
                    The quiet truth is…
                    you were never just a chapter to me.
                    You were a feeling I didn’t know how to let go of.
                    <br><br>
                    And even now,
                    loving you is something my heart does quietly.
                    I still miss you more than I say.
                    <br><br>
                    When I miss you,
                    I write here sometimes.
                    Not because I’m stuck —
                    just because you matter💕.
                </p>

                <button class="back-btn" onclick="goBackHome()">
                    ⟵ Back to where it all began
                </button>

            </div>
        `;
    },1500);
}

function goBackHome(){
    document.body.classList.add("fade-out");
    setTimeout(()=>{
        window.location.href = "index.html";
    }, 800);
}


function flipPage(page) {
    page.style.transform = "rotateY(-180deg)";
}