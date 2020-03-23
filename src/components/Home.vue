<template lang="html">
  <div id="app">
    <nav-bar
      :navbar-contents="navbarContents"
      :img-url="imgUrl"
    />

    <beta-banner />

      <div class="notification">
        This is a notification.
      </div>

    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <div class="content">
            <h2>Me</h2>
            <p>
                Studied at Aberystwyth University Software Engineering BEng. First Class Honours.
            </p>
            <p>
                Developed Java server back-ends and Angular front-ends for intelligent
                pre-sales systems in prior BT employment.
            </p>

            <h2>GitHub</h2>
            <div class="github-widget" data-username="alextoop"></div>
          </div>
        </div>
        <div class="column">
          <div class="content"> 
                        <h2>Development</h2>
            <ul>
                <li>Commercial, Java and JavaScript development and deployment.</li>
                <li>Commercial, JUnit, Jasmine and Angular framework use.</li>
                <li>Personal, Fitbit JavaScript and node.js development.</li>
            </ul>

            <h2>History</h2>
            <ul>
                <li>Achieved grades BBBD in Computing, Mathematics, General Studies and Physics at A-Level.</li>
                <li>Software Engineering Bachelors Degree, Aberystwyth University. [Pending]</li>
                <li>BT TSO Software Development involving Java and Angular.</li>
            </ul>

            <h2>Hobbies</h2>
            <p>
                I enjoy developing in my spare time and currently doing Fitbit JavaScript
                development alongside node.js projects. See '<a href="./projects/">Projects</a>'.
            </p>
            <p>
                I regularly swim with friends and enjoy long-distance running on occasion. Competitive esports gaming is
                one of my passions and I have attended and won events at LANs as a part of a team.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navbar from './Navbar.vue'
import betaBanner from './BetaBanner.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': navbar,
    'beta-banner': betaBanner
  },
  data: function () {
    return {
      navbarContents: {
        links: [
          {
            name: 'Home',
            class: 'is-active',
            href: '/',
            icon: 'fa-home',
            iconColor: 'has-text-primary'
          },
          {
            name: 'About',
            class: '',
            href: '/about/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          }
        ],
        buttons: [
          {
            text: 'NEW: Reminds Project',
            class: 'is-info',
            href: 'https://reminds.alextoop.com',
            isLogout: 'false'
          }
        ]
      }
    }
  },
  beforeMount: function () {},
  mounted: function () {
    this.$nextTick(function () {})
  },
  methods: {}
}
</script>

<style>
.has-padding-top {
  padding-top: 1.5rem;
}

.section {
  padding: 1.5rem 1.5rem;
}

.column {
  padding: 1vw 0.75rem;
}
</style>
