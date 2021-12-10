<template>
  <div>
    <section class="navbar">
      <img
        class="logo"
        to="/"
        :src="require('@/assets/logo.png')"
        style="width: 115px; height: 50px"
        alt=""
      />
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <i
              class="fa fa-home fa-2x nav__item--logo active"
              aria-hidden="true"
            ></i>
          </li>
          <li class="nav__item">
            <i
              class="fa fa-user-o fa-2x nav__item--logo"
              aria-hidden="true"
            ></i>
          </li>
          <li class="nav__item">
            <i
              class="fa fa-list-ul fa-2x nav__item--logo"
              aria-hidden="true"
            ></i>
          </li>
          <li class="nav__item">
            <i class="fa fa-link fa-2x nav__item--logo" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>
