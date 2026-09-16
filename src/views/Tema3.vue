<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Canales de distribución y venta 

    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Los canales de distribución y venta permiten conectar los productos y servicios con los consumidores finales. Su selección influye en la disponibilidad de la oferta, la experiencia del cliente, la cobertura del mercado y el cumplimiento de los objetivos comerciales. Por esta razón, las organizaciones deben seleccionar canales acordes con las características de sus productos o servicios, sus clientes y los mercados que atienden. 

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Concepto y funciones 

    p Los canales de distribución corresponden al conjunto de organizaciones, personas y medios que participan en el proceso de traslado de productos o servicios desde el productor hasta el consumidor final. Su función principal consiste en facilitar el intercambio comercial y garantizar que los bienes o servicios estén disponibles en el lugar, momento y condiciones requeridas por los clientes. 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Estos canales permiten reducir la distancia entre productores y consumidores, facilitando el acceso a los mercados y mejorando la eficiencia de las operaciones comerciales. Asimismo, contribuyen a optimizar los procesos logísticos, disminuir costos de comercialización y fortalecer la atención al cliente. 
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Entre las principales funciones de los canales de distribución se encuentran la promoción de productos, el almacenamiento, el transporte, la gestión de pedidos, la atención comercial y el servicio al cliente. Estas actividades permiten generar valor tanto para la organización como para los consumidores. 
        p.mb-0 Los canales también facilitan la recopilación de información sobre el comportamiento de compra, las preferencias de los clientes y las condiciones del mercado, aspectos fundamentales para la toma de decisiones comerciales. 
    
    .bg-botones-a5.mb-3(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Por ejemplo, empresas como Postobón y Alpina utilizan amplias redes de distribución para garantizar la disponibilidad de sus productos en supermercados, tiendas de barrio, restaurantes y otros puntos de venta en todo el país. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/3.png', alt='')

    p.mb-0 La adecuada articulación de estas funciones contribuye a acercar la oferta al consumidor, mejorar la eficiencia de la comercialización y generar información relevante para la gestión comercial. La forma en que estas funciones se desarrollan depende del tipo de canal seleccionado, aspecto que se aborda a continuación. 

    .fullwidth-bg.fullwidth-bg--1
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Tipos de canales de distribución 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las organizaciones pueden utilizar diferentes canales de distribución de acuerdo con sus objetivos comerciales, las características de los productos o servicios, el mercado que atienden y el perfil de sus clientes. Una de las principales diferencias entre estos canales se relaciona con la participación de intermediarios y la forma en que la oferta llega al consumidor final. 

    p.mb-4 En la siguiente tabla a continuación, se describen los tipos de canales de distribución: 

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Tipos de canales de distribución 
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #FFF8F5")
            th Tipo de canal 
            th(colspan="2") ¿Cómo funciona? 
            th(colspan="2") Característica principal 
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Canal directo]
            td(colspan="2") Productor → consumidor final 
            td(colspan="2") No participan intermediarios. Permite mayor control sobre la comercialización y una relación directa con el cliente.
          tr
            td #[strong Canal indirecto corto]
            td(colspan="2") Productor → minorista → consumidor final 
            td(colspan="2") Participa un intermediario, generalmente un minorista, que facilita el acceso de la oferta al mercado.
          tr(style="background-color: #F6F6F6")
            td #[strong Canal indirecto largo]
            td(colspan="2") Productor → distribuidor o mayorista → minorista → consumidor final 
            td(colspan="2") Participan varios intermediarios y permite ampliar la cobertura y disponibilidad de los productos.
          tr
            td #[strong Canal digital]
            td(colspan="2") Oferta → plataforma o entorno digital → consumidor 
            td(colspan="2") La comercialización se realiza mediante medios digitales que facilitan la interacción y la compra.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        p.mb-lg-0 La selección del canal depende de las condiciones particulares de cada organización y de su mercado. Un canal directo puede favorecer el contacto con el cliente y el control de la experiencia comercial, mientras que los canales indirectos permiten ampliar la cobertura mediante intermediarios. Por su parte, los canales digitales facilitan la comercialización a través de entornos tecnológicos y pueden complementar otros canales utilizados por la organización. 
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        p Empresas como Temu, Mercado Libre y Amazon basan gran parte de su operación comercial en este tipo de canal. 
        .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden
          p.mb-0 La elección del canal de distribución debe responder a los objetivos comerciales, las características de la oferta y las necesidades del mercado. A partir de los canales seleccionados, las organizaciones pueden establecer diferentes #[strong estrategias de venta y comercialización] orientadas a mejorar su cobertura y facilitar el acceso de los clientes a sus productos o servicios. 

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Estrategias de venta y comercialización 

    p Las estrategias de venta y comercialización orientan la forma en que una organización utiliza sus canales para facilitar el acceso de los clientes a sus productos o servicios y alcanzar sus objetivos comerciales. Su selección requiere considerar las características de la oferta, el mercado objetivo, el comportamiento de los consumidores y el nivel de cobertura que se pretende alcanzar.
    p.mb-4 De acuerdo con el nivel de cobertura del mercado, pueden aplicarse las siguientes estrategias: 

    .row.justify-content-center.mb-5
      .col-sm-9.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/6.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Distribución intensiva 
            p.mb-0 Busca que los productos estén disponibles en la mayor cantidad posible de puntos de venta para facilitar su acceso a un amplio número de consumidores. Se utiliza principalmente en productos de consumo frecuente, como alimentos, bebidas, artículos de aseo y otros bienes de uso cotidiano. 
    
      .col-sm-9.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/7.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Distribución selectiva 
            p.mb-0 Consiste en comercializar los productos mediante un número limitado de intermediarios seleccionados de acuerdo con criterios definidos por la organización. Permite mantener mayor control sobre aspectos como la atención, la imagen de la marca y la experiencia ofrecida al cliente. 
    
      .col-sm-9.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/8.png", alt="alt")
          .crd_hover_txt--body.p-4
            h4.mb-3 Distribución exclusiva 
            p.mb-0 Limita la comercialización a uno o pocos distribuidores autorizados en un mercado o zona determinada. Permite ejercer mayor control sobre la distribución y suele emplearse en productos especializados, de alta gama o que requieren condiciones particulares de comercialización. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h3.titulo-con-imagen__texto Comercialización omnicanal 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La comercialización omnicanal integra diferentes canales físicos y digitales para ofrecer una experiencia articulada durante el proceso de compra. El cliente puede interactuar con la organización mediante puntos de venta físicos, sitios web, aplicaciones, redes sociales u otros medios, procurando continuidad entre los diferentes canales utilizados. 
        p.mb-0 Esta estrategia permite responder a las distintas formas en que los consumidores buscan información, comparan alternativas, realizan compras y se comunican con las organizaciones. 

    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          h5.mb-1 Ejemplo aplicado 
          p.mb-0 Una empresa que comercializa alimentos de consumo frecuente puede optar por una estrategia de distribución intensiva para disponer sus productos en supermercados, tiendas y otros establecimientos. Paralelamente, puede utilizar canales digitales para informar sobre sus productos, recibir pedidos o facilitar la interacción con sus clientes. De esta manera, la estrategia de cobertura puede complementarse con diferentes canales de comercialización. 
        .col-lg-2.d-none.d-lg-block
          figure
            img.imgw-150(src='@/assets/curso/tema5/9.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-5
        p Otro ejemplo destacado de comercialización omnicanal es Falabella, empresa que integra tiendas físicas, comercio electrónico, aplicaciones móviles y servicios de entrega para fortalecer la experiencia de compra de sus clientes. 
        p.mb-lg-0 La selección de los canales y las estrategias de comercialización debe responder a las características de la oferta, los clientes y los objetivos de la organización. Su adecuada articulación contribuye a ampliar la cobertura del mercado, facilitar el acceso a los productos o servicios y fortalecer la gestión comercial. 
      .col-lg-7
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-xl-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Canales de Distribución: cómo llegan los productos al cliente final
                  p.mb-0 Se recomienda consultar el siguiente recurso audiovisual, en el cual se aborda la importancia del análisis de datos para apoyar la toma de decisiones y mejorar los resultados comerciales de una organización:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=c1bTM7DjFRA" target="_blank")
                    span Ir al recurso









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
