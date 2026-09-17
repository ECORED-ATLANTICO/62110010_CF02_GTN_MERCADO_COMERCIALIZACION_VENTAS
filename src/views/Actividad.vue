<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del control del plan comercial y mercadeo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conocimiento de los fundamentos del control del plan comercial y mercadeo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del proceso técnico de comercialización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar estados financieros de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planificar y desarrollar actividades para llevar productos y servicios al mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar procesos de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que el proceso técnico de comercialización permite planificar y ejecutar actividades orientadas a llevar productos y servicios al mercado.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con el proceso técnico de comercialización.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la primera etapa del proceso técnico de comercialización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribución y venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificación de necesidades y oportunidades de mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seguimiento de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la identificación de necesidades y oportunidades de mercado constituye la primera etapa del proceso de comercialización.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente las etapas del proceso técnico de comercialización.',
        },
        {
          id: 3,
          texto:
            '¿Qué se establece durante la etapa de planificación comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Objetivos, metas y estrategias comerciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estados financieros y balances generales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manuales de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructuras salariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que la planificación comercial permite definir objetivos, metas y estrategias para alcanzar resultados comerciales.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con la planificación comercial.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el objetivo principal de la promoción y comunicación comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Informar y persuadir a los consumidores sobre los beneficios de la oferta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la promoción comercial busca informar y persuadir a los consumidores acerca de los productos o servicios.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con la promoción y comunicación comercial.',
        },
        {
          id: 5,
          texto: '¿Qué es una objeción dentro del proceso de ventas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una estrategia de distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una inquietud o duda manifestada por el cliente durante la negociación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un indicador comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un canal de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que una objeción corresponde a una inquietud o preocupación expresada por el cliente durante el proceso de compra.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con las objeciones en ventas.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes técnicas facilita comprender mejor las inquietudes del cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Distribución exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Benchmarking.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentación de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la escucha activa permite comprender las necesidades y preocupaciones expresadas por el cliente.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente las técnicas para el manejo de objeciones.',
        },
        {
          id: 7,
          texto: '¿Qué busca la técnica de argumentación basada en beneficios?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Destacar únicamente las características del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resaltar los beneficios que obtendrá el cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar los costos de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el proceso de negociación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que esta técnica busca destacar los beneficios que el cliente obtiene con la adquisición del producto o servicio.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con el manejo de objeciones.',
        },
        {
          id: 8,
          texto: '¿Qué favorece un cierre de ventas efectivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presionar constantemente al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar las objeciones presentadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolver las inquietudes y generar confianza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar el precio del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que un cierre de ventas efectivo se logra al resolver objeciones y fortalecer la confianza del cliente.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con el cierre de ventas.',
        },
        {
          id: 9,
          texto: '¿Cuál es la función principal de un canal de distribución?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Llevar los productos o servicios desde la empresa hasta el cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contratar personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que los canales de distribución permiten que los productos lleguen al consumidor final.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con los canales de distribución y venta.',
        },
        {
          id: 10,
          texto: '¿Qué caracteriza la estrategia de distribución intensiva?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercializar mediante un único distribuidor autorizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Limitar la presencia del producto a pocos establecimientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Disponibilizar el producto en la mayor cantidad posible de puntos de venta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vender exclusivamente por medios digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la distribución intensiva busca lograr la mayor cobertura posible del mercado.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con las estrategias de distribución.',
        },
        {
          id: 11,
          texto: '¿Qué caracteriza la distribución selectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar todos los puntos de venta disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comercializar mediante intermediarios previamente seleccionados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vender únicamente por redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que la distribución selectiva utiliza intermediarios seleccionados para comercializar los productos.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con los tipos de canales de distribución.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de la comercialización omnicanal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integrar canales físicos y digitales para atender al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comercializar únicamente en establecimientos físicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el comercio electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los puntos de contacto con el consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la comercialización omnicanal integra diferentes canales para mejorar la experiencia del cliente.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con las estrategias de venta y comercialización.',
        },
        {
          id: 13,
          texto: '¿Qué es un indicador dentro de la gestión comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento contable obligatorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una medida utilizada para evaluar resultados y desempeño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un canal de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un plan de mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que los indicadores permiten medir y evaluar el desempeño de las actividades comerciales.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con los indicadores de gestión comercial.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la finalidad principal del indicador de cumplimiento de ventas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Medir el porcentaje de logro frente a una meta establecida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evaluar el inventario disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Analizar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar los costos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que este indicador permite medir el nivel de cumplimiento de las metas comerciales.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con los indicadores de ventas.',
        },
        {
          id: 15,
          texto: '¿Qué mide la tasa de conversión?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La satisfacción de los proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El crecimiento de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre oportunidades comerciales y ventas realizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El nivel de inventario disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que la tasa de conversión permite evaluar la efectividad de las estrategias comerciales.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con los indicadores de gestión comercial.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito del seguimiento y control del plan comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisar el cumplimiento de objetivos y aplicar acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir los procesos de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar indicadores de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que el seguimiento permite evaluar resultados y realizar ajustes cuando sea necesario.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con el seguimiento y control del plan comercial.',
        },
        {
          id: 17,
          texto: '¿Por qué son importantes los datos en la gestión comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque sustituyen la atención al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permiten comprender el mercado y apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque eliminan la necesidad de planificar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque reemplazan los procesos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que los datos facilitan el análisis del mercado y la toma de decisiones informadas.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con la importancia de los datos en la gestión comercial.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes herramientas puede utilizarse para analizar datos comerciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organigrama empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Power BI.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reglamento interno de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que Power BI es una herramienta utilizada para el análisis y visualización de datos comerciales.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con el software para el análisis de datos.',
        },
        {
          id: 19,
          texto:
            '¿Qué permiten los sistemas CRM dentro de la gestión comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar inventarios exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenar información de clientes y realizar seguimiento comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar nóminas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar procesos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has identificado que los sistemas CRM facilitan la gestión de clientes y el seguimiento de oportunidades de venta.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con las herramientas tecnológicas para la gestión comercial.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el principal propósito de interpretar los resultados obtenidos mediante el análisis de datos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la complejidad de los informes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir las estrategias comerciales existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar tendencias y apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los indicadores de gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Has reconocido que la interpretación de resultados permite identificar tendencias y tomar decisiones fundamentadas en información objetiva.',
          mensaje_incorrecto:
            'Te recomendamos revisar nuevamente el contenido relacionado con la interpretación de resultados y la toma de decisiones.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
