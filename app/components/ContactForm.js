import React from 'react';
import styles from '../styles/AbogadosAccidentePage.module.scss';


const ContactForm = () => (
  <section className="module module--50 row-standard-form">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <div className="text-center row-heading">
            <h2>Consulta gratis</h2>
            <p>Haz tu consulta gratis en segundos</p>
          </div>
          <form method="POST" id="lead_form" className="standard-contact-form" action="https://ayuda.losdefensores.com/wp-admin/admin-post.php">
            <div className="row row-cols-lg-2">
              <input type="hidden" name="action" value="send_form" />
              <input type="hidden" name="Landing_Page" value="https://ayuda.losdefensores.com/abogados-accidente/pages/pd-unbrnd/" />
              <div className="form-item">
                <label htmlFor="first_name">Nombre</label>
                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="Nombre" required />
                <span id="fname-error" className="form-error"></span>
              </div>
              <div className="form-item">
                <label htmlFor="last_name">Apellido</label>
                <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Apellido" required />
                <span id="lname-error" className="form-error"></span>
              </div>
              <div className="form-item">
                <label htmlFor="primary_phone">Teléfono</label>
                <input type="tel" name="primary_phone" id="primary_phone" className="form-control" placeholder="Numero de Teléfono" required />
                <input type="hidden" id="primary-phone-unformatted" name="primary_phone_unformatted" />
                <span id="primary-phone-error" className="form-error"></span>
              </div>
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                <span id="email-error" className="form-error"></span>
              </div>
              <div className="form-item">
                <label htmlFor="state">Estado</label>
                <select id="state" name="state" className="form-select" required>
                  <option disabled value="">Selecciona un Estado</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <span id="state-error" className="form-error"></span>
              </div>
              <div className="form-item">
                <label htmlFor="injury_cause">Causa de Lesion</label>
                <select id="injury_cause" name="injury_cause" className="form-select" required>
                  <option disabled value=" ">Selecciona una Causa</option>
                  <option value="auto_accident">Accidente Automovilístico</option>
                  <option value="bicycle_accident">Accidente de Bicicleta</option>
                  <option value="motorcycle_accident">Accidente de Motocicleta</option>
                  <option value="pedestrian_accident">Accidente Peatonal</option>
                  <option value="rideshare_accident">Accidente de Viaje Compartido</option>
                  <option value="truck_accident">Accidente de Camión</option>
                  <option value="dog_bite">Mordida de Perro</option>
                  <option value="slip_and_fall">Resbalada y Caída</option>
                  <option value="medical_malpractice">Negligencia Médica</option>
                  <option value="workers_comp">Compensación de Trabajadores</option>
                  <option value="workplace_discrimination">Discriminación en el Lugar de Trabajo</option>
                  <option value="wrongful_termination">Terminación Injusta</option>
                  <option value="other">Otro</option>
                </select>
                <span id="injury-cause-error" className="form-error"></span>
              </div>
              <div className="mt-4 text-center col-lg-12">
                <p className="disclaimer">Al hacer clic en “OBTÉN AYUDA LEGAL”, aceptas expresamente recibir llamadas y mensajes de texto de Los Defensores con fines de marketing utilizando tecnología automatizada. Aceptas que podemos comunicarnos contigo en cualquier momento, incluso antes de las 8 a. m. o después de las 9 p. m., hora local. El consentimiento no es una condición de compra. Acepta el uso de firmas electrónicas, nuestra <a href="https://www.losdefensores.com/privacidad/">Política de privacidad</a> y <a href="https://www.losdefensores.com/aviso-legal/">Términos de uso</a>.</p>
              </div>
              <div className="mt-3 text-center col-lg-12 d-flex justify-content-center">
                <button type="submit" id="submit_button" className="btn btn-secondary" disabled>
                  OBTÉN AYUDA LEGAL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm;
