const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-2">Sobre Nós</h2>
        <p className="text-sm text-slate-300">
          Rocketlab Store é um projeto desenvolvido com apoio da{" "}
          <strong>Viságio</strong>, em parceria com o <strong>Rocketlab</strong>
          , nosso laboratório de inovação, tecnologia e empreendedorismo. Nosso
          objetivo é impulsionar soluções criativas e práticas para desafios do
          mundo real.
        </p>
        <p className="text-xs text-slate-400 mt-4">
          © {new Date().getFullYear()} RocketlabStore. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
