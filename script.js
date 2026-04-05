    /* 🔧 CONFIG */
    const THEME_KEY = "theme";

    /* LOAD THEME */
    if(localStorage.getItem(THEME_KEY) === "dark"){
        document.body.classList.add("dark");
        document.getElementById("theme-btn").innerText = "☀️";
    }

    /* THEME TOGGLE */
    function toggleTheme(){
        const isDark = document.body.classList.toggle("dark");
        document.getElementById("theme-btn").innerText = isDark ? "☀️" : "🌙";
        localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    }


    /* 🏠 EXIT */
    function exitToHome() {
            document.body.innerHTML = `<!DOCTYPE html>
                <html lang="en">
                <head>
                <!--meta http-equiv="refresh" content="3; url=https:rohit-123-maker.github.io/Google-clone/"-->
                </head>
                <body>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; color: white; font-family: 'Cursive ', cursive,'Segoe UI', sans-serif; text-align: center;">
                    <h1 style="font-size: 3rem;">Goodbye!</h1>
                    <p style="font-size: 1.2rem;">Redirecting to New Site...</p>
                    <button onclick="location.reload()" style="padding: 15px 30px; border-radius: 30px; border: none; cursor: pointer; background: white; color: #ff4b6e; font-weight: bold; margin-top: 20px;">Go Back to Old Site</button>
                </div>
                </body>
                </html>
            `;
        }
   
    /* 💖 EMOJIS FLOAT */
    const emojis = ["💖","✨","🌸","🦋","💕"];
    setInterval(()=>{
        let e = document.createElement("div");
        e.className = "heart";
        e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        e.style.left = Math.random()*100 + "vw";
        e.style.fontSize = (15 + Math.random()*25) + "px";
        e.style.animationDuration = (5 + Math.random()*5) + "s";
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 10000);
    }, 600);

    /* ✨ SPARKLES */
    setInterval(()=>{
        let s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = Math.random()*100 + "vw";
        s.style.top = Math.random()*100 + "vh";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }, 400);

    /* MOUSE TRAIL */
    document.addEventListener("mousemove", e => {
        let t = document.createElement("div");
        t.className = "sparkle";
        t.style.left = e.clientX + "px";
        t.style.top = e.clientY + "px";
        t.style.background = "var(--primary)";
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 800);
    });

    /* SUCCESS BURST */
    function burst(){
        for(let i=0; i<30; i++){
            let b = document.createElement("div");
            b.className = "heart";
            b.innerText = "✨";
            b.style.left = "50vw";
            b.style.bottom = "50vh";
            b.style.fontSize = "24px";
            // Random scatter
            const x = (Math.random() - 0.5) * 400;
            const y = (Math.random() - 0.5) * 400;
            b.style.transform = `translate(${x}px, ${y}px)`;
            b.style.animation = "sparkleAnim 1s ease-out forwards";
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 1000);
        }
    }

