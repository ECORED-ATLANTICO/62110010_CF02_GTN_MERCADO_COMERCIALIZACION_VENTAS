<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p El componente formativo Control del plan comercial y de mercadeo aborda el estudio de herramientas y estrategias orientadas al seguimiento, evaluación y control de las acciones comerciales y de mercadeo como elementos fundamentales para la gestión empresarial. En este contexto, los indicadores de desempeño permiten medir resultados, identificar oportunidades de mejora y apoyar la toma de decisiones orientadas al cumplimiento de los objetivos organizacionales.
    
    .bg-terciario-t5.mb-3(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 A través del desarrollo de este componente se analizan conceptos relacionados con el proceso técnico de comercialización, la gestión de objeciones, el cierre de ventas, los canales de distribución y los mecanismos de seguimiento del desempeño comercial. Asimismo, se estudian indicadores de gestión y herramientas de análisis que facilitan la evaluación de resultados y la implementación de acciones de mejora continua en los procesos comerciales.
        .col-auto.col-lg-5
          figure
            img(src='@/assets/curso/intro.png', alt='')

    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden
      .row.justify-content-center.align-items-center
        .col-lg-2.col-xl-1.d-none.d-lg-block
          figure
            img.imgw-94(src='@/assets/curso/intro-2.png', alt='')
        .col-lg-10.col-xl-11
          p.mb-0 De igual manera, el componente integra fundamentos para el análisis de datos comerciales mediante el uso de #[em software] especializado, permitiendo transformar la información en conocimiento útil para la toma de decisiones. A lo largo del desarrollo temático se abordarán conceptos, metodologías y aplicaciones prácticas que fortalecerán el control del plan comercial y de mercadeo, favoreciendo la eficiencia, la productividad y la competitividad de las organizaciones. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
