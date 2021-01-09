<template lang="html">
  <div id="app">
    <nav-bar
      :navbar-contents="navbarContents"
      :img-url="imgUrl"
    />

        <hero-banner :title="'Alexander John Toop BEng'" :subtitle="'Software Engineer working on the BBC Sounds TV Application'"/>

    <section class="section">
      <div class="container has-padding-top">
          <div class="columns">
              <div class="column"></div>
              <div class="column is-three-quarters">
                <div class="columns">
                  <div class="column">
                    <div class="content">
                      <h2>Extract</h2>
                      <p>
                          Software Engineer working on BBC Sounds TV. Currently supporting the development of new features and the rollout to the connected TV estate. 
                          </br>
                          </br>
                          First Class Honours Software Engineering BEng.
                          </br>
                          </br>
                            <!-- </br>
                          Previously a member of TV Partner Expertience, working to automate the testing of new and existing connected TV devices. -->
                          Previous employment in BT's 'bt.com' personalised offers team developing an intelligent pre-sales system. Developed a Java backend alongside an Angular website interface for existing customers.
                      </p>

                      <h2>GitHub</h2>
                      <div class="github-widget" data-username="alextoop"></div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="content">
                      <h2>Experience</h2>
                      <ul>
                          <li>Commercial, JavaScript and Java development and deployment.</li>
                          <li>Commercial, AWS Serverless DevOps using infrastructure as code.</li>
                          <li>Commercial, development testing with: JUnit, Jasmine, Puppeteer, Sinon, Mocha, Chai and Vue Test Utils.</li>
                          <li>Personal, Fitbit development using JavaScript, Android App development using Java (with Espresso and general JUnit testing.)</li>
                      </ul>

                      <h2>History</h2>
                      <ul>
                          <li>Achieved grades BBBD in Computing, Mathematics, General Studies and Physics at A-Level.</li>
                          <li>First Class Honours Software Engineering BEng at Aberystwyth University.</li>
                          <li>BT TSO (Technology, Services and Operations) Software Development. Java and Angular.</li>
                          <li>BBC iPlayer and Sounds connected TV automated testing tool development. JavaScript, AWS Serverless DevOps.</li>
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
              <div class="column"></div>
          </div>
      </div>
  </section>
  </div>
</template>

<script>
import navbar from './Navbar.vue'
import heroBanner from './HeroBanner.vue'
import 'bulma/css/bulma.min.css'

export default {
  name: 'App',
  components: {
    'nav-bar': navbar,
    'hero-banner': heroBanner
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
            name: 'Blog',
            class: '',
            href: '/blog/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: 'Projects',
            class: '',
            href: '/projects/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          },
          {
            name: 'Contact',
            class: '',
            href: '/contact/',
            icon: 'fa-info-circle',
            iconColor: 'has-text-dark'
          }
        ],
        buttons: [
          {
            text: 'Reminds Website',
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
