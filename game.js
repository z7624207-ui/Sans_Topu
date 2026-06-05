///////////////////////////////
// 1–99 LIVE LOTTERY GAME
// + TICKET SYSTEM + PROFILE
///////////////////////////////

let user = "";
let tickets = [];
let activeTicketIndex = 0;

let drawnNumbers = [];
let interval = null;
let timer = null;

let timeLeft = 180; // 3 minutes

// ================= LOGIN =================
function startGame() {
    user = document.getElementById("user-fullname").value.trim();
    if (!user) return alert("Ad yaz!");

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("ticket-screen").classList.remove("hidden");

    renderTicketSystem();
}

// ================= CREATE TICKETS =================
function renderTicketSystem() {
    const box = document.getElementById("ticket-box");
    box.innerHTML = "";

    tickets = [];

    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.innerText = `🎟 Bilet ${i + 1}`;

        btn.onclick = () => createTicket(i);

        box.appendChild(btn);
    }

    const startBtn = document.createElement("button");
    startBtn.innerText = "▶ Oyuna Başla";

    startBtn.onclick = () => {
        if (tickets.length < 4) return alert("4 bilet yarat!");

        document.getElementById("ticket-screen").classList.add("hidden");
        document.getElementById("game-screen").classList.remove("hidden");

        startLiveGame();
    };

    box.appendChild(startBtn);
}

// ================= TICKET CREATE =================
function createTicket(index) {
    let ticket = [];

    while (ticket.length < 5) {
        let n = Math.floor(Math.random() * 99) + 1;
        if (!ticket.includes(n)) ticket.push(n);
    }

    tickets[index] = ticket;

    alert(`Bilet ${index + 1} yaradıldı: ${ticket.join(", ")}`);
}

// ================= LIVE GAME =================
function startLiveGame() {
    drawnNumbers = [];
    timeLeft = 180;

    startTimer();
    startDrawing();
}

// ================= TIMER =================
function startTimer() {
    const timerBox = document.getElementById("timer");

    timer = setInterval(() => {
        timeLeft--;

        timerBox.innerText = `⏱ ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// ================= NUMBER DRAW =================
function startDrawing() {
    const box = document.getElementById("draw-box");

    interval = setInterval(() => {
        if (drawnNumbers.length >= 99) {
            endGame();
            return;
        }

        let n = Math.floor(Math.random() * 99) + 1;

        if (drawnNumbers.includes(n)) return;

        drawnNumbers.push(n);

        box.innerHTML = drawnNumbers.map(num => {
            return `<span class="num">${num}</span>`;
        }).join(" ");

        checkTickets(n);
    }, 1200);
}

// ================= CHECK MATCH =================
function checkTickets(num) {
    const ticketBox = document.getElementById("ticket-view");

    ticketBox.innerHTML = "";

    tickets.forEach((t, i) => {
        let row = document.createElement("div");

        let html = `🎟 Bilet ${i + 1}: `;

        t.forEach(n => {
            if (n === num) {
                html += `<span class="hit">${n}✔</span> `;
            } else {
                html += `${n} `;
            }
        });

        row.innerHTML = html;
        ticketBox.appendChild(row);
    });
}

// ================= END GAME =================
function endGame() {
    clearInterval(interval);
    clearInterval(timer);

    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    let score = calculateScore();

    document.getElementById("final-name").innerText = user;
    document.getElementById("final-score").innerText = score;
}

// ================= SCORE =================
function calculateScore() {
    let score = 0;

    tickets.forEach(t => {
        t.forEach(n => {
            if (drawnNumbers.includes(n)) score += 1;
        });
    });

    return score;
        }
