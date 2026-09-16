export default {
  global: {
    Name: 'Control del plan comercial y de mercadeo',
    Description:
      'Este componente formativo desarrolla conocimientos relacionados con el control y seguimiento del plan comercial y de mercadeo mediante el uso de indicadores de gestión y herramientas de análisis de datos. Aborda el proceso técnico de comercialización, la gestión de objeciones, el cierre de ventas y los canales de distribución, con el propósito de fortalecer la evaluación de resultados, la toma de decisiones y la mejora continua en las organizaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso técnico de comercialización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto e importancia del proceso técnico de comercialización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Etapas del proceso de comercialización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicación en la gestión comercial',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de objeciones y cierre de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y tipos de objeciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas para el manejo de objeciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Compromiso y cierre de ventas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Canales de distribución y venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y funciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de canales de distribución',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de venta y comercialización',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores y seguimiento del desempeño comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto e importancia de los indicadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Indicadores de gestión comercial',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Seguimiento y control del plan comercial',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de datos para la toma de decisiones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia de los datos en la gestión comercial',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Uso de software para el análisis de datos estadísticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Interpretación de resultados y toma de decisiones',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis estratégico',
      significado:
        'Proceso de evaluación de factores internos y externos que influyen en el desempeño de una organización.',
    },
    {
      termino: 'Atributos clave',
      significado:
        'Características diferenciadoras que aportan valor a un producto, servicio o negocio.',
    },
    {
      termino: '<em>Benchmark</em>',
      significado:
        'Técnica de comparación con organizaciones referentes para identificar buenas prácticas y oportunidades de mejora.',
    },
    {
      termino: '<em>Canvas</em>',
      significado:
        'Herramienta visual utilizada para diseñar, analizar y gestionar modelos de negocio.',
    },
    {
      termino: 'Canal',
      significado:
        'Medio utilizado para comunicar, distribuir o entregar valor al cliente.',
    },
    {
      termino: 'Curva de valor',
      significado:
        'Representación gráfica de los atributos que una empresa ofrece frente a sus competidores.',
    },
    {
      termino: 'Diferenciación',
      significado:
        'Estrategia orientada a destacar una oferta frente a la competencia mediante características únicas.',
    },
    {
      termino: 'DOFA',
      significado:
        'Herramienta de análisis que identifica debilidades, oportunidades, fortalezas y amenazas.',
    },
    {
      termino: 'Estrategia comercial',
      significado:
        'Conjunto de acciones orientadas a alcanzar objetivos de ventas y crecimiento empresarial.',
    },
    {
      termino: 'Factor clave',
      significado:
        'Elemento determinante para el éxito y sostenibilidad de un negocio.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Distribución física de espacios, mobiliario y productos dentro de un establecimiento comercial.',
    },
    {
      termino: 'Mercadotecnia directa',
      significado:
        'Estrategia de comunicación que busca interactuar directamente con clientes potenciales.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Conjunto de actividades destinadas a identificar necesidades y generar valor para los clientes.',
    },
    {
      termino: '<em>Marketing mix</em>',
      significado:
        'Combinación de variables de mercadeo utilizadas para alcanzar objetivos comerciales.',
    },
    {
      termino: '<em>Marketing</em> experiencial',
      significado:
        'Estrategia que busca generar experiencias memorables para fortalecer la relación con el cliente.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas aplicadas en el punto de venta para estimular la compra de productos o servicios.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Grupo específico de consumidores al que se dirige una organización.',
    },
    {
      termino: '<em>Neuromarketing</em>',
      significado:
        'Disciplina que estudia las respuestas del cerebro ante estímulos de mercadeo y consumo.',
    },
    {
      termino: 'PEST',
      significado:
        'Herramienta que analiza factores políticos, económicos, sociales y tecnológicos del entorno.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca o producto en la mente de los consumidores.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Beneficio diferencial que una organización ofrece para satisfacer necesidades de sus clientes.',
    },
    {
      termino: '<em>Store planning</em>',
      significado:
        'Planificación estratégica de la distribución y organización de espacios dentro de un establecimiento comercial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2024). <em>Herramientas para la planeación estratégica empresarial</em>.',
      link: 'https://www.ccb.org.co',
    },
    {
      referencia:
        'Confecámaras. (2024). <em>Competitividad, mercados y crecimiento empresarial en Colombia</em>.',
      link: 'https://www.confecamaras.org.co',
    },
    {
      referencia:
        'Ferrell, O. C., & Hartline, M. D. (2022). <em>Estrategia de marketing</em> (8.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024). <em>Estrategias para el fortalecimiento empresarial y comercial</em>.',
      link: 'https://www.mincit.gov.co',
    },
    {
      referencia:
        'Osterwalder, A., & Pigneur, Y. (2011). <em>Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores</em>. Deusto.',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (2008). <em>Ser competitivo</em>. Ediciones Deusto.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2025). <em>Guía metodológica para la formulación de planes de mercadeo</em>.',
      link: 'https://www.sena.edu.co',
    },
    {
      referencia:
        'Stanton, W. J., Etzel, M. J., & Walker, B. J. (2018). <em>Fundamentos de marketing</em> (14.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2024). <em>Guía de buenas prácticas comerciales y protección al consumidor</em>.',
      link: 'https://www.sic.gov.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
