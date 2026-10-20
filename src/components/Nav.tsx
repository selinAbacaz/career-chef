import { useGeneralStore } from "@utils/zustand/general-store";
import "@css/components/Navbar.css";
import { PAGES } from "@utils/constants";
import { NavButton } from "./NavButton";
import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function Nav() {
  const currentPage = useGeneralStore((state) => state.currentPage);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);
  const [opened, { toggle }] = useDisclosure();
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
      <div className="nav-menu">
        <Menu
          closeOnItemClick={false}
          closeOnClickOutside={true}
          onChange={toggle}
        >
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} />
          </Menu.Target>
          <Menu.Dropdown>
            {pageKeys.map((key) => {
              const page = PAGES[key];
              const isCurrentPage = key === currentPage;

              return (
                <Menu.Item
                  onClick={() => setCurrentPage(key)}
                  key={`nav-${page.id}`}
                >
                  <NavButton selected={isCurrentPage}>{page.name}</NavButton>
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );
}
