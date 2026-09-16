<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis de datos para la toma de decisiones comerciales 

    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La gestión comercial genera datos relacionados con ventas, clientes, productos, canales, resultados e indicadores de desempeño. Cuando estos datos se recopilan, organizan y analizan adecuadamente, pueden transformarse en información útil para comprender situaciones, identificar oportunidades y fundamentar decisiones relacionadas con el plan comercial y de mercadeo. 

    p.mb-0 El análisis de datos permite, por tanto, avanzar de la simple observación de resultados hacia su interpretación y utilización para orientar acciones comerciales. 

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1	Importancia de los datos en la gestión comercial 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Los datos constituyen un insumo fundamental para conocer el comportamiento de la gestión comercial. Su análisis permite obtener información objetiva sobre los clientes, las ventas, los productos, los canales y los resultados alcanzados, disminuyendo la dependencia exclusiva de percepciones o apreciaciones subjetivas. 
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 Para que los datos aporten valor a la gestión, deben ser pertinentes para los objetivos establecidos y utilizarse como fundamento para analizar situaciones, realizar seguimiento y orientar decisiones. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h3.titulo-con-imagen__texto Aportes de los datos a la gestión comercial 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario")
          div(titulo="Conocimiento del cliente")
            .me-lg-5
              p.mb-0 Permiten identificar comportamientos, preferencias, necesidades y hábitos de compra que contribuyen a orientar las acciones comerciales hacia las características de los consumidores. 
          div(titulo="Evaluación del desempeño comercial ")
            .me-lg-5
              p.mb-0 Facilitan el análisis de información relacionada con ventas, productos, canales y resultados para determinar el avance frente a los objetivos establecidos. 
          div(titulo="Identificación de tendencias y oportunidades ")
            .me-lg-5
              p.mb-0 Ayudan a reconocer variaciones en el comportamiento del mercado, cambios en los consumidores y posibles oportunidades que pueden ser consideradas por la organización. 
          div(titulo="Reducción de la incertidumbre ")
            .me-lg-5
              p.mb-0 Proporcionan información objetiva y verificable que permite fundamentar las decisiones comerciales y reducir la dependencia exclusiva de la intuición. 
          div(titulo="Mejoramiento continuo ")
            .me-lg-5
              p.mb-0 Permiten identificar fortalezas, dificultades y oportunidades de mejora para establecer ajustes orientados a fortalecer el desempeño comercial. 
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-5
        p.mb-lg-0 Por ejemplo, empresas como Netflix utilizan grandes volúmenes de datos para comprender las preferencias de sus usuarios y ofrecer recomendaciones personalizadas. De manera similar, Amazon analiza permanentemente los hábitos de compra de sus clientes para optimizar sus estrategias comerciales y mejorar la experiencia de usuario. 
      .col-lg-7
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 El valor de los datos no depende únicamente de su disponibilidad, sino de la capacidad de la organización para recopilarlos, organizarlos, analizarlos e interpretarlos de acuerdo con sus objetivos comerciales. Para facilitar estas actividades pueden utilizarse diferentes herramientas tecnológicas y programas de análisis, que se abordan en el siguiente apartado. 

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Uso de software para el análisis de datos estadísticos 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas digitales facilitan la recopilación, organización, procesamiento, análisis y representación de los datos generados en la gestión comercial. Su utilización permite convertir grandes cantidades de información en resultados comprensibles que apoyan el seguimiento del desempeño y la toma de decisiones. 

    p.mb-4.mb-lg-5.z-2 De acuerdo con las necesidades de análisis, pueden utilizarse diferentes tipos de herramientas. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-xl-9
        .row.justify-content-center.align-items-stretch
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta.bg-img.bg-img--cards.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-5
                  img(src='@/assets/curso/tema5/6.svg' alt='')
              h5.text-center Hojas de cálculo
              p.text-center Permiten registrar, organizar, calcular y analizar información comercial mediante tablas, fórmulas, gráficos e indicadores. Herramientas como #[strong Microsoft Excel y Google Sheets] pueden utilizarse para analizar ventas, comparar períodos, calcular indicadores y elaborar reportes.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta.bg-img.bg-img--cards.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-5
                  img(src='@/assets/curso/tema5/7.svg' alt='')
              h5.text-center Herramientas de análisis y visualización de datos
              p.text-center Permiten integrar y representar información mediante gráficos, informes interactivos y paneles de control que facilitan la identificación de tendencias y el seguimiento de resultados. Entre estas herramientas se encuentran #[strong Microsoft Power BI y Tableau].
          .col-sm-6.col-lg-4
            .tarjeta.bg-img.bg-img--cards.p-3.py-4.h-100
              .row.justify-content-center.mb-3
                .col-4.col-lg-5
                  img(src='@/assets/curso/tema5/8.svg' alt='')
              h5.text-center Sistemas de gestión de relaciones con clientes (CRM) 
              p.text-center Permiten almacenar y organizar información relacionada con clientes, contactos, oportunidades de venta e interacciones comerciales. Los datos registrados pueden utilizarse para realizar seguimiento a las oportunidades de negocio y analizar el comportamiento de la gestión comercial.

    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          h5.mb-1 Ejemplo aplicado
          p.mb-0 Una organización registra mensualmente sus ventas en una hoja de cálculo y calcula indicadores como crecimiento y cumplimiento de metas. Posteriormente, puede representar los resultados mediante gráficos o un panel de control para comparar períodos e identificar variaciones. Si además dispone de un CRM, puede relacionar esta información con los datos de clientes y oportunidades comerciales para ampliar el análisis. 
        .col-lg-2.d-none.d-lg-block
          figure
            img.imgw-150(src='@/assets/curso/tema5/9.png', alt='')

    p El uso de estas herramientas facilita la automatización de procesos, mejora la precisión de los análisis y permite disponer de información actualizada para apoyar la toma de decisiones. 
    p.mb-4 La selección de una herramienta digital depende del tipo y volumen de información disponible, las necesidades de análisis y los recursos de la organización. Independientemente de la herramienta utilizada, su aporte a la gestión comercial se concreta cuando los datos procesados se transforman en información comprensible que puede ser interpretada para orientar decisiones. 

    .row.justify-content-center.align-items-center
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Datos para la gestión comercial  
                  p.mb-0 Se recomienda consultar los siguientes recursos audiovisuales, en los cuales se explica la importancia de los datos en la gestión comercial y cómo su análisis contribuye a la toma de decisiones, la identificación de oportunidades y el mejoramiento del desempeño empresarial:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=xq8MF-7P6DI" target="_blank")
                    span Ir al recurso
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=NMY_2hrk6Es" target="_blank")
                    span Ir al recurso

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3	Interpretación de resultados y toma de decisiones 

    .bg-primario-p5.mb-3(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema5/10.png', alt='')
        .col-lg
          .p-4
            p.mb-0 El análisis de datos no finaliza con la generación de informes o gráficos. La verdadera utilidad de la información se encuentra en la capacidad de interpretarla adecuadamente para orientar acciones y decisiones que contribuyan al logro de los objetivos organizacionales. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p La interpretación de resultados consiste en analizar la información obtenida para identificar tendencias, comportamientos, oportunidades y posibles problemas dentro de la gestión comercial. Este proceso requiere relacionar los datos con los objetivos establecidos y con las condiciones del entorno empresarial. 
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-3
          p.mb-0 A partir de la interpretación de los resultados, las organizaciones pueden tomar decisiones relacionadas con estrategias de ventas, segmentación de clientes, optimización de canales de distribución, lanzamiento de nuevos productos o implementación de acciones de mejora. 
        p La toma de decisiones basada en datos favorece una gestión más eficiente y reduce los riesgos asociados a decisiones fundamentadas únicamente en percepciones subjetivas. Además, permite evaluar el impacto de las acciones implementadas y realizar ajustes oportunos cuando sea necesario. 
        p.mb-lg-0 Empresas como Google, Mercado Libre y Spotify utilizan permanentemente el análisis de datos para comprender el comportamiento de sus usuarios, mejorar sus servicios y fortalecer sus estrategias comerciales. 
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/11.png", alt="")
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En conclusión, el análisis de datos constituye una herramienta fundamental para la gestión comercial moderna. La recopilación de información, el uso de software especializado y la adecuada interpretación de resultados permiten tomar decisiones más acertadas, optimizar recursos y fortalecer la competitividad de las organizaciones en mercados cada vez más dinámicos. 

    p.mb-4 A continuación, lo invitamos a consultar el siguiente pódcast en donde se profundiza sobre cómo tomar mejores decisiones para potenciar su emprendimiento. 

    .row.justify-content-center.align-items-center.mb-4
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

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-img.bg-img--terciario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-120(src="@/assets/curso/tema1/15.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Toma de decisiones basadas en los datos: cómo tener éxito en la era digital 
                  p.mb-0 Se recomienda consultar la siguiente lectura, en la cual se explica la importancia del análisis e interpretación de datos para la toma de decisiones empresariales, destacando cómo la información puede transformarse en acciones estratégicas orientadas al mejoramiento de los resultados organizacionales.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.tableau.com/es-es/learn/articles/data-driven-decision-making" target="_blank")
                    span Ir al recurso


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
