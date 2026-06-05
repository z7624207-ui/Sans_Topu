//////////////////////////////
// QUIZ + SMART RANDOM + LOTTO
//////////////////////////////

// ================= FULL QUESTION BANK (25) =================
const questionBank = quizOnly();

function quizOnly() {
    return [
        { q:"Sual 1", o:["A","B","C","D"], c:"A", p:1 },
        { q:"Sual 2", o:["A","B","C","D"], c:"B", p:1 },
        { q:"Sual 3", o:["A","B","C","D"], c:"C", p:1 },
        { q:"Sual 4", o:["A","B","C","D"], c:"D", p:1 },
        { q:"Sual 5", o:["A","B","C","D"], c:"A", p:1 },

        { q:"Sual 6", o:["A","B","C","D"], c:"B", p:2 },
        { q:"Sual 7", o:["A","B","C","D"], c:"C", p:2 },
        { q:"Sual 8", o:["A","B","C","D"], c:"D", p:2 },
        { q:"Sual 9", o:["A","B","C","D"], c:"A", p:2 },
        { q:"Sual 10", o:["A","B","C","D"], c:"B", p:2 },

        { q:"Sual 11", o:["A","B","C","D"], c:"C", p:3 },
        { q:"Sual 12", o:["A","B","C","D"], c:"D", p:3 },
        { q:"Sual 13", o:["A","B","C","D"], c:"A", p:3 },
        { q:"Sual 14", o:["A","B","C","D"], c:"B", p:3 },
        { q:"Sual 15", o:["A","B","C","D"], c:"C", p:3 },

        { q:"Sual 16", o:["A","B","C","D"], c:"D", p:4 },
        { q:"Sual 17", o:["A","B","C","D"], c:"A", p:4 },
        { q:"Sual 18", o:["A","B","C","D"], c:"B", p:4 },
        { q:"Sual 19", o:["A","B","C","D"], c:"C", p:4 },
        { q:"Sual 20", o:["A","B","C","D"], c:"D", p:4 },

        { q:"Sual 21", o:[], c:"A", p:5 },
        { q:"Sual 22", o:[], c:"B", p:5 },
        { q:"Sual 23", o:[], c:"C", p:5 },
        { q:"Sual 24", o:[], c:"D", p:5 },
        { q:"Sual 25", o:[], c:"A", p:5 }
    ];
}

// ================= STATE =================
let gameQuestions = [];
let index = 0;
let total = 0;
let name = "";

let lottoTicket = [];
let lottoRound = 0;

// ================= RANDOM 5 SELECTION (IMPORTANT PART) =================
function getSeed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (h * 31 + str.charCodeAt(i)) % 100000;
    }
    return h;
}

function pick5Questions() {
    const seed = getSeed(name || "guest");

    let arr = [...questionBank];

    // seeded shuffle (stable per user)
    for (let i = 0; i < arr.length; i++) {
        let j = (seed + i * 7) % arr.length;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.slice(0, 5); // 👉 ONLY 5 QUESTIONS
}

// ================= START =================
function startGame() {
    name = document.getElementById("user-fullname").value.trim();
    if (!name) return alert("Ad yaz!");

    gameQuestions = pick5Questions();

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

// ================= LOAD QUESTION =================
function loadQuestion() {
    if (index >= gameQuestions.length) {
        startTicketPhase();
        return;
    }

    const q = gameQuestions[index];

    document.getElementById("question-text").innerText =
        `${index + 1}. ${q.q}`;

    const box = document.getElementById("options-container");
    const txt = document.getElementById("text-answer-container");
    const fb = document.getElementById("answer-feedback");

    fb.innerHTML = "";
    box.innerHTML = "";

    txt.classList.toggle("hidden", q.o.length !== 0);

    if (q.o.length === 0) {
        document.getElementById("submit-text-answer-btn").onclick = () => {
            const val = document.getElementById("user-text-answer").value;

            check(val, q);
        };
    } else {
        q.o.forEach(opt => {
            const b = document.createElement("button");
            b.innerText = opt;
            b.onclick = () => check(opt, q);
            box.appendChild(b);
        });
    }
}

// ================= CHECK =================
function check(ans, q) {
    const fb = document.getElementById("answer-feedback");

    if (ans.toLowerCase() === q.c.toLowerCase()) {
        total += q.p;
        fb.innerHTML = "✔ Düzdür";
    } else {
        fb.innerHTML = `❌ Səhv (Doğru: ${q.c})`;
    }

    setTimeout(() => {
        index++;
        loadQuestion();
    }, 1000);
}

// ================= TICKET =================
function startTicketPhase() {
    document.getElementById("question-text").innerText =
        "🎟 Bilet hazırlanır...";

    lottoTicket = [];

    let interval = setInterval(() => {
        let n = Math.floor(Math.random() * 20) + 1;
        if (!lottoTicket.includes(n)) lottoTicket.push(n);

        document.getElementById("options-container").innerText =
            lottoTicket.join(", ");

        if (lottoTicket.length === 5) {
            clearInterval(interval);
            setTimeout(startLotto, 1500);
        }
    }, 300);
}

// ================= LOTTO =================
function startLotto() {
    lottoRound = 0;
    nextRound();
}

function nextRound() {
    const box = document.getElementById("options-container");
    box.innerHTML = "";

    document.getElementById("question-text").innerText =
        `🎲 LOTTO ${lottoRound + 1}`;

    let draw = [];

    let interval = setInterval(() => {
        let n = Math.floor(Math.random() * 20) + 1;
        if (!draw.includes(n)) draw.push(n);

        box.innerText = draw.join(" - ");
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        let match = lottoTicket.filter(x => draw.includes(x)).length;
        total += match * 3;

        box.innerHTML += `<br>🎯 Uduş: ${match}`;

        lottoRound++;

        setTimeout(() => {
            if (lottoRound >= 25) endGame();
            else nextRound();
        }, 1200);
    }, 2500);
}

// ================= END =================
function endGame() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    document.getElementById("final-budget").innerText = total;
        }
