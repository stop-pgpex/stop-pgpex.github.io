# 🎣 Stop PGPEx: defendamos la pesca del black-bass y el lucio en Extremadura

> Herramienta ciudadana que facilitó presentar alegaciones al **Plan General Piscícola de Extremadura (PGPEx)** durante su trámite de información pública.

🔗 **Web:** [stop-pgpex.github.io](https://stop-pgpex.github.io/)

---

## 🏆 Lo conseguimos

**El 31 de julio de 2026, la Junta de Extremadura anunció la retirada del Plan General Piscícola de información pública**, reconociendo expresamente la inquietud generada entre la comunidad de pescadores de la región, y se comprometió a que cualquier planificación futura se hará con diálogo, transparencia y seguridad jurídica.

Fue una victoria de mucha gente: pescadores, clubes, guías, tiendas y pueblos que se organizaron y dieron la cara. Esta web fue una de las herramientas de esa movilización, y se mantiene en línea como testimonio de lo que se logró. Lo que sigue explica qué fue y por qué.

📄 [Anuncio oficial de la retirada](https://www.juntaex.es/w/agricultura-retirara-en-plan-general-piscicola-de-informacion-publica)

---

## 🌊 Por qué existió esto

Soy toledano, pero llevo pescando en Extremadura desde que mi padre y mi abuelo me llevaron por primera vez a la orilla de un embalse. De eso hace ya unos cuantos años. La pesca del black-bass y del lucio no es solo un deporte: es tiempo con la familia, es conocer cada rincón de estos ríos y pantanos, y es toda una comunidad de pescadores, guías, tiendas, clubes y pueblos que viven de ello.

La versión inicial del PGPEx, tal y como estaba redactada, ponía en riesgo todo eso. Y mucha gente que se veía afectada ni siquiera sabía que el plan estaba en trámite ni que **cualquiera podía presentar alegaciones**, y que la Administración estaba obligada por ley a responder cada una de ellas.

Esta web nació para cambiar eso: para que presentar una alegación bien fundada dejara de ser algo reservado a quien sabe de trámites administrativos y pasara a estar al alcance de cualquier pescador, en cinco minutos y desde el móvil.

## ⚙️ Qué hacía

- **Explicaba el plan** de forma clara, con cada afirmación referenciada al apartado concreto del PGPEx del que salía, para que nadie tuviera que fiarse de nuestra palabra y pudiera contrastarlo con el documento oficial.
- **Generaba un escrito de alegaciones** completo y jurídicamente fundado, con catorce puntos que impugnaban las medidas más lesivas del plan y proponían una redacción alternativa para cada una.
- **Permitía personalizarlo**: rellenabas tus datos, elegías qué alegaciones incluir y añadías tu caso concreto. El documento se ajustaba y se renumeraba solo.
- **Descargaba en Word o en PDF**, listo para presentar por registro electrónico, en cualquier oficina de registro o por correo electrónico.
- **Explicaba cómo presentarlo**, paso a paso, tanto por vía telemática como presencial.

La herramienta sigue operativa en la web, por si resulta útil como referencia o si en el futuro se abre un nuevo trámite.

## 🔒 Privacidad

**Ningún dato sale de tu dispositivo.** Todo el procesamiento (el relleno del formulario y la generación del documento) ocurre íntegramente en el navegador de quien visita la web. No hay servidor que reciba información, no se guarda nada, no se comparte nada y no se usan cookies.

La única estadística que se recoge es un recuento de visitas anónimo y sin cookies, que no identifica a nadie.

El código es abierto precisamente para que cualquiera pueda verificar que esto es cierto.

## 🛠️ Tecnología

Web estática de un solo archivo, sin dependencias de servidor, pensada para desplegarse en cualquier hosting estático (GitHub Pages, Cloudflare Pages, Netlify).

- **HTML5** semántico.
- **Tailwind CSS** (vía CDN) para el diseño.
- **JavaScript** sin frameworks para la cuenta atrás, el generador de documentos y las utilidades.
- **[docx.js](https://github.com/dolanmiu/docx)** para generar el Word en el cliente.
- **[pdf-lib](https://github.com/Hopding/pdf-lib)** para generar el PDF en el cliente.
- **[GoatCounter](https://www.goatcounter.com/)** para las estadísticas anónimas sin cookies.

## 📁 Estructura del repositorio

```
index.html              La web completa (estructura, estilos y lógica)
alegaciones-data.js     Texto de las alegaciones (fuente única de datos)
favicon.svg             Icono con la bandera de Extremadura
favicon-32.png          Icono PNG 32x32
apple-touch-icon.png    Icono para dispositivos Apple
og-image.jpg            Imagen para compartir en redes (1200x630)
story.jpg               Imagen vertical para stories (1080x1920)
qr-stop-pgpex.png       Código QR hacia la web, para imprimir
```

## 🚀 Despliegue

Al ser una web estática, basta con servir estos archivos desde cualquier hosting. Para GitHub Pages:

1. Sube todos los archivos a la raíz del repositorio.
2. En **Settings → Pages**, selecciona la rama y la carpeta raíz como origen.
3. La web quedará publicada en la URL del proyecto.

## 🤝 Cómo colaborar

Aunque la campaña cumplió su objetivo, cualquier aportación al proyecto sigue siendo bienvenida: mejoras de accesibilidad, correcciones o adaptación de la herramienta por si vuelve a hacer falta. Puedes abrir un *issue* o un *pull request*.

Y si en el futuro se abre un nuevo trámite, lo más valioso que puede hacer cualquiera es sencillo: **participar y difundirlo**. Esta victoria demostró que, cuando la comunidad se organiza, la Administración escucha.

## ⚖️ Aviso legal

Iniciativa ciudadana independiente, sin vinculación con la Junta de Extremadura ni con ninguna administración pública. El modelo de alegación es orientativo y no constituyó asesoramiento jurídico. La información de referencia era el texto oficial de la versión inicial del PGPEx publicado en el trámite de información pública, que prevalecía sobre cualquier resumen de esta web.

## 📅 Cronología

- **10 de julio de 2026:** La Junta publica la versión inicial del PGPEx y abre el trámite de información pública (Anuncio de 30 de junio de 2026, DOE n.º 132), con plazo de alegaciones hasta el 14 de septiembre de 2026.
- **Julio de 2026:** La comunidad de pescadores se moviliza. Se ponen en marcha campañas de difusión y herramientas como esta web para facilitar la presentación de alegaciones.
- **31 de julio de 2026:** La Junta anuncia la **retirada del plan de información pública**, y se compromete a reformar antes la Ley de Pesca de Extremadura y a que cualquier planificación futura se haga con diálogo, transparencia y seguridad jurídica.

---

<p align="center">
  Web desarrollada por <a href="https://github.com/JavierOlmedo/">Javier Olmedo</a> · Hecho con ❤️ para Extremadura
</p>
