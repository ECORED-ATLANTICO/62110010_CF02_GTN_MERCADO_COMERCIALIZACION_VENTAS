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
      termino: 'Análisis de datos',
      significado:
        'Proceso de recopilación, organización e interpretación de información para obtener conclusiones útiles.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Medio utilizado para hacer llegar productos o servicios desde el productor hasta el consumidor final.',
    },
    {
      termino: 'Cierre de ventas',
      significado:
        'Etapa del proceso comercial en la que el cliente acepta la oferta y se concreta la transacción.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Persona u organización con posibilidad de adquirir un producto o servicio ofrecido por la empresa.',
    },
    {
      termino: 'Comercialización',
      significado:
        'Conjunto de actividades orientadas a llevar un producto o servicio desde la empresa hasta el cliente final, generando valor para ambas partes.',
    },
    {
      termino: 'Control comercial',
      significado:
        'Conjunto de acciones orientadas a verificar el cumplimiento de metas y corregir desviaciones en los resultados.',
    },
    {
      termino: 'Conversión de ventas',
      significado:
        'Relación entre el número de oportunidades comerciales y las ventas efectivamente realizadas.',
    },
    {
      termino: 'Cumplimiento de metas',
      significado:
        'Grado en que una organización alcanza los objetivos previamente establecidos.',
    },
    {
      termino: 'Desempeño comercial',
      significado:
        'Resultado obtenido por una organización en relación con sus objetivos de ventas y mercadeo.',
    },
    {
      termino: 'Distribución exclusiva',
      significado:
        'Estrategia que asigna la comercialización de un producto a uno o pocos distribuidores autorizados.',
    },
    {
      termino: 'Distribución intensiva',
      significado:
        'Estrategia que busca que un producto esté disponible en la mayor cantidad posible de puntos de venta.',
    },
    {
      termino: 'Distribución selectiva',
      significado:
        'Estrategia mediante la cual los productos se comercializan a través de un número limitado de intermediarios.',
    },
    {
      termino: 'Fuerza de ventas',
      significado:
        'Grupo de personas responsables de ejecutar las actividades de venta y atención comercial.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'Medida utilizada para evaluar el desempeño y el cumplimiento de objetivos comerciales o de mercadeo.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Metodología orientada a optimizar procesos, resultados y desempeño de manera permanente.',
    },
    {
      termino: 'Objeción',
      significado:
        'Duda, inquietud o resistencia manifestada por un cliente durante el proceso de venta antes de tomar una decisión de compra.',
    },
    {
      termino: 'Productividad comercial',
      significado:
        'Capacidad de generar resultados comerciales mediante el uso eficiente de los recursos disponibles.',
    },
    {
      termino: 'Pronóstico de ventas',
      significado:
        'Estimación de las ventas futuras basada en datos históricos y variables del mercado.',
    },
    {
      termino: 'Rentabilidad comercial',
      significado:
        'Capacidad de las actividades comerciales para generar beneficios económicos para la organización.',
    },
    {
      termino: 'Seguimiento comercial',
      significado:
        'Proceso de monitoreo de actividades, resultados y acciones relacionadas con la gestión comercial.',
    },
    {
      termino: 'Software estadístico',
      significado:
        'Herramienta informática utilizada para organizar, procesar y analizar datos con fines de evaluación y toma de decisiones.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso mediante el cual se selecciona una alternativa de acción con base en información y análisis previos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bastos Boubeta, A. I. (2018). <em>Gestión comercial y servicio de atención al cliente</em>. Editorial IC.',
      link: '',
    },
    {
      referencia:
        'Fischer, L., & Espejo, J. (2017). <em>Mercadotecnia</em> (5.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Jobber, D., & Lancaster, G. (2012). <em>Administración de ventas</em> (8.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Monferrer Tirado, D. (2013). <em>Fundamentos de marketing</em>. Universitat Jaume I.',
      link: 'https://repositori.uji.es/xmlui/handle/10234/49394',
    },
    {
      referencia:
        'Muñiz González, R. (2020). <em>Marketing en el siglo XXI</em> (6.ª ed.). Centro de Estudios Financieros.',
      link: 'https://www.marketing-xxi.com',
    },
    {
      referencia:
        'Osterwalder, A., & Pigneur, Y. (2011). <em>Generación de modelos de negocio</em>. Deusto.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña Ancín, J. M. (2021). <em>El plan de marketing en la práctica</em> (25.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Sánchez Herrera, J., & Pintado Blanco, T. (2017). <em>Imagen corporativa: Influencia en la gestión empresarial</em>. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Universitat Oberta de Catalunya. (s. f.). <em>Indicadores de gestión y control empresarial</em>.',
      link: 'https://openaccess.uoc.edu',
    },
    {
      referencia:
        'Westreicher, G. (s. f.). <em>Canales de distribución</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/canales-de-distribucion.html',
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
          nombre: 'Fabio Fonseca Arguelles',
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
