<template>
  <div>
    <section class="contacts" id="contacts">
      <h2 class="section__title section__title--contacts">Get in Touch</h2>
      <div class="contacts__email">
        <form>
          <div class="contacts__header">
            <div class="input__name">
              <label class="contacts__label">Name: </label
              ><input
                type="text"
                placeholder="Name"
                class="contacts__text--input contatcts__input--email"
              />
            </div>
            <div class="input__email">
              <label class="contacts__label">Email: </label
              ><input
                type="email"
                placeholder="example@example.com"
                class="contacts__text--input contatcts__input--email"
              />
            </div>
          </div>
          <div class="contacts__body">
            <label class="contacts__label label__message">Message: </label
            ><br /><textarea
              placeholder="Your message"
              class="contacts__message"
            ></textarea>
          </div>
          <div class="contacts__fotter">
            <div class="email">
              <router-link
                class="email__at"
                to="/"
                tag="img"
                :src="require('@/assets/icons8-at-sign-32.png')"
              />
              <p class="email__text">tiagof577@gmail.com</p>
            </div>
            <div class="send__message">
              <input
                type="submit"
                value="Send Email"
                class="send__message--button"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="contact__fotter">
        <p class="contact__fotter--follow">Follow me</p>
        <div class="contact__fotter--links">
          <ul class="social__list--down">
            <li class="social__item">
              <i class="fab fa-linkedin-in social__logo"></i>
            </li>
            <li class="social__item">
              <i class="fab fa-twitter social__logo"></i>
            </li>
            <li class="social__item">
              <i class="fab fa-instagram social__logo"></i>
            </li>
            <li class="social__item">
              <i class="fab fa-github social__logo"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
