<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis estratégico y oportunidades de mercado

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 El análisis estratégico permite comprender la situación actual de una organización y su entorno, facilitando la identificación de oportunidades y desafíos que pueden influir en el cumplimiento de los objetivos empresariales. Mediante la aplicación de diferentes herramientas de análisis, las empresas pueden obtener información relevante para la toma de decisiones y la formulación de estrategias comerciales y de mercadeo orientadas al crecimiento y la competitividad. 

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Análisis interno y externo de la empresa

    .bg-secundario-s5.mb-4.mb-lg-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/2.png', alt='')
        .col-lg
          .p-4
            p.mb-0 El análisis estratégico se desarrolla mediante el estudio de factores internos y externos que afectan el desempeño organizacional. Esta evaluación permite conocer las capacidades de la empresa, identificar oportunidades de mejora y anticipar cambios en el entorno que puedan generar riesgos o ventajas competitivas.

    p.mb-4 Para comprender los factores que influyen en el desempeño de una organización, es necesario diferenciar aquellos que se encuentran bajo su control de los que provienen del entorno. A continuación, se presentan los principales aspectos del análisis interno y externo de la empresa: 

    .p-4.bg-slider.rounded-4.mb-5
      .tarjeta.tarjeta--blanca
        SlyderA(tipo="a")
          div.my-5.w-75.mx-auto
            .row.justify-content-center.align-items-center
              .col-lg-9
                h5.mb-1 Análisis interno
                p.mb-0 Evalúa los recursos, capacidades, procesos y resultados de una organización para identificar fortalezas y debilidades que influyen en el desempeño empresarial. 
                p.mb-0 #[strong Aspectos que se analizan:] estructura organizacional, situación financiera, talento humano, procesos operativos, capacidad tecnológica, gestión comercial y calidad de productos o servicios. 
                p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa identifica como fortaleza la experiencia de su equipo comercial y como debilidad su limitada presencia en canales digitales. 
              .col-sm-6.col-lg-3
                img(src="@/assets/curso/tema3/3.png", alt="")
          div.my-5.w-75.mx-auto
            .row.justify-content-center.align-items-center
              .col-lg-9
                h5.mb-1 Análisis externo
                p.mb-0 Evalúa los factores del entorno que pueden afectar positiva o negativamente el desarrollo de la organización y que se encuentran fuera de su control directo. 
                p.mb-0 #[strong Aspectos que se analizan:] condiciones económicas, tendencias del mercado, cambios tecnológicos, competencia, regulaciones gubernamentales y comportamiento de los consumidores. 
                p.mb-4.mb-lg-0 #[strong Ejemplo:] el incremento en el uso de canales digitales puede representar una oportunidad para ampliar la cobertura comercial mediante plataformas electrónicas. 
              .col-sm-6.col-lg-3
                img(src="@/assets/curso/tema3/4.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h3.titulo-con-imagen__texto Importancia del análisis estratégico

    p.mb-0.z-2 La integración del análisis interno y externo proporciona una visión completa de la situación empresarial. Esta información permite fundamentar la toma de decisiones, optimizar el uso de recursos y diseñar estrategias alineadas con las condiciones reales del mercado y las capacidades organizacionales. 

    .fullwidth-bg.fullwidth-bg--1
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Matriz DOFA, PEST y <em>Benchmark</em>

    p.z-2 Las herramientas de análisis estratégico facilitan la recopilación y organización de información relevante para la toma de decisiones empresariales. Entre las más utilizadas se encuentran la matriz DOFA, el análisis PEST y el #[em Benchmark], debido a su utilidad para comprender la realidad organizacional y las dinámicas del entorno.  
    p.mb-4.z-2 A continuación, se presentan estas herramientas de análisis estratégico y su utilidad para identificar factores internos y externos, reconocer oportunidades de mejora y apoyar la toma de decisiones empresariales. 

    .row.justify-content-center.align-items-center.z-2
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/5.png", alt="")
      .col-lg-9
        TabsA.color-secundario
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Matriz DOFA")
            p La matriz DOFA permite identificar fortalezas, debilidades, oportunidades y amenazas de una organización. Las fortalezas y debilidades corresponden a factores internos, mientras que las oportunidades y amenazas se relacionan con factores externos. Su análisis facilita la formulación de estrategias y la planificación empresarial. 
            p.mb-0 #[strong Ejemplo:] una empresa identifica como fortaleza el reconocimiento de su marca, como debilidad la baja inversión tecnológica, como oportunidad el crecimiento de la demanda y como amenaza el ingreso de nuevos competidores. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Análisis PEST")
            p El análisis PEST permite estudiar factores políticos, económicos, sociales y tecnológicos que pueden influir en las actividades de una organización. Su aplicación facilita la identificación de tendencias, oportunidades y riesgos del entorno, fortaleciendo la capacidad de adaptación empresarial. 
            p.mb-0 #[strong Ejemplo:] una empresa analiza cambios en las regulaciones, la inflación, los hábitos de consumo y los avances tecnológicos para anticipar escenarios y ajustar sus estrategias. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="<em>Benchmark</em>")
            p El benchmark consiste en comparar procesos, productos, servicios o estrategias con organizaciones reconocidas por sus buenas prácticas. Esta comparación permite identificar oportunidades de mejora, promover la innovación y fortalecer la competitividad. 
            p.mb-0 #[strong Ejemplo:] una empresa de comercio electrónico analiza las estrategias de servicio al cliente de compañías líderes para identificar mejoras aplicables a sus propios procesos. 

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Oportunidades de mercado

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Las oportunidades de mercado corresponden a situaciones favorables que pueden ser aprovechadas por una organización para incrementar sus ventas, ampliar su participación de mercado o desarrollar nuevas líneas de negocio. Su identificación constituye una actividad fundamental dentro de los procesos de planeación comercial y estratégica. 
        .bg-terciario-t5.p-4.rounded-4.mb-4.mb-lg-0.py-3
          p.mb-0 Las oportunidades pueden surgir como resultado de cambios en las preferencias de los consumidores, avances tecnológicos, nuevas tendencias de mercado, modificaciones regulatorias o necesidades insatisfechas detectadas en determinados segmentos de clientes.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/6.png", alt="")
    
    TabsB.color-secundario.mb-4.z-2
      .py-4.py-md-5.px-4(titulo="Identificación de oportunidades" :icono="require_src('@/assets/curso/tema3/7.png')")
        .row.align-items-center.justify-content-center
          .col-sm-6.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema3/10.png', alt='')
          .col-lg-9
            p La curva de valor es una representación gráfica utilizada para comparar los atributos ofrecidos por una organización frente a los atributos proporcionados por sus competidores. Esta herramienta permite identificar fortalezas, oportunidades de mejora y aspectos diferenciadores que pueden generar mayor valor para los clientes.
            p Mediante la curva de valor es posible determinar qué atributos deben fortalecerse, reducirse, eliminarse o crearse para construir propuestas más atractivas y competitivas. Su análisis favorece la innovación y contribuye a la identificación de nuevas oportunidades de mercado.
            p.mb-0 Por ejemplo, una empresa de entrega de alimentos saludables puede diferenciarse mediante atributos como la personalización de menús, la rapidez en la entrega y el uso de empaques ecológicos, generando una oferta distinta a la de sus competidores.
      
      .py-4.py-md-5.px-4(titulo="Evaluación de oportunidades" :icono="require_src('@/assets/curso/tema3/8.png')")
        .row.align-items-center.justify-content-center
          .col-sm-6.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema3/11.png', alt='')
          .col-lg-9
            p No todas las oportunidades identificadas resultan viables para una organización. Por esta razón, es necesario evaluar aspectos como el tamaño del mercado, la inversión requerida, la capacidad operativa, el nivel de competencia y la rentabilidad esperada. 
            p.mb-0 Este análisis permite priorizar aquellas oportunidades que presentan mayores probabilidades de éxito y que se encuentran alineadas con los objetivos estratégicos de la empresa. 

      .py-4.py-md-5.px-4(titulo="Importancia de las oportunidades de mercado " :icono="require_src('@/assets/curso/tema3/9.png')")
        .row.align-items-center.justify-content-center
          .col-sm-6.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema3/12.png', alt='')
          .col-lg-9
            p El aprovechamiento adecuado de las oportunidades de mercado contribuye al crecimiento empresarial, al fortalecimiento de la competitividad y a la generación de nuevas fuentes de ingresos. Además, permite a las organizaciones adaptarse a los cambios del entorno y responder de manera oportuna a las necesidades de los consumidores. 
            p.mb-0 Las empresas que realizan un seguimiento constante de las dinámicas del mercado tienen mayores posibilidades de identificar oportunidades estratégicas y desarrollar acciones que les permitan consolidar ventajas competitivas sostenibles en el tiempo. 
        

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
