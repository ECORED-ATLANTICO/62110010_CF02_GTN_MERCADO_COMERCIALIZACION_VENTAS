<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El componente formativo Control del plan comercial y de mercadeo aborda el estudio del proceso técnico de comercialización, incluyendo su concepto, etapas y aplicación en la gestión comercial. Asimismo, desarrolla la gestión de objeciones y el cierre de ventas como herramientas fundamentales para fortalecer la relación con los clientes y apoyar el cumplimiento de los objetivos comerciales. 
        .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden
          p.mb-0 De igual manera, estudia los canales de distribución y venta, sus funciones y estrategias de comercialización. Posteriormente, analiza los indicadores de gestión, el seguimiento y control del desempeño comercial como mecanismos para evaluar resultados y apoyar la mejora continua. Finalmente, integra el análisis de datos mediante el uso de software para el procesamiento de información estadística, favoreciendo la interpretación de resultados y la toma de decisiones comerciales. 

    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo Control del plan comercial y de mercadeo, integra el proceso técnico de comercialización, la gestión de objeciones y el cierre de ventas, así como los canales de distribución y las estrategias de comercialización. También aborda el uso de indicadores para medir el desempeño, realizar seguimiento y controlar el cumplimiento del plan comercial y de mercadeo. Finalmente, incorpora el análisis de datos mediante herramientas digitales para organizar y procesar información, interpretar resultados, identificar oportunidades de mejora y fundamentar la toma de decisiones comerciales orientadas al cumplimiento de los objetivos establecidos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
