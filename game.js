const quizQuestions = [
    // 1 MANATLIQ SUALLAR (1-10) - Qiymət: 1 AZN
    { q: "Bakıda bir taksi sürücüsü deyir: \"Mənim qardaşımın atası mənim atam deyil\". Bu necə olar?", o: ["Yalandır", "Ögey qardaşdır", "Özü haqqında danışır", "Qardaşı oğlu var"], c: "Özü haqqında danışır", p: 1 },
    { q: "Hansı ayda 28 gün var?", o: ["Yalnız fevral", "Hamısında", "Heç birində", "4 ildən bir"], c: "Hamısında", p: 1 },
    { q: "3 pişik 3 siçanı 3 dəqiqəyə tutur. 100 pişik 100 siçanı neçə dəqiqəyə tutar?", o: ["100 dəq", "3 dəq", "1 dəq", "300 dəq"], c: "3 dəq", p: 1 },
    { q: "Stolda 6 alma var idi. 2-sindən başqa hamısını götürdün. Neçə alma qaldı?", o: ["4", "2", "6", "0"], c: "2", p: 1 },
    { q: "Əlində kibrit var. Qaranlıq otağa girdin. İçəridə şam, lampa, soba var. İlk nəyi yandırarsan?", o: ["Kibriti", "Şamı", "Lampanı", "Sobanı"], c: "Kibriti", p: 1 },
    { q: "Atan, anan, bacın, qardaşın restoranda. Ofisiant neçə nəfərə menyu gətirməlidir?", o: ["4", "5", "3", "Bilmək olmaz"], c: "5", p: 1 },
    { q: "2 ata, 2 oğul mağazadan 3 alma alib hərəyə 1 düşdü. Necə?", o: ["Səhv hesab", "Baba, ata, oğul idi", "Biri yemədi", "Mümkün deyil"], c: "Baba, ata, oğul idi", p: 1 },
    { q: "Hər gün yerindən tərpənmədən dünyanı gəzən şey nədir?", o: ["Poçt markası / Qlobus", "Təyyarə", "Külək", "Gəmi"], c: "Poçt markası / Qlobus", p: 1 },
    { q: "Elektrik qatarı şimala 80km/s gedir. Külək cənuba 20km/s əsir. Tüstü hara gedir?", o: ["Cənuba", "Şimala", "Yerində qalır", "Tüstü olmur"], c: "Tüstü olmur", p: 1 },
    { q: "Bir adam 25-ci mərtəbədə yaşayır. Hər səhər liftlə düşür. Axşam qayıdanda yağışlı günlər 25-ə qalxır, günəşli gün 14-ə qalxıb piyada çıxır. Niyə?", o: ["Boyu balacadır, düyməyə çətirlə çatır", "Lift xarab olur", "İdman edir", "Qonşuya baş çəkir"], c: "Boyu balacadır, düyməyə çətirlə çatır", p: 1 },

    // 2 MANATLIQ SUALLAR (11-20) - Qiymət: 2 AZN
    { q: "Saat 03:15-də əqrəblər arasındakı bucaq neçə dərəcədir?", o: ["0°", "7.5°", "15°", "3.75°"], c: "7.5°", p: 2 },
    { q: "8, 11, 15, 20, 26, ? Növbəti ədəd hansıdır?", o: ["31", "32", "33", "34"], c: "33", p: 2 },
    { q: "1-dən 100-ə qədər neçə dənə 9 rəqəmi var?", o: ["10", "11", "19", "20"], c: "20", p: 2 },
    { q: "Həkim sənə 3 həb verdi, hər 30 dəq-dən bir iç dedi. Hamısı neçə dəqiqəyə qurtarar?", o: ["90", "60", "30", "120"], c: "60", p: 2 },
    { q: "2 nəfər dama oynadı. Hərəsi 5 dəfə uddu. Bu necə oldu?", o: ["Heç-heçə bitdi", "Bir-biri ilə oynamırdılar", "Oyun səhv qurulub", "Hile etdilər"], c: "Bir-biri ilə oynamırdılar", p: 2 },
    { q: "100 manatın var. 10 manatlıq 10 məhsul alırsan. Kassa 20 manat qaytardı. Səhv haradadır?", o: ["Səhv yoxdur", "100 manat verməmisən (120 vermisən)", "Kassa səhv edib", "80 qaytarmalıydı"], c: "100 manat verməmisən (120 vermisən)", p: 2 },
    { q: "Bir yarışda 2-ci yeri tutanı ötdün. İndi neçəncisən?", o: ["1-ci", "2-ci", "3-cü", "Dibinədək"], c: "2-ci", p: 2 },
    { q: "5 maşın 5 metr yolu 5 dəqiqəyə gedir. 1 maşın 1 metr yolu neçə dəqiqəyə gedər?", o: ["5 dəqiqə", "1 dəqiqə", "2.5 dəqiqə", "25 dəqiqə"], c: "1 dəqiqə", p: 2 },
    { q: "40 AZN-i 2 nəfərə elə böl ki, birində o birindən 10 AZN çox olsun.", o: ["25 və 15", "30 və 10", "Mümkün deyil", "20 və 20"], c: "25 və 15", p: 2 },
    { q: "Hansı ildə 25 dekabr ilə 31 dekabr eyni həftəyə düşə bilər?", o: ["Yalnız uzun illərdə", "Heç bir ildə", "Hər il", "4 ildən bir"], c: "Hər il", p: 2 },

    // 3 MANATLIQ SUALLAR (21-30) - Qiymət: 3 AZN
    { q: "Bakıdan Gəncəyə 300km. 60km/s ilə çıxan maşınla eyni anda Gəncədən 90km/s ilə çıxan maşın neçə km sonra görüşər? (İlk maşına görə)", o: ["150km", "120km", "180km", "200km"], c: "120km", p: 3 },
    { q: "3 işçi bir evi 3 günə tikir. 1 işçi 1 evi neçə günə tikər?", o: ["3", "9", "1", "6"], c: "9", p: 3 },
    { q: "A = B + 2, B = C + 3, C = 4 olarsa, A + B + C = ?", o: ["15", "18", "16", "20"], c: "18", p: 3 },
    { q: "Bir otaqda 5 şam yanır. 2-sini söndürdün. Səhər neçə şam qalar?", o: ["3", "2", "5", "0"], c: "2", p: 3 },
    { q: "1, 1, 2, 3, 5, 8, 13, 21, ? Növbəti ədəd?", o: ["34", "28", "30", "42"], c: "34", p: 3 },
    { q: "Qarpızın 99%-i sudur. 100kq qarpız günəşdə qaldı, 98% su oldu. İndi çəkisi neçədir?", o: ["99kq", "50kq", "98kq", "2kq"], c: "50kq", p: 3 },
    { q: "Bir bağban 10m x 10m bağı 10 saata belləyir. 20m x 20m bağı neçə saata belləyər?", o: ["20 saat", "40 saat", "30 saat", "50 saat"], c: "40 saat", p: 3 },
    { q: "1 kq pambıq ağırdır yoxsa 1 kq dəmir?", o: ["Dəmir", "Pambıq", "Eyni", "Həcmdən asılıdır"], c: "Eyni", p: 3 },
    { q: "Məndə 2 sikkə var, cəmi 3 manat edir. Biri 1 manatlıq deyil. Sikkələr hansılardır?", o: ["2 manatlıq və 1 manatlıq", "İki dənə 1.5 manatlıq", "Mümkün deyil", "3 dənə 1 manatlıq"], c: "2 manatlıq və 1 manatlıq", p: 3 },
    { q: "İl 365 gün. Bir ildə neçə saniyə var?", o: ["31,536,000", "12", "86400", "Sonsuz"], c: "12", p: 3 },

    // 4 MANATLIQ SUALLAR (31-40) - Qiymət: 4 AZN
    { q: "3 qapı var. 1-də maşın, 2-də keçi. Seçdiniz, aparıcı keçili qapını açdı. Seçimi dəyişsəniz udmaq şansınız neçə faizdir?", o: ["33.3%", "50%", "66.6%", "100%"], c: "66.6%", p: 4 },
    { q: "100 mərtəbəli binadan 2 eyni yumurtanız var. Qırılma mərtəbəsini minimum neçə cəhdlə dəqiq tapmaq olar?", o: ["50 cəhd", "14 cəhd", "10 cəhd", "25 cəhd"], c: "14 cəhd", p: 4 },
    { q: "12 sikkə var, 1-i saxtadır (çəkisi fərqlidir). Mexaniki tərəzidə minimum neçə çəkimlə tapmaq olar?", o: ["2", "3", "4", "5"], c: "3", p: 4 },
    { q: "Saatda 3 dəfə düz olur, amma işləmir. Bu nədir?", o: ["Divar saatı", "Xarab / Dayanmış saat", "Qol saatı", "Elektron saat"], c: "Xarab / Dayanmış saat", p: 4 },
    { q: "2 qapıçı var (biri həmişə yalan, biri düz danışır). Cənnət qapısını tapmaq üçün hansı sual verilməlidir?", o: ["\"O biri qapıçı cənnət qapısı hansıdır deyərdi?\" soruşub əksini seçmək", "Cənnət haradır?", "Sən düz danışırsan?", "Heç biri"], c: "\"O biri qapıçı cənnət qapısı hansıdır deyərdi?\" soruşub əksini seçmək", p: 4 },
    { q: "0-9 rəqəmləri ilə düzələn, ilk 1 rəqəmi 1-ə, ilk 2 rəqəmi 2-yə... ilk 10 rəqəmi 10-a bölünən ədəd hansıdır?", o: ["1234567890", "3816547290", "9876543210", "3456712890"], c: "3816547290", p: 4 },
    { q: "Avar çəkən 10 nəfər 10 dəqiqəyə 10km gedir. Avar çəkməyən 1 nəfər olsa, 10km-i neçə dəqiqəyə gedərlər?", o: ["10 dəqiqə", "100 dəqiqə", "Sonsuz (qayıq tərpənməz)", "1 dəqiqə"], c: "Sonsuz (qayıq tərpənməz)", p: 4 },
    { q: "5 rəqəmli palindrom ədəd 4-ə bölünür. Rəqəmləri cəmi 24-dür. Ədəd hansıdır?", o: ["56865", "64846", "58685", "46864"], c: "64846", p: 4 },
    { q: "Bir ailədə 7 bacı var. Hər bacının 1 qardaşı var. Ailədə neçə uşaq var?", o: ["14", "8", "7", "9"], c: "8", p: 4 },
    { q: "1-dən 1000-ə qədər bütün ədədləri yazsanız, neçə dənə \"1\" rəqəmindən istifadə edərsiniz?", o: ["300", "301", "100", "299"], c: "301", p: 4 },

    // 5 MANATLIQ SUALLAR (41-50) - Qiymət: 5 AZN
    { q: "Kişilərin 30%-i keçəldir. Keçəllərin 50%-i, saçlıların 10%-i papaq taxır. Papaqlı birinin keçəl olma ehtimalı?", o: ["50%", "68.2%", "30%", "45%"], c: "68.2%", p: 5 },
    { q: "25 at var, 5 yollu trek. Ən sürətli 3 atı tapmaq üçün saniyəölçənsiz minimum neçə yarış lazımdır?", o: ["5", "6", "7", "8"], c: "7", p: 5 },
    { q: "100 nəfərdən 10-u qırmızı, 90-ı qara papaqdadır. Hər kəs başqasını görür. Ən az 1 qırmızı var. Qırmızılar neçənci dəqiqədə çıxacaq?", o: ["1-ci", "10-cu", "90-cı", "Heç vaxt"], c: "10-cu", p: 5 },
    { q: "3 dost 30 manat ödəyir. Menecer 5 manat qaytarır, ofisiant 2-ni götürüb 3-ünü dostlara verir. 9x3=27 + 2 = 29 manat edir. 1 manat haradadır?", o: ["Ofisiantda qalıb", "Səhv toplanır (27-2=25 otel haqqıdır)", "İtib", "Menecerdədir"], c: "Səhv toplanır (27-2=25 otel haqqıdır)", p: 5 },
    { q: "1-dən sonsuza qədər olan ədədlər çoxluğunda tək ədədlər çoxdur, yoxsa cüt ədədlər?", o: ["Tək ədədlər", "Cüt ədədlər", "Eynidir (sonsuzluqlar bərabərdir)", "Təyin etmək olmur"], c: "Eynidir (sonsuzluqlar bərabərdir)", p: 5 },
    { q: "Bərbər yalnız özü üzünü qırxmayanları qırxır. Bərbər öz üzünü qırxırmı?", o: ["Bəli, qırxır", "Xeyr, qırxmır", "Paradoksdur (qaydanı pozur)", "Başqa bərbərə gedir"], c: "Paradoksdur (qaydanı pozur)", p: 5 },
    { q: "4 litrlik və 9 litrlik qablarla dəqiq 6 litr suyu necə alarsınız?", o: ["Almaq mümkün deyil", "9-u doldurub 4-ə boşaltmaq məntiqi ilə (ardıcıl fərqlərlə)", "Gözəyarı doldurmaqla", "Qabları yarıya qədər doldurmaqla"], c: "9-u doldurub 4-ə boşaltmaq məntiqi ilə (ardıcıl fərqlərlə)", p: 5 },
    { q: "AZE=32 (A=1, Z=26, E=5). Ölkə kodları məntiqi ilə TUR neçə edir? (T=20, U=21, R=18)", o: ["59", "61", "60", "55"], c: "61", p: 5 },
    { q: "10 mərtəbəli binada 1-cidə 1 nəfər minir, hər mərtəbədə minənlərin sayısı mərtəbə nömrəsi qədərdir. 10-da neçə nəfər düşər?", o: ["45", "55", "50", "65"], c: "55", p: 5 },
    { q: "Dünyada indicə siz bu sualı oxuyanda təxminən neçə nəfər sizinlə eyni anda gözünü qırpdı?", o: ["~500 min", "~1 milyon", "~10 min", "~5 milyon"], c: "~500 min", p: 5 }
];

