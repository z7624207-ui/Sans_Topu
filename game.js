// ========== OYUNÇU MƏLUMATLARI ==========
let playerName = "";
let playerEmail = "";
let playerInstagram = "";
let score = 0;
let currentQuestionIndex = 0;
let gameRunning = false;

// ========== 50 SUAL - MİLYONÇU ÜÇÜN ==========
const questions = [
    { q: "Azərbaycanın paytaxtı haradır?", a: ["Gəncə", "Bakı", "Sumqayıt", "Naxçıvan"], correct: 1 },
    { q: "5 + 7 neçə edir?", a: ["10", "11", "12", "13"], correct: 2 },
    { q: "Dünyanın ən böyük okeanı hansıdır?", a: ["Atlantik", "Hind", "Sakit", "Şimal Buzlu"], correct: 2 },
    { q: "İlin neçə fəsli var?", a: ["2", "3", "4", "5"], correct: 2 },
    { q: "Qar hansı rəngdədir?", a: ["Qara", "Ağ", "Mavi", "Qırmızı"], correct: 1 },
    { q: "10 - 4 neçə edir?", a: ["5", "6", "7", "8"], correct: 1 },
    { q: "Azərbaycanın pul vahidi nədir?", a: ["Dollar", "Avro", "Manat", "Rubl"], correct: 2 },
    { q: "Həftədə neçə gün var?", a: ["5", "6", "7", "8"], correct: 2 },
    { q: "Yer kürəsi hansı formadadır?", a: ["Kvadrat", "Üçbucaq", "Dairə", "Yastı"], correct: 2 },
    { q: "3 x 3 neçə edir?", a: ["6", "8", "9", "12"], correct: 2 },
    { q: "Xəzər dənizi hansı ölkənin sahilindədir?", a: ["Türkiyə", "Azərbaycan", "Gürcüstan", "Ermənistan"], correct: 1 },
    { q: "İnsanda neçə barmaq var?", a: ["8", "10", "12", "20"], correct: 3 },
    { q: "Göy qurşağı neçə rəngdən ibarətdir?", a: ["5", "6", "7", "8"], correct: 2 },
    { q: "20 / 4 neçə edir?", a: ["4", "5", "6", "8"], correct: 1 },
    { q: "Qız Qalası harada yerləşir?", a: ["Gəncədə", "Bakıda", "Şəkidə", "Qubada"], correct: 1 },
    { q: "Su neçə dərəcədə donur?", a: ["0", "10", "50", "100"], correct: 0 },
    { q: "Azərbaycan neçənci ildə müstəqillik qazanıb?", a: ["1990", "1991", "1992", "1993"], correct: 1 },
    { q: "12 + 8 neçə edir?", a: ["18", "19", "20", "21"], correct: 2 },
    { q: "Pişiklər hansı səsi çıxarır?", a: ["Hav", "Miyov", "Moo", "Cik"], correct: 1 },
    { q: "Bir saatda neçə dəqiqə var?", a: ["30", "45", "60", "90"], correct: 2 },
    { q: "Novruz bayramı hansı ayda qeyd olunur?", a: ["Fevral", "Mart", "Aprel", "May"], correct: 1 },
    { q: "15 - 7 neçə edir?", a: ["6", "7", "8", "9"], correct: 2 },
    { q: "Ən böyük planet hansıdır?", a: ["Mars", "Yer", "Yupiter", "Saturn"], correct: 2 },
    { q: "Qarabağ hansı bölgədə yerləşir?", a: ["Şimalda", "Cənubda", "Qərbdə", "Azərbaycanda"], correct: 3 },
    { q: "6 x 4 neçə edir?", a: ["20", "22", "24", "26"], correct: 2 },
    { q: "Kitabları harada saxlayırlar?", a: ["Marketdə", "Kitabxanada", "Aptekdə", "Stadionda"], correct: 1 },
    { q: "Şəkidə nəyi ilə məşhurdur?", a: ["Paxlava", "Xalça", "Piti", "Kabab"], correct: 2 },
    { q: "100 / 10 neçə edir?", a: ["5", "10", "15", "20"], correct: 1 },
    { q: "İnsan neçə gözə sahibdir?", a: ["1", "2", "3", "4"], correct: 1 },
    { q: "Yay fəsli hansı aylardır?", a: ["Mart-May", "İyun-Avqust", "Sent-Noy", "Dek-Fev"], correct: 1 },
    { q: "50 + 25 neçə edir?", a: ["65", "70", "75", "80"], correct: 2 },
    { q: "Nizami Gəncəvi kimdir?", a: ["Həkim", "Şair", "Rəssam", "Musiqiçi"], correct: 1 },
    { q: "Kompüteri kim icad edib?", a: ["Tomas Edison", "Çarlz Bebic", "Albert Eynşteyn", "İsaak Nyuton"], correct: 1 },
    { q: "9 x 5 neçə edir?", a: ["40", "45", "50", "55"], correct: 1 },
    { q: "Dəniz suyu necədir?", a: ["Şirin", "Turş", "Duzlu", "Acı"], correct: 2 },
    { q: "Azərbaycan bayrağında neçə rəng var?", a: ["2", "3", "4", "5"], correct: 1 },
    { q: "30 - 12 neçə edir?", a: ["16", "17", "18", "19"], correct: 2 },
    { q: "At neçə ayaqlıdır?", a: ["2", "3", "4", "6"], correct: 2 },
    { q: "Günəş sistemində neçə planet var?", a: ["7", "8", "9", "10"], correct: 1 },
    { q: "7 + 6 neçə edir?", a: ["11", "12", "13", "14"], correct: 2 },
    { q: "Muğam nədir?", a: ["Rəqs", "Musiqi janrı", "Yemək", "Geyim"], correct: 1 },
    { q: "11 x 11 neçə edir?", a: ["111", "121", "131", "141"], correct: 1 },
    { q: "Qar yağanda hava necə olur?", a: ["İsti", "Soyuq", "Küləkli", "Yağışlı"], correct: 1 },
    { q: "Bir ildə neçə ay var?", a: ["10", "11", "12", "13"], correct: 2 },
    { q: "25 + 25 neçə edir?", a: ["40", "45", "50", "55"], correct: 2 },
    { q: "Heydər Əliyev hansı ildə doğulub?", a: ["1921", "1923", "1925", "1927"], correct: 1 },
    { q: "80 / 8 neçə edir?", a: ["8", "9", "10", "12"], correct: 2 },
    { q: "Bal arıları nə düzəldir?", a: ["Süd", "Bal", "Yağ", "Pendir"], correct: 1 },
    { q: "Telefonu kim icad edib?", a: ["Qrem Bell", "Tesla", "Edison", "Marconi"], correct: 0 },
    { q: "Son sual: 100 x 0 neçə edir?", a: ["0", "1", "100", "1000"], correct: 0 }
];

