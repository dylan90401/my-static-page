import React from 'react';
import styles from '../styles/AbogadosAccidentePage.module.scss';
import Image from 'next/image';

const ServicesSection = () => (
  <section className="module module--50">
    <div className="container">
      <div className="text-center row justify-content-center">
        <div className="col-lg-10">
          <h2>Luchamos para conseguirte todo lo que te mereces</h2>
        </div>
        <div className="text-center col-lg-9 col-md-10">
          <div className="row justify-content-center icon__eq-height--64">
            <div className="my-2 col-lg-4" data-aos="fade-up">
              <Image src="/images/icon-hospital.png" alt="Atención médica" width={64} height={64} className={styles.icon} />
              <h3>Atención médica</h3>
              <p>Un abogado te puede ayudar a recibir atención médica con doctores especialistas y atención de por vida en casos de incapacidad permanente.</p>
            </div>
            <div className="my-2 col-lg-4" data-aos="fade-up" data-aos-offset="300">
              <Image src="/images/icon-car.png" alt="Reparación de tu auto" width={64} height={64} className={styles.icon} />
              <h3>Reparación de tu auto</h3>
              <p>Un abogado se encargará de que los responsables arreglen tu auto o te paguen lo que vale en caso de pérdida total.</p>
            </div>
            <div className="my-2 col-lg-4" data-aos="fade-up" data-aos-offset="600">
              <Image src="/images/icon-compensation.png" alt="Fuerte compensación" width={64} height={64} className={styles.icon} />
              <h3>Fuerte compensación</h3>
              <p>Un abogado peleará para que recibas la compensación que te mereces por dolor y sufrimiento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