let currentQuestionIndex = 0;
let userName = "";
let totalBudget = 0;

// Doğru qarışdırma alqoritmi (Fisher-Yates)
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

function startGame() {
    const nameInput = document.getElementById("user-fullname").value.trim();
    if (nameInput === "") {
        alert("Zəhmət olmasa Ad və Soyadınızı daxil edin!");
        return;
    }
    userName = nameInput;
    document.getElementById("form-fullname").value = userName;
    
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        endGame();
        return;
    }

    const currentData = quizQuestions[currentQuestionIndex];
    
    document.getElementById("question-text").innerText = `${currentQuestionIndex + 1}. ${currentData.q}`;
    document.getElementById("live-budget").innerText = totalBudget;
    
    const feedbackDiv = document.getElementById("answer-feedback");
    feedbackDiv.innerText = "";
    feedbackDiv.className = "feedback";

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    // Səhv işləyən köhnə metodu tam zəmanətli funksiya ilə əvəzlədik
    let shuffledOptions = shuffleArray([...currentData.o]);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "btn option-btn";
        
        button.onclick = () => {
            const allButtons = optionsContainer.querySelectorAll("button");
            allButtons.forEach(btn => btn.classList.add("disabled"));

            if (option === currentData.c) {
                totalBudget += currentData.p;
                feedbackDiv.innerText = "Düzdür! 🎉";
                feedbackDiv.className = "feedback correct";
            } else {
                feedbackDiv.innerText = "Səhvdir! ❌";
                feedbackDiv.className = "feedback wrong";
            }

            // Gözləmə müddətini 1.5 saniyə etdik ki, oyun donmuş kimi görünməsin
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1500);
        };
        optionsContainer.appendChild(button);
    });
}

function endGame() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    
    document.getElementById("final-budget").innerText = totalBudget;
    document.getElementById("form-total-win").value = totalBudget;
}
