const Footer = () => {
  return (
    <footer className={`bg-black text-white py-8`}>
      <div className={`container mx-auto px-3`}>
        <p>
          Copyright &copy; {new Date().getFullYear()}. Created by Grzegorz
          Pokorski.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
