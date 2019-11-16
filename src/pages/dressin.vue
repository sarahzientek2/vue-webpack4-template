<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        img-src="https://lh3.googleusercontent.com/TsmZN-nPe6nGtUVbspKNB06B7KZKPEfiojiQPWW2u-Aaq9X-qyYbOlk_Jc464A3SAKN_N2QRVRg9A1rJMgndufrq-4qsFyacFG1y0mtwS-gb-EtZmAhozmITTP5O8Pj1CmG4_Uf3_j4=w2400"></b-carousel-slide>

      <b-carousel-slide img-src="https://lh3.googleusercontent.com/8pe-yxP32ERi3O57ePjfEKcSZZIPlaNMjQDfZXNAaBE5ff4jNGNosYEZyqMkb-JwzPbtrxVWMOZEDbmNOtuWU_8TUa3bt45tJIZgbZ40eWyXtZuebTcnzDteEoC8iPHqctgnBe60zzs=w2400">
      </b-carousel-slide>

      <b-carousel-slide img-src="https://lh3.googleusercontent.com/PHu_MUztG7JSrr5SyzTt46rZiAAlFaaxmtZytxnqVMoZtY_5SEIe7sUnIu6RqZ5BBSWmN7IA91Wb4viu-YrUFzTAsWT3b1jpOBIZ5De3c0olhtVLWrvVDUp1cHX9Pg-sLcTsh6pQ4dg=w2400"></b-carousel-slide>
    <b-carousel-slide img-src="https://lh3.googleusercontent.com/CbYy0JQ4uMUFztT0-9eDRXf_DikN2iGKvHOmW4uVViIFyYN0yC0Zhnnz-W5IhI-Mxy_fLikvXgDGfu6aR6BWwK20MRr4SRt6tEEs_Wnr71wM5BjP7eThyViiMKtiP7NZkrJ_JAl4CyE=w2400"></b-carousel-slide>

    <b-carousel-slide img-src="https://lh3.googleusercontent.com/BYYG7H2ekASXq7CK9DpqgJM05rxDyNlrZ36_VMaXhziMxQ15GazRSsnrMOmq50_WhDyJpf9oaEHKN6SGXL84SBgWyKyrUtKhZSnEPJz3BUUvv39eMB6d8TXNcsuyLMVSWwDixyCm_j0=w2400"></b-carousel-slide>

    <b-carousel-slide img-src="https://lh3.googleusercontent.com/MF2QzpOZXL5P7nRYx8bDHmzLK0gKiQQmfP-o0RfOxpR_Or6ny1lQUeL05ZuN0J5WrHdldJUH_HX_tCbzXtqoUWmamouAn5_hH07VZPpMWemrZ9TlFCR_Y0xC3LtKyiZ58Lr4KTidmbQ=w2400"></b-carousel-slide>

        <b-carousel-slide img-src="https://lh3.googleusercontent.com/E_Dm2voviLsQ5g6s13BhjFLEQ1BfRDWUSqh_bVts_k9HMNdeQs-mDsjOplGIXIJZnNV3xohCTQ-ySvgOlaKL8PXrSqsZEf_y72YFJScWPa3QHauf9cOed5zJXKkr2aaR5_ytusJiU5w=w2400"></b-carousel-slide>
        
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/0D5uJW-347tkXy5lDtnQaeh1MO9C5Q8tpQR-56g2VCRjboaUD8p7zswLdz-nybdofMEJvOIADK_J7VlGylaWnsGhCu1sWMk54tTOIv9SwG3K26MtWqKdFhH8Uo6QGlXzgKhcJckCzN4=w2400"></b-carousel-slide>
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/AhSsbjZF8cik3vsIyXASrCXo_YIfcP4qaBk3oz9PKh6sYQdQvgnR5x-N9vTmNa0fcLJiYE4pDEbQk1UlWCEcW1eVtohBDAj-4Wdbe_BFTEIxpMfaHQiBUSEuErUbrxcV8C09tk0Zpgo=w2400"></b-carousel-slide>
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/_0jFmjjM9OILkJOpLrBSHki9uzViFH6KALi-kPG3O2x0Qc6SoZNvKxS1AL0Ta5RpihIynIJtU48GOYid4Swz6roZppWedpHcBqzBXfnLpoviIvuzVtNK_AUt2XMG19hIVJKlRA53My0=w2400"></b-carousel-slide>
    
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>