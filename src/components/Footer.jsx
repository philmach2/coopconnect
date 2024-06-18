const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-4 mt-4">
      <div className="container flex md:flex-row px-12">
        <div>
          <p className="text-sm text-black mt-2 md:mt-0">
            &copy; {currentYear} - 78 Tenants Corp.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
