// ====================== Milyonçu Lotto - game.js ======================

let currentPlayer = null;
let gameInterval = null;
let drawInterval = null;
let drawnNumbers = [];
let timer = 180;
let allRows = [];

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

// ====================== Qeydiyyat ======================
function startRegistration() {
    const fullname = document.getElementById('fullname').value.trim();
    if (!fullname) {
        alert("Ad və Soyad daxil edin!");
        return;
    }
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('reg-screen').classList.remove('hidden');
}

document.getElementById('pre-reg-form').onsubmit = function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const password = document.getElementById('password').value.trim();
    let card = document.getElementById('card').value.trim();
    let phone = document.getElementById('phone').value.trim();
    
    if (!email || !instagram || !password || !card || !phone) {
        alert("Bütün sahələr mütləq doldurulmalıdır!");
        return;
    }

    // Kart nömrəsi yoxlaması (tam 14 rəqəm)
    if (card.length !== 14 || isNaN(card)) {
        alert("Kart nömrəsi tam 14 rəqəm olmalıdır və yalnız rəqəmlərdən ibarət olmalıdır!");
        return;
    }

    // Telefon nömrəsi yoxlaması (yalnız Azərbaycan nömrəsi + yalnız rəqəm)
    if (!phone.startsWith('+994') || phone.length !== 13) {
        alert("Whatsapp nömrəsi +994 ilə başlamalı və 13 rəqəm olmalıdır!\nMəs: +994501234567");
        return;
    }
    const phoneDigits = phone.substring(1); // +994-dən sonra
    if (isNaN(phoneDigits)) {
        alert("Telefon nömrəsində yalnız rəqəm ola bilər, hərf yazmayın!");
        return;
    }

    const key = getPlayerKey(fullname, email, phone);
    let existingPlayer = loadPlayer();
    
    if (existingPlayer && getPlayerKey(existingPlayer.fullname, existingPlayer.email, existingPlayer.phone) === key) {
        currentPlayer = existingPlayer;
        alert("Profiliniz tapıldı! Xoş gəldiniz, " + fullname);
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
        alert("Qeydiyyat uğurla tamamlandı! 🎉");
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
    document.getElementById('balance-info').innerHTML = `Balansınız: <strong>${currentPlayer.balance || 0} AZN</strong>`;
}

function startGameFromProfile() {
    if (!currentPlayer) return;
    
    const now = new Date();
    if (currentPlayer.lastPlayTime) {
        const last = new Date(currentPlayer.lastPlayTime);
        const hoursPassed = (now - last) / (1000 * 60 * 60);
        if (hoursPassed < 24) {
            const remaining = Math.ceil(24 - hoursPassed);
            alert(`Son oyundan ${remaining} saat keçməyib.\nYenidən oynamaq üçün ${remaining} saat gözləyin.`);
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
    
    document.getElementById('drawn-history').innerHTML = '';
    document.getElementById('current-circle').textContent = '—';
    document.getElementById('timer').textContent = `⏱ ${timer}s`;
    
    const ticketsContainer = document.getElementById('tickets-container');
    ticketsContainer.innerHTML = '';
    
    for (let t = 0; t < 2; t++) {
        const ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        ticketDiv.innerHTML = `<h4>Bilet ${t+1}</h4>`;
        
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
                numEl.onclick = () => numEl.classList.toggle('marked');
                
                rowData.elements.push(numEl);
                rowDiv.appendChild(numEl);
            });
            
            ticketDiv.appendChild(rowDiv);
            allRows.push(rowData);
        }
        ticketsContainer.appendChild(ticketDiv);
    }
    
    // Timer
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = `⏱ ${timer}s`;
        if (timer <= 0) endGame();
    }, 1000);
    
    // Rəqəm çıxarma (təkrarlanmır)
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
        document.getElementById('current-circle').textContent = newNum;
        
        const history = document.getElementById('drawn-history');
        history.innerHTML += (history.children.length > 0 ? ', ' : '') + newNum;
        
        // Avtomatik işarələmə
        allRows.forEach(row => {
            row.elements.forEach(el => {
                if (parseInt(el.dataset.number) === newNum) {
                    el.classList.add('marked');
                }
            });
        });
        
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
    
    if (totalWinnings > 0) {
        currentPlayer.balance = (currentPlayer.balance || 0) + totalWinnings;
        savePlayer(currentPlayer);
    }
    
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    
    let resultText = `Tamamlanan sıra sayı: <strong>${completedRows}</strong><br>`;
    if (totalWinnings > 0) {
        resultText += `Təbriklər! Qazandığınız: <strong>${totalWinnings} AZN</strong>`;
    } else {
        resultText += `Təəssüf, bu dəfə heç bir sıra tamamlanmadı.`;
    }
    resultText += `<br><br>Ümumi balansınız: <strong>${currentPlayer.balance || 0} AZN</strong>`;
    
    document.getElementById('final-result').innerHTML = resultText;
}

function showProfileAfterGame() {
    document.getElementById('end-screen').classList.add('hidden');
    showProfileScreen();
}

// ====================== Səhifə yüklənəndə ======================
window.onload = function() {
    const savedPlayer = loadPlayer();
    if (savedPlayer) {
        currentPlayer = savedPlayer;
        document.getElementById('start-screen').classList.add('hidden');
        showProfileScreen();
    }
};
