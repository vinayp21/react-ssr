import React from "react";

const Header = () => {
  return (
    <header id="header" class="header">
      <div class="navigation">
        <div class="container">
          <nav class="nav__center">
            <div class="nav__header">
              <div class="nav__logo">
                <h1>
                  V<span>-mart</span>
                </h1>
              </div>

              <div class="nav__hamburger">
                <span>
                  <img href="" />
                  {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-menu"></use>
                </svg> */}
                </span>
              </div>
            </div>

            <div class="nav__menu">
              <div class="menu__top">
                <h1 class="nav__category">
                  SHOPI<span>Q</span>
                </h1>
                <div class="close__toggle">
                  {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-cross"></use>
                </svg> */}
                </div>
              </div>
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#header" class="nav__link scroll-link">
                    Home
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#featured" class="nav__link scroll-link">
                    Featured
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#blog" class="nav__link scroll-link">
                    Blog
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#newsletter" class="nav__link scroll-link">
                    Subscribe
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#" class="nav__link">
                    Login
                  </a>
                </li>

                <li class="nav__item">
                  <a href="#" class="nav__link">
                    Register
                  </a>
                </li>
              </ul>

              <ul class="nav__icons">
                <a href="#" class="icon__item">
                  {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-search"></use>
                </svg> */}
                </a>

                <a href="#" class="icon__item">
                  {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-user"></use>
                </svg> */}
                </a>

                <a href="#" class="icon__item">
                  {/* <svg>
                  <use xlink:href="./images/sprite.svg#icon-shopping-basket"></use>
                </svg> */}
                  <span>2</span>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
