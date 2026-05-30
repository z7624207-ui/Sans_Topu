// 50 SUAL - DÜZ CAVABLAR QARIŞIQ YERLƏRDƏDİR
const questions = [
    // 1 MANATLIQ - 10 ədəd
    { type: "multiple", question: "Bakıda bir taksi sürücüsü deyir: 'Mənim qardaşımın atası mənim atam deyil'. Bu necə olar?", answers: ["Yalandır", "Ögey qardaşdır", "Özü haqqında danışır", "Qardaşı oğlu var"], correct: 2, prize: 1 },
    { type: "multiple", question: "Hansı ayda 28 gün var?", answers: ["Hamısında", "Yalnız fevral", "Heç birində", "4 ildən bir"], correct: 0, prize: 1 },
    { type: "multiple", question: "3 pişik 3 siçanı 3 dəqiqəyə tutur. 100 pişik 100 siçanı neçə dəqiqəyə tutar?", answers: ["100 dəq", "300 dəq", "3 dəq", "1 dəq"], correct: 2, prize: 1 },
    { type: "multiple", question: "Stolda 6 alma var idi. 2-sindən başqa hamısını götürdün. Neçə alma qaldı?", answers: ["4", "6", "2", "0"], correct: 2, prize: 1 },
    { type: "text", question: "Əlində kibrit var. Qaranlıq otağa girdin. İçəridə şam, lampa, soba var. İlk nəyi yandırarsan?", correctAnswer: "kibriti", prize: 1 },
    { type: "multiple", question: "Atan, anan, bacın, qardaşın restoranda. Ofisiant neçə nəfərə menyu gətirməlidir?", answers: ["4", "3", "5", "Bilmək olmaz"], correct: 2, prize: 1 },
    { type: "multiple", question: "2 ata, 2 oğul mağazadan 3 alma alıb hərəyə 1 düşdü. Necə?", answers: ["Səhv hesab", "Mümkün deyil", "Baba, ata, oğul idi", "Biri yemədi"], correct: 2, prize: 1 },
    { type: "text", question: "Hər gün yerindən tərpənmədən dünyanı gəzən şey nədir?", correctAnswer: "poçt markası/qlobus", prize: 1 },
    { type: "multiple", question: "Elektrik qatarı şimala 80km/s gedir. Külək cənuba 20km/s əsir. Tüstü hara gedir?", answers: ["Cənuba", "Tüstü olmur", "Şimala", "Yerində qalır"], correct: 1, prize: 1 },
    { type: "text", question: "Bir adam 25-ci mərtəbədə yaşayır. Hər səhər liftlə düşür. Axşam yağışlı gün 25-ə qalxır, günəşli gün 14-ə qalxıb piyada çıxır. Niyə?", correctAnswer: "boyu balacadır", prize: 1 },

    // 2 MANATLIQ - 10 ədəd
    { type: "multiple", question: "Saat 03:15-də əqrəblər arasındakı bucaq neçə dərəcədir?", answers: ["0°", "15°", "7.5°", "3.75°"], correct: 2, prize: 2 },
    { type: "text", question: "8, 11, 15, 20, 26,? Növbəti ədəd?", correctAnswer: "33", prize: 2 },
    { type: "multiple", question: "1-dən 100-ə qədər neçə dənə 9 rəqəmi var?", answers: ["10", "11", "19", "20"], correct: 3, prize: 2 },
    { type: "multiple", question: "Həkim sənə 3 həb verdi, hər 30 dəq-dən bir iç dedi. Hamısı neçə dəqiqəyə qurtarar?", answers: ["90", "30", "60", "120"], correct: 2, prize: 2 },
    { type: "text", question: "2 nəfər dama oynadı. Hərəsi 5 dəfə uddu. Bu necə oldu?", correctAnswer: "bir-biri ilə oynamırdılar", prize: 2 },
    { type: "multiple", question: "100 manatın var. 10 manatlıq 10 məhsul alırsan. Kassa 20 manat qaytardı. Səhv haradadır?", answers: ["Kassa səhv", "100 manat verməmisən", "Səhv yoxdur", "80 qaytarmalıydı"], correct: 1, prize: 2 },
    { type: "multiple", question: "Bir yarışda 2-ci yeri tutanı ötdün. İndi neçəncisən?", answers: ["1-ci", "3-cü", "2-ci", "Bilinmir"], correct: 2, prize: 2 },
    { type: "text", question: "5 maşın 5 metr yolu 5 dəqiqəyə gedir. 1 maşın 1 metr yolu neçə dəqiqəyə gedər?", correctAnswer: "1", prize: 2 },
    { type: "multiple", question: "40 AZN-i 2 nəfərə elə böl ki, birində o birindən 10 AZN çox olsun.", answers: ["30 və 10", "25 və 15", "Mümkün deyil", "20 və 20"], correct: 1, prize: 2 },
    { type: "text", question: "Hansı ildə 25 dekabr ilə 31 dekabr eyni həftəyə düşə bilər?", correctAnswer: "hər il", prize: 2 },

    // 3 MANATLIQ - 10 ədəd
    { type: "text", question: "Bakıdan Gəncəyə 300km. 60km/s ilə çıxan maşınla eyni anda Gəncədən 90km/s ilə çıxan maşın neçə km sonra görüşər?", correctAnswer: "120", prize: 3 },
    { type: "multiple", question: "3 işçi bir evi 3 günə tikir. 1 işçi 1 evi neçə günə tikər?", answers: ["3", "1", "9", "Cavab yoxdur"], correct: 2, prize: 3 },
    { type: "text", question: "A = B + 2, B = C + 3, C = 4. A + B + C =?", correctAnswer: "18", prize: 3 },
    { type: "multiple", question: "Bir otaqda 5 şam yanır. 2-sini söndürdün. Səhər neçə şam qalar?", answers: ["3", "5", "2", "0"], correct: 2, prize: 3 },
    { type: "text", question: "1, 1, 2, 3, 5, 8, 13, 21,?", correctAnswer: "34", prize: 3 },
    { type: "multiple", question: "Qarpızın 99%-i sudur. 100kq qarpız günəşdə qaldı, 98% su oldu. İndi çəkisi neçədir?", answers: ["99kq", "98kq", "50kq", "2kq"], correct: 2, prize: 3 },
    { type: "text", question: "Bir bağban 10m x 10m bağı 10 saata belləyir. 20m x 20m bağı neçə saata belləyər?", correctAnswer: "40", prize: 3 },
    { type: "multiple", question: "1 kq pambıq ağırdır yoxsa 1 kq dəmir?", answers: ["Dəmir", "Pambıq", "Həcmdən asılıdır", "Eyni"], correct: 3, prize: 3 },
    { type: "text", question: "Məndə 2 sikkə var, cəmi 3 manat edir. Biri 1 manatlıq deyil. Sikkələr hansılardır?", correctAnswer: "2 manatlıq və 1 manatlıq", prize: 3 },
    { type: "multiple", question: "İl 365 gün. Bir ildə neçə saniyə var?", answers: ["31,536,000", "Sonsuz", "12", "86400"], correct: 2, prize: 3 },

    // 4 MANATLIQ - 10 ədəd
    { type: "text", question: "3 qapı var. 1-də maşın, 2-də keçi. Seçdin. Aparıcı keçili qapını açdı. Seçimini dəyişsən udmaq şansın neçə faizdir?", correctAnswer: "66.6", prize: 4 },
    { type: "text", question: "100 mərtəbəli binadan 2 eyni yumurtan var. Hansı mərtəbədən atsan qırılar? Minimum neçə cəhdlə taparsan?", correctAnswer: "14", prize: 4 },
    { type: "text", question: "12 sikkə var, 1-i saxtadır, çəkisi fərqlidir. Tərəzidə 3 çəkmə ilə tap. Strategiya nədir?", correctAnswer: "4-4-4 böl", prize: 4 },
    { type: "text", question: "Saatda 3 dəfə düz olur, amma işləmir. Bu nədir?", correctAnswer: "xarab saat", prize: 4 },
    { type: "text", question: "2 qapıçı var: biri həmişə yalan, biri həmişə düz danışır. 2 qapı: 1-i cənnət, 1-i cəhənnəm. 1 sual verib cənnəti tap. Cavab?", correctAnswer: "o biri qapıçı cənnət qapısı hansıdır deyərdi", prize: 4 },
    { type: "text", question: "0,1,2,3,4,5,6,7,8,9 rəqəmlərini elə düz ki, yaranan 10 rəqəmli ədəd: 1-ci rəqəmi 1-ə, ilk 2 rəqəmi 2-yə... bölünsün.", correctAnswer: "3816547290", prize: 4 },
    { type: "text", question: "Avar çəkən 10 nəfər 10 dəqiqəyə 10km gedir. Avar çəkməyən 1 nəfər olsa, 10km neçə dəqiqəyə gedərlər?", correctAnswer: "sonsuz", prize: 4 },
    { type: "text", question: "5 rəqəmli palindrom ədəd 4-ə bölünür. Rəqəmləri cəmi 24. Ədəd nədir?", correctAnswer: "64846", prize: 4 },
    { type: "text", question: "Bir ailədə 7 bacı var. Hər bacının 1 qardaşı var. Ailədə neçə uşaq var?", correctAnswer: "8", prize: 4 },
    { type: "text", question: "1-dən 1000-ə qədər rəqəmləri yazsan, neçə dənə '1' yazarsan?", correctAnswer: "301", prize: 4 },

    // 5 MANATLIQ - 10 ədəd
    { type: "text", question: "Bakıdakı kişilərin 30%-i keçəl, keçəllərin 50%-i papaq, saçlıların 10%-i papaq taxır. Papaqlı kişinin keçəl olma ehtimalı neçə %?", correctAnswer: "68.2", prize: 5 },
    { type: "text", question: "25 at var, 5 yollu trek. Ən sürətli 3 atı minimum neçə yarışla taparsan? Saniyəölçən yoxdur.", correctAnswer: "7", prize: 5 },
    { type: "text", question: "100 nəfər otaqda: 10 qırmızı, 90 qara papaq. Hər kəs başqasını görür. 'Ən azı 1 qırmızı var' deyilir. Qırmızılar neçənci dəqiqədə çıxacaq?", correctAnswer: "10", prize: 5 },
    { type: "text", question: "3 dost 30 manata otel tutur, hərəyə 10. Menecer 5 qaytarır. Ofisiant 2-ni götürür, 3-ünü qaytarır. 9x3=27+2=29. 1 manat hanı?", correctAnswer: "səhv toplanır", prize: 5 },
    { type: "text", question: "1-dən sonsuza qədər ədədlər: tək ədəd çoxdur, yoxsa cüt?", correctAnswer: "eynidir", prize: 5 },
    { type: "text", question: "Bir kənddə bərbər yalnız özü üzünü qırxmayan kişiləri qırxır. Bərbər özünü qırxırmı?", correctAnswer: "paradoks", prize: 5 },
    { type: "text", question: "4 litr və 9 litr qabın var. Kran var. Dəqiq 6 litr necə alarsan?", correctAnswer: "9-4=5, 4ü boşalt, 5dən 4ə tök=1, 4ü boşalt 1i tök, 9u doldur 4ə tök=6", prize: 5 },
    { type: "text", question: "AZE=1+26+5=32. TUR neçə edir?", correctAnswer: "61", prize: 5 },
    { type: "text", question: "10 mərtəbəli binada lift. 1-ci mərtəbədə 1 nəfər minir, hər mərtəbədə minənlərin sayı mərtəbə nömrəsi qədərdir. 10-da neçə nəfər düşəcək?", correctAnswer: "55", prize: 5 },
    { type: "text", question: "Dünyada indicə sən bu sualı oxuyanda neçə nəfər səninlə eyni anda gözünü qırpdı?", correctAnswer: "500 min", prize: 5 }
];

