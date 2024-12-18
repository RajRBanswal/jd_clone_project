import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="wrapper">
        <div class="sidebar" data-background-color="dark">
          <div class="sidebar-logo">
            <div class="logo-header" data-background-color="dark">
              <a href="/" class="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  class="navbar-brand"
                  height="20"
                />
              </a>
              <div class="nav-toggle">
                <button class="btn btn-toggle toggle-sidebar">
                  <i class="gg-menu-right"></i>
                </button>
                <button class="btn btn-toggle sidenav-toggler">
                  <i class="gg-menu-left"></i>
                </button>
              </div>
              <button class="topbar-toggler more">
                <i class="gg-more-vertical-alt"></i>
              </button>
            </div>
          </div>
          <div class="sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-content">
              <ul class="nav nav-secondary">
                <li class="nav-item active">
                  <a
                    data-bs-toggle="collapse"
                    href="#dashboard"
                    class="collapsed"
                    aria-expanded="false"
                  >
                    <i class="fas fa-home"></i>
                    <p>Dashboard</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="dashboard">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="../demo1/index.html">
                          <span class="sub-item">Dashboard 1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-section">
                  <span class="sidebar-mini-icon">
                    <i class="fa fa-ellipsis-h"></i>
                  </span>
                  <h4 class="text-section">Components</h4>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#base">
                    <i class="fas fa-layer-group"></i>
                    <p>Base</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="base">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="components/avatars.html">
                          <span class="sub-item">Avatars</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/buttons.html">
                          <span class="sub-item">Buttons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/gridsystem.html">
                          <span class="sub-item">Grid System</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/panels.html">
                          <span class="sub-item">Panels</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/notifications.html">
                          <span class="sub-item">Notifications</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/sweetalert.html">
                          <span class="sub-item">Sweet Alert</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/font-awesome-icons.html">
                          <span class="sub-item">Font Awesome Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/simple-line-icons.html">
                          <span class="sub-item">Simple Line Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/typography.html">
                          <span class="sub-item">Typography</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#sidebarLayouts">
                    <i class="fas fa-th-list"></i>
                    <p>Sidebar Layouts</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="sidebarLayouts">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="sidebar-2.html">
                          <span class="sub-item">Sidebar Style 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="icon-menu.html">
                          <span class="sub-item">Icon Menu</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#forms">
                    <i class="fas fa-pen-square"></i>
                    <p>Forms</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="forms">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="forms/forms.html">
                          <span class="sub-item">Basic Form</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#tables">
                    <i class="fas fa-table"></i>
                    <p>Tables</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="tables">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="tables/tables.html">
                          <span class="sub-item">Basic Table</span>
                        </a>
                      </li>
                      <li>
                        <a href="tables/datatables.html">
                          <span class="sub-item">Datatables</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#maps">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Maps</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="maps">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="maps/googlemaps.html">
                          <span class="sub-item">Google Maps</span>
                        </a>
                      </li>
                      <li>
                        <a href="maps/jsvectormap.html">
                          <span class="sub-item">Jsvectormap</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#charts">
                    <i class="far fa-chart-bar"></i>
                    <p>Charts</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="charts">
                    <ul class="nav nav-collapse">
                      <li>
                        <a href="charts/charts.html">
                          <span class="sub-item">Chart Js</span>
                        </a>
                      </li>
                      <li>
                        <a href="charts/sparkline.html">
                          <span class="sub-item">Sparkline</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="widgets.html">
                    <i class="fas fa-desktop"></i>
                    <p>Widgets</p>
                    <span class="badge badge-success">4</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../../documentation/index.html">
                    <i class="fas fa-file"></i>
                    <p>Documentation</p>
                    <span class="badge badge-secondary">1</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a data-bs-toggle="collapse" href="#submenu">
                    <i class="fas fa-bars"></i>
                    <p>Menu Levels</p>
                    <span class="caret"></span>
                  </a>
                  <div class="collapse" id="submenu">
                    <ul class="nav nav-collapse">
                      <li>
                        <a data-bs-toggle="collapse" href="#subnav1">
                          <span class="sub-item">Level 1</span>
                          <span class="caret"></span>
                        </a>
                        <div class="collapse" id="subnav1">
                          <ul class="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span class="sub-item">Level 2</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" href="#subnav2">
                          <span class="sub-item">Level 1</span>
                          <span class="caret"></span>
                        </a>
                        <div class="collapse" id="subnav2">
                          <ul class="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span class="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <span class="sub-item">Level 1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="main-header">
            <div class="main-header-logo">
              <div class="logo-header" data-background-color="dark">
                <a href="/admin" class="logo">
                  <img
                    src="assets/img/kaiadmin/logo_light.svg"
                    alt="navbar brand"
                    class="navbar-brand"
                    height="20"
                  />
                </a>
                <div class="nav-toggle">
                  <button class="btn btn-toggle toggle-sidebar">
                    <i class="gg-menu-right"></i>
                  </button>
                  <button class="btn btn-toggle sidenav-toggler">
                    <i class="gg-menu-left"></i>
                  </button>
                </div>
                <button class="topbar-toggler more">
                  <i class="gg-more-vertical-alt"></i>
                </button>
              </div>
            </div>

            <nav class="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom shadow">
              <div class="container-fluid">
                <nav class="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search ..."
                      class="form-control"
                    />
                    <div class="input-group-prepend">
                      <button type="submit" class="btn btn-search pe-1">
                        <i class="fa fa-search search-icon"></i>
                      </button>
                    </div>
                  </div>
                </nav>

                <ul class="navbar-nav topbar-nav ms-md-auto align-items-center">
                  <li class="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                    <a
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-search animated fadeIn">
                      <form class="navbar-left navbar-form nav-search">
                        <div class="input-group">
                          <input
                            type="text"
                            placeholder="Search ..."
                            class="form-control"
                          />
                        </div>
                      </form>
                    </ul>
                  </li>

                  <li class="nav-item topbar-user dropdown hidden-caret">
                    <a
                      class="dropdown-toggle profile-pic"
                      data-bs-toggle="dropdown"
                      href="#"
                      aria-expanded="false"
                    >
                      <div class="avatar-sm">
                        <img
                          src="./assets/images/profile.jpg"
                          alt="..."
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <span class="profile-username">
                        <span class="op-7">Hi,</span>
                        <span class="fw-bold">Hizrian</span>
                      </span>
                    </a>
                    <ul class="dropdown-menu dropdown-user animated fadeIn">
                      <div class="dropdown-user-scroll scrollbar-outer">
                        <li>
                          <a class="dropdown-item" href="#">
                            My Profile
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Account Setting
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="container">
            <div class="page-inner">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;