import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Setup
const container = document.getElementById('skill-map-3d-canvas');

// Ensure Container has physical dimensions
if (container) {
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '400px'; 
    container.style.overflow = 'hidden';
    container.style.borderRadius = '16px';
    container.style.cursor = 'grab';
    
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 2000);
    camera.position.set(0, 180, 450); 

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.015; // Inercia súper pesada
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false; // Desactiva scroll nativo para no asfixiar el layout al scrollear
    controls.enablePan = false;
    controls.minDistance = 100;
    controls.maxDistance = 800;

    controls.addEventListener('start', () => { container.style.cursor = 'grabbing'; });
    controls.addEventListener('end', () => { container.style.cursor = 'grab'; });

    // Generar textura de destello ("Glow/Halo") procedimentalmente
    function createGlowTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    const particleTexture = createGlowTexture();
    const sprites = [];

    // RADAR DE CRITICIDAD Y RIESGO:
    // - Centro (dist: 55-80): Crítica / Alto Riesgo / Momentos cortos de alta precisión quirúrgica (ej. SQL directo, P6, Control de Gestión)
    // - Zona Media (dist: 115-150): Táctica / Operativa / Análisis y ejecución frecuente (Power BI, Excel, Python/R, Agile, PMBOK)
    // - Periferia (dist: 180-240): Estructural / Base / Continuidad, gobernanza y soporte continuo (Ética, Autopoiesis, Cloud, Bash, Faena, IA Gen)
    const skills = [
        // ================= DURAS (+X, -Z) =================
        // Crítica (Centro)
        { 
            name: "SQL / BigQuery", 
            type: "Dura", 
            riskLevel: "CRÍTICA · ALTO RIESGO", 
            riskBadge: "critical",
            time: "Precisión Quirúrgica", 
            detail: "Intervención de alto riesgo e impacto inmediato: modificación directa de queries productivas, transformación masiva de datos y gobernanza BI.", 
            vector: [0.8, -0.6], 
            dist: 60, 
            color: 0xaed581, 
            size: 32 
        },
        { 
            name: "Oracle P6", 
            type: "Dura", 
            riskLevel: "CRÍTICA · ALTO RIESGO", 
            riskBadge: "critical",
            time: "Control de Faena", 
            detail: "Planificación rotunda y control de cronogramas. Cualquier desviación en ruta crítica impacta directamente la faena.", 
            vector: [0.6, -0.8], 
            dist: 75, 
            color: 0xc5e1a5, 
            size: 30 
        },
        // Táctica (Media)
        { 
            name: "Power BI / DAX", 
            type: "Dura", 
            riskLevel: "TÁCTICA · OPERATIVA", 
            riskBadge: "tactical",
            time: "Analista BI", 
            detail: "Desarrollo y modelado tabular complejo continuo de cuadros de mando gerenciales para toma de decisiones.", 
            vector: [0.5, -0.9], 
            dist: 125, 
            color: 0x66bb6a, 
            size: 30 
        },
        { 
            name: "Excel", 
            type: "Dura", 
            riskLevel: "TÁCTICA · OPERATIVA", 
            riskBadge: "tactical",
            time: "Modelado Base", 
            detail: "Herramienta analítica esencial para modelado rápido, consolidación matricial y control de procesos diarios.", 
            vector: [0.9, -0.4], 
            dist: 140, 
            color: 0xffffff, 
            size: 26 
        },
        // Estructural (Periferia)
        { 
            name: "Cloud / Ops", 
            type: "Dura", 
            riskLevel: "ESTRUCTURAL · BASE", 
            riskBadge: "structural",
            time: "DevOps / Infraestructura", 
            detail: "Soporte de despliegue en la nube y comprensión continua de infraestructura y ecosistemas modernos.", 
            vector: [0.9, -0.2], 
            dist: 190, 
            color: 0xdcedc8, 
            size: 22 
        },
        { 
            name: "Bash / Linux", 
            type: "Dura", 
            riskLevel: "FUNDACIONAL · SOPORTE", 
            riskBadge: "structural",
            time: "Fundamento SO", 
            detail: "Manejo base de SO y terminal para comprensión de infraestructura y automatizaciones sin riesgo crítico puntual.", 
            vector: [0.7, -0.7], 
            dist: 225, 
            color: 0x81c784, 
            size: 20 
        },
        
        // ================= BLANDAS (-X, -Z) =================
        // Crítica (Centro)
        { 
            name: "Control de Gestión", 
            type: "Blanda", 
            riskLevel: "CRÍTICA · ALTO RIESGO", 
            riskBadge: "critical",
            time: "Estratégico / FEN", 
            detail: "Decisiones estratégicas de alto impacto. Alertas tempranas de desviación y supervisión de KPIs neurálgicos de negocio.", 
            vector: [-0.6, -0.8], 
            dist: 65, 
            color: 0x4fc3f7, 
            size: 32 
        },
        // Táctica (Media)
        { 
            name: "Liderazgo / PMBOK", 
            type: "Blanda", 
            riskLevel: "TÁCTICA · OPERATIVA", 
            riskBadge: "tactical",
            time: "Gestión Práctica", 
            detail: "Gestión activa, resolución de conflictos y coordinación de equipos en proyectos tecnológicos e industriales.", 
            vector: [-0.9, -0.6], 
            dist: 130, 
            color: 0x81d4fa, 
            size: 26 
        },
        // Estructural (Periferia)
        { 
            name: "Investigación Social", 
            type: "Blanda", 
            riskLevel: "ESTRUCTURAL · BASE", 
            riskBadge: "structural",
            time: "Técnicas Base", 
            detail: "Rigor metodológico continuo para análisis inferencial, formulación de hipótesis y validación empírica de datos.", 
            vector: [-0.6, -0.8], 
            dist: 180, 
            color: 0xb3e5fc, 
            size: 22 
        },
        { 
            name: "Autopoiesis", 
            type: "Blanda", 
            riskLevel: "EXISTENCIAL · EVOLUCIÓN", 
            riskBadge: "structural",
            time: "Mejora Continua", 
            detail: "Capacidad permanente de auto-organización, regeneración y aprendizaje autogestionado a lo largo del tiempo.", 
            vector: [-0.8, -0.5], 
            dist: 200, 
            color: 0x00bcd4, 
            size: 24 
        },
        { 
            name: "Respeto Universal", 
            type: "Blanda", 
            riskLevel: "ÉTICA · PERMANENTE", 
            riskBadge: "structural",
            time: "Valores Base", 
            detail: "Principio rector permanente de trato digno, respeto transversal e inclusividad en todo entorno laboral.", 
            vector: [-0.95, -0.2], 
            dist: 220, 
            color: 0x4dd0e1, 
            size: 22 
        },
        { 
            name: "Ética Profesional", 
            type: "Blanda", 
            riskLevel: "FUNDAMENTAL · DEONTOLOGÍA", 
            riskBadge: "structural",
            time: "Deontología", 
            detail: "Apego deontológico perenne e inquebrantable que fundamenta la totalidad de la conducta profesional.", 
            vector: [-0.4, -0.9], 
            dist: 235, 
            color: 0x80deea, 
            size: 28 
        },
        
        // ================= HÍBRIDAS (0, +Z) =================
        // Táctica (Media)
        { 
            name: "Python / R", 
            type: "Híbrida", 
            riskLevel: "TÁCTICA · OPERATIVA", 
            riskBadge: "tactical",
            time: "Data & Stats", 
            detail: "Scripts de procesamiento analítico, econometría, pipelines de datos y modelos predictivos en ciclos iterativos.", 
            vector: [0.3, 0.9], 
            dist: 120, 
            color: 0xce93d8, 
            size: 28 
        },
        { 
            name: "Agile / Scrum", 
            type: "Híbrida", 
            riskLevel: "TÁCTICA · OPERATIVA", 
            riskBadge: "tactical",
            time: "Marcos Ágiles", 
            detail: "Iteración continua y entrega adaptativa de valor en el desarrollo de soluciones de analítica de datos.", 
            vector: [-0.4, 0.9], 
            dist: 145, 
            color: 0xf06292, 
            size: 26 
        },
        // Estructural (Periferia)
        { 
            name: "Faena Minera", 
            type: "Híbrida", 
            riskLevel: "ESTRUCTURAL · ENTORNO", 
            riskBadge: "structural",
            time: "Operaciones", 
            detail: "Comprensión integral de faena, logística pesada, seguridad industrial y normativas del sector minero.", 
            vector: [-0.7, 0.7], 
            dist: 185, 
            color: 0xffb74d, 
            size: 25 
        },
        { 
            name: "IA Generativa", 
            type: "Híbrida", 
            riskLevel: "VANGUARDIA · ACELERACIÓN", 
            riskBadge: "structural",
            time: "DataOps & Aceleración", 
            detail: "Optimización continua de flujos, aceleración procedural y asistencia estructurada en la nube.", 
            vector: [0.2, 1.0], 
            dist: 215, 
            color: 0xba68c8, 
            size: 38 
        },
    ];

    const targetGroup = new THREE.Group();
    scene.add(targetGroup);

    // Centro del Radar: Núcleo Crítico (Glow Rojizo / Ámbar de Alta Precisión)
    const centerMat = new THREE.SpriteMaterial({ 
        map: particleTexture, 
        color: 0xff5252, 
        blending: THREE.AdditiveBlending, 
        depthTest: false, 
        transparent: true 
    });
    const centerSprite = new THREE.Sprite(centerMat);
    centerSprite.scale.set(22, 22, 1);
    targetGroup.add(centerSprite);

    // PLANO DE REFERENCIA / ANILLOS CONCÉNTRICOS DEL RADAR (MEDIDOR DE CRITICIDAD)
    function createRadarRing(radius, color = 0xffffff, opacity = 0.25, dashed = false) {
        const segments = 96;
        const points = [];
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        let material;
        if (dashed) {
            material = new THREE.LineDashedMaterial({
                color: color,
                transparent: true,
                opacity: opacity,
                dashSize: 8,
                gapSize: 6
            });
        } else {
            material = new THREE.LineBasicMaterial({
                color: color,
                transparent: true,
                opacity: opacity
            });
        }
        const line = new THREE.Line(geometry, material);
        if (dashed) line.computeLineDistances();
        return line;
    }

    // 1. Anillo Crítico (Centro / Alto Riesgo) - R = 80
    const ringCritical = createRadarRing(80, 0xff5252, 0.45);
    targetGroup.add(ringCritical);

    // 2. Anillo Táctico (Zona Media / Operativa) - R = 150
    const ringTactical = createRadarRing(150, 0xfbbf24, 0.35, true);
    targetGroup.add(ringTactical);

    // 3. Anillo Estructural (Periferia / Base Continua) - R = 235
    const ringStructural = createRadarRing(235, 0x38bdf8, 0.25);
    targetGroup.add(ringStructural);

    // Discos translúcidos para dar profundidad táctica al plano de referencia
    const discGeo1 = new THREE.RingGeometry(0.1, 80, 64);
    const discMat1 = new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0.04, side: THREE.DoubleSide });
    const disc1 = new THREE.Mesh(discGeo1, discMat1);
    disc1.rotation.x = Math.PI / 2;
    targetGroup.add(disc1);

    const discGeo2 = new THREE.RingGeometry(80, 150, 64);
    const discMat2 = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.02, side: THREE.DoubleSide });
    const disc2 = new THREE.Mesh(discGeo2, discMat2);
    disc2.rotation.x = Math.PI / 2;
    targetGroup.add(disc2);

    const discGeo3 = new THREE.RingGeometry(150, 235, 64);
    const discMat3 = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.015, side: THREE.DoubleSide });
    const disc3 = new THREE.Mesh(discGeo3, discMat3);
    disc3.rotation.x = Math.PI / 2;
    targetGroup.add(disc3);

    // Ejes de radar
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 });
    const axisBlanda = [new THREE.Vector3(0,0,0), new THREE.Vector3(-250, 0, -150)];
    const axisDura = [new THREE.Vector3(0,0,0), new THREE.Vector3(250, 0, -150)];
    const axisHyb = [new THREE.Vector3(0,0,0), new THREE.Vector3(0, 0, 250)];
    targetGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(axisBlanda), lineMaterial));
    targetGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(axisDura), lineMaterial));
    targetGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(axisHyb), lineMaterial));

    skills.forEach(skill => {
        const len = Math.sqrt(skill.vector[0]**2 + skill.vector[1]**2);
        const vx = skill.vector[0] / len;
        const vz = skill.vector[1] / len;
        const vy = (Math.random() - 0.5) * 60; // Desplazamiento orgánico vertical
        
        const x = vx * skill.dist;
        const z = vz * skill.dist;
        const y = vy; 

        const material = new THREE.SpriteMaterial({ 
            map: particleTexture, 
            color: skill.color, 
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true
        });
        const sprite = new THREE.Sprite(material);
        sprite.position.set(x, y, z);
        sprite.scale.set(skill.size * 1.5, skill.size * 1.5, 1);
        
        sprite.userData = {
            name: skill.name,
            type: skill.type,
            riskLevel: skill.riskLevel,
            riskBadge: skill.riskBadge,
            time: skill.time,
            detail: skill.detail,
            baseScale: sprite.scale.x
        };
        
        sprites.push(sprite);
        targetGroup.add(sprite);
        
        const link = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), sprite.position]), 
            new THREE.LineBasicMaterial({ color: skill.color, transparent: true, opacity: 0.15 })
        );
        targetGroup.add(link);
    });

    const starGeo = new THREE.BufferGeometry();
    const starCount = 400;
    const starPositions = new Float32Array(starCount * 3);
    for(let i=0; i<starCount*3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 800;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xaabbff, size: 2, transparent:true, opacity: 0.2, blending: THREE.AdditiveBlending });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Rotación inicial base muy tenue
    let autoRotate = true;

    // Raycaster interactivo
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredSprite = null;

    const tooltip = document.getElementById('skill-tooltip-html');
    const tooltipName = document.getElementById('tooltip-name');
    const tooltipType = document.getElementById('tooltip-type');
    const tooltipRisk = document.getElementById('tooltip-risk');
    const tooltipTime = document.getElementById('tooltip-time');
    const tooltipDetail = document.getElementById('tooltip-detail');
    const tooltipClose = document.getElementById('tooltip-close');
    let tooltipPinned = false; // true when user explicitly clicked to keep it open

    // Cerrar manualmente resetea el pin y el sprite activo
    if (tooltipClose) {
        tooltipClose.addEventListener('click', (e) => {
            e.stopPropagation();
            tooltipPinned = false;
            tooltip.style.display = 'none';
            // Sacar el raycaster fuera del canvas para que el loop no reabra el tooltip
            mouse.set(-9999, -9999);
            if (hoveredSprite) {
                hoveredSprite.scale.setScalar(hoveredSprite.userData.baseScale);
                const match = skills.find(s => s.name === hoveredSprite.userData.name);
                if (match) hoveredSprite.material.color.setHex(match.color);
                hoveredSprite = null;
            }
        });
    }

    // Si el cursor entra al tooltip, se "pinna" para no cerrarse
    if (tooltip) {
        tooltip.addEventListener('mouseenter', () => { tooltipPinned = true; });
        tooltip.addEventListener('mouseleave', () => { tooltipPinned = false; });
    }

    container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        // Apagar rotacion mientras se mueve pointer 
        autoRotate = false;
        
        if (tooltip && hoveredSprite) {
            let tx = event.clientX + 15;
            let ty = event.clientY + 15;
            
            // Boundary detection para evitar clipping en mobile/esquinas
            if (tx + 260 > window.innerWidth) tx = event.clientX - 260;
            if (ty + 160 > window.innerHeight) ty = event.clientY - 160;
            
            tooltip.style.left = tx + 'px';
            tooltip.style.top = ty + 'px';
        }
    });

    container.addEventListener('mouseenter', () => autoRotate = false);
    container.addEventListener('mouseleave', () => autoRotate = true);

    const clock = new THREE.Clock();
    
    // Generar labels fijos 3D temporales como "Polos" usando sprites con canvas Text (Optimizadamente)
    function createTextSprite(text, fontColor = 'var(--accent-cyan)', fontSize = 24) {
        const canvas = document.createElement('canvas');
        canvas.width = 384; 
        canvas.height = 72;
        const ctx = canvas.getContext('2d');
        ctx.font = `bold ${fontSize}px Inter, sans-serif`;
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 192, 36);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.75, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(130, 24, 1);
        return sprite;
    }

    // Polos de Categorías
    const tDuras = createTextSprite("DURAS", "#8bd450", 28);
    tDuras.position.set(210, -20, -120);
    targetGroup.add(tDuras);

    const tBlandas = createTextSprite("BLANDAS", "#38bdf8", 28);
    tBlandas.position.set(-210, -20, -120);
    targetGroup.add(tBlandas);

    const tHyb = createTextSprite("HÍBRIDAS", "#c084fc", 28);
    tHyb.position.set(0, -20, 220);
    targetGroup.add(tHyb);

    // Indicadores 3D de Zonas del Radar en el Plano de Referencia
    const tCriticaZone = createTextSprite("⚡ ZONA CRÍTICA (ALTO RIESGO)", "#ff6b6b", 18);
    tCriticaZone.position.set(0, -2, -80);
    tCriticaZone.scale.set(120, 22, 1);
    targetGroup.add(tCriticaZone);

    const tTacticalZone = createTextSprite("🎯 ZONA TÁCTICA (OPERATIVA)", "#fbbf24", 17);
    tTacticalZone.position.set(0, -2, -150);
    tTacticalZone.scale.set(125, 22, 1);
    targetGroup.add(tTacticalZone);

    const tStructuralZone = createTextSprite("🌐 ZONA ESTRUCTURAL (BASE)", "#38bdf8", 17);
    tStructuralZone.position.set(0, -2, -235);
    tStructuralZone.scale.set(130, 22, 1);
    targetGroup.add(tStructuralZone);

    // Zoom Functions for Global UI (HTML integration)
    window.zoomMapIn = () => {
        const dist = camera.position.distanceTo(controls.target);
        const targetDist = Math.max(controls.minDistance, dist - 150);
        const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
        camera.position.copy(controls.target).add(direction.multiplyScalar(targetDist));
        controls.update();
    };

    window.zoomMapOut = () => {
        const dist = camera.position.distanceTo(controls.target);
        const targetDist = Math.min(controls.maxDistance, dist + 150);
        const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
        camera.position.copy(controls.target).add(direction.multiplyScalar(targetDist));
        controls.update();
    };

    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        
        controls.update(); 
        
        sprites.forEach((s, idx) => {
            s.position.y += Math.sin(time * 2 + idx) * 0.15;
        });
        
        if(autoRotate) {
            targetGroup.rotation.y += 0.0005;
        }

        // Pulso sutil del núcleo del radar
        centerSprite.scale.setScalar(20 + Math.sin(time * 3) * 3);

        raycaster.setFromCamera(mouse, camera);
        
        const intersects = raycaster.intersectObjects(sprites);
        
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            if (hoveredSprite !== obj) {
                if (hoveredSprite) {
                    hoveredSprite.scale.setScalar(hoveredSprite.userData.baseScale);
                    hoveredSprite.material.opacity = 1.0;
                }
                hoveredSprite = obj;
                // Ampliar halo al enfocar
                hoveredSprite.scale.setScalar(hoveredSprite.userData.baseScale * 1.5);
                hoveredSprite.material.color.setHex(0xffffff); // Destella en blanco al focus
                hoveredSprite.material.opacity = 1.0;
                
                if(tooltip) {
                    tooltip.style.display = 'block';
                    tooltipName.textContent = obj.userData.name;
                    tooltipType.textContent = obj.userData.type;
                    
                    if (tooltipRisk) {
                        tooltipRisk.textContent = obj.userData.riskLevel || '';
                        tooltipRisk.className = `tooltip-tag risk-tag risk-${obj.userData.riskBadge || 'tactical'}`;
                    }
                    
                    tooltipTime.textContent = obj.userData.time;
                    tooltipDetail.textContent = obj.userData.detail;
                }
                container.style.cursor = 'pointer';
            }
        } else {
            if (hoveredSprite && !tooltipPinned) {
                hoveredSprite.scale.setScalar(hoveredSprite.userData.baseScale);
                
                // Restaurar color nativo
                const match = skills.find(s => s.name === hoveredSprite.userData.name);
                if(match) hoveredSprite.material.color.setHex(match.color);
                
                hoveredSprite = null;
                if(tooltip && !tooltipPinned) {
                    tooltip.style.display = 'none';
                }
                container.style.cursor = 'grab';
            }
        }

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        if(container.clientWidth > 0 && container.clientHeight > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
    });

    animate();
}