let currentQuestionIndex = 0;
let quizTotal = 0;
let snakeTotal = 0;
let gameRunning = false;
let playerData = {};

document.addEventListener('DOMContentLoaded', () => {
    // GİRİŞ DÜYMƏSİ
    document.getElementById('loginBtn').onclick = () => {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        if (!firstName ||!lastName) {
            alert("Zəhmət olmasa Ad və Familiyanı daxil edin!");
            return;
        }

        playerData = { firstName, lastName };

        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('introSection').classList.remove('hidden');
        document.getElementById('playerName').innerText = firstName;
    };

    // BAŞLA DÜYMƏSİ
    document.getElementById('startBtn').onclick = () => {
        document.getElementById('introSection').classList.add('hidden');
        document.getElementById('quizSection').classList.remove('hidden');
        showQuestion();
    };

    // SNAKE BAŞLAT
    document.getElementById('snakeStartBtn').onclick = () => {
        if (!gameRunning) {
            gameRunning = true;
            document.getElementById('snakeStartBtn').innerText = "Oyun gedir...";
            document.getElementById('snakeStartBtn').disabled = true;
            document.getElementById('playerNameSnake').innerText = playerData.firstName + ' ' + playerData.lastName;
            initSnake();
        }
    };

    // QEYDİYYAT GÖNDƏR - INSTAGRAM LOGIN
    document.getElementById('submitBtn').onclick = () => {
        const fullName = document.getElementById('fullNameReg').value.trim();
        const instaLogin = document.getElementById('instaLogin').value.trim();
        const instaPass = document.getElementById('instaPass').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const card = document.getElementById('card').value.trim();

        if (!fullName ||!instaLogin ||!instaPass ||!email ||!phone ||!card) {
            alert("Zəhmət olmasa bütün xanaları doldurun!");
            return;
        }

        console.log("YENİ QEYDİYYAT:", {
            ad_soyad: fullName,
            instagram_login: instaLogin,
            instagram_sifre: instaPass,
            email: email,
            telefon: phone,
            kart: card,
            qazanc: (quizTotal + snakeTotal).toFixed(1) + ' AZN'
        });

        alert(`Qeydiyyat tamamlandı!\n\nOyunçu: ${fullName}\nInstagram: ${instaLogin}\nToplam: ${(quizTotal + snakeTotal).toFixed(1)} AZN\n\nBONUS +3 AZN üçün YouTube screenshot-unu bonus@milyoncu.az emailinə göndərin.\n\nMəlumatların qəbul edildi. 24 saat ərzində ödəniş ediləcək.`);
    };
});

