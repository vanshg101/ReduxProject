import React from "react";
import AddTodo from "./AddTodo";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <AddTodo />
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              All Todos
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Completed Todos
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/remaining"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Remaining Todos
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
