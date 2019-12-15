
<template>
  <div>
    <h1>Welcome to <span v-if="user">{{ user.name }}</span> Chance's Website</h1>
    <b-list-group>
      <b-list-group-item>USER PROFILE INFORMATION</b-list-group-item>
      <b-list-group-item><span v-if="user">{{ user.id }}</span></b-list-group-item>
      <b-list-group-item><span v-if="user">{{ user.name }}</span></b-list-group-item>
      <b-list-group-item><span v-if="user">{{ user.email }}</span></b-list-group-item>
      <b-list-group-item><span v-if="user">{{ user.password }}</span></b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://3000-d574f568-160e-4286-8349-516aa6f780bc.ws-eu01.gitpod.io/api/users')
      .then(response => response.json())
      .then(json => {
        this.users = json.users
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
