import React from 'react';
import styles from '../styles/AbogadosAccidentePage.module.scss';

const FAQSection = () => (
  <section className="module module--50 neutral-bg">
    <div className="container">
      <div className="text-center row justify-content-center">
        <div className="col-lg-9">
          <div className="content__header">
            <h2>Preguntas frequentes</h2>
          </div>
          <div className="mt-5 content__body">
            <div className="accordion accordion-flush" id="faq_accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                    ¿Cuánto dura una llamada a Los Defensores?
                  </button>
                </h2>
                <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="faqHeadingOne" data-bs-parent="#faq_accordion">
                  <div className="accordion-body">
                    Normalmente una llamada dura alrededor de 10 minutos. Sabemos que tu tiempo es valioso, por lo que haremos todo lo posible para que tu llamada sea atendida lo más rápido posible. Para agilizar tu llamada, reúne toda la información que tengas acerca del accidente antes de llamar a Los Defensores.
                  </div>
                </div>
              </div>
              {/* Add other FAQ items similarly */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
