<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link :to="links[0].link">
                <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon" />
              </router-link>
            </li>
            <nav-bar-item classItem="footer__item" :link="links[1].link" :text="links[1].text" />
            <nav-bar-item classItem="footer__item" :link="links[2].link" :text="links[2].text" />
            <nav-bar-item classItem="footer__item" :link="links[3].link" :text="links[3].text" />
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
    </div>
  </footer>
</template>

<script>
import NavBarItem from '@/components/NavBarItem.vue';

export default {
  components: { NavBarItem },
  data() {
    return {
      links: [
        {
          id: 0,
          link: '/',
          icon: 'Logo_black.svg'
        },
        {
          id: 1,
          text: 'Our coffee',
          link: '/our-cofee'
        },
        {
          id: 2,
          text: 'For your pleasure',
          link: '/for-your-pleasure'
        },
        {
          id: 3,
          text: 'Contact us',
          link: '/contact-us'
        },
      ]
    }
  }
}
</script>