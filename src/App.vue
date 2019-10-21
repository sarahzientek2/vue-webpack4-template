<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="8"
          offset="2">

<div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">WATER BAR</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-link to="/" router-tag="b-nav-item">HOME</b-link>
                    <b-link to="/about"  router-tag="b-nav-item">ABOUT</b-link>
                    <b-link to="/menu"  router-tag="b-nav-item">MENU</b-link>
                    <b-link to="/contact"  router-tag="b-nav-item">CONTACT</b-link>

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
