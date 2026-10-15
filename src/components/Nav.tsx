import { useGeneralStore } from "@utils/zustand/general-store";
import "@css/components/Navbar.css";
import { PAGES } from "@utils/constants";
import { NavButton } from "./NavButton";

export function Nav() {
  const currentPage = useGeneralStore((state) => state.currentPage);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);
  const pageKeys = Object.keys(PAGES) as (keyof typeof PAGES)[];

  return (
    <nav className="chef-nav">
      <span className="nav-title">Career Chef</span>
      <div className="nav-items">
        {pageKeys.map((key) => {
          const page = PAGES[key];
          const isCurrentPage = key === currentPage;

          return (
            <NavButton
              key={`nav-${page.id}`}
              selected={isCurrentPage}
              onClick={() => setCurrentPage(key)}
            >
              {page.name}
            </NavButton>
          );
        })}
      </div>
    </nav>
  );
}
