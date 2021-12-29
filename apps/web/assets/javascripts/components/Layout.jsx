// layout.jsx
import React from "react";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src="/assets/Hanami.png"
              className="img-thumbnail mx-2 w-20"
              alt="Hanami"
              id="hanami-logo"
            ></img>
            <span class="fs-4">
              React on Hanami Demo{" "}
              <span className="text-muted">with Bootstrap CSS</span>
            </span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container-fluid min-vh-90">{props.children}</div>
      <footer className="p-3 bg-light border-top">
        <div>
          <span className="mr-3 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, est.
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
