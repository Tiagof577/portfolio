<template>
  <div>
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <div class="section__about__body">
        <div class="about-me__body">
          <p class="detail__body--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p class="detail__body--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="about-me__details">
          <p class="detail__item">Name:&nbsp;</p>
          <p class="detail__text">Tiago Fernandes</p>
          <hr class="detail__line" />
          <p class="detail__item">Email:&nbsp;</p>
          <p class="detail__text">tiagof577@gmail.com</p>
          <hr class="detail__line" />
          <p class="detail__item">From:&nbsp;</p>
          <p class="detail__text">Portugal</p>
          <hr class="detail__line" />
          <p class="detail__item">Age:&nbsp;</p>
          <p class="detail__text">23</p>
          <hr class="detail__line" />
          <ul class="social__list">
            <li class="social__item social__item--linkedin">
              <router-link
                class="social__link"
                to="/"
                tag="img"
                :src="require('@/assets/icons8-linkedin-2-20.png')"
              />
            </li>
            <li class="social__item social__item--twitter">
              <router-link
                class="social__link"
                to="/"
                tag="img"
                :src="require('@/assets/icons8-twitter-20.png')"
              />
            </li>
            <li class="social__item social__item--instagram">
              <router-link
                class="social__link"
                to="/"
                tag="img"
                :src="require('@/assets/icons8-instagram-20.png')"
              />
            </li>
            <li class="social__item social__item--github">
              <router-link
                class="social__link"
                to="/"
                tag="img"
                :src="require('@/assets/icons8-github-20.png')"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
