<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[em Marketing] y estrategias de crecimiento 

    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El #[em marketing] y las estrategias de crecimiento permiten a las organizaciones identificar oportunidades de mercado, fortalecer la relación con los clientes y desarrollar acciones orientadas al logro de los objetivos empresariales. Su aplicación facilita la generación de valor, el posicionamiento de la marca y el incremento de la competitividad en entornos cada vez más dinámicos y exigentes. 

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1	#[em Marketing] estratégico y #[em marketing] operativo 



    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2	#[em Marketing mix]


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario")
          div(titulo="Producto")
            .me-lg-5
              p.mb-0 El producto corresponde al bien o servicio ofrecido por la empresa para satisfacer necesidades o deseos de los consumidores. Incluye aspectos relacionados con calidad, diseño, características, empaque, marca y beneficios percibidos. 
          div(titulo="Precio")
            .me-lg-5
              p.mb-0 El precio representa el valor económico que el cliente debe pagar para adquirir un producto o servicio. Su definición debe considerar factores como costos, competencia, demanda y percepción de valor por parte de los consumidores. ambiente. 
          div(titulo="Plaza (distribución)")
            .me-lg-5
              p.mb-0 La plaza hace referencia a los canales de distribución utilizados para poner los productos o servicios a disposición de los consumidores. Incluye aspectos relacionados con logística, almacenamiento, transporte y puntos de venta. 
          div(titulo="Promoción")
            .me-lg-5
              p.mb-0 La promoción comprende las actividades de comunicación orientadas a informar, persuadir y recordar a los consumidores los beneficios de un producto o servicio. Incluye herramientas como publicidad, relaciones públicas, promoción de ventas, mercadeo digital y ventas personales. 
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/9.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 #[em MARKETING MI]X - Las 4p del #[em Marketing] - cómo aplicarlas y ejemplos 
                  p.mb-0 Para fortalecer los conocimientos sobre el marketing mix y comprender la aplicación de sus cuatro variables: producto, precio, plaza y promoción, se recomienda consultar el siguiente video, en el cual se explica cómo aplicar estas variables en la planificación de estrategias comerciales y se presentan ejemplos prácticos. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=KiqUOstzOsk" target="_blank")
                    span Ir al recurso

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3	Estrategias de mercado y crecimiento empresarial


 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
