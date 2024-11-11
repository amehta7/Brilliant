import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  SearchIcon,
  MenuIcon,
  ZapIcon,
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

type ActivePage = "home" | "courses";

interface HeaderProps {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const Header: React.FC<HeaderProps> = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = React.useState<ActivePage>("home");

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
    navigate("/");
  };

  const getActivePage = (): ActivePage => {
    switch (location.pathname) {
      case "/home":
        return "home";
      case "/courses":
        return "courses";
      default:
        return "home";
    }
  };

  const handleNavigation = (page: ActivePage) => {
    setActivePage(page);
    navigate(`/${page}`);
  };

  const NavLink = ({
    icon: Icon,
    text,
    isActive,
    page,
  }: {
    icon: typeof HomeIcon;
    text: string;
    isActive: boolean;
    page: ActivePage;
  }) => {
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          handleNavigation(page);
        }}
        href={`/${page}`}
        className={`flex items-center space-x-1 py-3 px-1 border-b-2 ${
          isActive
            ? "border-black text-black font-medium"
            : "border-transparent text-gray-600 hover:text-black"
        }`}
      >
        <Icon size={16} />
        <span>{text}</span>
      </a>
    );
  };

  return (
    <header className={`bg-white ${user ? "border-b" : " m-4"}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <span className="text-3xl text-black font-semibold">Brilliant</span>
          </Link>

          {user && (
            <nav className="flex items-center space-x-6">
              <NavLink
                icon={HomeIcon}
                text="Home"
                isActive={activePage === "home"}
                page="home"
              />
              <NavLink
                icon={BookOpenIcon}
                text="Courses"
                isActive={activePage === "courses"}
                page="courses"
              />
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          {user ? (
            <React.Fragment>
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  className="w-full py-1.5 pl-10 pr-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
                  placeholder="Search..."
                />
              </div>

              <button className="px-6 py-1.5 text-sm border-2 border-green-700 text-green-700 rounded-full hover:bg-green-50 transition-colors font-medium">
                Gift premium
              </button>
              <span className="w-8 h-8 text-lg font-bold flex items-center justify-center">
                1
                <ZapIcon className="text-gray-400" size={20} />
              </span>

              <MenuIcon size={20} />

              <button
                onClick={handleLogout}
                className="px-4 py-2 w-30 border border-gray-400 rounded-full text-black font-semibold bg-white"
              >
                Logout
              </button>
            </React.Fragment>
          ) : (
            <button
              className="px-4 py-2 w-30 border border-gray-400 rounded-full text-black font-semibold bg-white"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
