// ============================================
// JOJO'S BIZARRE ADVENTURE - SCRIPT.JS
// Funcionalidades interactivas y efectos
// ============================================

// ============================================
// ARRAYS DE DATOS CURIOSOS
// ============================================

const curiosidades = [
    {
        titulo: "🎵 Todos los nombres están inspirados en música",
        contenido: "Hirohiko Araki es fan de la música occidental. Muchos personajes tienen nombres de canciones y bandas: Killer Queen (Queen), Gold Experience (Prince), Dio Brando (Ronnie James Dio)."
    },
    {
        titulo: "🕺 Las poses vienen de la moda",
        contenido: "Las poses exageradas están inspiradas en revistas de moda y arte renacentista. Araki se basó en diseños de Versace para crear ese estilo visual único."
    },
    {
        titulo: "🧬 Cada parte es casi una serie diferente",
        contenido: "Jonathan Joestar en era victoriana, Jotaro Kujo en modernidad... Cada parte tiene su propio protagonista, época y estilo artístico completamente distinto."
    },
    {
        titulo: "⏳ Es uno de los mangas más longevos del mundo",
        contenido: "JoJo's comenzó en 1987 y continúa en 2023. Lleva casi 40 años activo, haciéndolo una de las series más consistentes en la historia del manga."
    },
    {
        titulo: "💥 Los Stands iban a ser invisibles",
        contenido: "Hirohiko Araki pensó hacer los Stands invisibles, pero cambió de opinión y les dio diseños únicos. Esta decisión transformó completamente la serie."
    },
    {
        titulo: "🎮 Influenció videojuegos como Persona 5",
        contenido: "El sistema de Stands fue inspiración para Persona 5 y otros juegos. Muchos desarrolladores citan a JoJo's como una influencia clave para sus mecánicas de combate."
    },
    {
        titulo: "🇮🇹 Italia es crucial en la historia",
        contenido: "La Parte 5 (Golden Wind) ocurre en Italia. Araki se inspiró profundamente en la cultura, arquitectura y mafia italiana para crear una de las partes más memorables."
    },
    {
        titulo: "🎨 El estilo artístico evoluciona constantemente",
        contenido: "Los primeros personajes eran extremadamente musculosos. Con el tiempo se volvieron más estilizados y fashion, reflejando la maduración y evolución del mangaka."
    },
    {
        titulo: "👔 Colaboró con Gucci y otras marcas de lujo",
        contenido: "JoJo's ha colaborado con Gucci, Godiva y Jam Home Made. Estas colaboraciones demostraron que el manga puede alcanzar el nivel de marcas internacionales de lujo."
    },
    {
        titulo: "📱 Primera referencia es de 1987",
        contenido: "La serie fue publicada por primera vez en 1987 en Weekly Shōnen Jump. Con 140+ volúmenes, es el segundo manga más largo de Shūeisha, solo superado por Kochikame."
    }
];

// ============================================
// FUNCIONES DE NAVEGACIÓN Y SCROLL
// ============================================

/**
 * Scroll suave a una sección específica
 * @param {string} sectionId - ID de la sección destino
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Scroll al inicio de la página
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// FUNCIONES DE TEMA Y ESTILO
// ============================================

let temaNeon = false;

/**
 * Datos sobre temas alternativos disponibles
 */
const temasAlternativos = [
    {
        nombre: "CYAN WAVE",
        colores: {
            "--color-primary": "#00FFFF",
            "--color-secondary": "#FF00FF",
            "--color-accent": "#00FF00"
        }
    },
    {
        nombre: "MAGENTA CHAOS",
        colores: {
            "--color-primary": "#FF00FF",
            "--color-secondary": "#FFFF00",
            "--color-accent": "#00FFFF"
        }
    },
    {
        nombre: "GOLDEN WIND",
        colores: {
            "--color-primary": "#FFD700",
            "--color-secondary": "#FF8C00",
            "--color-accent": "#FF4500"
        }
    }
];

let indexTemaActual = 0;

/**
 * Cambia el tema visual de la página
 */
function cambiarTema() {
    indexTemaActual = (indexTemaActual + 1) % temasAlternativos.length;
    const tema = temasAlternativos[indexTemaActual];
    
    // Cambiar variables CSS
    Object.entries(tema.colores).forEach(([variable, valor]) => {
        document.documentElement.style.setProperty(variable, valor);
    });
    
    // Mostrar notificación
    mostrarNotificacion(`TEMA ACTIVADO: ${tema.nombre}`);
}

