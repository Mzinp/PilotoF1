// --- ESTRUTURA DE DADOS COMPLETA ---
const f1Data = {
    // CORES (ESSENCIAL PARA O TEMA)
    colors: {
        "RedBull": { primary: '#030869', secondary: '#f0f0f0' }, 
        "Ferrari": { primary: '#d20000', secondary: '#f0f0f0' }, 
        "Mercedes": { primary: '#00a19c', secondary: '#000000' }, 
        "McLaren": { primary: '#ff8700', secondary: '#000000' }, 
        "AstonMartin": { primary: '#005f56', secondary: '#f0f0f0' }, 
        "Default": { primary: '#e10600', secondary: '#000000' }
    },
    
    // 1. Dados dos Pilotos (Fatos)
    drivers: {
        "VER": { 
            name: "Max Verstappen", 
            team: "RedBull", 
            curiosities: [
                "É o mais jovem a participar de um Grande Prêmio (17 anos).", 
                "Conhecido por seu estilo de pilotagem agressivo e direto.",
                "Venceu seu primeiro título no final da volta final de 2021."
            ]
        },
        "LEC": { 
            name: "Charles Leclerc", 
            team: "Ferrari", 
            curiosities: [
                "Nasceu em Mônaco e pilotar em casa é um sonho realizado.",
                "É um dos pilotos mais rápidos em voltas de qualificação.",
                "Foi campeão da GP3 Series em 2016 e da Fórmula 2 em 2017."
            ]
        },
        "HAM": { 
            name: "Lewis Hamilton", 
            team: "Mercedes", 
            curiosities: [
                "É o recordista de mais vitórias e pole positions na história da F1.",
                "Sete vezes campeão mundial, empatado com Michael Schumacher.",
                "Conhecido por seu ativismo social e sua paixão pela moda."
            ]
        },
        "NOR": { 
            name: "Lando Norris", 
            team: "McLaren", 
            curiosities: [
                "Começou sua carreira no kart aos 7 anos.",
                "Muito ativo em eSports e transmissões de jogos online.",
                "Conhecido por sua personalidade carismática e bom humor."
            ]
        },
        "ALO": { 
            name: "Fernando Alonso", 
            team: "AstonMartin", 
            curiosities: [
                "Bicampeão mundial de F1 e vencedor das 24 Horas de Le Mans.",
                "Apelidado de 'El Nano', é conhecido por sua inteligência tática.",
                "Teve um breve período sabático da F1 para competir em outras categorias."
            ]
        }
    },

    // 2. Dados das Equipes (História e Logos)
    teams: {
        "RedBull": { fullName: "Oracle Red Bull Racing", base: "Milton Keynes, Reino Unido", titles: "6 Títulos de Construtores", history: "Fundada em 2005... Conhecida por sua agressividade estratégica.", logoUrl: "images/Logo-RedBull.png" },
        "Ferrari": { fullName: "Scuderia Ferrari", base: "Maranello, Itália", titles: "16 Títulos de Construtores", history: "A equipe mais antiga e bem-sucedida da Fórmula 1... É um símbolo nacional italiano.", logoUrl: "images/Logo-Ferrari.png" },
        "Mercedes": { fullName: "Mercedes-AMG PETRONAS F1 Team", base: "Brackley, Reino Unido", titles: "8 Títulos de Construtores", history: "Dominou a era híbrida (2014-2021) de forma inédita...", logoUrl: "images/Logo-Mercedes.png" },
        "McLaren": { fullName: "McLaren Formula 1 Team", base: "Woking, Reino Unido", titles: "8 Títulos de Construtores", history: "Uma das equipes mais vitoriosas e tradicionais... Passou por altos e baixos.", logoUrl: "images/Logo-McLaren.png" },
        "AstonMartin": { fullName: "Aston Martin Aramco F1 Team", base: "Silverstone, Reino Unido", titles: "0 Títulos de Construtores (como Aston Martin)", history: "A marca Aston Martin retornou à F1 em 2021... Investe pesado para se tornar uma das principais forças do grid.", logoUrl: "images/Logo-AstonMartin.png" },
    },
    
    // 3. Dados dos Circuitos (História, Recordes)
    circuits: {
        "bahrein": {
            nome: "Circuito Internacional do Bahrein",
            local: "Sakhir, Bahrein",
            detalhes: "Conhecido por ser a primeira corrida noturna da F1 e por sua areia do deserto, exigindo alta gestão de pneus.",
            recorde: "1:31.447 (Pedro de la Rosa, 2005)"
        },
        "jeddah": {
            nome: "Circuito da Corniche de Jeddah",
            local: "Jeddah, Arábia Saudita",
            detalhes: "Circuito de rua mais rápido do mundo, famoso por suas curvas de alta velocidade e muros próximos. Uma corrida emocionante e perigosa.",
            recorde: "1:30.734 (Lewis Hamilton, 2021)"
        },
        "melbourne": {
            nome: "Circuito Albert Park",
            local: "Melbourne, Austrália",
            detalhes: "Um circuito semi-permanente em um parque, o asfalto é sempre 'verde' no início do fim de semana, com alta evolução da pista.",
            recorde: "1:20.235 (Max Verstappen, 2023)"
        },
        "imola": {
            nome: "Autódromo Enzo e Dino Ferrari",
            local: "Imola, Itália",
            detalhes: "Um circuito clássico e de alta técnica, com curvas icônicas como a Tamburello. Exige precisão e puni erros.",
            recorde: "1:15.484 (Lewis Hamilton, 2020)"
        },
        "monaco": {
            nome: "Circuito de Monte Carlo",
            local: "Monte Carlo, Mônaco",
            detalhes: "O circuito de rua mais glamoroso e lento, onde a qualificação é crucial. É o auge da pilotagem de precisão.",
            recorde: "1:12.909 (Lewis Hamilton, 2021)"
        },
        "spa": {
            nome: "Circuito de Spa-Francorchamps",
            local: "Stavelot, Bélgica",
            detalhes: "O circuito favorito de muitos pilotos, longo e de alta velocidade. Famoso pela subida do Eau Rouge e pela imprevisibilidade do clima.",
            recorde: "1:46.286 (Valtteri Bottas, 2018)"
        },
        "interlagos": {
            nome: "Autódromo José Carlos Pace",
            local: "São Paulo, Brasil",
            detalhes: "Circuito anti-horário com terreno ondulado e clima imprevisível, conhecido por produzir corridas caóticas e memoráveis.",
            recorde: "1:10.549 (Valtteri Bottas, 2018)"
        }
    }
};


