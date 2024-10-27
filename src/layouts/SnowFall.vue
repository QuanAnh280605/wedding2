<template>
  <div class="snowflakes" aria-hidden="true">
    <div class="snowflake" v-for="(flake, index) in snowflakes" :key="index">❅</div>
  </div>
</template>

<script>
export default {
  name: "Snowfall",
  data() {
    return {
      snowflakes: Array(30).fill(''), // Tạo ra một mảng với 30 bông tuyết
    };
  },
};
</script>

<style scoped>
.snowflakes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.snowflake {
  color: white;
  font-size: 24px;
  position: absolute;
  top: -10%;
  user-select: none;
  animation: fall linear infinite;
  opacity: 0.8;
}

/* Định nghĩa các keyframes cho hiệu ứng tuyết rơi */
@keyframes fall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

/* Tạo hiệu ứng ngẫu nhiên cho các bông tuyết */
.snowflake:nth-child(1) {
  left: 10%;
  animation-duration: 10s;
  animation-delay: 0s;
}

.snowflake:nth-child(2) {
  left: 20%;
  animation-duration: 8s;
  animation-delay: 2s;
}

.snowflake:nth-child(3) {
  left: 30%;
  animation-duration: 12s;
  animation-delay: 4s;
}

/* Thêm các bông tuyết khác với thời gian và vị trí ngẫu nhiên */
.snowflake:nth-child(4) {
  left: 40%;
  animation-duration: 9s;
  animation-delay: 1s;
}
.snowflake:nth-child(5) {
  left: 50%;
  animation-duration: 11s;
  animation-delay: 3s;
}
.snowflake:nth-child(6) {
  left: 60%;
  animation-duration: 13s;
  animation-delay: 5s;
}
.snowflake:nth-child(7) {
  left: 70%;
  animation-duration: 7s;
  animation-delay: 6s;
}

/* Tiếp tục thêm các bông tuyết với kiểu rơi khác nhau */
</style>
