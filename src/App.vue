<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              variant="faded"
              type="light"
            >
              <b-navbar-brand href="#">
                <img
                  src="https://lh3.googleusercontent.com/AuLBHHc0ePWAFPQiMg_HETdPIIzBFp7HDXbb2mABbJvo_yqCu4URywVhm-4tKvbqhtQB5C8gUYj2K7-7AACgS-RONLFtqrvLoKQVhzS2UC01B9JnlreJ-_wOWU6A7tOxrJBLNGw0KC4=w2400"
                  height="42"
                  width="42"
                  class="d-inline-block align-top"
                  alt="Chance"
                >
                CHANCE ZIENTEK
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse" />

              <b-collapse
                id="nav-collapse"
                is-nav
              >
                <b-navbar-nav>
                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  >
                    HOME
                  </b-link>
                  <b-link
                    to="/login"
                    router-tag="b-nav-item"
                  >
                    LOGIN
                  </b-link>

                  <b-link
                    to="/about"
                    router-tag="b-nav-item"
                  >
                    ABOUT
                  </b-link>

                  <b-link
                    to="/specialtalents"
                    router-tag="b-nav-item"
                  >
                    SKILLS
                  </b-link>

                  <b-link
                    to="/photocollection"
                    router-tag="b-nav-item"
                  >
                    PHOTO COLLECTION
                  </b-link>

                  <b-link
                    to="/dressin"
                    router-tag="b-nav-item"
                  >
                    FASHION BLOG
                  </b-link>

                  <b-link
                    to="/contact"
                    router-tag="b-nav-item"
                  >
                    CONTACT
                  </b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <RouterView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>
