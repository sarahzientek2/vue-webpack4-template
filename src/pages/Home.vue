<template>
  <div class="container-fluid">
  <div>
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
  
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword1"
          type="password"
          class="form-control"
          placeholder="Password"
        >
      </div>
      <button @click="$router.push('LoginPage')">
        Log In
      </button>
    </form>
  </div>
</template>

<script>
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