/**
 * Muestra una notificación temporal en pantalla
 * @param {string} mensaje - Mensaje a mostrar
 */
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(90deg, #FF00FF, #00FFFF);
        color: #000;
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: bold;
        box-shadow: 0 0 30px #FF00FF;
        z-index: 9999;
        animation: slideIn 0.5s ease;
    `;
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

/**
 * Muestra un dato curioso aleatorio
 */
function showRandomCuriosity() {
    const curiosidad = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    
    // Crear modal/popup
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const contenido = document.createElement('div');
    contenido.style.cssText = `
        background: linear-gradient(135deg, #1a0a2e, #2d1b4e);
        border: 4px solid #FF00FF;
        padding: 40px;
        max-width: 600px;
        border-radius: 8px;
        box-shadow: 0 0 50px #FF00FF;
        text-align: center;
        animation: scaleIn 0.4s ease;
    `;
    
    contenido.innerHTML = `
        <h2 style="color: #FFFF00; margin-bottom: 20px; font-size: 1.5rem; text-shadow: 0 0 10px #FFFF00;">
            ${curiosidad.titulo}
        </h2>
        <p style="color: #00FFFF; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px; text-shadow: 0 0 5px #00FFFF;">
            ${curiosidad.contenido}
        </p>
        <button onclick="this.closest('div').parentElement.remove()" style="
            background: linear-gradient(90deg, #00FFFF, #FF00FF);
            color: #000;
            border: none;
            padding: 12px 30px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1rem;
            box-shadow: 0 0 15px #00FFFF;
            transition: all 0.3s ease;
        " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
            CERRAR (ESC)
        </button>
    `;
    
    modal.appendChild(contenido);
    document.body.appendChild(modal);
    
    // Cerrar con ESC
    const cerrar = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', cerrar);
        }
    };
    document.addEventListener('keydown', cerrar);
    
    // Cerrar al hacer click fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ============================================
// FUNCIONES DE ANIMACIÓN Y EFECTOS
// ============================================

/**
 * Crea efecto de partículas flotantes
 */
function crearEfectoParticulas() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particulas = [];
    
    // Crear partículas
    for (let i = 0; i < 50; i++) {
        particulas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
        });
    }
    
    // Animar partículas
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particulas.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            // Rebotar en los bordes
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.fillStyle = '#FF00FF';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animar);
    }
    
    animar();
}

// ============================================
// EFECTO DE SCROLL PARALLAX
// ============================================

/**
 * Añade efecto parallax a elementos al hacer scroll
 */
function inicializarParallax() {
    const elements = document.querySelectorAll('.hero-background');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        elements.forEach(el => {
            el.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    });
}

// ============================================
// CONTADOR DE VISUALIZACIONES
// ============================================

/**
 * Inicializa un contador visual de secciones visitadas
 */
function inicializarContadorSecciones() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// EFECTO HOVER EN BOTONES MEJORADO
// ============================================

/**
 * Añade efectos avanzados de hover a botones
 */
function mejorarBotonesHover() {
    const botones = document.querySelectorAll('.btn, .nav-link');
    
    botones.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px currentColor';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
}

// ============================================
// ANIMACIÓN DE NÚMEROS (STATS)
// ============================================

/**
 * Anima números de forma progresiva
 */
function animarNumeros() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                const numero = entry.target.textContent;
                
                if (numero !== '∞') {
                    let actual = 0;
                    const meta = parseInt(numero);
                    const incremento = meta / 30;
                    
                    const intervalo = setInterval(() => {
                        actual += incremento;
                        if (actual >= meta) {
                            entry.target.textContent = numero;
                            clearInterval(intervalo);
                        } else {
                            entry.target.textContent = Math.floor(actual);
                        }
                    }, 30);
                }
                
                entry.target.animated = true;
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

/**
 * Implementa atajos de teclado
 */
function inicializarAtalos() {
    document.addEventListener('keydown', (e) => {
        // ALT + H: Ir al inicio
        if (e.altKey && e.key === 'h') {
            scrollToTop();
        }
        
        // ALT + T: Cambiar tema
        if (e.altKey && e.key === 't') {
            cambiarTema();
        }
        
        // ALT + D: Dato curioso
        if (e.altKey && e.key === 'd') {
            showRandomCuriosity();
        }
    });
}

// ============================================
// DETECTAR NAVEGADOR Y DISPOSITIVO
// ============================================

/**
 * Log de compatibilidad
 */
function detectarDispositivo() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(isMobile ? '📱 Dispositivo móvil detectado' : '💻 Dispositivo de escritorio detectado');
}

// ============================================
// GALERÍA VISUAL INFINITA
// ============================================

function initializeInfiniteGallery() {
    const scrollContent = document.querySelector('.infinite-scroll-content');
    if (!scrollContent) return;

    const originalItems = Array.from(scrollContent.children);
    // Duplicar las imágenes para el scroll infinito
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌀 JoJo\'s Bizarre Adventure - Página cargada');
    console.log('Atajos: ALT+H (Inicio), ALT+T (Tema), ALT+D (Dato)');
    
    // Inicializar todas las funcionalidades
    inicializarParallax();
    inicializarContadorSecciones();
    mejorarBotonesHover();
    animarNumeros();
    inicializarAtalos();
    detectarDispositivo();
    initializeInfiniteGallery(); // Inicializar galería infinita
    
    // Event Listeners
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', cambiarTema);
    }
    
    // Log inicial
    console.log(`%c
    ⬢ JOJO'S BIZARRE ADVENTURE ⬢
    Una página web tan bizarra como la serie
    ⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢
    `, 'color: #FF00FF; font-size: 14px; font-weight: bold; text-shadow: 0 0 20px #FF00FF');
});

// ============================================
// ANIMACIONES CSS (A AGREGAR EN STYLE)
// ============================================

// Crear una hoja de estilo dinámica para animaciones que no están en el CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px currentColor; }
        50% { box-shadow: 0 0 40px currentColor; }
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('✓ Script JS cargado exitosamente');
