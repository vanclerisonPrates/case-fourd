const Navbar = () => {
  return (
    <nav className="rounded-2xl bg-white flex justify-between shadow-sm p-8">
      <div className="sm:border-r-2 mr-10">WebSite Name</div>
      <ul className="hidden sm:flex sm:gap-12">
        <li>DashBoard </li>
        <li>Minhas Aulas </li>
        <li>Minha Agenda </li>
        <li>Aulnos </li>
        <li>Suporte</li>
      </ul>
      <div className="flex">
        <div>icone</div>
        <span>Ammete Black</span>
      </div>
    </nav>
  );
};

export default Navbar;
