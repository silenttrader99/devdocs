const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center">
      <p className="font-inter text-black">
        &copy; {new Date().getFullYear()} DevDocs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
