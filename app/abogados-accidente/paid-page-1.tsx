import React from 'react';

const AbogadosAccidentePage: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <h1>Nuestra red de abogados lucharán para que ganes todo el dinero que te mereces.</h1>
        <p>Si te lastimaste en un accidente de auto, llámanos ahora mismo para una consulta GRATIS.</p>
        <a href="tel:833-413-7325">833-413-7325 ¡Llama para tu consulta gratis!</a>
      </section>

      <section className="content">
        <h2>Luchamos para conseguirte todo lo que te mereces</h2>
        <div>
          <h3>Atención médica</h3>
          <p>Un abogado te puede ayudar a recibir atención médica con doctores especialistas y atención de por vida en casos de incapacidad permanente.</p>
        </div>
        <div>
          <h3>Reparación de tu auto</h3>
          <p>Un abogado se encargará de que los responsables arreglen tu auto o te paguen lo que vale en caso de pérdida total.</p>
        </div>
        <div>
          <h3>Fuerte compensación</h3>
          <p>Un abogado peleará para que recibas la compensación que te mereces por dolor y sufrimiento.</p>
        </div>
        <div>
          <h3>Toma acción inmediatamente</h3>
          <p>Si has sufrido un accidente de auto recientemente, tu mejor defensa es contactar a un abogado hoy mismo. No dejes pasar un día más, si te pasas del tiempo requerido por la ley, podrías perder tu caso.</p>
        </div>
        <div>
          <h3>Defiéndete de las compañías de seguro</h3>
          <p>Los ajustadores de las compañías de seguro no tienen tus intereses en mente. Sus intereses son hacer dinero y no ayudarte a ti.</p>
        </div>
      </section>

      <section className="form">
        <h2>Consulta gratis</h2>
        <form action="/send-form" method="post">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="estado">Estado</label>
          <select id="estado" name="estado" required>
            <option value="">Selecciona un Estado</option>
            <option value="alabama">Alabama</option>
            <!-- Add other states here -->
          </select>

          <label htmlFor="causa">Causa de Lesion</label>
          <select id="causa" name="causa" required>
            <option value="">Selecciona una Causa</option>
            <option value="accidente_automovilistico">Accidente Automovilístico</option>
            <!-- Add other causes here -->
          </select>

          <button type="submit">OBTÉN AYUDA LEGAL</button>
        </form>
      </section>
    </div>
  );
};

export default AbogadosAccidentePage;