// --- FUNÇÃO AUXILIAR PARA CAPITALIZAÇÃO ---
// Necessário para transformar 'bahrein' em 'Bahrein' e casar com Mapa-Bahrein.png
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// --- FUNÇÕES DE EXIBIÇÃO E PERSONALIZAÇÃO ---

function applyPersonalization() {
    const primaryColor = localStorage.getItem('f1_primary_color');
    const secondaryColor = localStorage.getItem('f1_secondary_color');
    const userTeam = localStorage.getItem('f1_user_team');
    const userDriver = localStorage.getItem('f1_user_driver');
    
    // CORREÇÃO PRINCIPAL: Aplica as cores ao elemento raiz (:root)
    if (primaryColor && secondaryColor) {
        document.documentElement.style.setProperty('--f1-primary', primaryColor);
        document.documentElement.style.setProperty('--f1-secondary', secondaryColor);
    }
    
    // Chama a exibição da equipe e do piloto
    if (userTeam) {
        displayTeamHistory(userTeam);
    }
    if (userDriver) {
        displayDriverFacts(userDriver);
    }
}

function updateHeaderGreeting(username) {
    const greetingLink = document.getElementById('user-greeting');
    if (username) {
        greetingLink.innerHTML = `Olá, ${username} 👋 | Logout`; 
        greetingLink.href = "#"; 
        greetingLink.addEventListener('click', logoutUser);
    } else {
        greetingLink.innerHTML = 'Login/Registro';
        greetingLink.href = '/registro';
        greetingLink.removeEventListener('click', logoutUser); 
    }
}

function displayTeamHistory(teamKey) {
    const teamData = f1Data.teams[teamKey]; 
    const colorData = f1Data.colors[teamKey]; 
    const teamContent = document.querySelector('#team-history-section .team-history-content');
    
    const primary = colorData ? colorData.primary : f1Data.colors.Default.primary;
    
    const teamSection = document.getElementById('team-history-section');
    if (teamSection) {
        teamSection.style.borderTop = `5px solid ${primary}`; 
    }

    // ⭐ CORREÇÃO 1: REMOVIDO .toLowerCase() e ajustado para o prefixo 'Logo-'
    // Caminho procurado: images/Logo-RedBull.png
    const logoPath = `images/Logo-${teamKey}.png`; 

    if (teamData) {
        teamContent.innerHTML = `
            <div class="team-header">
                <img src="${logoPath}" alt="Logo ${teamData.fullName}" class="team-logo">
                <h2>🏆 História da ${teamData.fullName}</h2>
            </div>
            
            <div class="team-details-grid">
                <div class="detail-card">
                    <h4>🌎 Base de Operações</h4>
                    <p>${teamData.base}</p>
                </div>
                <div class="detail-card">
                    <h4>🥇 Títulos de Construtores</h4>
                    <p>${teamData.titles}</p>
                </div>
            </div>
            
            <p class="team-description">
                ${teamData.history}
            </p>
            
            <a href="https://www.formula1.com/en/teams/${teamData.fullName.replace(/\s/g, '-')}.html" target="_blank" class="team-cta" style="background-color: var(--f1-primary); color: var(--f1-light);">Ver Perfil Completo na F1</a>
        `;
        teamSection.style.display = 'block';
    }
}

