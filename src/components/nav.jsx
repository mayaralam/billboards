import { Link } from "react-router-dom";
export default function nav() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black text-white dark:bg-white dark:text-black"
            >
              <li>
                <Link to="../contact">تواصل معنا</Link>
              </li>
              <li>
                <Link to="../billboards"> اللوحات الاعلانية</Link>
              </li>

              <li>
                <Link to="../about"> من نحن</Link>
              </li>
              <li>
                <Link to="/"> الرئيسية</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start md:pr-40 pr-0">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link to="../contact">تواصل معنا</Link>
            </li>
            <li>
              <Link to="../billboards">اللوحات الاعلانية</Link>
            </li>
            <li>
              <Link to="../about"> من نحن</Link>
            </li>

            <li>
              <Link to="/"> الرئيسية</Link>
            </li>
          </ul>
          <button className="btn btn-ghost btn-circle"></button>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center">
            <a className="btn btn-ghost text-xl text-blue-600">لوحات إعلانية</a>
          </div>
        </div>
      </div>
    </>
  );
}