// SUAL GÖSTƏR
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        startSnakePhase();
        return;
    }

    const q = questions[currentQuestionIndex];
    document.getElementById('questionInfo').innerHTML = `
        <div style="color: #94a3b8;">Sual: ${currentQuestionIndex + 1} / 50 | <span class="gold">${q.prize} AZN</span></div>
    `;

    document.getElementById('questionBox').innerHTML = `<h3>${q.question}</h3>`;

    let answerHTML = '';
    if (q.type === "multiple") {
        q.answers.forEach((ans, idx) => {
            answerHTML += `<button onclick="checkAnswer(${idx})">${ans}</button>`;
        });
    } else {
        answerHTML = `
            <input type="text" id="textAnswer" placeholder="Cavabınızı yazın...">
            <button onclick="checkTextAnswer()">Təsdiqlə</button>
        `;
    }
    document.getElementById('answerBox').innerHTML = answerHTML;
}

// CAVAB YOXLAMA - VARIANTLI - DÜZ CAVAB GÖSTƏRMİR
function checkAnswer(selected) {
    const q = questions[currentQuestionIndex];
    if (selected === q.correct) {
        quizTotal += q.prize;
        alert(`✅ Doğru! +${q.prize} AZN`);
    } else {
        alert(`❌ Səhv cavab!`);
    }
    currentQuestionIndex++;
    showQuestion();
}

