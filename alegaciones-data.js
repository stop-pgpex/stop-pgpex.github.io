// ============================================================
//  DATOS DE LAS ALEGACIONES  (fuente única de verdad)
//  Cada alegación: título, cuerpo (array de párrafos) y solicita.
//  El texto es el mismo del documento consensuado con Fernando.
//  Sin guiones largos ni punto y coma, para lectura natural.
// ============================================================
window.ALEGACIONES = [
  {
    id: 1,
    titulo: "PRIMERA. Aprobación del Plan sin la delimitación cartográfica previa que exige el artículo 64 ter.2 de la Ley 42/2007. Vicio de procedimiento.",
    cuerpo: [
      'El artículo 64 ter.2 de la Ley 42/2007 dispone que la posibilidad de pesca de las especies catalogadas como exóticas invasoras introducidas antes de su entrada en vigor "quedará supeditada a la aprobación, previa a la aprobación de los primeros instrumentos de planificación y gestión en materia de caza y pesca, de la delimitación cartográfica del área ocupada por dichas especies antes de la entrada en vigor de la presente ley, realizada por la administración competente de la comunidad autónoma y tras su publicación en el Boletín Oficial de la comunidad autónoma".',
      'El PGPEx es precisamente el primer instrumento de planificación y gestión en materia de pesca de la Comunidad Autónoma, por lo que dicha delimitación debía haberse aprobado y publicado en el Diario Oficial de Extremadura con carácter previo. No consta que se haya aprobado: la Orden General de Vedas de 7 de noviembre de 2022 seguía amparando la pesca del black-bass y del lucio en la disposición transitoria segunda de la Ley 7/2018, esto es, en el régimen transitorio previsto justamente para el periodo anterior a esa delimitación.',
      'Otras comunidades autónomas sí han cumplido este trámite: Castilla y León mediante la Orden FYM/339/2019, de 27 de marzo, y Andalucía mediante la Resolución de 19 de diciembre de 2019 de la Dirección General de Medio Natural, Biodiversidad y Espacios Protegidos, que delimita el área ocupada por el black-bass, el lucio, la carpa común y la trucha arcoíris.',
      'El Plan tampoco suple esa carencia: incorpora planos de distribución del jarabugo (Plano III) y de la colmilleja del Alagón (Plano IV), pero ningún plano del área ocupada por el black-bass o el lucio. Y cita la Ley 7/2018 una sola vez, en la relación de normativa del Anexo II, sin aplicar ni analizar en ningún momento el régimen del artículo 64 ter, que es el que habilita y ordena el aprovechamiento piscícola de estas especies.',
    ],
    solicita: 'que, con carácter previo a la aprobación del PGPEx, se elabore, apruebe y publique en el Diario Oficial de Extremadura la delimitación cartográfica del área ocupada por el black-bass y el lucio con anterioridad al 15 de diciembre de 2007, conforme al artículo 64 ter.2 de la Ley 42/2007, y que el ámbito en el que estas especies resultan pescables se determine a partir de dicha delimitación.',
  },
  {
    id: 2,
    titulo: "SEGUNDA. Contradicción interna entre la Memoria y el Anexo XI en cuanto a la devolución de los ejemplares. Inseguridad jurídica.",
    cuerpo: [
      'El apartado 8.2.3 de la Memoria afirma, con carácter absoluto, que la normativa persigue la erradicación de las piscícolas invasoras "en todos los casos, cuya devolución a las aguas de procedencia nunca está permitida". Sin embargo, el Anexo XI ("Especies pescables y no pescables") establece para el black-bass y el lucio una previsión distinta: "prohibida su devolución fuera de los grandes embalses reseñados con las especies pescables", reconociendo en el anverso del mismo Anexo que ambas especies son pescables sin limitación de talla, cupo ni temporada en una relación de grandes embalses del Guadiana y del Tajo.',
      'Ambas determinaciones son incompatibles: una prohíbe la devolución en toda circunstancia y la otra la admite dentro de los grandes embalses. En un instrumento del que derivan consecuencias sancionadoras, esta contradicción vulnera el principio de seguridad jurídica del artículo 9.3 de la Constitución y deja a la persona que pesca sin poder conocer de antemano la licitud de su conducta.',
    ],
    solicita: 'que se suprima la redacción absoluta del apartado 8.2.3 y se sustituya por una remisión expresa al ámbito territorial definido en el Anexo XI, aclarando de forma inequívoca en qué masas de agua es lícita la captura y suelta.',
  },
  {
    id: 3,
    titulo: "TERCERA. Trato diferenciado y no motivado entre especies catalogadas que se encuentran en idéntica situación jurídica.",
    cuerpo: [
      'El propio Anexo XI aplica a los carpines, las carpas, las gambusias y las truchas arcoíris el criterio temporal del artículo 64 ter, declarándolas pescables "en las aguas embalsadas artificialmente antes de 2007". Para el black-bass y el lucio, en cambio, abandona ese criterio y lo sustituye por una relación nominal y cerrada de grandes embalses, notablemente más restrictiva.',
      'Todas ellas son especies incluidas en el Catálogo Español de Especies Exóticas Invasoras (Real Decreto 630/2013) e introducidas en el medio natural con anterioridad a 2007, como el propio Plan reconoce al referirse a las repoblaciones oficiales del siglo pasado. Su situación jurídica es idéntica y el Plan no ofrece motivación alguna del trato diferenciado, lo que incurre en la arbitrariedad proscrita por el artículo 9.3 de la Constitución.',
    ],
    solicita: 'que se aplique al black-bass y al lucio el mismo criterio temporal que el Plan ya aplica a las restantes especies catalogadas o, subsidiariamente, que se motive de forma expresa y con fundamento técnico la razón del trato diferenciado.',
  },
  {
    id: 4,
    titulo: "CUARTA. Falta de motivación técnica del listado cerrado de grandes embalses del Anexo XI.",
    cuerpo: [
      'El Anexo XI circunscribe la condición de especie pescable a una relación nominal y cerrada de embalses. La Memoria no incorpora el estudio, el criterio técnico ni el umbral objetivo (superficie, profundidad, tipología de la masa de agua, presencia efectiva de poblaciones nativas viables) que justifique incluir unas masas de agua y excluir todas las demás, muchas de ellas con presencia establecida de la especie desde hace décadas y sin poblaciones nativas recuperables.',
      'La ausencia de esta justificación incumple la exigencia de motivación del artículo 35 de la Ley 39/2015 y priva a quienes participan en este trámite de la posibilidad de contradecir el fundamento técnico de la medida, generando indefensión material.',
    ],
    solicita: 'que se incorpore al expediente la memoria técnica que sustenta la selección de masas de agua, se publique el criterio objetivo aplicado y se habilite un procedimiento reglado para incorporar aquellas masas de agua en las que concurran las mismas circunstancias.',
  },
  {
    id: 5,
    titulo: "QUINTA. Desproporción de las restricciones a la pesca desde flotador, pato, catamarán y embarcación en masas de agua menores de 100 hectáreas (apartado 8.5.5.3).",
    cuerpo: [
      'El apartado 8.5.5.3 dispone que, para los cotos de pesca consorciados en charcas, pantanos y embalses menores de 100 hectáreas, "la práctica de la pesca será en general sólo desde orilla", invocando la recuperabilidad de las masas de agua para especies nativas y la pérdida de compatibilidad con la pesca de orilla "por generación de oleaje y cercanía de las líneas de pesca".',
      'Ninguno de los dos motivos resulta aplicable al flotador o pato ni al catamarán de pedales, que carecen de propulsión a motor, no generan oleaje apreciable y presentan un impacto sobre el medio equivalente o inferior al vadeo. La medida agrupa bajo una misma prohibición embarcaciones a motor y embarcaciones personales sin propulsión mecánica, que no son equiparables, sin análisis diferenciado alguno, y restringe modalidades expresamente reconocidas en el propio Plan y asociadas a licencias federativas en vigor.',
    ],
    solicita: 'que se excluyan expresamente del ámbito de la restricción del apartado 8.5.5.3 el flotador o pato y las embarcaciones sin propulsión a motor o, subsidiariamente, que dicha limitación se module masa de agua por masa de agua mediante informe técnico motivado, y no con carácter general por un umbral de superficie.',
  },
  {
    id: 6,
    titulo: "SEXTA. Inviabilidad de los concursos de pesca, contraria al artículo 64 ter.1 de la Ley 42/2007 (apartado 2.1.2.5).",
    cuerpo: [
      'El apartado 2.1.2.5 establece que en los escenarios de pesca, durante los concursos y entrenamientos, "será obligatorio conservar vivas y devolver a las aguas todas las especies capturadas, a excepción de las de carácter invasor". Puesto que el black-bass y el lucio se clasifican como especies de carácter invasor, la excepción convierte en jurídicamente imposible la celebración de competiciones en la modalidad de captura y suelta, que es la única practicada en esta disciplina y la que exigen los reglamentos deportivos federativos y las competiciones de ámbito nacional e internacional.',
      'Esta previsión contradice frontalmente el artículo 64 ter.1 de la Ley 42/2007, conforme al cual la gestión, control o posible erradicación de estas especies "se podrá realizar, en esas áreas, a través de la caza y la pesca, y en todas sus modalidades, incluidas las reguladas por las federaciones deportivas españolas de caza y de pesca, cuando este objetivo quede recogido en los instrumentos normativos de caza y pesca". La norma estatal configura expresamente la pesca de competición federada como instrumento legítimo de gestión, y el Plan la excluye de hecho.',
      'El resultado es además incoherente con el propio Plan, que en su apartado 8.1 reconoce el valor deportivo y económico de los más de 2.000 días anuales de concursos celebrados en Extremadura y declara favorecer estos eventos.',
    ],
    solicita: 'que se introduzca en el apartado 2.1.2.5 un régimen específico que permita expresamente la modalidad de captura y suelta en competiciones y entrenamientos de black-bass y lucio celebrados en las masas de agua en las que estas especies son pescables, en aplicación del artículo 64 ter.1 de la Ley 42/2007.',
  },
  {
    id: 7,
    titulo: "SÉPTIMA. Imposibilidad material de ejecutar la obligación de sacrificio: ausencia absoluta de regulación del destino de los ejemplares muertos. Riesgo sanitario y ambiental no evaluado.",
    cuerpo: [
      'El Plan impone la muerte obligatoria de los ejemplares capturados en todas las masas de agua situadas fuera de los grandes embalses reseñados, lo que comprende ríos, embalses menores y, según los propios datos del Plan, unas 30.000 charcas habitables por peces. Sin embargo, no contiene una sola previsión sobre qué debe hacerse después con el animal muerto: ni método de sacrificio, ni posibilidad de autoconsumo, ni régimen de transporte, ni puntos de recogida, ni protocolo de eliminación.',
      'El vacío deja al pescador ante tres salidas y ninguna es viable. Abandonar el ejemplar en la orilla genera un residuo orgánico en dominio público hidráulico, con riesgo de contaminación proscrito por el artículo 97 del texto refundido de la Ley de Aguas, agravado por las temperaturas estivales de la región y especialmente grave en las charcas abrevadero, que el propio Plan define como destinadas al servicio de explotaciones agropecuarias y en las que abreva el ganado. Llevárselo choca con la incertidumbre del artículo 64.5 de la Ley 42/2007, que prohíbe la posesión y el transporte de ejemplares y de sus restos, sin que el Plan aclare si el autoconsumo está amparado. Y enterrarlo o eliminarlo carece de todo protocolo, pese a la aplicación potencial de la normativa de subproductos animales no destinados al consumo humano y de residuos.',
      'El contraste es revelador: el Plan regula con detalle, en su apartado 8.2.2, los residuos inorgánicos y los envases generados en los concursos de pesca, pero guarda silencio sobre el residuo orgánico cuya producción él mismo ordena a escala regional. Existen además precedentes de cómo resolverlo: la Resolución de 23 de octubre de 2018 de la Junta de Andalucía, en materia cinegética, previó expresamente que los ejemplares abatidos pudieran transportarse "con fines de autoconsumo o para depósito en un lugar apropiado para su eliminación".',
    ],
    solicita: 'la eliminación completa de la obligación de sacrificio de los ejemplares en las masas de agua situadas fuera de los grandes embalses reseñados, por resultar de imposible ejecución: no existe destino lícito para el ejemplar muerto (el abandono genera un residuo en dominio público hidráulico, el transporte choca con el artículo 64.5 de la Ley 42/2007 y la eliminación carece de todo protocolo) y ser por ello de imposible cumplimiento para el pescador.',
  },
  {
    id: 8,
    titulo: "OCTAVA. Efectos indirectos no evaluados: liberación de especies invasoras menores por retirada del depredador superior.",
    cuerpo: [
      'La Memoria reconoce en su apartado 3.1.3 que en las charcas y en los ríos estacionales "elevan su competitividad los peces gato, percasoles, y las parvas o peces chino", y clasifica al black-bass como especie depredadora. La retirada sistemática del depredador superior en esas mismas masas de agua puede favorecer la expansión de dichas especies, varias de ellas de mayor capacidad reproductiva y sin interés pesquero alguno que permita su control.',
      'El propio Plan admite este mecanismo cuando le conviene: al justificar la trucha arcoíris (también especie catalogada) señala que en aguas artificialmente embalsadas "pueden depredar temporalmente sobre otras foráneas de menor talla" y que resultan "costeadas por quienes las pescan". El razonamiento ecológico y económico que el Plan acepta para una especie catalogada lo rechaza para otra, sin explicar la diferencia.',
      'Ni la Memoria ni el estudio ambiental estratégico incorporan una evaluación de estos efectos indirectos, pese a que la evaluación ambiental estratégica exige valorar los efectos secundarios y acumulativos de las medidas proyectadas.',
    ],
    solicita: 'que se incorpore al estudio ambiental estratégico un análisis de los efectos indirectos de la retirada del black-bass y del lucio sobre las poblaciones de las restantes especies de carácter invasor, diferenciado por tipología de masa de agua, y que las medidas se modulen conforme a sus conclusiones.',
  },
  {
    id: 9,
    titulo: 'NOVENA. La erradicación "en todos los casos" no es un objetivo alcanzable ni evaluable.',
    cuerpo: [
      'El Plan fija como objetivo la erradicación de las piscícolas de carácter invasor en todos los casos. Aplicado al black-bass y al lucio, presentes en la región desde hace más de medio siglo por repoblaciones oficiales y establecidos en centenares de masas de agua, se trata de un objetivo que ninguna evidencia técnica respalda como alcanzable mediante la pesca con caña, y que el Plan no acompaña de indicadores, plazos, medios materiales ni consignación presupuestaria alguna.',
      'El propio artículo 64 ter.1 de la Ley 42/2007 se refiere a la "gestión, control o posible erradicación", empleando un término condicional que el Plan convierte en imperativo absoluto. Un instrumento de planificación cuyo objetivo declarado es inalcanzable no puede orientar la actuación administrativa ni ser objeto de seguimiento, y traslada a la ciudadanía una obligación cuyo incumplimiento resulta inevitable.',
    ],
    solicita: 'que el objetivo de erradicación se sustituya por objetivos de gestión, control y contención de la expansión, definidos por masa de agua o tipología, medibles mediante indicadores concretos y acompañados de plazos, medios y presupuesto.',
  },
  {
    id: 10,
    titulo: "DÉCIMA. Imposibilidad de ejecutar las limitaciones a la difusión pública por su indeterminación (apartados 8.2.3, 8.5.6.3 y Anexo XI).",
    cuerpo: [
      'El Plan prevé no permitir "la difusión de prácticas o eventos que directamente promuevan o inciten al incumplimiento de lo establecido para la erradicación", y el Anexo XI añade, para determinadas especies, la prohibición de su "comercio o difusión pública y fomento".',
      'La expresión "difusión pública y fomento", desprovista de mayor concreción, es susceptible de una interpretación extensiva que alcance la simple divulgación de capturas realizadas de forma lícita en las masas de agua donde la especie es pescable, así como la actividad informativa de clubes, publicaciones y creadores de contenido. Una restricción de este alcance afecta al derecho a comunicar y recibir información veraz del artículo 20.1.d) de la Constitución y no puede establecerse mediante un instrumento de planificación con este grado de indefinición.',
    ],
    solicita: 'la eliminación completa de este punto, por resultar de imposible ejecución dada su indeterminación y por afectar al derecho a comunicar y recibir información veraz del artículo 20.1.d) de la Constitución, sin que exista una delimitación que permita aplicarlo sin invadir la difusión de capturas lícitas ni la actividad informativa del sector.',
  },
  {
    id: 11,
    titulo: "UNDÉCIMA. Exigencias impuestas a los guías de pesca incompatibles con el ejercicio lícito de la actividad (apartado 8.5.6.6).",
    cuerpo: [
      'Entre los requisitos para la inscripción en el Registro de Guías de Pesca, el Plan incluye el compromiso de que "no se fomentará la pesca de las piscícolas invasoras en todos los casos, debiendo contribuir en todo caso a su eliminación". Esta exigencia, formulada sin excepción territorial, resulta contradictoria con el propio Anexo XI, que declara el black-bass y el lucio especies pescables sin limitación de talla, cupo ni temporada en los grandes embalses reseñados.',
      'El efecto práctico es la inviabilidad del oficio: ninguna otra especie piscícola genera en Extremadura un servicio de guía comparable, de modo que la condición registral impide desarrollar la actividad económica que el propio instrumento autoriza. Ello afecta directamente a puestos de trabajo, a inversiones públicas y privadas ya realizadas y a la economía de los municipios que reciben este turismo, sin que el artículo 71 de la LPAEx dé cobertura a una restricción de este alcance y en contradicción con el apartado 8.3 del propio Plan, que reconoce el sector como actividad económica ligada al turismo.',
      'A ello se añade que la creación del Registro de Guías de Pesca (una demanda histórica del propio sector) se aborda sin la participación de los guías en ejercicio, de la Federación ni de los clubes que conocen la realidad del servicio.',
    ],
    solicita: 'que la obligación se limite a las masas de agua en las que la especie no tenga la condición de pescable conforme al Anexo XI, suprimiendo las expresiones "en todos los casos" y "en todo caso", y que la configuración del Registro de Guías de Pesca se someta a consulta efectiva de los guías en ejercicio, la Federación Extremeña de Pesca y los clubes.',
  },
  {
    id: 12,
    titulo: "DUODÉCIMA. Ausencia de evaluación del impacto socioeconómico de las medidas.",
    cuerpo: [
      'El Plan reconoce en su apartado 8.3 la dificultad de dimensionar el peso económico de la pesca deportiva en la región, pero no incorpora ningún análisis del impacto que las restricciones proyectadas producirán sobre clubes y deportistas federados, guías de pesca, establecimientos especializados, distribuidores y fabricantes, talleres y náutica, alojamientos rurales, hostelería y los municipios ribereños que sostienen parte de su actividad turística en la pesca del black-bass.',
    ],
    solicita: 'que se incorpore al expediente una memoria de análisis de impacto económico de las medidas propuestas, con cuantificación del efecto sobre el empleo y la actividad en las comarcas afectadas, y que sus conclusiones se consideren en la versión definitiva del Plan.',
  },
  {
    id: 13,
    titulo: "DECIMOTERCERA. Incorporación al expediente del informe previo del Consejo Extremeño de Pesca y Acuicultura.",
    cuerpo: [
      'El artículo 21.1 de la Ley 11/2010, de pesca y acuicultura de Extremadura, exige que el Plan General Piscícola, además de someterse al proceso de información o participación pública, cuente con el informe previo del Consejo Extremeño de Pesca y Acuicultura (CPAEx). La documentación puesta a disposición en este trámite no permite verificar que dicho informe se haya emitido, ni conocer su contenido ni el sentido del pronunciamiento del órgano consultivo sobre las medidas aquí impugnadas.',
    ],
    solicita: 'que se incorpore al expediente y se ponga a disposición pública el informe previo del CPAEx exigido por el artículo 21.1 de la LPAEx y que, de no haberse emitido, se recabe antes de la aprobación del Plan.',
  },
];
