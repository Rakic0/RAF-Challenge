import RafLogo from "../assets/raf-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary p-4 sm:p-12 2xl:p-20">
      <span className="w-full h-0.5 bg-black block rounded-full mb-2" />
      <div className="flex flex-col ">
        <span className="text-2xl font-semibold">Luka Rakić</span>
        <span className="text-2xl font-semibold">ETŠ "Mija Stanimirović"</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-xs">RAF CHALLENGE 2023</span>
        <img src={RafLogo} alt="Raf Logo" className="w-16 h-16 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
