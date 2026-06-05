// ====================== Milyonçu Lotto - game.js ======================

let currentPlayer = null;
let gameInterval = null;
let drawInterval = null;
let drawnNumbers = [];
let timer = 180;
let allRows = [];
let currentDrawNumber = null;
let lastDrawTime = 0;

function savePlayer(player) {
    localStorage.setItem('milyoncu_player', JSON.stringify(player));
}

function loadPlayer() {
    const saved = localStorage.getItem('milyoncu_player');
    return saved ? JSON.parse(saved) : null;
}

function getPlayerKey(fullname, email, phone) {
    return (fullname + email + phone).toLowerCase().replace(/\s/g, '');
}

// Ad Soyad yoxlaması (yalnız Azərbaycan hərfləri)
function validateFullname(firstname, lastname) {
    const azRegex = /^[a-zA-ZçğıöşüəÇĞİÖŞÜƏ]+$/;
    
    if (!firstname || firstname.trim().length < 2) return false;
    if (!lastname || lastname.trim().length < 2) return false;
    if (!azRegex.test(firstname.trim())) return false;
    if (!azRegex.test(lastname.trim())) return false;
    
    return true;
}

// ====================== Qeydiyyat ======================
function startRegistration() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    
    if (!validateFullname(firstname, lastname)) {
        alert("❌ Ad və Soyad tam və düzgün yazılmalıdır!\n\n✅ Ad minimum 2 hərf\n✅ Soyad minimum 2 hərf\n✅ Yalnız Azərbaycan hərfləri (ç, ş, ğ, ö, ü, ə, ı, i)\n\n❌ Rəqəm və xüsusi simvol olmaz!\n\n📝 Nümunə: Elçin Məmmədov");
        return;
    }
    
    const fullname = firstname + " " + lastname;
    sessionStorage.setItem('reg_fullname', fullname);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('reg-screen').classList.remove('hidden');
}

document.getElementById('pre-reg-form').onsubmit = function(e) {
    e.preventDefault();
    
    const fullname = sessionStorage.getItem('reg_fullname') || '';
    const email = document.getElementById('email').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const password = document.getElementById('password').value.trim();
    let card = document.getElementById('card').value.trim();
    let phone = document.getElementById('phone').value.trim();
    
    if (!fullname || !email || !instagram || !password || !card || !phone) {
        alert("Bütün sahələr mütləq doldurulmalıdır!");
        return;
    }

    if (card.length !== 14 || isNaN(card)) {
        alert("Kart nömrəsi tam 14 rəqəm olmalıdır!");
        return;
    }

    if (!phone.startsWith('+994') || phone.length !== 13) {
        alert("Whatsapp nömrəsi +994 ilə başlamalı və 13 rəqəm olmalıdır!\nMəs: +994501234567");
        return;
    }
    const phoneDigits = phone.substring(1);
    if (isNaN(phoneDigits)) {
        alert("Telefon nömrəsində yalnız rəqəm ola bilər!");
        return;
    }

    const key = getPlayerKey(fullname, email, phone);
    let existingPlayer = loadPlayer();
    
    if (existingPlayer && getPlayerKey(existingPlayer.fullname, existingPlayer.email, existingPlayer.phone) === key) {
        currentPlayer = existingPlayer;
        alert("✅ Profiliniz tapıldı! Xoş gəldiniz, " + fullname);
    } else {
        currentPlayer = {
            fullname: fullname,
            email: email,
            instagram: instagram,
            password: password,
            card: card,
            phone: phone,
            balance: existingPlayer ? existingPlayer.balance : 0,
            lastPlayTime: null
        };
        alert("✅ Qeydiyyat uğurla tamamlandı! 🎉");
    }
    
    savePlayer(currentPlayer);
    showProfileScreen();
};

// ====================== Profil ======================
function showProfileScreen() {
    document.getElementById('reg-screen').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
    
    document.getElementById('profile-info').innerHTML = `
        <strong>Ad Soyad:</strong> ${currentPlayer.fullname}<br>
        <strong>Email:</strong> ${currentPlayer.email}<br>
        <strong>Instagram:</strong> ${currentPlayer.instagram}<br>
        <strong>Telefon:</strong> ${currentPlayer.phone}<br>
        <strong>Kart Nömrəsi:</strong> ${currentPlayer.card}
    `;
    
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    document.getElementById('balance-info').innerHTML = `💰 Balansınız: <strong>${currentPlayer.balance || 0} AZN</strong>`;
}

function startGameFromProfile() {
    if (!currentPlayer) return;
    
    const now = new Date();
    if (currentPlayer.lastPlayTime) {
        const last = new Date(currentPlayer.lastPlayTime);
        const hoursPassed = (now - last) / (1000 * 60 * 60);
        if (hoursPassed < 24) {
            const remaining = Math.ceil(24 - hoursPassed);
            alert(`⏰ Son oyundan ${remaining} saat keçməyib.\nYenidən oynamaq üçün ${remaining} saat gözləyin.`);
            return;
        }
    }
    
    currentPlayer.lastPlayTime = now.toISOString();
    savePlayer(currentPlayer);
    
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    initGame();
}

