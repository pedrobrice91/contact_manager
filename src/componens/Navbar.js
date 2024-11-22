import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-0">
        <Link className="navbar-brand" to="/">
          <img src="./assets/images/brand/logo/logo.svg" alt="hola-Geeks" />
        </Link>
        <div className="ms-auto d-flex align-items-center order-lg-3">
          <div className="d-flex gap-2 align-items-center">
            <a
              href="#langaugeModal"
              className="text-inherit me-2"
              data-bs-toggle="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-globe text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"></path>
              </svg>
            </a>
            <Link to="/login" className="btn btn-outline-dark">
              Login
            </Link>
            <Link to="/join" className="btn btn-dark d-none d-md-block">
              Join Now
            </Link>
          </div>
        </div>
        <div>
          <button
            className="navbar-toggler collapsed ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav mt-3 mt-lg-0 mx-xxl-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarBrowse"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-display="static"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu dropdown-menu-arrow"
                aria-labelledby="navbarBrowse"
              >
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Web Development
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        GraphQl
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Gatsby
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Grunt
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Svelte
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Meteor
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        HTML5
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Angular
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Design
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Illustrator
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        UX / UI Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Figma Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Adobe XD
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Sketch
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Icon Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Photoshop
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    IT Software
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Music
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Life Style
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/course-category.html"
                    className="dropdown-item"
                  >
                    Photography
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarLanding"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Landings
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarLanding">
                <li>
                  <h4 className="dropdown-header">Landings</h4>
                </li>
                <li>
                  <a href="./index.html" className="dropdown-item">
                    <span>Home Default</span>
                    <span className="badge bg-primary ms-2">New</span>
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/landing-abroad.html"
                    className="dropdown-item"
                  >
                    <span>Home Abroad</span>
                    <span className="badge bg-primary ms-2">New</span>
                  </a>
                </li>
                <li>
                  <a href="./mentor/mentor.html" className="dropdown-item">
                    <span>Home Mentor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/landing-education.html"
                    className="dropdown-item"
                  >
                    Home Education
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/home-academy.html"
                    className="dropdown-item"
                  >
                    Home Academy
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/landing-courses.html"
                    className="dropdown-item"
                  >
                    Home Courses
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/landing-sass.html"
                    className="dropdown-item"
                  >
                    Home Sass
                  </a>
                </li>
                <li className="border-bottom my-2"></li>
                <li>
                  <a
                    href="./pages/landings/course-lead.html"
                    className="dropdown-item"
                  >
                    Lead Course
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/landings/request-access.html"
                    className="dropdown-item"
                  >
                    Request Access
                  </a>
                </li>

                <li>
                  <a
                    href="./pages/landings/landing-job.html"
                    className="dropdown-item"
                  >
                    Job Listing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarPages"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                className="dropdown-menu dropdown-menu-arrow"
                aria-labelledby="navbarPages"
              >
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-filter-grid.html"
                      >
                        Course Grid
                        <span className="badge bg-primary ms-2">New</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-filter-list.html"
                      >
                        Course List
                        <span className="badge bg-primary ms-2">New</span>
                      </a>
                    </li>
                    <li className="border-bottom my-2"></li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category.html"
                      >
                        Course Category v1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-category-v2.html"
                      >
                        Course Category v2
                        <span className="badge bg-primary ms-2">New</span>
                      </a>
                    </li>
                    <li className="border-bottom my-2"></li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-single.html"
                      >
                        Course Single v1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-single-v2.html"
                      >
                        Course Single v2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-single-v3.html"
                      >
                        Course Single v3
                        <span className="badge bg-primary ms-2">New</span>
                      </a>
                    </li>
                    <li className="border-bottom my-2"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-resume.html"
                      >
                        Course Resume
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/course-checkout.html"
                      >
                        Course Checkout
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/add-course.html"
                      >
                        Add New Course
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Paths
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="./pages/course-path.html"
                        className="dropdown-item"
                      >
                        Browse Path
                      </a>
                    </li>
                    <li>
                      <a
                        href="./pages/course-path-single.html"
                        className="dropdown-item"
                      >
                        Path Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/blog.html">
                        Listing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/blog-single.html"
                      >
                        Article
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/blog-category.html"
                      >
                        Category
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/blog-sidebar.html"
                      >
                        Sidebar
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Career
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./pages/career.html">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/career-list.html"
                      >
                        Listing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/career-single.html"
                      >
                        Opening
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Portfolio
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/portfolio.html"
                      >
                        List
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/portfolio-single.html"
                      >
                        Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    <span>Mentor</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./mentor/mentor.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./mentor/mentor-list.html"
                      >
                        List
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./mentor/mentor-single.html"
                      >
                        Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Job
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/landings/landing-job.html"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/jobs/job-listing.html"
                      >
                        List
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/jobs/job-grid.html"
                      >
                        Grid
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/jobs/job-single.html"
                      >
                        Single
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/jobs/company-list.html"
                      >
                        Company List
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/jobs/company-about.html"
                      >
                        Company Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Specialty
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/coming-soon.html"
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/404-error.html"
                      >
                        Error 404
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/maintenance-mode.html"
                      >
                        Maintenance Mode
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/terms-condition-page.html"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr className="mx-3" />
                </li>

                <li>
                  <a className="dropdown-item" href="./pages/about.html">
                    About
                  </a>
                </li>

                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Help Center
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/help-center.html"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/help-center-faq.html"
                      >
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/help-center-guide.html"
                      >
                        Guide
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/help-center-guide-single.html"
                      >
                        Guide Single
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/help-center-support.html"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/compare-plan.html">
                    Compare Plan
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="./pages/contact.html">
                    Contact
                  </a>
                </li>
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    Dropdown levels
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-start"
                    data-bs-popper="none"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown item
                      </a>
                    </li>

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dropdown (end)
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu dropstart">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dropdown (start)
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarAccount"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accounts
              </a>
              <ul
                className="dropdown-menu dropdown-menu-arrow"
                aria-labelledby="navbarAccount"
              >
                <li>
                  <h4 className="dropdown-header">Accounts</h4>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Instructor
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">Instructor</h5>
                      <p className="dropdown-text mb-0">
                        Instructor dashboard for manage courses and earning.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/dashboard-instructor.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-profile.html"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-courses.html"
                      >
                        My Courses
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-order.html"
                      >
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-reviews.html"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-students.html"
                      >
                        Students
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-payouts.html"
                      >
                        Payouts
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/instructor-earning.html"
                      >
                        Earning
                      </a>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a
                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        Quiz
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/instructor-quiz.html"
                          >
                            Quiz
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/instructor-quiz-details.html"
                          >
                            Single
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/instructor-quiz-result.html"
                          >
                            Result
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Students
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">Students</h5>
                      <p className="dropdown-text mb-0">
                        Students dashboard to manage your courses and
                        subscriptions.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/dashboard-student.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/student-subscriptions.html"
                      >
                        Subscriptions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/payment-method.html"
                      >
                        Payments
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/billing-info.html"
                      >
                        Billing Info
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./pages/invoice.html">
                        Invoice
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/invoice-details.html"
                      >
                        Invoice Details
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/dashboard-student.html"
                      >
                        Bookmarked
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/dashboard-student.html"
                      >
                        My Path
                      </a>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a
                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        Quiz
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/student-quiz.html"
                          >
                            Quiz
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/student-quiz-attempt.html"
                          >
                            Attempt
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/student-quiz-start.html"
                          >
                            Start
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./pages/student-quiz-result.html"
                          >
                            Result
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    Admin
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-wrap">
                      <h5 className="dropdown-header text-dark">
                        Master Admin
                      </h5>
                      <p className="dropdown-text mb-0">
                        Master admin dashboard to manage courses, user, site
                        setting , and work with amazing apps.
                      </p>
                    </li>
                    <li>
                      <hr className="mx-3" />
                    </li>
                    <li className="px-3 d-grid">
                      <a
                        href="./pages/dashboard/admin-dashboard.html"
                        className="btn btn-sm btn-primary"
                      >
                        Go to Dashboard
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr className="mx-3" />
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/sign-in.html">
                    Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/sign-up.html">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/forget-password.html"
                  >
                    Forgot Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/profile-edit.html">
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/security.html">
                    Security
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/social-profile.html"
                  >
                    Social Profiles
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/notifications.html"
                  >
                    Notifications
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/profile-privacy.html"
                  >
                    Privacy Settings
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/delete-profile.html"
                  >
                    Delete Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/linked-accounts.html"
                  >
                    Linked Accounts
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fe fe-more-horizontal"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-md"
                aria-labelledby="navbarDropdown"
              >
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action border-0"
                    href="./docs/index.html"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fe fe-file-text fs-3 text-primary"></i>
                      <div className="ms-3">
                        <h5 className="mb-0">Documentations</h5>
                        <p className="mb-0 fs-6">
                          Browse the all documentation
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="list-group-item list-group-item-action border-0"
                    href="./docs/bootstrap-5-snippets.html"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-files fs-3 text-primary"></i>
                      <div className="ms-3">
                        <h5 className="mb-0">Snippet</h5>
                        <p className="mb-0 fs-6">Bunch of Snippet</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="list-group-item list-group-item-action border-0"
                    href="./docs/changelog.html"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fe fe-layers fs-3 text-primary"></i>
                      <div className="ms-3">
                        <h5 className="mb-0">
                          Changelog
                          <span className="text-primary ms-1" id="changelog">
                            v3.3.1
                          </span>
                        </h5>
                        <p className="mb-0 fs-6">See what's new</p>
                      </div>
                    </div>
                  </a>
                  <a
                    className="list-group-item list-group-item-action border-0"
                    href="https://geeksui.codescandy.com/geeks-rtl/"
                    target="_blank"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fe fe-toggle-right fs-3 text-primary"></i>
                      <div className="ms-3">
                        <h5 className="mb-0">RTL demo</h5>
                        <p className="mb-0 fs-6">RTL Pages</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
