<template>
  <div class="container fluid">
    <article class="main-image">
      <section>
        <h1>WELCOME TO THE OFFICIAL WEBSITE OF CHANCE ZIENTEK</h1>
        <span>THE WORLD'S GREATEST DOG</span>
        <button @click="$router.push('LoginPage')">
          Log In
        </button>
      </section>
    </article>
  </div>
</template>

<script>
</script>

<style>

article {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0 10px;
background-color: white;
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

.btn-xl {
    padding: 20px 35px;
    font-family: serif;
    font-size: 1.25rem;
}

.main-image {
    min-height: 100vh;
    background-size: cover;
    padding: 0 10px;
    text-align: center;
}

.main-image {
    background-image:url('https://photos.google.com/share/AF1QipN09DAwonWC2mSOLvQI8LA7rDf4w7ECMiK0abq3VJ-aAeq3hmhnf56jp2SxpKiU9g?key=Y000LVF0RWllRHlDbWR3SDJxdlZFOTRPZDRqTGNB&source=ctrlq.org'><img src='https://lh3.googleusercontent.com/X-l8la0QQGy1bsR8-oBxeSm7SbJV8Y7Y3K-I3tCVtuQmwtj4QRE7uqB260JAkLZa2AwuOHMstDJPwsQDo5ULFU2wmSNxo1FVS69lfLIZFF4LwT4x-DBlUb6l0_JAQ761CjPAVW4RMRA=w2400') center center;
}

</style>