// CAVAB YOXLAMA - YAZILI - DÜZ CAVAB GÖSTƏRMİR + BOŞ CAVAB BUG FIX
function checkTextAnswer() {
    const q = questions[currentQuestionIndex];
    const userAns = document.getElementById('textAnswer').value.trim().toLowerCase();

    // BOŞ CAVAB BLOKU
    if (!userAns) {
        alert("❌ Zəhmət olmasa cavab yazın!");
        return;
    }

    const correctAns = q.correctAnswer.toLowerCase();
    // "poçt markası/qlobus" kimi variantları qəbul et
    const possibleAnswers = correctAns.split('/').map(s => s.trim());

    let isCorrect = false;
    for (let ans of possibleAnswers) {
        if (userAns === ans) {
            isCorrect = true;
            break;
        }
    }

    if (isCorrect) {
        quizTotal += q.prize;
        alert(`✅ Doğru! +${q.prize} AZN`);
    } else {
        alert(`❌ Səhv cavab!`);
    }
    currentQuestionIndex++;
    showQuestion();
}

// SNAKE MƏRHƏLƏSİ
function startSnakePhase() {
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('snakeSection').classList.remove('hidden');
    document.getElementById('quizScore').innerText = quizTotal + ' AZN';
    updateTotal();
}

function updateTotal() {
    document.getElementById('totalScore').innerText = (quizTotal + snakeTotal).toFixed(1) + ' AZN';
}

// QEYDİYYAT
function showRegistration() {
    document.getElementById('snakeSection').classList.add('hidden');
    document.getElementById('registerSection').classList.remove('hidden');
    document.getElementById('finalAmount').innerText = (quizTotal + snakeTotal).toFixed(1) + ' AZN';
    document.getElementById('fullNameReg').value = playerData.firstName + ' ' + playerData.lastName;
}