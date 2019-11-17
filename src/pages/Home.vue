<template>
  <div>
    <div class="container-fluid">
      <b-card
        overlay
        img-src="https://lh3.googleusercontent.com/-u2vZj5m2G8Q-IJQfp-Qcn6OPlAiNfE9PiAjwogP-nVLR1pBN0X3DyuSQMvZeD0A-hqwzMQ7O_Kcn-_FZfvvQW9sZjb3ZwYgV4tSXB11fC_8QZjK_prgbv2eOtQM8A7d9s83sDsHPNE=w2400"
        img-alt="Card Image"
        text-variant="black"
        title="WELCOME TO THE OFFICIAL WEBSITE OF CHANCE ZIENTEK"
      >
        <b-card-text>
          THE WORLD'S GREATEST DOG
        </b-card-text>
      </b-card>
    </div>

    <div class="full-width center-content">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-email"
          label="Email:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            required
            placeholder="Your email address"
          />
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="Password:"
          label-for="input-password"
        >
          <b-input
            id="input-password"
            v-model="form.password"
            type="password"
            required
            placeholder="Your password"
          />
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
        >
          Log in
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      users: []
    }
  },
  methods: {
    onSubmit () {
      fetch('https://api.myjson.com/bins/ern2i')
        .then(response => response.json())
        .then(json => {
          this.users = json.users
        })
        .then(() => {
          let email = this.form.email
          let password = this.form.password
          sessionStorage.user = JSON.stringify(this.users.find(function (user) {
            return ((user.email === email) && (user.password === password))
          }))
          console.log(sessionStorage.user)
          this.$router.push('/LoginPage')
        })
    }
  }
}
</script>

  <style>
    .container-fluid{
    justify-content: center;
    text-align: center;
    }

    h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 30px;

    }

    span {
    display: block;
    padding-bottom: 30px;
    font-size: 1.6rem;

    }

  </style>
