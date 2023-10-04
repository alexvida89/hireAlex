<template>
  <div class="wrap" :class="isLoaded">
    <h1 ref="title">
      I'm Alex, a seasoned full-stack developer specializing in front-end
      development within WordPress and Vue.js environments.
    </h1>
    <div class="avatar">
      <img src="~/assets/images/alex.jpg" alt="Alex's avatar" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      isLoaded: "is-loading",
    };
  },
  methods: {},
  mounted() {
    let animation_finish = 0;
    this.$refs.title.innerHTML = this.$refs.title.innerHTML
      .split("")
      .map((char, i) => {
        let className = "";
        if (i >= 13 && i <= 41) {
          className = "bold_char";
        }
        animation_finish += 25; //take into account the transition duration
        return (
          `<span class='` +
          className +
          `' style="transition-delay:${i * 20}ms">${char}</span>`
        );
      })
      .join("");
    setTimeout(() => {
      this.isLoaded = "animation-finished is-loaded";
    }, animation_finish);
    setTimeout(() => {
      this.isLoaded = "is-loaded";
    }, 100);
  },
};
</script>

<style scoped lang="scss">
.wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  opacity: 0;
  &.is-loaded {
    opacity: 1;
  }
  h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-weight: 300;
    span {
      font-weight: 400;
    }
  }
  .avatar {
    // width: 150px;
    img {
      // border-radius: 100%;
      width: 150px;
      max-width: 150px;
      border-radius: 100%;
      // height: 150px;
    }
  }
}
</style>
<style lang="scss">
.wrap {
  h1 {
    span {
      transition: all 0.4s ease-in-out;
      opacity: 0;
    }
  }
  &.is-loaded {
    h1 {
      span {
        opacity: 1;
      }
    }
    &.animation-finished {
      h1 {
        span {
          &.bold_char {
            transition-delay: 0ms !important;
            color: #9d4fe3;
          }
        }
      }
    }
  }
}
</style>
