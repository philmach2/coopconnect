import NavLinks from "./NavLinks";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col pr-3px py-4 md:pr-2px">
      <div className="flex grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-stone-200 p-3 text-base hover:bg-sky-100 hover:text-blue-700 md:flex-none md:justify-start md:p-2 md:px-3 font-semibold">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
