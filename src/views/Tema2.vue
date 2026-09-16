<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propuesta de valor y ventaja competitiva 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La propuesta de valor y la ventaja competitiva constituyen elementos fundamentales dentro de la planeación comercial y de mercadeo. Su análisis permite identificar las necesidades de los clientes, comprender los factores que influyen en las decisiones de compra y diseñar ofertas diferenciadas que generen valor para el mercado objetivo. Estas herramientas contribuyen al fortalecimiento del modelo de negocio y al posicionamiento de la organización frente a la competencia. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Mapa de empatía 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p El mapa de empatía es una herramienta que permite comprender de manera más profunda las necesidades, comportamientos, motivaciones y expectativas de los clientes. Su propósito consiste en analizar la realidad del consumidor desde su propia perspectiva, facilitando el diseño de productos, servicios y estrategias comerciales más alineados con sus requerimientos. 
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Esta herramienta ayuda a las organizaciones a identificar qué piensa, siente, observa, escucha, dice y hace un cliente, así como los esfuerzos que realiza para resolver sus necesidades y los beneficios que espera obtener. La información obtenida contribuye a mejorar la comprensión del mercado objetivo y fortalece la construcción de propuestas de valor diferenciadas. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/2.png", alt="")

    p.mb-4 En este contexto, el mapa de empatía se estructura en diferentes componentes que permiten analizar al consumidor desde distintas perspectivas, como se presenta a continuación: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario")
          div(titulo="¿Qué piensa y siente?")
            .me-lg-5
              p Identifica preocupaciones, aspiraciones, intereses y emociones del cliente frente a una necesidad. 
              p.mb-0 #[strong Ejemplo:] un profesional busca alimentación saludable que se adapte a su falta de tiempo y mejore su bienestar. 
          div(titulo="¿Qué ve?")
            .me-lg-5
              p Analiza productos, servicios, tendencias, publicidad y comportamientos observados que influyen en las decisiones de compra. 
              p.mb-0 #[strong Ejemplo:] observa en redes sociales opciones de alimentación saludable y recomendaciones de otros consumidores. 
          div(titulo="¿Qué escucha?")
            .me-lg-5
              p Identifica opiniones, recomendaciones e influencias de familiares, amigos, compañeros, medios y líderes de opinión que pueden afectar sus decisiones. 
              p.mb-0 #[strong Ejemplo:] recibe recomendaciones de amigos sobre restaurantes con opciones saludables. 
          div(titulo="¿Qué dice y hace?")
            .me-lg-5
              p Analiza las opiniones expresadas y los comportamientos observables para identificar hábitos y patrones relevantes para la empresa. 
              p.mb-0 #[strong Ejemplo:] publica en redes sus preferencias alimentarias y consulta información antes de comprar. 
          div(titulo="Esfuerzos y beneficios")
            .me-lg-5
              p Los esfuerzos son obstáculos o problemas que enfrenta el cliente; los beneficios son resultados positivos que espera obtener. 
              p.mb-0 #[strong Ejemplo:] busca ahorrar tiempo y obtener alimentos saludables y prácticos. 
    
    p.mb-0 La identificación de estos elementos permite diseñar propuestas de valor orientadas a reducir dificultades y aumentar los beneficios percibidos por el consumidor. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Ventaja competitiva 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Curva de valor y comparación competitiva
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/4-mob.png", alt="Curva de valor que compara un restaurante con un competidor según precio, calidad, ambiente, diseño, localización y horario.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/4.png", alt="Curva de valor que compara un restaurante con un competidor según precio, calidad, ambiente, diseño, localización y horario.")
        figcaption Nota. De Plantilla para representar la curva de valor, por Gerardo Marote, 2019. Fuente original: Gerardo Marote
      .col-lg-3
        p.mb-0 La curva de valor y la propuesta de valor son herramientas complementarias que permiten identificar factores de diferenciación y diseñar ofertas comerciales que respondan de manera efectiva a las necesidades del mercado. Su aplicación facilita el desarrollo de ventajas competitivas y fortalece el posicionamiento empresarial. 

    TabsB.color-secundario.mb-4.z-2
      .py-4.py-md-5.px-4(titulo="Curva de valor" :icono="require_src('@/assets/curso/tema2/5.png')")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/7.png', alt='')
          .col-lg-8
            p La curva de valor es una representación gráfica utilizada para comparar los atributos ofrecidos por una organización frente a los atributos proporcionados por sus competidores. Esta herramienta permite identificar fortalezas, oportunidades de mejora y aspectos diferenciadores que pueden generar mayor valor para los clientes. 
            p Mediante la curva de valor es posible determinar qué atributos deben fortalecerse, reducirse, eliminarse o crearse para construir propuestas más atractivas y competitivas. Su análisis favorece la innovación y contribuye a la identificación de nuevas oportunidades de mercado. 
            p.mb-0 Por ejemplo, una empresa de entrega de alimentos saludables puede diferenciarse mediante atributos como la personalización de menús, la rapidez en la entrega y el uso de empaques ecológicos, generando una oferta distinta a la de sus competidores. 
      
      .py-4.py-md-5.px-4(titulo="Propuesta de valor" :icono="require_src('@/assets/curso/tema2/6.png')")
        .row.align-items-center.justify-content-center
          .col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/11.png', alt='')
          .col-lg-8
            p La propuesta de valor corresponde al conjunto de beneficios que una organización ofrece para satisfacer las necesidades de sus clientes y resolver problemas específicos. Constituye la principal razón por la cual un consumidor elige una empresa en lugar de otra. 
            p Una propuesta de valor efectiva debe ser clara, relevante y diferenciadora. Para su construcción es necesario comprender las expectativas del cliente, identificar sus necesidades y diseñar soluciones que generen beneficios tangibles. 
            p Entre los elementos que pueden fortalecer una propuesta de valor se encuentran la calidad, la innovación, la comodidad, la personalización, el ahorro de tiempo, la reducción de costos y la mejora de la experiencia del cliente. 
            p.mb-0 La adecuada construcción de una propuesta de valor contribuye al fortalecimiento de la relación con los consumidores y al incremento de la competitividad empresarial. 

    .row.justify-content-center.align-items-center
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Curva de valor 
                  p.mb-0 Para fortalecer los conocimientos sobre la curva de valor y comprender su aplicación en el análisis de la propuesta de valor frente a la competencia, se recomienda consultar el siguiente video, en el que se presenta de manera práctica el uso de esta herramienta. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZhJCWiv4qGY" target="_blank")
                    span Ir al recurso

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Ventaja competitiva 

    .bg-secundario-s5.mb-4.mb-lg-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/8.png', alt='')
        .col-lg
          .p-4
            p.mb-0 La ventaja competitiva corresponde a la capacidad que tiene una organización para diferenciarse de sus competidores mediante atributos, recursos o estrategias que generan valor superior para los clientes. Esta ventaja permite alcanzar mejores resultados comerciales y fortalecer el posicionamiento en el mercado. 
    
    p Las ventajas competitivas pueden originarse en diferentes factores, tales como la innovación, la calidad, la tecnología, el servicio al cliente, la eficiencia operativa o el reconocimiento de marca. Su sostenibilidad depende de la capacidad de la organización para mantener y fortalecer aquellos elementos que la diferencian frente a otras empresas. 
    p.mb-4.mb-lg-5 Para profundizar en la ventaja competitiva, se presentan sus principales tipos y la importancia que tiene para el fortalecimiento de la posición de la organización en el mercado. 

    .p-4.bg-slider.rounded-4.mb-5
      .tarjeta.tarjeta--blanca
        SlyderA(tipo="a")
          div.my-5.w-75.mx-auto
            .row.justify-content-center.align-items-center
              .col-lg-8
                h5.mb-1 Tipos de ventaja competitiva
                p.mb-0 #[strong Liderazgo en costos:] permite ofrecer productos o servicios a precios competitivos mediante una operación eficiente. 
                p.mb-0 #[strong Diferenciación:] se basa en características únicas que incrementan el valor percibido por los clientes. 
                p.mb-0 #[strong Especialización o enfoque:] concentra los esfuerzos en segmentos específicos del mercado para satisfacer necesidades particulares. 
                p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa se diferencia mediante productos innovadores y dirige su oferta a un segmento específico del mercado.  
              .col-sm-8.col-lg-4
                img(src="@/assets/curso/tema2/9.png", alt="")
          div.my-5.w-75.mx-auto
            .row.justify-content-center.align-items-center
              .col-lg-8
                h5.mb-1 Importancia de la ventaja competitiva
                p.mb-0 La ventaja competitiva fortalece el posicionamiento, las relaciones con los clientes, la rentabilidad y las oportunidades de crecimiento. También permite adaptarse a los cambios del entorno y mantener la relevancia frente a la competencia. 
                p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa que ofrece productos diferenciados puede fortalecer su posicionamiento y aumentar su participación en el mercado. 
              .col-sm-8.col-lg-4
                img(src="@/assets/curso/tema2/10.png", alt="")

    .row.justify-content-center.mb-4
      .col-xl-10
        p.mb-0 Las organizaciones que desarrollan ventajas competitivas sostenibles tienen mayores posibilidades de adaptarse a los cambios del entorno y mantener su relevancia frente a la competencia. Por esta razón, la identificación y fortalecimiento de factores diferenciadores constituyen una actividad estratégica dentro de los procesos de planeación comercial y de mercadeo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 ¿Qué es la propuesta de valor? Cómo crearla y ejemplos - modelo #[em Canvas] 
                  p.mb-0 Para fortalecer los conocimientos sobre la propuesta de valor y comprender su importancia dentro del modelo de negocio Canvas, se recomienda consultar el siguiente video, en el cual se explica de manera práctica este componente y su aplicación en la construcción de modelos de negocio. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=yvgNSHqb4_M" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center
      .col-xl-10
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3.color-primario(
                texto="¿Qué valor ofrezco al cliente? La propuesta de valor como base del emprendimiento"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .col-8.col-sm-4
              figure.pt-3
                img.imgw-190.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="")

















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
