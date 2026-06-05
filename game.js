// ===============================
// QUIZ + LOTTO HYBRID GAME
// ===============================

// ===== QUIZ SUALLARI (İLK 25) =====
const quizQuestions = quizOnly();

function quizOnly() {
    return [
        { q: "Bakıda bir taksi sürücüsü deyir: \"Mənim qardaşımın atası mənim atam deyil\". Bu necə olar?", o: ["Yalandır", "Ögey qardaşdır", "Özü haqqında danışır", "Qardaşı oğlu var"], c: "Özü haqqında danışır", p: 1 },
        { q: "Hansı ayda 28 gün var?", o: ["Yalnız fevral", "Hamısında", "Heç birində", "4 ildən bir"], c: "Hamısında", p: 1 },
        { q: "3 pişik 3 siçanı 3 dəqiqəyə tutur. 100 pişik 100 siçanı neçə dəqiqəyə tutar?", o: ["100 dəq", "3 dəq", "1 dəq", "300 dəq"], c: "3 dəq", p: 1 },
        { q: "Stolda 6 alma var idi. 2-sindən başqa hamısını götürdün. Neçə alma qaldı?", o: ["4", "2", "6", "0"], c: "2", p: 1 },
        { q: "Əlində kibrit var. Qaranlıq otağa girdin. İçəridə şam, lampa, soba var. İlk nəyi yandırarsan?", o: ["Kibriti", "Şamı", "Lampanı", "Sobanı"], c: "Kibriti", p: 1 },

        { q: "Saat 03:15-də əqrəblər arasındakı bucaq neçə dərəcədir?", o: ["0°", "7.5°", "15°", "3.75°"], c: "7.5°", p: 2 },
        { q: "8, 11, 15, 20, 26, ?", o: ["31", "32", "33", "34"], c: "33", p: 2 },
        { q: "1-dən 100-ə qədər neçə 9 var?", o: ["10", "11", "19", "20"], c: "20", p: 2 },
        { q: "3 həb hər 30 dəq içilir. Neçə dəqiqəyə bitər?", o: ["90", "60", "30", "120"], c: "60", p: 2 },
        { q: "100 manatlıq sual (klassik səhv)", o: ["Səhv yoxdur", "120 vermisən", "80 qaytarılmalı", "Kassa səhv"], c: "120 vermisən", p: 2 },

        { q: "2 işçi 3 günə ev tikir. 1 işçi neçə günə?", o: ["3", "9", "6", "1"], c: "9", p: 3 },
        { q: "Fibonacci növbəti ədəd?", o: ["34", "28", "30", "42"], c: "34", p: 3 },
        { q: "1 kq pambıq yoxsa 1 kq dəmir?", o: ["Dəmir", "Pambıq", "Eyni", "Asılıdır"], c: "Eyni", p: 3 },
        { q: "A+B məntiqi", o: ["15", "18", "16", "20"], c: "18", p: 3 },
        { q: "Qarpız su problemi", o: ["50kq", "99kq", "98kq", "2kq"], c: "50kq", p: 3 },

        { q: "Monty Hall", o: ["33%", "50%", "66%", "100%"], c: "66%", p: 4 },
        { q: "Yumurta problemi", o: ["50", "14", "10", "25"], c: "14", p: 4 },
        { q: "Tərəzi problemi", o: ["2", "3", "4", "5"], c: "3", p: 4 },
        { q: "Saat paradoksu", o: ["Xarab saat", "Divar saatı", "Qol saatı", "Rəqəmsal"], c: "Xarab saat", p: 4 },
        { q: "Bərbər paradoksu", o: ["Paradoksdur"], c: "Paradoksdur", p: 4 },

        { q: "TUR kodu", o: [], c: "61", p: 5 },
        { q: "Bərbər paradoksu 2", o: [], c: "Paradoksdur", p: 5 },
        { q: "Sonsuz ədəd sualı", o: [], c: "Eynidir", p: 5 },
        { q: "Otel pulu sualı", o: [], c: "otel haqqıdır", p: 5 },
        { q: "Məntiq final", o: [], c: "500", p: 5 }
    ];
}

// ===== LOTTO SETUP =====
const LOTTO_MIN = 1;
const LOTTO_MAX = 20;
const LOTTO_PICK = 5;

// ===== GAME STATE =====
let gameMode = "quiz"; // quiz | lotto
let randomizedQuestions = [];
let lottoRound = 0;

let currentQuestionIndex = 0;
let userName = "";
let totalBudget = 0;

