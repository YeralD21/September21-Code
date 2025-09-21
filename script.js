// Frases románticas poéticas
const romanticPhrases = [
    "Tus ojos son dos luceros que alumbran mi noche sin luna.",
    "Si el alma tuviera voz, la mía te llamaría en cada suspiro.",
    "Eres el verso que mi corazón escribe cuando el silencio me abraza.",
    "Te pienso como el mar piensa en la luna: con deseo, con distancia, con eternidad.",
    "Amarte es como leer un poema sin final, donde cada palabra es un latido.",
    "Tu ausencia es un jardín sin flores, un cielo sin estrellas, un poema sin tinta.",
    "Si el tiempo se detuviera, lo haría en el instante en que tus labios rozan los míos.",
    "No hay reloj que mida el amor, ni calendario que lo encierre: solo el alma sabe cuánto te ama.",
    "Eres la melodía que mi pecho canta cuando el mundo calla.",
    "Mi amor por ti no tiene fecha ni frontera: es un suspiro eterno en la brisa del alma."
];

// Variables globales
let currentPhraseIndex = 0;
let isTyping = false;
let fallingFlowersInterval;
let heartsInterval;
let backgroundMusic;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar alert romántico primero
    showRomanticAlert();
});

// Función para crear flores cayendo
function createFallingFlower() {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.innerHTML = '🌸';
    
    // Posición aleatoria
    flower.style.left = Math.random() * 100 + '%';
    
    // Tamaño aleatorio
    const size = Math.random() * 20 + 15;
    flower.style.fontSize = size + 'px';
    
    // Duración aleatoria de animación
    const duration = Math.random() * 3 + 4;
    flower.style.animationDuration = duration + 's';
    
    // Opacidad aleatoria
    flower.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.getElementById('fallingFlowers').appendChild(flower);
    
    // Remover la flor después de la animación
    setTimeout(() => {
        if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
        }
    }, duration * 1000);
}

// Iniciar flores cayendo
function startFallingFlowers() {
    // Crear flores iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFallingFlower(), i * 500);
    }
    
    // Continuar creando flores
    fallingFlowersInterval = setInterval(createFallingFlower, 800);
}

// Funciones de flores decorativas eliminadas para diseño minimalista

// Función de efecto máquina de escribir
function typeWriter(text, element, callback) {
    isTyping = true;
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50); // Velocidad de escritura
        } else {
            isTyping = false;
            // Mostrar cursor parpadeante
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            element.appendChild(cursor);
            
            // Remover cursor después de un tiempo
            setTimeout(() => {
                if (cursor.parentNode) {
                    cursor.parentNode.removeChild(cursor);
                }
                if (callback) callback();
            }, 2000);
        }
    }
    
    type();
}

// Iniciar secuencia romántica
function startRomanticSequence() {
    const phraseContainer = document.getElementById('phraseContainer');
    
    function showNextPhrase() {
        if (currentPhraseIndex < romanticPhrases.length) {
            const phraseElement = document.createElement('div');
            phraseElement.className = 'phrase';
            phraseContainer.innerHTML = '';
            phraseContainer.appendChild(phraseElement);
            
            typeWriter(romanticPhrases[currentPhraseIndex], phraseElement, () => {
                currentPhraseIndex++;
                setTimeout(showNextPhrase, 1500); // Pausa entre frases
            });
        } else {
            // Mostrar mensaje final
            setTimeout(showFinalMessage, 2000);
        }
    }
    
    showNextPhrase();
}

// Mostrar mensaje final
function showFinalMessage() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.classList.add('show');
    
    // Iniciar corazones flotantes
    startFloatingHearts();
}

// Crear corazón flotante
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + '%';
    
    // Tamaño aleatorio
    const size = Math.random() * 20 + 20;
    heart.style.fontSize = size + 'px';
    
    // Duración aleatoria de animación
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + 's';
    
    // Delay aleatorio
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('floatingHearts').appendChild(heart);
    
    // Remover el corazón después de la animación
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, (duration + 2) * 1000);
}

// Iniciar corazones flotantes
function startFloatingHearts() {
    // Crear corazones iniciales
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFloatingHeart(), i * 300);
    }
    
    // Continuar creando corazones
    heartsInterval = setInterval(createFloatingHeart, 1000);
}

