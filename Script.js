const heartBtn = document.getElementById("navbar-heart");
    const coinBtn = document.getElementById("navbar-coin");
    const navbarCopyBtn = document.getElementById("navbar-copy");
    const clearHistoryBtn = document.getElementById("clear-history");
    const historyList = document.getElementById("history-list");

    let heartCount = 0;
    let coins = 100;
    let copyCount = 2;

    // Heart click
    document.querySelectorAll(".fa-heart").forEach((heart) => {
      heart.addEventListener("click", () => {
        heartCount++;
        heartBtn.innerHTML = `${heartCount} <img src="/assets/heart.png" class="w-4 h-4">`;
      });
    });

    // Copy button
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".bg-white");
        const number = card.querySelector("p.text-2xl").innerText;

        const textarea = document.createElement("textarea");
        textarea.value = number;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        try {
          const success = document.execCommand("copy");
          if(success){
            alert(`Copied: ${number}`);
            copyCount++;
            navbarCopyBtn.innerText = `${copyCount} Copy`;
          } else {
            alert("Copy failed!");
          }
        } catch {
          alert("Copy failed!");
        }
        document.body.removeChild(textarea);
      });
    });

    // Call button
    document.querySelectorAll(".call-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".bg-white");
        const serviceName = card.querySelector("h2").innerText;
        const number = card.querySelector("p.text-2xl").innerText;

        if(coins < 20){
          alert("Not enough coins to make this call!");
          return;
        }

        coins -= 20;
        coinBtn.innerHTML = `<img src="/assets/coin.png" class="w-4 h-4"> ${coins}`;
        alert(`Calling ${serviceName} at ${number}`);

        const li = document.createElement("li");
        li.className = "flex justify-between";
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        li.innerHTML = `<span>${serviceName} - ${number}</span><span class="text-gray-400">${time}</span>`;
        historyList.prepend(li);
      });
    });

    // Clear history
    clearHistoryBtn.addEventListener("click", () => {
      historyList.innerHTML = "";
    });

