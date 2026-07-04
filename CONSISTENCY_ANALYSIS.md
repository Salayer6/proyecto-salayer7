# 🔍 Análisis de Consistencia — Portafolio Ignacio Salas Vega

> **Fecha:** 2026-04-01 | **Commit:** `35ffbef` → `main` | **Estado:** ✅ Corregido y publicado

---

## 1. Resumen Ejecutivo

Se auditaron las tres capas del portafolio en busca de inconsistencias entre lo que ve un reclutador humano, lo que leen los sistemas ATS, y lo que declara el código.

| Capa | Descripción |
|---|---|
| **UI Visible** | Encabezado, Radar, Medidores, Timeline |
| **ATS / SEO Oculto** | Bloque `sr-only` de metadatos y SEO cluster |
| **CSS / Diseño** | Variables, clases, responsive, estilos de impresión |

Se identificaron y corrigieron **6 inconsistencias**.

---

## 2. Hallazgos y Correcciones Aplicadas

### 🔴 Alta Prioridad

#### 2.1 — Email no visible en el encabezado
- **Problema:** El correo `i.salasv@duocuc.cl` existía solo en el bloque ATS oculto (`sr-only`), invisible para reclutadores humanos.
- **Impacto:** Un reclutador que revise el CV web no tiene forma de contactar directamente.
- **Corrección:** Se añadió un ítem `contact-item` con ícono de sobre (`fa-envelope`) y enlace `mailto:` en la cuadrícula visible del encabezado.

```diff
+ <div class="contact-item">
+     <i class="fa-solid fa-envelope"></i>
+     <a href="mailto:i.salasv@duocuc.cl">i.salasv@duocuc.cl</a>
+ </div>
```

---

#### 2.2 — Excel y Oracle P6 mezclados en un solo medidor
- **Problema:** Ambas herramientas estaban combinadas como `"Excel / P6"` en un único gauge, diluyendo su señal individual.
- **Impacto:** P6 es la habilidad diferenciadora para minería/construcción. Fusionarla con Excel reduce su visibilidad para ATS y reclutadores técnicos.
- **Corrección:** Se separaron en dos medidores independientes con niveles y descripciones propias.

| Habilidad | Nivel | Descripción | Color |
|---|---|---|---|
| **Excel** | 80% | Avanzado | 🟢 Verde |
| **Oracle P6** | 93% | Plan Base | 🟣 Púrpura |

---

### 🟡 Media Prioridad

#### 2.3 — Badges de "Mapa de Skills" desalineadas con los medidores

- **Problema:** Las badges mostraban `SAP` (no presente en ningún medidor) y omitían `IA Gen.` y `BigQuery`, las habilidades más actuales del perfil.

| Antes | Después |
|---|---|
| Oracle P6, Python/R, Power BI, SAP, SQL/ETL, Cloud Ops | Oracle P6, **IA Gen.**, Power BI, SQL/ETL, Python/R, Cloud Ops, **BigQuery** |

> [!NOTE]
> SAP se eliminó de los badges porque no aparece en Maestría Técnica ni en la Trayectoria Profesional reciente. Permanece en el SEO cluster para cobertura ATS.

---

#### 2.4 — SEO Cluster desactualizado

- **Problema:** El bloque de keywords oculto no incluía las tecnologías más recientes y diferenciadoras del perfil.
- **Términos añadidos:** `Generative AI`, `IA Generativa`, `Prompt Engineering`, `BigQuery`, `Power Query` (alias de M Language).

```diff
- SEO CLUSTER: R Studio; Python; M Language; DAX...
+ SEO CLUSTER: Generative AI; IA Generativa; Prompt Engineering; BigQuery; ...
```

---

#### 2.5 — Contact Grid no acomodaba los 7 ítems

- **Problema:** El CSS definía `minmax(200px, 1fr)` y `max-width: 900px`, lo que generaba un layout desbalanceado al añadir el email como 7.º ítem.
- **Corrección:** Se ajustó a `minmax(160px, 1fr)` y `max-width: 1000px`.

---

### 🟢 Baja Prioridad

#### 2.6 — Botón de descarga sin `aria-label`

- **Problema:** El botón "Descargar CV" carecía de descripción para lectores de pantalla.
- **Corrección:**

```diff
- <button class="btn print-btn" onclick="window.print()">
+ <button class="btn print-btn" onclick="window.print()" aria-label="Descargar Curriculum Vitae en formato PDF">
```

---

## 3. Estado Final — Encabezado de Contacto

| Campo | Valor | Visible |
|---|---|---|
| RUT | 19.057.525-K | ✅ |
| Móvil | +569 7633 1648 | ✅ |
| Ubicación | Santiago, Chile | ✅ |
| Licencia | B/C \| Viajes OK | ✅ |
| Idioma | Inglés Bilingüe | ✅ |
| **Email** | i.salasv@duocuc.cl | ✅ *(añadido)* |


---

## 4. Estado Final — Maestría Técnica (12 Medidores)

| # | Habilidad | Nivel | Comentario | Color |
|---|---|---|---|---|
| 1 | Excel | 80% | Avanzado | 🟢 |
| 2 | Oracle P6 | 93% | Plan Base | 🟣 |
| 3 | BigQuery/SQL | 60% | Lee y depura | 🟣 |
| 4 | M (P. Query) | 70% | Aplica | 🟢 |
| 5 | Dax | 70% | Proyecta | 🟣 |
| 6 | R | 40% | No requiere | 🟢 |
| 7 | Python | 50% | Estudia ML | 🟣 |
| 8 | Bash | 70% | Autodidacta | 🟢 |
| 9 | JavaScript | 30% | Comprende | 🟣 |
| 10 | IA Gen. | 100% | A la vanguardia | 🟢 |
| 11 | Power BI | 90% | Produce | 🟣 |
| 12 | HTML | 80% | Administra | 🟢 |

---

## 5. Sugerencias Futuras

> [!TIP]
> Considera añadir un medidor para **SAP** si deseas destacar esa experiencia. Actualmente solo está en el SEO cluster oculto.

> [!NOTE]
> El email `i.salasv@duocuc.cl` es institucional (Duoc UC). Para el mediano plazo, un correo profesional propio daría mejor imagen.

---

*Análisis generado por Antigravity · proyecto-salayer7 · commit `35ffbef`*
