<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de objeciones y cierre de ventas 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de objeciones y el cierre de ventas constituyen etapas fundamentales dentro del proceso comercial, ya que permiten atender las inquietudes de los clientes y facilitar la toma de decisiones de compra. Un adecuado manejo de las objeciones contribuye a fortalecer la confianza del consumidor, mejorar la comunicación comercial e incrementar las probabilidades de concretar una venta de manera satisfactoria para ambas partes. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Concepto y tipos de objeciones 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Las objeciones son manifestaciones de duda, inquietud o resistencia expresadas por un cliente durante el proceso de venta. Pueden surgir cuando requiere mayor información, no percibe suficiente valor en la oferta o necesita aclarar aspectos relacionados con el producto, el servicio o las condiciones comerciales.
        .bg-terciario-t5.p-4.rounded-4.overflow-hidden.py-3.mb-4.mb-lg-0
          p Una objeción no necesariamente representa un rechazo definitivo; también puede constituir una oportunidad para identificar las necesidades, expectativas o inquietudes del cliente y proporcionar información que facilite su decisión de compra. 
          p.mb-0 Las objeciones pueden clasificarse de acuerdo con el aspecto de la oferta que genera inquietud en el cliente: 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/2.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-4.col-lg-3.col-xl-2.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-9.col-xl-8
        SlyderF(columnas="col-sm-6")
          .tarjeta.bg-card-verde.bg-card-verde--ancha.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2/14.svg' alt='')
            p.text-center #[strong Objeciones relacionadas con el precio]. Se presentan cuando el cliente considera que el valor del producto o servicio supera sus expectativas o presupuesto disponible. 
          .tarjeta.bg-card-verde.bg-card-verde--ancha.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2/15.svg' alt='')
            p.text-center #[strong Objeciones relacionadas con la necesidad]. Surgen cuando el cliente no identifica claramente la utilidad o los beneficios que puede obtener con la adquisición del producto o servicio. 
          .tarjeta.bg-card-verde.bg-card-verde--ancha.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2/16.svg' alt='')
            p.text-center #[strong Objeciones relacionadas con el producto o servicio]. Comprenden dudas sobre aspectos como la calidad, las características, el funcionamiento, la garantía o el desempeño de la oferta. 
          .tarjeta.bg-card-verde.bg-card-verde--ancha.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2/17.svg' alt='')
            p.text-center #[strong Objeciones relacionadas con la confianza]. Se relacionan con la necesidad de obtener mayor seguridad sobre la empresa, la marca, el asesor comercial o las condiciones de la negociación. 
          .tarjeta.bg-card-verde.bg-card-verde--ancha.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/tema2/18.svg' alt='')
            p.text-center #[strong Objeciones relacionadas con el tiempo]. Se manifiestan cuando el cliente requiere un plazo adicional para evaluar la oferta o decide posponer la compra. 
   
    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden.mb-4
      p.mb-0 #[strong Ejemplo]: una persona interesada en adquirir un vehículo manifiesta que su precio supera el presupuesto disponible. En este caso, se presenta una objeción relacionada con el precio, que debe ser comprendida antes de ofrecer alternativas o argumentos acordes con las necesidades del cliente. 

    p Empresas como Toyota, Samsung y Claro Colombia capacitan permanentemente a sus equipos comerciales para gestionar objeciones relacionadas con precio, características técnicas, financiación y condiciones de servicio. 
    p.mb-0 Identificar el tipo de objeción permite comprender con mayor precisión la inquietud del cliente y orientar una respuesta acorde con sus necesidades. Este reconocimiento constituye el punto de partida para aplicar técnicas de comunicación y argumentación que faciliten el manejo adecuado de la objeción dentro del proceso de venta. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Técnicas para el manejo de objeciones 

    .bg-botones-a5.mb-3(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 El manejo adecuado de las objeciones requiere habilidades de comunicación, escucha activa y conocimiento de los productos o servicios ofrecidos. Su propósito no consiste en confrontar al cliente, sino en comprender sus inquietudes, identificar la causa de la objeción y proporcionar información pertinente que contribuya a generar confianza y facilitar la toma de decisiones. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Para gestionar las objeciones durante el proceso de venta pueden aplicarse diferentes técnicas, de acuerdo con la situación planteada por el cliente y las características de la oferta. 
        TabsA.color-secundario.custom-tabs--1.mb-4.mb-lg-0
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Escucha activa")
            p.mb-0 Consiste en prestar atención a las inquietudes del cliente sin interrumpirlo, con el propósito de comprender su situación e identificar el origen de la objeción. Una escucha adecuada facilita la comunicación y permite orientar la respuesta de acuerdo con las necesidades expresadas.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Aclaración de la objeción")
            p.mb-0 Implica formular preguntas pertinentes cuando la inquietud se expresa de manera general o imprecisa. Su aplicación permite comprender con mayor claridad la preocupación del cliente antes de presentar una respuesta o alternativa.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Argumentación basada en beneficios")
            p.mb-0 Consiste en explicar cómo los beneficios del producto o servicio responden a las necesidades identificadas en el cliente, evitando limitar la argumentación a la descripción de sus características. De esta manera, se facilita la comprensión del valor de la oferta. 
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Evidencia o prueba social")
            p.mb-0 Permite respaldar los argumentos mediante información verificable, como testimonios, casos de éxito, certificaciones o resultados. Estos elementos pueden contribuir a fortalecer la credibilidad de la oferta y generar mayor confianza durante la interacción comercial.
          .tarjeta.p-4.bg-contenido-a5.py-5(titulo="Comparación de valor")
            p.mb-0 Consiste en relacionar el costo del producto o servicio con los beneficios que puede obtener el cliente. Esta técnica resulta especialmente pertinente cuando la objeción se relaciona con el precio, ya que permite orientar la conversación hacia el valor generado por la oferta.

    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden.mb-4
      h5.mb-1 Ejemplo aplicado
      p Un cliente interesado en contratar un servicio de capacitación empresarial manifiesta que su precio es elevado. Antes de responder, el asesor comercial indaga sobre las razones de su inquietud y las necesidades de la organización. A partir de esta información, explica cómo la capacitación puede contribuir al fortalecimiento de las competencias del personal y al mejoramiento de su desempeño. 
      p.mb-0 De esta manera, el asesor no se limita a justificar el precio, sino que relaciona la inversión con los beneficios que puede generar el servicio, orientando la conversación hacia el valor de la oferta. 

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Empresas como SURA y Bancolombia implementan estrategias de asesoría personalizada, escucha activa y argumentación basada en beneficios para gestionar objeciones, fortalecer la confianza de sus clientes y mejorar la efectividad de sus procesos comerciales. 
        p.mb-0 La selección de la técnica para manejar una objeción depende de la inquietud expresada por el cliente, sus necesidades y las características de la oferta. Su aplicación adecuada permite aclarar dudas, fortalecer la confianza y orientar la interacción comercial hacia posibles acuerdos que faciliten el avance hacia el cierre de la venta.  

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Compromiso y cierre de ventas 
    
    p El compromiso comercial se manifiesta cuando el cliente expresa disposición para avanzar en la decisión de compra, por ejemplo, al aceptar determinadas condiciones, seleccionar una alternativa o confirmar aspectos de la oferta. Estos acuerdos pueden facilitar el avance hacia el cierre de la venta. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p El cierre de ventas corresponde a la etapa del proceso comercial en la que el cliente acepta la propuesta y se concreta la transacción. Antes de avanzar hacia el cierre, es importante verificar que sus necesidades hayan sido comprendidas, que las objeciones hayan sido atendidas y que exista interés en la oferta presentada. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.mb-4.mb-lg-0
        p Las principales etapas del proceso de comercialización son las siguientes:
        LineaTiempoD.color-primario.mb-4.mb-lg-0
          div(numero="1" titulo="Verificar las necesidades")
            p.mb-0 Confirmar que la oferta responde a las necesidades y expectativas identificadas durante la interacción con el cliente.
          div(numero="2" titulo="Atender las objeciones")
            p.mb-0 Comprobar que las dudas o inquietudes planteadas hayan sido aclaradas mediante información y argumentos pertinentes.
          div(numero="3" titulo="Identificar señales de compromiso")
            p.mb-0 Reconocer expresiones de interés, aceptación de condiciones, selección de alternativas o preguntas relacionadas con la adquisición del producto o servicio.
          div(numero="4" titulo="Aplicar la técnica de cierre")
            p.mb-0 Seleccionar la técnica más adecuada de acuerdo con la situación comercial y el nivel de disposición manifestado por el cliente.
          div(numero="5" titulo="Confirmar y realizar seguimiento")
            p.mb-0 Concretar las condiciones acordadas y mantener la comunicación posterior para conocer la experiencia del cliente y fortalecer la relación comercial.
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/tema2/8.png", alt="" data-aos="zoom-in-down")

    p.mb-4 Existen diferentes técnicas de cierre que pueden utilizarse según las características de la situación comercial: 


    .bg-slider.p-3.px-2.p-md-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure
            img.imgw-324(src='@/assets/curso/tema2/9.png', alt='')
        .col-lg-8
          SlyderF(columnas="col-xl-6")
            .tarjeta.bg-cards-acento.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema2/10.svg' alt='')
              p.text-center.mb-0 #[strong Cierre directo]. Consiste en solicitar de manera clara la decisión de compra cuando el cliente dispone de la información necesaria y ha manifestado interés en la oferta.
            .tarjeta.bg-cards-acento.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema2/11.svg' alt='')
              p.text-center.mb-0 #[strong Cierre por alternativa]. Consiste en presentar opciones pertinentes para que el cliente seleccione aquella que mejor responda a sus necesidades, facilitando la toma de decisión. 
            .tarjeta.bg-cards-acento.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema2/12.svg' alt='')
              p.text-center.mb-0 #[strong Cierre por resumen de beneficios]. Retoma los principales beneficios de la oferta relacionados con las necesidades identificadas antes de solicitar la confirmación de la compra. 
            .tarjeta.bg-cards-acento.p-4.pt-5
              .row.justify-content-center.mb-3
                .col-6.col-sm-4.col-xl-5
                  img(src='@/assets/curso/tema2/13.svg' alt='')
              p.text-center.mb-0 #[strong Cierre por compromiso]. Se basa en acuerdos parciales alcanzados durante la interacción comercial que permiten avanzar progresivamente hacia la aceptación final de la propuesta. 

    .bg-img.bg-img--contenido.p-4.rounded-4.overflow-hidden.mb-5
      h5.mb-1 Ejemplo aplicado
      p Un cliente interesado en contratar un servicio de capacitación empresarial manifiesta que su precio es elevado. Antes de responder, el asesor comercial indaga sobre las razones de su inquietud y las necesidades de la organización. A partir de esta información, explica cómo la capacitación puede contribuir al fortalecimiento de las competencias del personal y al mejoramiento de su desempeño. 
      p.mb-0 De esta manera, el asesor no se limita a justificar el precio, sino que relaciona la inversión con los beneficios que puede generar el servicio, orientando la conversación hacia el valor de la oferta. 


    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.png")
        h3.titulo-con-imagen__texto Seguimiento posterior a la venta 

    p El cierre no finaliza la relación con el cliente. El seguimiento posterior permite conocer su experiencia, atender requerimientos relacionados con la compra y obtener información que contribuya al fortalecimiento de la relación comercial y a la identificación de oportunidades de fidelización. 

    p.mb-4 A continuación, lo invitamos a consultar el siguiente pódcast para profundizar sobre cómo superar objeciones y cerrar más ventas. 


    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3.color-primario(
                texto="¿Por qué los clientes dicen 'déjeme pensarlo'? Cómo superar objeciones y cerrar más ventas."
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")
            .col-8.col-sm-4
              figure.pt-3
                img.imgw-190.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-img.bg-img--primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2.d-none.d-lg-block
              img.imgw-140(src="@/assets/curso/tema1/19.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 5 poderosas estrategias para vencer con las OBJECIONES de tus clientes // Brian Tracy 
                  p.mb-0 Se recomienda consultar el siguiente recurso audiovisual, en el cual se presentan estrategias para el manejo de objeciones durante el proceso de ventas, abordando técnicas de comunicación, generación de confianza y argumentación comercial orientadas a facilitar el cierre efectivo de ventas:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RKSkRmVMeNI" target="_blank")
                    span Ir al recurso

    .row.justify-content-center
      .col-xl-10
        p La identificación de las objeciones, la aplicación de técnicas para su manejo y un cierre adecuado permiten fortalecer la confianza del cliente, facilitar su toma de decisiones y contribuir al cumplimiento de los objetivos comerciales de la organización.














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
