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
      tema: 'Fundamentos y aplicación del modelo Canvas en los negocios ',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conocimiento de los fundamentos y aplicación del modelo Canvas en los negocios.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del modelo de negocio Canvas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar visualmente cómo una empresa crea y entrega valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar productos industriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El modelo de negocio Canvas permite representar de manera visual cómo una organización crea, entrega y captura valor para sus clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes componentes pertenece al modelo de negocio Canvas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentos de clientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los segmentos de clientes son uno de los nueve componentes del modelo de negocio Canvas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué permite identificar el mapa de empatía?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las necesidades, percepciones y comportamientos del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los indicadores de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El mapa de empatía ayuda a comprender mejor las necesidades, expectativas y comportamientos del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es la finalidad principal de la curva de valor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar atributos frente a la competencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La curva de valor permite identificar factores diferenciadores frente a los competidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué representa la propuesta de valor dentro de un negocio?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El conjunto de beneficios ofrecidos al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los gastos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El sistema contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La propuesta de valor expresa los beneficios que recibe el cliente al adquirir un producto o servicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta permite identificar fortalezas, debilidades, oportunidades y amenazas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'PEST.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DOFA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de flujo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La matriz DOFA facilita el análisis interno y externo de una organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué aspecto analiza principalmente la herramienta PEST?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores políticos, económicos, sociales y tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis PEST estudia variables externas que pueden afectar a la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo principal del Benchmark?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar contratos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar buenas prácticas empresariales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gestionar nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El Benchmark permite comparar procesos y buenas prácticas para identificar oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es la segmentación de mercado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dividir el mercado en grupos con características similares.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Clasificar proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La segmentación permite identificar grupos de clientes con necesidades y características comunes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué se entiende por mercado objetivo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El conjunto de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El grupo de clientes al que se dirige la empresa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los competidores directos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los accionistas de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El mercado objetivo corresponde al grupo de consumidores que la organización desea atender mediante su propuesta de valor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué busca principalmente el posicionamiento de mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ocupar un lugar diferenciador en la mente del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contratar más personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El posicionamiento busca que la marca, producto o servicio ocupe un lugar distintivo en la mente de los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué aspecto caracteriza la diferenciación empresarial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desarrollar elementos que hagan única la oferta frente a la competencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la calidad de los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar los costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La diferenciación permite destacar la oferta empresarial mediante atributos valorados por los clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es la función principal del marketing estratégico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar promociones diarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar el mercado y definir acciones de largo plazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar pagos a proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El marketing estratégico se orienta al análisis del mercado y a la definición de estrategias empresariales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza al marketing operativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar tendencias económicas globales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formular la misión empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar estructuras organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar acciones comerciales y de mercadeo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El marketing operativo se enfoca en la ejecución de las acciones definidas en la estrategia comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuáles son los elementos tradicionales del marketing mix?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto, precio, plaza y promoción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planeación, organización, dirección y control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad, innovación, servicio y logística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción, ventas, finanzas y talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El marketing mix está compuesto por producto, precio, plaza y promoción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es una estrategia orientada al crecimiento empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cobertura del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar líneas de producto exitosas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollar nuevos productos y mercados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuir la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El desarrollo de nuevos productos y mercados favorece el crecimiento y la competitividad empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué busca el marketing experiencial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear experiencias memorables para el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la interacción con los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar promociones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar los canales de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El marketing experiencial busca generar emociones y experiencias positivas para fortalecer la relación con el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuál es el propósito principal del merchandising?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la exhibición de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la presentación y visibilidad de los productos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la circulación de clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las actividades de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El merchandising utiliza técnicas que favorecen la exhibición y promoción de productos en el punto de venta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué función cumple la señalética dentro de un espacio comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar costos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar la atención al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar e informar a los consumidores dentro del establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La señalética facilita la orientación, ubicación e información de los clientes dentro del punto de venta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es uno de los beneficios de la iluminación comercial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la percepción de los productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar el consumo energético sin propósito comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la exhibición de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Destacar productos y mejorar la experiencia de compra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La iluminación ayuda a resaltar productos, crear ambientes atractivos y fortalecer la experiencia del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