// Función para limpiar intervalos (opcional, para optimización)
function cleanup() {
    if (fallingFlowersInterval) {
        clearInterval(fallingFlowersInterval);
    }
    if (heartsInterval) {
        clearInterval(heartsInterval);
    }
}

// Mostrar alert romántico
function showRomanticAlert() {
    const alertOverlay = document.createElement('div');
    alertOverlay.id = 'romanticAlert';
    alertOverlay.innerHTML = `
        <div class="romantic-alert-content">
            <div class="romantic-heart">💖</div>
            <h2>¿Quién es mi Princesa?</h2>
            <button class="romantic-btn" id="activateRomance">Yo ❤️</button>
        </div>
    `;
    
    document.body.appendChild(alertOverlay);
    
    // Agregar evento al botón
    const btn = document.getElementById('activateRomance');
    btn.addEventListener('click', activateRomanticExperience);
}

// Activar experiencia romántica completa
function activateRomanticExperience() {
    // Remover el alert
    const alert = document.getElementById('romanticAlert');
    if (alert) {
        alert.style.opacity = '0';
        alert.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }
    
    // Inicializar audio y experiencia
    initializeAudio();
    startFallingFlowers();
    startFallingPetals();
    
    // Iniciar la secuencia después de que aparezca el mensaje inicial
    setTimeout(() => {
        startRomanticSequence();
    }, 4000);
}

// Inicializar audio para reproducción automática
function initializeAudio() {
    backgroundMusic = document.getElementById('backgroundMusic');
    
    // Configurar volumen inicial
    backgroundMusic.volume = 0.4;
    backgroundMusic.muted = false;
    backgroundMusic.preload = 'auto';
    
    // Reproducir música (ahora con interacción del usuario)
    backgroundMusic.play().then(() => {
        console.log('Música activada exitosamente');
    }).catch(error => {
        console.log('Error al reproducir música:', error);
    });
    
    // Asegurar que la música se reproduzca en bucle
    backgroundMusic.addEventListener('ended', () => {
        backgroundMusic.currentTime = 0;
        backgroundMusic.play().catch(() => {});
    });
}

// Funciones de activación invisible eliminadas - ahora usamos alert romántico

// Crear pétalos amarillos cayendo
function startFallingPetals() {
    const petalsContainer = document.getElementById('fallingPetals');
    
    // Crear pétalos iniciales
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFallingPetal(petalsContainer), i * 200);
    }
    
    // Continuar creando pétalos
    setInterval(() => createFallingPetal(petalsContainer), 800);
}

// Crear un pétalo individual cayendo
function createFallingPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'falling-petal';
    
    // Variar tamaño
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    petal.classList.add(size);
    
    // Variar opacidad para efecto de profundidad
    const opacities = ['distant', 'near', 'close'];
    const opacity = opacities[Math.floor(Math.random() * opacities.length)];
    petal.classList.add(opacity);
    
    // Posición aleatoria en la parte superior
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = '-50px';
    
    // Duración aleatoria de animación (3-8 segundos)
    const duration = Math.random() * 5 + 3;
    petal.style.animationDuration = duration + 's';
    
    // Delay aleatorio para distribución natural
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    // Rotación inicial aleatoria
    const initialRotation = Math.random() * 360;
    petal.style.transform = `rotate(${initialRotation}deg)`;
    
    container.appendChild(petal);
    
    // Remover el pétalo después de la animación
    setTimeout(() => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    }, (duration + 2) * 1000);
}

// Limpiar cuando se cierre la página
window.addEventListener('beforeunload', cleanup);

// Efecto adicional: hacer que la flor central sea interactiva
document.addEventListener('DOMContentLoaded', function() {
    const flower = document.querySelector('.flower');
    
    flower.addEventListener('click', function() {
        // Crear explosión de pétalos al hacer clic
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.style.position = 'absolute';
                petal.style.width = '20px';
                petal.style.height = '30px';
                petal.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                petal.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
                petal.style.left = '50%';
                petal.style.top = '50%';
                petal.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
                petal.style.animation = `explode 2s ease-out forwards`;
                petal.style.zIndex = '10';
                
                // Añadir animación de explosión
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes explode {
                        0% {
                            transform: translate(-50%, -50%) scale(1) rotate(0deg);
                            opacity: 1;
                        }
                        100% {
                            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0) rotate(720deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                flower.appendChild(petal);
                
                setTimeout(() => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                }, 2000);
            }, i * 100);
        }
    });
});