// ========== OYUNU BAŞLAT ==========
function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    playerEmail = document.getElementById('playerEmail').value.trim();
    playerInstagram = document.getElementById('playerInstagram').value.trim();

    if (playerName === "" || playerEmail === "" || playerInstagram === "") {
        alert("Zəhmət olmasa bütün xanaları doldurun!");
        return;
    }

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';

    gameRunning = true;
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
}

// ========== SUALI GÖSTƏR ==========
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame(true); // Hamısını bildi
        return;
    }

    let q = questions[currentQuestionIndex];
    document.getElementById('question').innerText = `${currentQuestionIndex + 1}. ${q.q}`;
    document.getElementById('score').innerText = `Xal: ${score}`;

    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    q.a.forEach((answer, index) => {
        let btn = document.createElement('button');
        btn.innerText = answer;
        btn.className = 'answer-btn';
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

// ========== CAVABI YOXLA ==========
function checkAnswer(selected) {
    let q = questions[currentQuestionIndex];

    if (selected === q.correct) {
        score += 10;
        currentQuestionIndex++;
        showQuestion();
    } else {
        endGame(false); // Səhv cavab
    }
}

// ========== OYUN BİTDİ - FORMSPREE GÖNDƏR ==========
function endGame(won) {
    gameRunning = false;

    // FORMSPREE-YƏ GÖNDƏR - SƏNİN ENDPOINTİN
    fetch("https://formspree.io/f/mbdbbnwb", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "Ad": playerName,
            "Email Ünvanı": playerEmail,
            "Instagram Adı": playerInstagram,
            "Topladığı Xal": score,
            "Cavabladığı Sual": currentQuestionIndex,
            "Status": won? "Qalib - 50/50" : "Uduzdu",
            "Tarix": new Date().toLocaleString('az-AZ')
        })
    }).then(response => {
        console.log("Formspree cavabı:", response);
    }).catch(error => {
        console.log("Xəta:", error);
    });

    // Game Over ekranı
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';
    document.getElementById('finalScore').innerText = score;
    document.getElementById('finalMessage').innerText = won?
        "Təbriklər! 50 sualın hamısını bildin!" :
        `Oyun bitdi! ${currentQuestionIndex} sual cavabladın.`;
}

// ========== YENİDƏN BAŞLAT ==========
function restartGame() {
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
                                                             }
