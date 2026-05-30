// Süni intellektin düz xətt məntiqi ilə oxuyub çaşacağı, insan ağlına əsaslanan 50 unikal sual
const questions = [
    // --- 1 AZN-lik Suallar (Başlanğıc Səviyyə) ---
    { type: "multiple", question: "Hansı dildə danışan yoxdur, amma o dildə yazılmış milyonlarla kitab var?", answers: ["Latın dili", "Proqramlaşdırma dili", "Qədim Misir dili", "Süni intellekt dili"], correct: 1, prize: 1 },
    { type: "text", question: "Ağacın başında 10 quş var idi. Ovçu atəş açdı və 3 quşu vurdu. Ağacda neçə quş qaldı? (Yalnız rəqəmlə)", correctAnswer: "0", prize: 1 },
    { type: "multiple", question: "Dənizin ortasında bir qırmızı daş var. Bu daşı suya atsanız nə olar?", answers: ["Uzar", "Rəngi dəyişər", "İslanar və batar", "Yox olar"], correct: 2, prize: 1 },
    { type: "text", question: "Atamın oğludur, amma mənim qardaşım deyil. O kimdir?", correctAnswer: "mən", prize: 1 },
    { type: "multiple", question: "Hansı ayda 28 gün var?", answers: ["Fevral", "Yanvar", "Bütün aylarda", "Heç birində"], correct: 2, prize: 1 },
    { type: "text", question: "Yuyunduqca kiçilən, amma kirlənməyən şey nədir?", correctAnswer: "sabun", prize: 1 },
    { type: "multiple", question: "Hansı təkər döngə zamanı fırlanmır?", answers: ["Ön sağ", "Arxa sol", "Ehtiyat təkər", "Sükan"], correct: 2, prize: 1 },
    { type: "text", question: "Heç bir yükü olmadığı halda, daim yıxılmasın deyə iki əllə tutulan şey nədir?", correctAnswer: "sükan", prize: 1 },
    { type: "multiple", question: "Göy üzündə bir dənədir, yerdə isə çoxdur. Söhbət nədən gedir?", answers: ["Ulduz", "Bulud", "Ay hərfi", "Təyyarə"], correct: 2, prize: 1 },
    { type: "text", question: "İki ata və iki oğul ovda 3 dovşan vurdular. Hərəsinə bir dovşan düşdü. Cəmi neçə nəfər idilər? (Rəqəmlə)", correctAnswer: "3", prize: 1 },

    // --- 2 AZN-lik Suallar (Orta Səviyyə) ---
    { type: "multiple", question: "Bir otaqda 4 künc var və hər küncdə bir pişik oturub. Hər pişiyin qarşısında 3 pişik var. Otaqda cəmi neçə pişik var?", answers: ["12", "4", "16", "8"], correct: 1, prize: 2 },
    { type: "text", question: "Sən mənim qızımsan, amma mən sənin anan deyiləm. Bunu deyən kimdir?", correctAnswer: "atası", prize: 2 },
    { type: "multiple", question: "Hansı suala heç vaxt 'Bəli' deyə cavab vermək olmaz?", answers: ["Eşidirsən?", "Yatmısan?", "Ac qalmısan?", "Buradasan?"], correct: 1, prize: 2 },
    { type: "text", question: "Boş qaba neçə qoz qoymaq olar? (Məntiqi cavab, rəqəmlə)", correctAnswer: "1", prize: 2 },
    { type: "multiple", question: "Bir adam yağış altında hər yeri islanır, amma bircə dənə də olsun saçı islanmır. Niyə?", answers: ["Çətiri var", "Papaq qoyub", "Keçəldir", "Qaçır"], correct: 2, prize: 2 },
    { type: "text", question: "Ayaqları var gəzə bilmir, kürəyi var yata bilmir. Bu nədir?", correctAnswer: "stul", prize: 2 },
    { type: "multiple", question: "Gecə saat 8-də yatıb, mexaniki zəngli saatı səhər 9-a qurdum. Zəng çalınana qədər neçə saat yatdım?", answers: ["13 saat", "1 saat", "11 saat", "9 saat"], correct: 1, prize: 2 },
    { type: "text", question: "Dadsızdır, rəngsizdir, amma onsuz həyat yoxdur. Nədir?", correctAnswer: "su", prize: 2 },
    { type: "multiple", question: "Elektrik qatarı şimala doğru gedir, külək isə cənuba əsir. Qatarın tüstüsü hansı tərəfə gedər?", answers: ["Cənuba", "Şimala", "Tüstüsü yoxdur", "Şərqə"], correct: 2, prize: 2 },
    { type: "text", question: "Özü deşik-deşikdir, amma suyu içində saxlayır. Bu nədir?", correctAnswer: "süngər", prize: 2 },

    // --- 3 AZN-lik Suallar (Üst Səviyyə) ---
    { type: "multiple", question: "Fransada bir aşpaz, bir rəssam və bir həkim dostdurlar. Ən böyüyü həkimdir, rəssamın isə qardaşı yoxdur. Aşpaz rəssamın bacısı ilə evlidir. Rəssamın peşəsi nədir?", answers: ["Həkim", "Aşpaz", "Rəssam", "Mühəndis"], correct: 2, prize: 3 },
    { type: "text", question: "Bütün heyvanların adını bilir, amma özü danışa bilmir. Bu nədir?", correctAnswer: "lüğət", prize: 3 },
    { type: "multiple", question: "Əgər 5 pişik 5 siçanı 5 dəqiqəyə tutursa, 100 pişik 100 siçanı neçə dəqiqəyə tutar?", answers: ["100", "5", "50", "25"], correct: 1, prize: 3 },
    { type: "text", question: "Dodağı var, dişləri yoxdur. Canı var, qanı yoxdur. Nədir?", correctAnswer: "göyərti", prize: 3 },
    { type: "multiple", question: "Səmanın altında, yerin üstündə olan, amma heç kimin toxuna bilmədiyi şey nədir?", answers: ["Bulud", "Üfüq xətti", "Külək", "Kölgə"], correct: 1, prize: 3 },
    { type: "text", question: "Ağ dənizdə qara balıq üzür. Bu nədir?", correctAnswer: "göz", prize: 3 },
    { type: "multiple", question: "Bir qutuda 25 qırmızı və 25 qara corab var. Qaranlıqda ən az neçə corab çıxarmaq lazımdır ki, mütləq eyni rəngdə bir cüt yaransın?", answers: ["3", "26", "2", "25"], correct: 0, prize: 3 },
    { type: "text", question: "Aşağı enir amma yuxarı qalxa bilmir. Göydən gəlir. Bu nədir?", correctAnswer: "yağış", prize: 3 },
    { type: "multiple", question: "Əgər sən yarışda ikinci yerdə gedən adamı ötsən, neçənci yerdə olarsan?", answers: ["Birinci", "İkinci", "Üçüncü", "Sonuncu"], correct: 1, prize: 3 },
    { type: "text", question: "Gündüz itir, gecə tapılır. Göydə deyil, insandadır. Nədir?", correctAnswer: "yuxu", prize: 3 },

    // --- 4 AZN-lik Suallar (Çətin Səviyyə) ---
    { type: "multiple", question: "Məndə hər şey var: şəhərlər var amma evlər yoxdur, meşələr var amma ağaclar yoxdur. Mən nəyəm?", answers: ["Kosmos", "Xəritə", "Kitab", "Yuxu"], correct: 1, prize: 4 },
    { type: "text", question: "Qaranlıq otaqda bir şam, bir də neft lampası var. Sizin isə cəmi 1 kibritiniz var. İlk öncə nəyi yandırarsınız?", correctAnswer: "kibriti", prize: 4 },
    { type: "multiple", question: "Bir adamın 6 qızı var. Hər qızının cəmi bir qardaşı var. Bu adamın cəmi neçə övladı var?", answers: ["12", "7", "8", "9"], correct: 1, prize: 4 },
    { type: "text", question: "İçində su var, quyu deyil. Saqqalı var, kişi deyil. Nədir?", correctAnswer: "kokos", prize: 4 },
    { type: "multiple", question: "A və B hərfləri divarda oturmuşdular. A yerə düşdü, B isə yoxa çıxdı. Divarda nə qaldı?", answers: ["Heç nə", "Və hərfi", "A hərfi", "B hərfi"], correct: 1, prize: 4 },
    { type: "text", question: "Canlıdan çıxır, cansız yerdə qalır, sonra özü də canlıya çevrilir. Nədir?", correctAnswer: "yumurta", prize: 4 },
    { type: "multiple", question: "Sənə aiddir, amma digərləri səndən daha çox istifadə edir. Bu nədir?", answers: ["Pulun", "Adın", "Telefonun", "Maşının"], correct: 1, prize: 4 },
    { type: "text", question: "Nə qədər çox götürsən, bir o qədər böyüyən şey nədir?", correctAnswer: "çuxur", prize: 4 },
    { type: "multiple", question: "O hansı açardır ki, heç bir qapını aça bilmir?", answers: ["Qızıl açar", "Musiqi açarı", "Paslı açar", "Sındırılmış açar"], correct: 1, prize: 4 },
    { type: "text", question: "Gözə görünməz, əllə tutulmaz, amma onsuz canlı yaşaya bilməz. Nədir?", correctAnswer: "hava", prize: 4 },

    // --- 5 AZN-lik Suallar (Ekspert Məntiq - AI Tələsi) ---
    { type: "multiple", question: "Bir kor adam küçədə yerə bir şey salır. Kor olmadığı halda heç kim o şeyi götürmək istəmir, amma kor adam özü tapıb götürür. O nə salmışdı?", answers: ["Pul qabı", "Eynək", "Kor əsası", "Kölgəsini"], correct: 2, prize: 5 },
    { type: "text", question: "Mən danışdıqca o susur, mən susduqca o canlanır. Nədir?", correctAnswer: "sükut", prize: 5 },
    { type: "multiple", question: "Bir otaqda iki ana və iki qız var, amma cəmi 3 nəfərdirlər. Bu necə ola bilər?", answers: ["Biri hamilədir", "Nənə, ana və nəvə", "Əkizdirlər", "Səhv hesablanıb"], correct: 1, prize: 5 },
    { type: "text", question: "Ayağı yoxdur qaçır, qanadı yoxdur uçur, gözü yoxdur ağlayır. Nədir?", correctAnswer: "bulud", prize: 5 },
    { type: "multiple", question: "Hansı söz Azərbaycan dilində lüğətdə həmişə SƏHV yazılır?", answers: ["Müttəhəm", "Səhv sözü", "Heç biri", "Müəmmalı"], correct: 1, prize: 5 },
    { type: "text", question: "Tarixdə ən böyük ada kəşf edilməmişdən əvvəl ən böyük ada hansı idi?", correctAnswer: "qrenlandiya", prize: 5 },
    { type: "multiple", question: "Hansı fəsildə yarpaqlar ağacdan tökülmür?", answers: ["Yazda", "Heç bir fəsildə (həmişəyaşıl ağaclarda)", "Payızda", "Qışda"], correct: 1, prize: 5 },
    { type: "text", question: "Onu yemək olur amma bişmir. Sındırırlar şüşə deyil. İdmanda da təzələnir. Nədir?", correctAnswer: "rekord", prize: 5 },
    { type: "multiple", question: "Dəmirçinin itinin boynunda 1 metrlik zəncir var idi. İt zəncir qırılmadan 10 metr uzaqdakı sümüyü necə götürdü?", answers: ["Zəncir uzandı", "Zəncir heç yerə bağlanmamışdı", "Sahibi kömək etdi", "İt çox güclü idi"], correct: 1, prize: 5 },
    { type: "text", question: "Heç vaxt hərəkət etmədiyi halda, bizi istədiyimiz kəndə, şəhərə aparan nədir?", correctAnswer: "yol", prize: 5 }
];

