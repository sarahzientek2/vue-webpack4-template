<template>
  <div class="full-width center-content">

    <ul>
      <li
        v-if="users"
      >
        {{ users.name }}
      </li>
    </ul>

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
    fetch('https://api.myjson.com/bins/1awc9u')
      .then(response => response.json())
      .then(json => {
        this.users = json.users
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.users = JSON.parse(v)
    }
  }
}
</script>