// ===== SHUFFLE =====
function shuffleArray(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// ===== START GAME =====
function startGame() {
    const nameInput = document.getElementById("user-fullname").value.trim();
    if (!nameInput) return alert("Ad daxil et!");

    userName = nameInput;
    document.getElementById("form-fullname").value = userName;

    randomizedQuestions = shuffleArray([...quizQuestions]);

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

// ===== LOAD QUESTION / LOTTO SWITCH =====
function loadQuestion() {
    const optionsContainer = document.getElementById("options-container");
    const textAnswerContainer = document.getElementById("text-answer-container");
    const feedbackDiv = document.getElementById("answer-feedback");

    feedbackDiv.innerText = "";
    feedbackDiv.className = "feedback";

    // ===== QUIZ MODE =====
    if (gameMode === "quiz") {
        if (currentQuestionIndex >= randomizedQuestions.length) {
            gameMode = "lotto";
            lottoRound = 0;
        } else {
            const q = randomizedQuestions[currentQuestionIndex];

            document.getElementById("question-text").innerText =
                `${currentQuestionIndex + 1}. ${q.q}`;

            document.getElementById("live-budget").innerText = totalBudget;

            optionsContainer.innerHTML = "";
            textAnswerContainer.classList.toggle("hidden", q.o.length !== 0);

            if (q.o.length === 0) {
                const btn = document.getElementById("submit-text-answer-btn");

                btn.onclick = () => {
                    const input = document.getElementById("user-text-answer");
                    const ans = input.value.trim().toLowerCase();

                    if (!ans) return alert("Cavab yaz!");

                    if (ans === q.c.toLowerCase()) {
                        totalBudget += q.p;
                        feedbackDiv.innerText = "Düzdür!";
                    } else {
                        feedbackDiv.innerText = `Səhv! (${q.c})`;
                    }

                    setTimeout(() => {
                        currentQuestionIndex++;
                        loadQuestion();
                    }, 1200);
                };
            } else {
                optionsContainer.classList.remove("hidden");

                shuffleArray([...q.o]).forEach(opt => {
                    const b = document.createElement("button");
                    b.innerText = opt;

                    b.onclick = () => {
                        if (opt === q.c) {
                            totalBudget += q.p;
                            feedbackDiv.innerText = "Düzdür!";
                        } else {
                            feedbackDiv.innerText = "Səhv!";
                        }

                        setTimeout(() => {
                            currentQuestionIndex++;
                            loadQuestion();
                        }, 1000);
                    };

                    optionsContainer.appendChild(b);
                });
            }
        }
    }

    // ===== LOTTO MODE =====
    else {
        runLotto();
    }
}

// ===== LOTTO GAME =====
function runLotto() {
    const optionsContainer = document.getElementById("options-container");
    const textAnswerContainer = document.getElementById("text-answer-container");

    optionsContainer.innerHTML = "";
    textAnswerContainer.classList.add("hidden");

    document.getElementById("question-text").innerText =
        `LOTTO ROUND ${lottoRound + 1}`;

    let selected = [];

    const info = document.createElement("div");
    info.innerText = "1-20 arası 5 rəqəm seç";
    optionsContainer.appendChild(info);

    for (let i = LOTTO_MIN; i <= LOTTO_MAX; i++) {
        const b = document.createElement("button");
        b.innerText = i;

        b.onclick = () => {
            if (selected.includes(i)) {
                selected = selected.filter(x => x !== i);
                b.classList.remove("selected");
            } else {
                if (selected.length < LOTTO_PICK) {
                    selected.push(i);
                    b.classList.add("selected");
                }
            }
        };

        optionsContainer.appendChild(b);
    }

    const submit = document.createElement("button");
    submit.innerText = "ÇEKİLİŞ ET";

    submit.onclick = () => {
        if (selected.length !== LOTTO_PICK)
            return alert("5 rəqəm seç!");

        const draw = [];
        while (draw.length < LOTTO_PICK) {
            const n = Math.floor(Math.random() * LOTTO_MAX) + 1;
            if (!draw.includes(n)) draw.push(n);
        }

        let match = selected.filter(x => draw.includes(x)).length;

        totalBudget += match * 2;

        document.getElementById("answer-feedback").innerText =
            `Uduş: ${match} uyğunluq`;

        lottoRound++;

        setTimeout(() => {
            if (lottoRound >= 25) endGame();
            else loadQuestion();
        }, 1500);
    };

    optionsContainer.appendChild(submit);
}

// ===== END GAME =====
function endGame() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    document.getElementById("final-budget").innerText = totalBudget;
    document.getElementById("form-total-win").value = totalBudget;
         }