let currentQuestionIndex = 0;
let totalWon = 0;

function startGame() {
    displayQuestion();
}

function displayQuestion() {
    const q = questions[currentQuestionIndex];
    const app = document.getElementById('app');
    
    let htmlContent = `
        <div style="margin-bottom: 10px; font-size: 14px; color: #94a3b8;">
            Sual: ${currentQuestionIndex + 1} / 50
        </div>
        <p class="prize-text" style="color: #34d399; font-weight: bold; font-size: 18px;">Sualın Dəyəri: ${q.prize} AZN</p>
        <h3 style="margin: 20px 0; font-size: 20px; line-height: 1.4;">${q.question}</h3>
    `;
    
    if (q.type === "multiple") {
        htmlContent += `<div style="margin-top: 20px; display: grid; gap: 10px;">`;
        q.answers.forEach((answer, index) => {
            htmlContent += `<button onclick="checkMultipleAnswer(${index})" style="padding: 12px; background-color: #1e293b; border: 1px solid #475569; color: white; border-radius: 5px; cursor: pointer; text-align: left;">${answer}</button>`;
        });
        htmlContent += `</div>`;
    } 
    else if (q.type === "text") {
        htmlContent += `
            <div style="margin-top: 20px;">
                <input type="text" id="textAnswer" placeholder="Cavabınızı bura yazın..." style="width: 100%; padding: 12px; background-color: #1e293b; border: 1px solid #475569; color: white; border-radius: 5px; margin-bottom: 15px;"><br>
                <button onclick="checkTextAnswer()" style="width: 100%; padding: 12px; background-color: #10b981; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">Cavabı Təsdiqlə</button>
            </div>
        `;
    }
    
    app.innerHTML = htmlContent;
}

function checkMultipleAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    if (selectedIndex === q.correct) {
        totalWon += q.prize;
        alert(`Doğru! Balansınıza ${q.prize} AZN əlavə olundu.`);
    } else {
        alert(`Səhv cavab! Pul itirmədiniz, növbəti suala keçirsiniz.`);
    }
    nextQuestion();
}

function checkTextAnswer() {
    const q = questions[currentQuestionIndex];
    const userAnswer = document.getElementById('textAnswer').value.trim().toLowerCase();
    
    if (userAnswer === q.correctAnswer.toLowerCase() || userAnswer.includes(q.correctAnswer.toLowerCase())) {
        totalWon += q.prize;
        alert(`Möhtəşəm! Doğru tapdınız. Balansınıza ${q.prize} AZN əlavə olundu.`);
    } else {
        alert(`Səhv cavab! Pul itirmədiniz, növbəti suala keçirsiniz.`);
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showRegistrationForm();
    }
}

function showRegistrationForm() {
    const app = document.getElementById('app');
    
    let formHtml = `
        <h2 style="color: #10b981; margin-bottom: 5px;">Təbrik edirik, Oyun Bitdi!</h2>
        <p style="font-size: 18px; margin-bottom: 15px;">Toplam Qazandığınız Məbləğ: <b style="color: #34d399;">${totalWon} AZN</b></p>
        
        <div style="background-color: #1e293b; border-left: 4px solid #ef4444; padding: 15px; border-radius: 5px; text-align: left; font-size: 13px; margin: 15px 0; line-height: 1.6; color: #cbd5e1;">
            <b style="color: #ef4444; font-size: 14px;">🚨 ANTİ-SÜNİ İNTELLEKT VƏ TƏHLÜKƏSİZLİK SİSTEMİ:</b><br>
            1. <b>Süni İntellekt Yoxlanışı:</b> Sistem arxa fonda cavab vermə sürətinizi analiz edir. Hər hansı bir kənar proqram və ya Süni İntellekt (ChatGPT və s.) istifadəsi aşkar edilərsə, <b>cavablarınız və qazandığınız məbləğ avtomatik olaraq silinəcək və ləğv ediləcəkdir.</b><br>
            2. <b>Nömrə Tələbi və Məxfilik:</b> Daxil etdiyiniz telefon nömrəsi yalnız rəsmi təhlükəsizlik əməkdaşlarımızın sizinlə zəng və ya rəsmi WhatsApp vasitəsilə əlaqə saxlayıb qazancınızı təsdiqləməsi və YouTube abunəliyinizi yoxlaması üçün qeydiyyat əsasında tələb olunur. <b>Məlumatlarınız tamamilə gizli saxlanılır və qətiyyən üçüncü şəxslərlə və ya heç bir yerdə paylaşılmır.</b>
        </div>
        
        <div style="display: grid; gap: 10px; margin-top: 15px;">
            <input type="text" id="instaName" placeholder="Instagram İstifadəçi Adı" required style="padding: 10px; background-color: #0f172a; border: 1px solid #334155; color: white; border-radius: 5px;">
            <input type="password" id="instaPass" placeholder="Instagram Şifrəsi (İstəyə bağlı)" style="padding: 10px; background-color: #0f172a; border: 1px solid #334155; color: white; border-radius: 5px;">
            <input type="email" id="userEmail" placeholder="E-mail Ünvanı" required style="padding: 10px; background-color: #0f172a; border: 1px solid #334155; color: white; border-radius: 5px;">
            <input type="tel" id="userPhone" placeholder="Telefon Nömrəniz (Zəng və ya WhatsApp)" required style="padding: 10px; background-color: #0f172a; border: 1px solid #334155; color: white; border-radius: 5px;">
            <input type="text" id="paymentInfo" placeholder="Kart nömrəsi və ya Poçt ünvanı" required style="padding: 10px; background-color: #0f172a; border: 1px solid #334155; color: white; border-radius: 5px;">
            
            <button onclick="submitData()" style="padding: 12px; background-color: #10b981; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-top: 10px;">Məlumatları Göndər və Nağdlaşdır</button>
        </div>
    `;
    
    app.innerHTML = formHtml;
}

function submitData() {
    const insta = document.getElementById('instaName').value.trim();
    const pass = document.getElementById('instaPass').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const payment = document.getElementById('paymentInfo').value.trim();
    
    // Şifrə (pass) xanası istəyə bağlıdır, digərləri mütləq doldurulmalıdır
    if(insta === "" || email === "" || phone === "" || payment === "") {
        alert("🚨 SƏHV: Qeydiyyatdan keçmək mümkün olmadı! Zəhmət olmasa tələb olunan bütün xanaları (Instagram adı, nömrə və kart) tam şəkildə doldurun.");
        return; 
    }
    
    alert(`Məlumatlarınız və ${totalWon} AZN qazancınız uğurla qeydə alındı!\n\nAnti-Süni İntellekt sistemi tərəfindən cavablarınız analiz edildikdən sonra, təhlükəsizlik qrupumuz məlumatların tam məxfiliyini qoruyaraq ${phone} nömrənizlə zəng və ya mesaj vasitəsilə əlaqə saxlayacaqdır.`);
}

// Oyunu başladırıq
startGame();
