function mulaiSerangan() {
    const statusText = document.getElementById('mission-status');
    const btn = document.getElementById('attackBtn');
    const scroll = document.getElementById('secret-scroll');

    statusText.innerText = "⚔️ SEDANG MENJEBOL TEMBOK API...";
    statusText.style.color = "yellow";
    
    btn.innerHTML = "💥 MERIAM ORBAN DITEMBAKKAN! 💥";
    btn.style.backgroundColor = "#5c1e1e";
    btn.style.color = "#f4e4bc";
    btn.disabled = true; 

    setTimeout(() => {
        statusText.innerText = "✅ BENTENG DITAKLUKKAN (200 OK)!";
        statusText.style.color = "#00ff00"; 

        scroll.classList.remove('hidden');

        btn.innerHTML = "🚩 KEMENANGAN TOTAL 🚩";
        btn.style.background = "linear-gradient(to bottom, #27ae60, #219653)";

        alert("ALLAHU AKBAR! Deployment Berhasil, Sultanku! 🏰🔥");

    }, 2500);
}