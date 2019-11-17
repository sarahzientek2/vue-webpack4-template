
<template>
  <div>
    <h1>Welcome <span v-if="user">{{ user.name }}</span> to Chance's Website</h1>
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
    fetch('https://api.myjson.com/bins/ern2i')
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