function logout() {
    if (confirm("Profilinizdən çıxmaq istəyirsiniz?")) {
        localStorage.removeItem('milyoncu_player');
        location.reload();
    }
}

// ====================== Oyun ======================
function initGame() {
    drawnNumbers = [];
    allRows = [];
    timer = 180;
    currentDrawNumber = null;
    lastDrawTime = Date.now();
    
    document.getElementById('current-circle').textContent = '?';
    document.getElementById('timer').textContent = `⏱ ${timer}s`;
    
    const ticketsContainer = document.getElementById('tickets-container');
    ticketsContainer.innerHTML = '';
    
    for (let t = 0; t < 2; t++) {
        const ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        ticketDiv.innerHTML = `<h4>🎫 Bilet ${t+1}</h4>`;
        
        for (let r = 0; r < 3; r++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            const rowNumbers = [];
            
            while (rowNumbers.length < 5) {
                const num = Math.floor(Math.random() * 90) + 1;
                if (!rowNumbers.includes(num)) rowNumbers.push(num);
            }
            rowNumbers.sort((a, b) => a - b);
            
            const rowData = { elements: [], numbers: rowNumbers };
            
            rowNumbers.forEach(num => {
                const numEl = document.createElement('div');
                numEl.className = 'num';
                numEl.textContent = num;
                numEl.dataset.number = num;
                
                numEl.onclick = () => {
                    const clickedNumber = parseInt(numEl.dataset.number);
                    const timeSinceLastDraw = Date.now() - lastDrawTime;
                    
                    if (currentDrawNumber === clickedNumber && timeSinceLastDraw <= 2500) {
                        numEl.classList.toggle('marked');
                    } else {
                        if (currentDrawNumber === null) {
                            alert(`⏳ Hələ heç bir rəqəm çıxmayıb!`);
                        } else if (timeSinceLastDraw > 2500) {
                            alert(`⌛ Vaxt keçdi! "${clickedNumber}" rəqəminə basmaq üçün çox gecikdiniz.\nHər rəqəm 2.5 saniyə ərzində işarələnə bilər!`);
                        } else {
                            alert(`❌ Səhv rəqəm!\nHal-hazırda çıxan rəqəm: ${currentDrawNumber}\nYalnız cari çıxan rəqəmi işarələyə bilərsiniz!`);
                        }
                    }
                };
                
                rowData.elements.push(numEl);
                rowDiv.appendChild(numEl);
            });
            
            ticketDiv.appendChild(rowDiv);
            allRows.push(rowData);
        }
        ticketsContainer.appendChild(ticketDiv);
    }
    
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = `⏱ ${timer}s`;
        if (timer <= 0) endGame();
    }, 1000);
    
    if (drawInterval) clearInterval(drawInterval);
    drawInterval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(drawInterval);
            return;
        }
        
        let newNum;
        do {
            newNum = Math.floor(Math.random() * 90) + 1;
        } while (drawnNumbers.includes(newNum));
        
        drawnNumbers.push(newNum);
        currentDrawNumber = newNum;
        lastDrawTime = Date.now();
        
        document.getElementById('current-circle').textContent = newNum;
        
        setTimeout(() => {
            if (currentDrawNumber === newNum) {
                document.getElementById('current-circle').textContent = '?';
                currentDrawNumber = null;
            }
        }, 2500);
        
    }, 3000);
}

function endGame() {
    if (gameInterval) clearInterval(gameInterval);
    if (drawInterval) clearInterval(drawInterval);
    
    let completedRows = 0;
    
    allRows.forEach(row => {
        const allMarked = row.elements.every(el => el.classList.contains('marked'));
        if (allMarked) completedRows++;
    });
    
    let totalWinnings = 0;
    if (completedRows === 1) totalWinnings = 5;
    else if (completedRows === 2) totalWinnings = 10;
    else if (completedRows === 3) totalWinnings = 30;
    else if (completedRows >= 4) totalWinnings = 50;
    else if (completedRows >= 5) totalWinnings = 100;
    else if (completedRows >= 6) totalWinnings = 200;
    
    if (totalWinnings > 0) {
        currentPlayer.balance = (currentPlayer.balance || 0) + totalWinnings;
        savePlayer(currentPlayer);
    }
    
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    
    let resultText = `✅ Tamamlanan sıra sayı: <strong style="color:#f59e0b;">${completedRows}</strong><br>`;
    if (totalWinnings > 0) {
        resultText += `🎉 Təbriklər! Qazandığınız: <strong style="color:#4ade80;">${totalWinnings} AZN</strong>`;
    } else {
        resultText += `😔 Təəssüf, bu dəfə heç bir sıra tamamlanmadı.`;
    }
    resultText += `<br><br>💰 Ümumi balansınız: <strong style="color:#4ade80;">${currentPlayer.balance || 0} AZN</strong>`;
    
    document.getElementById('final-result').innerHTML = resultText;
}

function showProfileAfterGame() {
    document.getElementById('end-screen').classList.add('hidden');
    showProfileScreen();
}

window.onload = function() {
    const savedPlayer = loadPlayer();
    if (savedPlayer) {
        currentPlayer = savedPlayer;
        document.getElementById('start-screen').classList.add('hidden');
        showProfileScreen();
    }
};
