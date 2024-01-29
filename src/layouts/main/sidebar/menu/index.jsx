import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import Button from "~/components/button";

export default function Menu() {
  return (
    <nav className="m-0 menuBar" height={50.23}>
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} key={index} className="block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full my-1 inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25] h-[26.25] relative">
                {menu.notifications && (
                  <span className="w-[15px] h-[15px] leading-3 rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu.notifications}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <button className="py-[3px] block group">
        <div
          className={
            "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors"
          }
        >
          <svg
            viewBox="0 0 24 24"
            width={26.25}
            height={26.25}
            className="block"
          >
            <path
              fill="#f7f9f9"
              d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
            ></path>
          </svg>
          <div className="pr-4 text-xl"> Daha fazla</div>
        </div>
      </button>
      <Button>Abone ol</Button>
    </nav>
  );
}
// 20.33 -> 2