function displayDriverFacts(driverKey) {
    const data = f1Data.drivers[driverKey];
    const factsContent = document.querySelector('#driver-facts-section .facts-content');
    
    const userTeam = localStorage.getItem('f1_user_team');
    const colorData = f1Data.colors[userTeam] || f1Data.colors[data.team] || f1Data.colors["Default"];
    const primaryColor = colorData.primary;

    if (data) {
        const driverSection = document.getElementById('driver-facts-section');
        if (driverSection) {
            driverSection.style.borderLeft = `5px solid ${primaryColor}`;
        }

        // ⭐ CORREÇÃO 2: REMOVIDO .toLowerCase() e ajustado para o prefixo 'Driver-'
        // Caminho procurado: images/Driver-VER.png, images/Driver-LEC.png, etc.
        const driverPhotoPath = `images/Driver-${driverKey}.png`;
        
        factsContent.innerHTML = `
            <div class="driver-facts-header">
                <img src="${driverPhotoPath}" alt="Foto do Piloto ${data.name}" class="driver-photo"> 
                <div>
                    <h3>🏎️ Curiosidades sobre ${data.name} (${data.team})</h3>
                    <p>🚀 Conheça os fatos que fazem deste piloto uma lenda!</p>
                </div>
            </div>
            <ul>
                ${data.curiosities.map(fact => `<li><span class="fact-icon">⭐</span> ${fact}</li>`).join('')}
            </ul>
        `;
        driverSection.style.display = 'block';
    }
}

function logoutUser(event) {
    if (event) event.preventDefault();
    localStorage.clear(); 
    window.location.reload(); 
}

function displayCircuitDetails(gpKey) {
    const data = f1Data.circuits[gpKey];
    const detailsPanel = document.getElementById('circuit-details');

    if (data) {
        // ⭐ CORREÇÃO 3: Ajustado para o prefixo 'Mapa-' e capitalizando o GP Key
        // Ex: Transforma 'bahrein' em 'Bahrein' para casar com o arquivo 'Mapa-Bahrein.png'
        const capitalizedGpKey = capitalizeFirstLetter(gpKey);
        const mapPath = `images/Mapa-${capitalizedGpKey}.png`;
        
        detailsPanel.innerHTML = `
            <h2>${data.nome}</h2>
            <h3>Localização: ${data.local}</h3>
            <p><strong>Descrição:</strong> ${data.detalhes}</p>
            <p><strong>Recorde de Volta:</strong> ${data.recorde}</p>
            <img src="${mapPath}" alt="Foto da pista ${data.nome}" style="margin-top: 30px; max-width: 100%; border-radius: 5px; border: 3px solid var(--f1-primary);">
        `;
    }
}

// --- INICIALIZAÇÃO ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplica a Personalização (tema)
    applyPersonalization();

    // 2. Inicializa o Login
    const savedUsername = localStorage.getItem('f1_username');
    updateHeaderGreeting(savedUsername);

    // 3. Inicializa Circuitos
    document.querySelectorAll('.circuit-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos
            document.querySelectorAll('.circuit-item').forEach(i => i.classList.remove('active'));
            // Adiciona a classe 'active' no clicado
            this.classList.add('active'); 
            displayCircuitDetails(this.dataset.gp);
        });
    });
    
    // 4. Adiciona o evento para o menu hambúrguer (Responsividade)
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }
    
    // 5. Simula um clique no primeiro GP para carregar os detalhes iniciais
    const firstCircuit = document.querySelector('.circuit-item');
    if (firstCircuit) {
        firstCircuit.click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JS carregou ✔️");

    document.querySelectorAll('.circuit-item').forEach(item => {
        item.addEventListener('click', () => {
            console.log("clicou no:", item.dataset.gp);
        });
    });
});
