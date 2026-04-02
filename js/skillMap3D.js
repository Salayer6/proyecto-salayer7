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

    const skills = [
        // BLANDAS (-X, -Z)
        { name: "Investigación Social", type: "Blanda Fundacional", time: "Técnicas Base", detail: "Aporta rigor metodológico para el análisis inferencial y validación de datos.", vector: [-0.7, -0.3], dist: 80, color: 0xb3e5fc, size: 20 },
        { name: "Liderazgo / PMBOK", type: "Blanda Intermedia", time: "Gestión Práctica", detail: "Gestión proactiva y dirección de equipos en proyectos tecnológicos e industriales.", vector: [-0.9, -0.8], dist: 130, color: 0x81d4fa, size: 25 },
        { name: "Control de Gestión", type: "Blanda Ultra-Específica", time: "Diplomado FEN", detail: "Núcleo estratégico. Diseño de KPIs, monitoreo de flujos y análisis de procesos.", vector: [-0.5, -1], dist: 190, color: 0x4fc3f7, size: 32 },
        
        // DURAS (+X, -Z)
        { name: "Excel", type: "Dura Transversal", time: "Modelado Base", detail: "Herramienta analítica esencial para el modelado rápido y control de procesos.", vector: [0.5, -0.3], dist: 60, color: 0xffffff, size: 26 },
        { name: "Bash / Linux", type: "Dura Fundacional", time: "Fundamento (10%)", detail: "Manejo base de SO y terminal, fundamental para comprender entornos e infraestructura.", vector: [0.9, -0.2], dist: 90, color: 0x81c784, size: 18 },
        { name: "SQL / BigQuery", type: "Dura Intermedia", time: "Manejo de Datos", detail: "Extracción y transformación de datos a gran escala para arquitecturas de BI.", vector: [0.7, -0.7], dist: 140, color: 0xaed581, size: 30 },
        { name: "Cloud / Ops", type: "Dura Complementaria", time: "DevOps Básico", detail: "Soporte de despliegue en la nube y comprensión de ecosistemas de datos modernos.", vector: [1, -0.8], dist: 160, color: 0xdcedc8, size: 22 },
        { name: "Power BI / DAX", type: "Dura Específica", time: "Analista BI", detail: "Desarrollo de cuadros de mando gerenciales y modelado tabular complejo.", vector: [0.5, -0.9], dist: 180, color: 0x66bb6a, size: 32 },
        { name: "Oracle P6", type: "Dura Hiper-Específica", time: "Planeamiento", detail: "Dominio indispensable para la planificación rotunda y control de faena.", vector: [0.8, -1.0], dist: 220, color: 0xc5e1a5, size: 28 },
        
        // HÍBRIDAS (0, +Z)
        { name: "Python / R", type: "Híbrida Básica", time: "Data & Stats", detail: "Procesamiento avanzado de datos, econometría y scripts de análisis exploratorio.", vector: [0.2, 0.8], dist: 110, color: 0xce93d8, size: 28 },
        { name: "Agile / Scrum", type: "Híbrida Gestión", time: "Marcos Ágiles", detail: "Garantía de entrega continua de valor en el desarrollo de soluciones analíticas.", vector: [-0.5, 0.7], dist: 150, color: 0xf06292, size: 26 },
        { name: "Faena Minera", type: "Híbrida Entorno", time: "Operaciones", detail: "Entendimiento del negocio core, operación logística y normativas del sector minero.", vector: [-0.8, 0.5], dist: 180, color: 0xffb74d, size: 25 },
        { name: "IA Generativa", type: "Híbrida Avanzada", time: "Vanguardia", detail: "Optimización DataOps, aceleración procedural y asistencia estructurada en la nube.", vector: [0.2, 1.0], dist: 220, color: 0xba68c8, size: 26 },
    ];

    const targetGroup = new THREE.Group();
    scene.add(targetGroup);

    const centerMat = new THREE.SpriteMaterial({ map: particleTexture, color: 0xffffff, blending: THREE.AdditiveBlending, depthTest: false, transparent: true });
    const centerSprite = new THREE.Sprite(centerMat);
    centerSprite.scale.set(15, 15, 1);
    targetGroup.add(centerSprite);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 });
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
    const tooltipTime = document.getElementById('tooltip-time');
    const tooltipDetail = document.getElementById('tooltip-detail');

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
            if (tx + 240 > window.innerWidth) tx = event.clientX - 240;
            if (ty + 130 > window.innerHeight) ty = event.clientY - 130;
            
            tooltip.style.left = tx + 'px';
            tooltip.style.top = ty + 'px';
        }
    });

    container.addEventListener('mouseenter', () => autoRotate = false);
    container.addEventListener('mouseleave', () => autoRotate = true);

    const clock = new THREE.Clock();
    
    // Generar labels fijos 3D temporales como "Polos" usando sprites con canvas Text (Optimizadamente)
    function createTextSprite(text, fontColor = 'var(--accent-cyan)') {
        const canvas = document.createElement('canvas');
        canvas.width = 256; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.font = 'bold 28px Inter';
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.fillText(text, 128, 40);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.5, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(100, 25, 1);
        return sprite;
    }

    const tDuras = createTextSprite("DURAS", "#8bd450");
    tDuras.position.set(200, -30, -100);
    targetGroup.add(tDuras);

    const tBlandas = createTextSprite("BLANDAS", "#3f6d4e");
    tBlandas.position.set(-200, -30, -100);
    targetGroup.add(tBlandas);

    const tHyb = createTextSprite("HÍBRIDAS", "#965fd4");
    tHyb.position.set(0, -30, 200);
    targetGroup.add(tHyb);

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

        raycaster.setFromCamera(mouse, camera);
        
        // Prevenir colisión sobre el fondo del card aumentando minDistance si hace falta
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
                hoveredSprite.material.color.setHex(0xffffff); // Destalla en blando al focus
                hoveredSprite.material.opacity = 1.0;
                
                if(tooltip) {
                    tooltip.style.display = 'block';
                    tooltipName.textContent = obj.userData.name;
                    tooltipType.textContent = obj.userData.type;
                    tooltipTime.textContent = obj.userData.time;
                    tooltipDetail.textContent = obj.userData.detail;
                }
                container.style.cursor = 'pointer';
            }
        } else {
            if (hoveredSprite) {
                hoveredSprite.scale.setScalar(hoveredSprite.userData.baseScale);
                
                // Restaurar color nativo
                const match = skills.find(s => s.name === hoveredSprite.userData.name);
                if(match) hoveredSprite.material.color.setHex(match.color);
                
                hoveredSprite = null;
                if(tooltip) {
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
