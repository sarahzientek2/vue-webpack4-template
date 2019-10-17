<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="8"
          offset="2">
          <p> <router-link to="/"> Home </router-link> <router-link to="/about"> About </router-link> <router-link to="/contact"> Contact </router-link> <router-link to="/menu"> Menu </router-link></p>
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
