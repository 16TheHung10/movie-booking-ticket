import { Popover } from "antd";
import { Button } from "antd/lib/radio";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LinkStyledHeader } from "../../../../Components/Link/LinkStyled";
import { TOKEN, USER } from "../../../../util/settings/config";
import { history } from "../../../../util/settings/history";
import { useStyles } from "./style";
import "./Header.css";
import SearchModal from "../ModalSearch/ModalSearch";
const Header = () => {
  const { user } = useSelector((state) => state.UserReducer);
  const classes = useStyles();
  const content = (
    <>
      <div
        className="items-center flex-shrink-0 flex flex-col"
        style={{ background: "inherit" }}
      >
        <button
          onClick={() => {
            localStorage.removeItem(TOKEN);
            localStorage.removeItem(USER);
            history.push("/");
          }}
          className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 text-gray-700"
        >
          Logout
        </button>
        <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 text-gray-700">
          Profile
        </button>
      </div>
    </>
  );
  return (
    <header
      className={classNames(
        "p-6 bg-coolGray-100 text-coolGray-800 root  fixed w-screen z-10 header ",
        classes.root
      )}
    >
      <div
        className="container flex justify-between h-6 mx-auto"
        style={{ alignItems: "center" }}
      >
        <Link
          to="/"
          className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600"
        >
          <img
            style={{ maxWidth: "50px" }}
            src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
            alt="LOGO"
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex m-0">
          <li className="flex">
            <LinkStyledHeader
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600"
            >
              Home
            </LinkStyledHeader>
          </li>
          <li className="flex">
            <LinkStyledHeader
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Contact
            </LinkStyledHeader>
          </li>
          <li className="flex">
            <LinkStyledHeader
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              News
            </LinkStyledHeader>
          </li>
        </ul>

        {localStorage.getItem(TOKEN) ? (
          <div className="sm:hidden lg:block" style={{ background: "inherit" }}>
            <Popover
              style={{ background: "inherit" }}
              placement="bottom"
              content={content}
              className={classes.userInfo}
              trigger="click"
            >
              <Button type="primary">Welcome back {user.hoTen}! </Button>
            </Popover>
          </div>
        ) : (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <LinkStyledHeader
              to="login"
              className="self-center px-8 py-3 rounded"
            >
              Sign in
            </LinkStyledHeader>
            <LinkStyledHeader
              to="register"
              className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
            >
              Sign up
            </LinkStyledHeader>
          </div>
        )}
        <SearchModal />
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
