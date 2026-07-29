# 🎣 Stop PGPEx: defendamos la pesca del black-bass y el lucio en Extremadura

> Herramienta ciudadana para presentar alegaciones a la versión inicial del **Plan General Piscícola de Extremadura (PGPEx)** durante su trámite de información pública.

🔗 **Web:** [stop-pgpex.github.io](https://stop-pgpex.github.io/)

---

## 🌊 Por qué existe esto

Soy toledano, pero llevo pescando en Extremadura desde que mi padre y mi abuelo me llevaron por primera vez a la orilla de un embalse. De eso hace ya unos cuantos años. La pesca del black-bass y del lucio no es solo un deporte: es tiempo con la familia, es conocer cada rincón de estos ríos y pantanos, y es toda una comunidad de pescadores, guías, tiendas, clubes y pueblos que viven de ello.

La versión inicial del PGPEx, tal y como está redactada, pone en riesgo todo eso. Y mucha gente que se vería afectada ni siquiera sabe que el plan está en trámite ni que **cualquiera puede presentar alegaciones**, y que la Administración está obligada por ley a responder cada una de ellas.

Esta web nace para cambiar eso: para que presentar una alegación bien fundada deje de ser algo reservado a quien sabe de trámites administrativos y pase a estar al alcance de cualquier pescador, en cinco minutos y desde el móvil.

## ⚙️ Qué hace

- **Explica el plan** de forma clara, con cada afirmación referenciada al apartado concreto del PGPEx del que sale, para que nadie tenga que fiarse de nuestra palabra y pueda contrastarlo con el documento oficial.
- **Genera un escrito de alegaciones** completo y jurídicamente fundado, con catorce puntos que impugnan las medidas más lesivas del plan y proponen una redacción alternativa para cada una.
- **Permite personalizarlo**: rellenas tus datos, eliges qué alegaciones incluir y añades tu caso concreto. El documento se ajusta y se renumera solo.
- **Descarga en Word o en PDF**, listo para presentar por registro electrónico, en cualquier oficina de registro o por correo electrónico.
- **Explica cómo presentarlo**, paso a paso, tanto por vía telemática como presencial.

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

Cualquier aportación es bienvenida: correcciones de datos, mejoras de accesibilidad, revisión de los argumentos jurídicos o difusión de la iniciativa. Puedes abrir un *issue* o un *pull request*.

Si no eres de perfil técnico y quieres ayudar, lo más valioso que puedes hacer es sencillo: **presenta tu alegación y comparte la web** con tu club, tu grupo de pesca y tu tienda de confianza. Cada alegación individual cuenta, y cuantas más se presenten, más difícil será ignorarlas.

## ⚖️ Aviso legal

Iniciativa ciudadana independiente, sin vinculación con la Junta de Extremadura ni con ninguna administración pública. El modelo de alegación es orientativo y no constituye asesoramiento jurídico. La información de referencia es el texto oficial de la versión inicial del PGPEx publicado en el trámite de información pública, que prevalece sobre cualquier resumen de esta web.

## ⏳ Plazo

El trámite de información pública está abierto **hasta el 14 de septiembre de 2026** (Anuncio de 30 de junio de 2026, DOE n.º 132, de 10 de julio de 2026).

---

<p align="center">
  Web desarrollada por <a href="https://github.com/JavierOlmedo/">Javier Olmedo</a> · Hecho con ❤️ para Extremadura
</p>
