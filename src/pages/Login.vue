<template>
  <div class="form-1">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          class="field"
          required
          placeholder="Email address"
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
          placeholder="Password"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="dark"
      >
        Log in
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/users/login', (this.email, this.password))
        .then(response => {
          console.log(response)
          alert(response.data.data.username)
          sessionStorage.userId = JSON.stringify(response.data.data.userId)
          sessionStorage.userName = JSON.stringify(response.data.data.username)
        })
      this.$router.push('/loginpage')
    }
  }
}
</script>
<style>
.form-1 {
    /* Size & position */
    width: 300px;
    margin: 60px auto 30px;
    padding: 10px;
    position: relative; /* For the submit button positioning */
    /* Styles */
    box-shadow:
        0 0 1px rgba(0, 0, 0, 0.3),
        0 3px 7px rgba(0, 0, 0, 0.3),
        inset 0 1px rgba(255,255,255,1),
        inset 0 -3px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    background: linear-gradient(#EEEFEF, #FFFFFF 10%);
}
.form-1 .field {
    position: relative; /* For the icon positioning */
}
.form-1 .field i {
    /* Size and position */
    left: 0px;
    top: 0px;
    position: absolute;
    height: 36px;
    width: 36px;
    /* Line */
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);
    /* Styles */
    color: #777777;
    text-align: center;
    line-height: 42px;
    transition: all 0.3s ease-out;
    pointer-events: none;
}
.form-1 input[type=text],
.form-1 input[type=password] {
    font-family: 'Lato', Calibri, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-shadow: 0 1px 0 rgba(255,255,255,0.8);
    /* Size and position */
    width: 100%;
    padding: 10px 18px 10px 45px;
    /* Styles */
    border: none; /* Remove the default border */
    box-shadow:
        inset 0 0 5px rgba(0,0,0,0.1),
        inset 0 3px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    background: #F9F9F9;
    color: #777;
    transition: color 0.3s ease-out;
}
.form-1 input[type=text] {
    margin-bottom: 10px;
}
.form-1 input[type=text]:hover ~ i,
.form-1 input[type=password]:hover ~ i {
    color: #52CFEB;
}
.form-1 input[type=text]:focus ~ i,
.form-1 input[type=password]:focus ~ i {
    color: #42A2BC;
}
.form-1 input[type=text]:focus,
.form-1 input[type=password]:focus,
.form-1 button[type=submit]:focus {
    outline: none;
}
.form-1 .submit {
    /* Size and position */
    width: 65px;
    height: 65px;
    position: absolute;
    top: 17px;
    right: -25px;
    padding: 10px;
    z-index: 2;
    /* Styles */
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow:
        0 0 2px rgba(0,0,0,0.1),
        0 3px 2px rgba(0,0,0,0.1),
        inset 0 -3px 2px rgba(0,0,0,0.2);
}
.form-1 .submit:after {
    /* Size and position */
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -2px;
    left: 30px;
    /* Styles */
    background: #FFFFFF;
    /* Other masks trick */
    box-shadow: 0 62px white, -32px 31px white;
}
</style>
