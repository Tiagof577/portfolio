<template>
  <div>
    <section class="resume" id="resume">
      <h2 class="section__title section__title--resume">Resume</h2>
      <div class="resume__body">
        <div class="resume__education">
          <p class="resume__education--title">Education</p>
          <div class="resume__education--body">
            <p class="resume__education--text">Computer Engineering</p>
            <p class="resume__education--text">
              Universidade Lusofona do Porto
            </p>
          </div>
          <div class="resume__education--skills">
            <ul class="education__skills--list">
              <li class="education__skills--item">
                <img
                  class="education__skills--logo"
                  :src="require('@/assets/node.svg')"
                />
                <div class="skill_rating">
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </li>
              <li class="education__skills--item">
                <img
                  class="education__skills--logo"
                  :src="require('@/assets/vue.png')"
                />
                <div class="skill_rating">
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </li>
              <li class="education__skills--item">
                <img
                  class="education__skills--logo"
                  :src="require('@/assets/CSS.svg')"
                />
                <div class="skill_rating">
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </li>
              <li class="education__skills--item">
                <img
                  class="education__skills--logo"
                  :src="require('@/assets/mongo.svg')"
                />
                <div class="skill_rating">
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </li>
              <li class="education__skills--item">
                <img
                  class="education__skills--logo"
                  :src="require('@/assets/Tux.png')"
                />
                <div class="skill_rating">
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star checked_star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="resume__experience">
          <p class="resume__experience--title">Experience</p>
          <div class="resume__experience--body">
            <p class="resume__experience--text">Sales man</p>
            <p class="resume__experience--text">Ceudoce LDA</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
