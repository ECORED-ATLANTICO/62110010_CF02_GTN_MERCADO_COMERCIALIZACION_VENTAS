<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Segmentación y posicionamiento de mercado
      
    .bg-primario-p5.mb-4.mb-lg-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0 La segmentación y el posicionamiento constituyen herramientas fundamentales dentro de la planeación comercial y de mercadeo. Su aplicación permite identificar grupos específicos de consumidores, comprender sus necesidades y diseñar estrategias orientadas a generar valor. Asimismo, facilitan la diferenciación de la oferta empresarial y fortalecen la competitividad dentro del mercado.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Segmentación y mercado objetivo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p La segmentación de mercado es el proceso mediante el cual una organización divide un mercado amplio en grupos de consumidores con características, necesidades o comportamientos similares. Esta práctica permite desarrollar estrategias más efectivas y optimizar la utilización de los recursos comerciales. 
        .rounded-4.bg-terciario-t5.p-4.mb-3.py-3
          p.mb-0 La segmentación facilita la comprensión de los clientes y contribuye a diseñar productos, servicios y mensajes ajustados a sus expectativas. Al conocer mejor el mercado, las organizaciones pueden aumentar la efectividad de sus acciones comerciales y fortalecer la relación con los consumidores. 
        p.mb-4.mb-lg-0 A continuación, se presentan los principales criterios de segmentación del mercado y los aspectos que deben considerarse para definir el mercado objetivo de una organización. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")
      .col-xl-9
        TabsA.color-secundario.custom-tabs
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Segmentación demográfica")
            p Clasifica a los consumidores según variables como edad, género, nivel educativo, ocupación, ingresos y estado civil. 
            p.mb-0 #[strong Ejemplo:] una empresa de productos para bebés dirige sus estrategias hacia padres jóvenes con hijos menores de cinco años. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Segmentación geográfica")
            p Divide el mercado según la ubicación de los consumidores, considerando país, región, ciudad, clima o densidad poblacional. 
            p.mb-0 #[strong Ejemplo:] una empresa de prendas para clima frío concentra sus esfuerzos en regiones con bajas temperaturas. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Segmentación psicográfica")
            p Considera estilos de vida, personalidad, intereses, valores y preferencias para comprender las motivaciones de compra. 
            p.mb-0 #[strong Ejemplo:] una empresa de productos ecológicos dirige su oferta a consumidores interesados en la sostenibilidad. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Segmentación conductual")
            p Analiza el comportamiento de los consumidores mediante variables como hábitos de compra, frecuencia de consumo, beneficios buscados y fidelidad. 
            p.mb-0 #[strong Ejemplo:] una aerolínea ofrece beneficios especiales a viajeros frecuentes para fortalecer su lealtad. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Mercado objetivo")
            p Es el grupo de consumidores seleccionado por la organización para dirigir sus esfuerzos comerciales y de mercadeo. Su definición considera el tamaño del segmento, potencial de crecimiento, rentabilidad y capacidad de atención. 
            p.mb-0 #[strong Ejemplo:] una empresa selecciona como mercado objetivo un segmento rentable cuyas necesidades puede atender mediante su oferta. 

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Posicionamiento y diferenciación

    img(data-aos="fade-up")(src="@/assets/curso/tema4/4.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El posicionamiento corresponde al lugar que ocupa una marca, producto o servicio en la mente de los consumidores en comparación con las alternativas disponibles en el mercado. Su propósito es generar una percepción favorable que influya en la decisión de compra y fortalezca la preferencia de los clientes. 

    p.mb-4 Por su parte, la diferenciación consiste en desarrollar características distintivas que permitan a una organización destacarse frente a la competencia. Ambas estrategias trabajan de manera complementaria para fortalecer la competitividad empresarial y mejorar la percepción del mercado. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario")
          div(titulo="Posicionamiento de mercado ")
            .me-lg-5
              p El posicionamiento busca construir una imagen clara y relevante para los consumidores. Para lograrlo, las organizaciones deben identificar aquellos atributos que resultan importantes para sus clientes y comunicar de manera efectiva los beneficios que ofrecen. 
              p Las estrategias de posicionamiento pueden basarse en atributos del producto, beneficios, calidad, precio, innovación, experiencia del cliente o liderazgo dentro de una categoría específica. La elección dependerá de las características del mercado y de la propuesta de valor de la organización. 
              p.mb-0 Por ejemplo, una empresa de telefonía móvil puede posicionarse como líder en cobertura y conectividad, mientras que otra puede enfocarse en ofrecer planes económicos y accesibles para diferentes segmentos de consumidores. 
          div(titulo="Diferenciación empresarial ")
            .me-lg-5
              p La diferenciación consiste en desarrollar elementos que hagan única la oferta de una organización frente a sus competidores. Estos elementos pueden estar relacionados con características del producto, servicio al cliente, tecnología, innovación, diseño o experiencia de compra. 
              p Una estrategia de diferenciación efectiva permite reducir la sensibilidad al precio y fortalecer la preferencia de los consumidores. Además, contribuye a generar ventajas competitivas sostenibles que favorecen el crecimiento empresarial. 
              p.mb-0 Por ejemplo, una cafetería puede diferenciarse mediante la utilización de café de origen certificado, experiencias personalizadas para los clientes y prácticas responsables con el medio ambiente. 
          div(titulo="Beneficios del posicionamiento y la diferenciación ")
            .me-lg-5
              p La aplicación adecuada de estrategias de posicionamiento y diferenciación contribuye al fortalecimiento de la imagen corporativa, al incremento de la participación de mercado y a la construcción de relaciones duraderas con los clientes. Asimismo, facilita la comunicación de la propuesta de valor y mejora la capacidad de la organización para competir en mercados cada vez más exigentes. 
              p.mb-0 Las empresas que logran posicionarse de manera efectiva y diferenciarse de sus competidores tienen mayores posibilidades de atraer nuevos clientes, fidelizar consumidores actuales y alcanzar resultados sostenibles en el largo plazo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Estrategias de segmentación y posicionamiento 
                  p.mb-0 Para fortalecer los conocimientos sobre las estrategias de segmentación y el posicionamiento de mercado, se recomienda consultar el siguiente video, en el cual se explican diferentes estrategias para orientar la oferta empresarial hacia segmentos específicos y establecer una posición diferenciada en el mercado. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=MtOIJyRJ7jI" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center
      .col-xl-10
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3.color-primario(
                texto="¿A qué cliente me dirijo y cómo quiero que me perciba? La importancia de la segmentación y el posicionamiento para los emprendedores "
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .col-8.col-sm-4
              figure.pt-3
                img.imgw-190.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="")










</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
