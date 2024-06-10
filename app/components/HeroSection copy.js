import React from 'react';
import styles from '../styles/AbogadosAccidentePage.module.scss';
import Image from 'next/image';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className="row justify-content-center">
      <div className="col-lg-6 offset-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="350">
        <h1 className={styles.hero__title}>
          Nuestra red de abogados lucharán para que ganes todo el dinero que te mereces.
        </h1>
        <p className={styles.hero__subtitle}>
          Si te lastimaste en un accidente de auto, llámanos ahora mismo para una consulta GRATIS.
        </p>
        <div className={styles.hero__btns}>
          <a href="tel:+18779363512" className="btn btn__hero-cta">
            877-936-3512
            <br />
            <p className={styles.btn__cta__subtext}>¡Llama para tu consulta gratis!</p>
          </a>
          <a href="#lead_form" className="btn btn__sub-cta scroll-to">
            O llena nuestro formulario
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
