import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-[2px] menuBar" height={50.23}>
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} key={index} className="block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-[12.31px] rounded-full my-[2.9px] inline-flex items-center justify-center gap-[21px] group-hover:bg-[#eff3f41a] transition-colors",
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
      <More />
      <New />
    </nav>
  );
}
// 20.33 -> 2
