const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-screen-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <p className="text-lg text-gray-600 text-gray-300 mb-6">
        Quer conversar ou saber mais? Me envie uma mensagem!
      </p>
      <a
        href="mailto:wagner.fiorese@gmail.com"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Enviar e-mail
      </a>
    </section>
  );
};

export default Contact;
