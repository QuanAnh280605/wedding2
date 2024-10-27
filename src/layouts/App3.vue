<template>
  <div class="flex">
    <div>
      <button class="text-4xl transition-colors duration-500 ease-in-out fixed z-20 rounded-full left-5 bottom-10"
              @click="toggleAudio">
        <i :class="isPlaying ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-off'"></i>
      </button>
      <div v-if="!isPlaying"
           class="notification fixed z-20 left-14 cursor-pointer bottom-12 transition-colors duration-500 ease-in-out"
           @click="toggleAudio">
        Nhấn vào đây nếu bạn muốn phát nhạc!
      </div>
      <audio ref="audio" src="/music.mp3"></audio>
    </div>
    <!-- Page Content -->
    <main class="w-full parallax  sc1">
      <header class="relative bg-cover bg-center h-screen w-full text-white">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 class="xl:text-8xl text-6xl md:text-6xl xl:flex font-bold tracking-wider  roboto-medium">
            <div>Quốc Việt</div>
            <img src="/—Pngtree—white heart-shaped elements_6070867.png" alt="Heart"
                 class="inline w-24 md:w-28 xl:w-40 mx-2" />
            <div> Thùy Trang</div>
          </h1>
          <p class="mt-10 md:text-xl text-xl xl:text-4xl roboto-medium">16 Tháng 11, 2024</p>
        </div>
      </header>
      <section class=" bg-red-300 relative py-16 text-center">
        <!-- Couple's Photos -->
        <div class="bg"></div>
        <div class="flex flex-col md:flex-row justify-center gap-8 mb-8">
          <!-- Groom's Photo -->
          <div class="max-w-lg w-full px-4">
            <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="false" class="mySwiper rounded">
              <SwiperSlide v-for="(image, index) in slider1" :key="index">
                <img :src="image.src" alt="Groom's photo" class="w-full h-auto object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- Bride's Photo -->
        </div>
        <!-- Text Below Photos -->
        <div class="mt-4 flex-col flex items-center justify-center text-center">
          <h1 class="text-5xl font-semibold text-gray-800 pacifico-regular my-4">We are Getting Married</h1>
          <!-- Decorative Icon or Divider -->
          <div class="xl:w-1/2 md:w-full mt-8">
            <p class="roboto-medium text-2xl">Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám
              cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất
              hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn
              đã dành cho chúng tôi!</p>
          </div>
          <h1 class="text-4xl font-bold tracking-wider mt-10 roboto-medium">Quốc Việt & Thùy Trang</h1>
          <div class="mt-8 flex xl:w-1/3 justify-between">
            <div class="mr-4">
              <div class="pacifico-regular xl:text-xl">
                Con Ông: <a class="">Mè Văn Trường</a>
              </div>
              <div class="pacifico-regular xl:text-xl mt-2">
                Con Bà: <a>Hà Thị Vi Chủ</a>
              </div>
            </div>
            <div class="ml-4">
              <div class="pacifico-regular xl:text-xl">
                Con Ông: <a class="">Nguyễn Văn Phấn</a>
              </div>
              <div class="pacifico-regular xl:text-xl mt-2">
                Con Bà: <a>Lê Thị Kim Cúc</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
          class="time parallax  flex flex-col items-center z-10  justify-center bg-opacity-50 text-white py-12 px-4">

        <h2 class="xl:text-5xl text-2xl z-50 playwrite-gb-s-uniquifier font-bold my-4">ĐẾM NGƯỢC THỜI GIAN</h2>
        <p class="mb-6 xl:text-2xl text-xl  z-50   playwrite-gb-s-uniquifier">Cùng chờ đợi đến giây phút tuyệt vời nhất</p>

        <!-- Countdown Display -->
        <div class="flex gap-4  z-50 playwrite-gb-s-uniquifier text-center mb-6">
          <div class="flex  z-50  flex-col">
            <span class="text-4xl  z-50 font-bold">{{ days }}</span>
            <span>Ngày</span>
          </div>
          <div class="flex  z-50  flex-col">
            <span class="text-4xl font-bold">{{ hours }}</span>
            <span>Giờ</span>
          </div>
          <div class="flex  flex-col">
            <span class="text-4xl font-bold">{{ minutes }}</span>
            <span>Phút</span>
          </div>
          <div class="flex  flex-col">
            <span class="text-4xl font-bold">{{ seconds }}</span>
            <span>Giây</span>
          </div>
        </div>
        <!-- Status -->
        <div v-if="hasEnded" class="bg-white text-fuchsia-300 font-semibold py-2 px-6 rounded-full">
          Đã Kết Hôn
        </div>
      </section>
      <section class="flex flex-col items-center justify-center bg-red-300 relative text-white py-8 px-4">
        <div class="bg"></div>
        <!-- Header -->
        <h1 class="xl:text-5xl text-2xl font-bold playwrite-gb-s-uniquifier mb-2">TRÂN TRỌNG KÍNH MỜI</h1>
        <p class="text-2xl xl:text-3xl playwrite-gb-s-uniquifier mb-4">Bạn và người thương</p>
        <p class="text-center playwrite-gb-s-uniquifier xl:text-xl text-lg mb-6">Đến dự và chung vui cùng gia đình chúng
          tôi</p>
        <div class="mt-2">
          <hr class=" md:block xl:block hidden md:mb-16 mb-20  w-96 border-t-2 border-white mx-auto">
        </div>
        <!-- Invitation details -->
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Groom section -->
          <div class="text-center">
            <div class="w-80 h-80 rounded-full overflow-hidden mb-4">
              <img src="/DJH08397.jpg" alt="Groom" class="w-full h-full object-cover" />
            </div>
            <h3 class="font-cursive text-4xl">Chú Rể</h3>
            <h2 class="font-cursive text-6xl my-4">Quốc Việt</h2>
          </div>
          <!-- Wedding info section -->
          <div class="text-center  max-md:order-3 z-20">
            <div class="text-4xl my-4 font-semibold playwrite-gb-s-uniquifier mb-2">Lễ thành hôn được <br /> tổ chức vào
              hồi</div>
            <div class="text-4xl playwrite-gb-s-uniquifier font-bold mb-2">11:00</div>
            <div class="text-4xl playwrite-gb-s-uniquifier my-8 font-bold mb-2">Thứ 7</div>
            <div class="text-4xl playwrite-gb-s-uniquifier my-8 font-semibold mb-2">16/11/2024</div>
            <div class="my-4 playwrite-gb-s-uniquifier text-lg">(Tức ngày 16.10 năm Giáp Thìn)</div>
            <div class="playwrite-gb-s-uniquifier">Địa điểm tổ chức:</div>
            <div class="text-center playwrite-gb-s-uniquifier text-xl">
              Trung Tâm hội nghị tỉnh Phú Thọ<br/>Số 936 - Đại lộ Hùng Vương ,<br />
              Phường Thanh Miếu , Việt Trì,Phú Thọ
            </div>
            <button class="mt-10"><a class="z-50 bg-white text-red-700 font-semibold py-2 px-4 rounded-md"
                                     href="https://maps.app.goo.gl/JnbdVxRJ97x79tpn6">Xem bản đồ</a></button>
          </div>
          <!-- Bride section -->
          <div class="text-center">
            <div class="w-80 h-80 rounded-full overflow-hidden mb-4">
              <img src="/DJH08289.jpg" alt="Bride" class="w-full h-full object-cover" />
            </div>
            <h3 class="font-cursive text-4xl">Cô Dâu</h3>
            <h2 class="font-cursive text-6xl my-4">Thùy Trang</h2>
          </div>
        </div>
      </section>
      <section class="bg-red-700 flex flex-col items-center justify-center relative py-10 px-4">
        <div class="bg"></div>
        <div class="text-center text-white mb-8">
          <h2 class="text-4xl font-bold playwrite-gb-s-uniquifier">NHỮNG KỶ NIỆM NGỌT NGÀO</h2>
          <p class="mt-2 playwrite-gb-s-uniquifier">Hình ảnh luôn là những gì tốt nhất để lưu giữ cảm xúc</p>
          <div class="mt-2">
            <hr class=" md:block xl:block hidden md:mb-16 mb-20  w-96 border-t-2 border-white mx-auto">
          </div>
        </div>
        <div class="md:w-2/3 xl:w-1/3  w-full">
          <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="false" class="mySwiper rounded">
            <SwiperSlide v-for="(image, index) in slider2" :key="index">
              <img :src="image.src" alt="Bride's photo" class="w-full h-auto object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section class="flex flex-col items-center justify-center relative bg-red-700 py-20 md:py-36 px-4">
        <div class="bg"></div>
        <h2 class="text-4xl md:text-6xl font-bold playwrite-gb-s-uniquifier xl:text-6xl text-white mb-8 md:mb-16">Hộp
          mừng cưới</h2>
        <div class="flex items-center gap-6 w-full md:w-2/3">
          <!-- Mừng cưới đến cô dâu -->
          <div
              class="bg-white shadow-lg rounded-lg w-full max-md:px-4  md:px-10 py-8 md:py-10 xl:py-20 flex flex-col items-center text-center">
            <div
                class="bg-red-500 playwrite-gb-s-uniquifier xl:mb-10 max-xl:text-lg text-white px-4 py-2 rounded-full mb-4 font-semibold">
              MỪNG CƯỚI ĐẾN CÔ DÂU
            </div>
            <img src="/qr1.jpg" alt="QR code cô dâu" class="w-36 md:w-64 mb-4" />
          </div>

          <!-- Mừng cưới đến chú rể -->
          <div
              class="bg-white shadow-lg rounded-lg max-md:px-4  w-full md:px-10 py-8 md:py-10 xl:py-20 flex flex-col items-center text-center">
            <div
                class="bg-pink-400 playwrite-gb-s-uniquifier xl:mb-10  max-xl:text-lg text-white px-4 py-2 rounded-full mb-4 font-semibold">
              MỪNG CƯỚI ĐẾN CHÚ RỂ
            </div>
            <img src="/qr2.jpg" alt="QR code chú rể" class="w-36 md:w-64 mb-4" />
          </div>
        </div>
      </section>
    </main>
  </div>
  <SnowFall />
</template>

<script setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SnowFall from "./SnowFall.vue";

const audio = ref(null);
const isPlaying = ref(false);

const targetDate = new Date('2024-11-16T06:30:00');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const hasEnded = ref(false);

const images = [
  { id: 1, src: 'DJH08764.jpg', alt: 'Hình ảnh 1' },
  { id: 2, src: 'DJH08623.jpg', alt: 'Hình ảnh 2' },
  { id: 3, src: 'DJH08343.jpg', alt: 'Hình ảnh 3' },
  { id: 4, src: 'DJH08360.jpg', alt: 'Hình ảnh 4' },
  { id: 5, src: 'DJH08594.jpg', alt: 'Hình ảnh 5' },
  { id: 6, src: 'DJH08497.jpg', alt: 'Hình ảnh 6' },
];

const slider1 = [
  { id: 1, src: 'DJH07966.jpg', alt: 'Hình ảnh 1' },
  { id: 2, src: 'DJH08025.jpg', alt: 'Hình ảnh 2' },
  { id: 3, src: 'DJH07754.jpg', alt: 'Hình ảnh 3' },
  { id: 4, src: 'DJH07709.jpg', alt: 'Hình ảnh 4' },
  { id: 5, src: 'DJH07882.jpg', alt: 'Hình ảnh 5' },
  { id: 6, src: 'DJH07999.jpg', alt: 'Hình ảnh 6' },
];
const slider2= [
  { id: 1, src: 'z5971865287598_66b43d985ef8c14592428462ca61c658.jpg', alt: 'Hình ảnh 1' },
  { id: 2, src: 'z5971865302427_4ded88e4b9736ebf4a4705ec9c277034.jpg', alt: 'Hình ảnh 2' },
  { id: 3, src: 'z5971865302203_15d75f8f7eb59a20bbf98c51d5d4dd76.jpg', alt: 'Hình ảnh 3' },
  { id: 4, src: 'z5971865292950_1e58832a44d92d0caf217f6d2fe1e69a.jpg', alt: 'Hình ảnh 4' },
  { id: 4, src: 'z5971867490832_dd566d01a51495e9d881d15a335e611c.jpg', alt: 'Hình ảnh 4' },
  { id: 4, src: 'z5971867507513_c245d59ed2600b2dff80446f84916f17.jpg', alt: 'Hình ảnh 4' },
  { id: 4, src: 'z5971867498342_a7d1abb0c65941d0e45e33f93a81c882.jpg', alt: 'Hình ảnh 4' },
  { id: 4, src: 'z5971867495354_2fbd27a1bc61153521788d40ae4b2ae8.jpg', alt: 'Hình ảnh 4' },
  { id: 4, src: 'z5971865292950_1e58832a44d92d0caf217f6d2fe1e69a.jpg', alt: 'Hình ảnh 4' },
];
const updateCountdown = () => {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    hasEnded.value = true;
    days.value = hours.value = minutes.value = seconds.value = 0;
    return;
  }

  days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeRemaining % (1000 * 60)) / 1000);
};

let interval;
onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
const toggleAudio = () => {
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play().catch(error => {
      console.error('Lỗi phát nhạc:', error);
    });
  }
  isPlaying.value = !isPlaying.value;
};

</script>

<style scoped>


.playwrite-gb-s-uniquifier {
  font-family: "Playwrite GB S", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.font-cursive {
  font-family: 'Dancing Script', cursive;
}

.roboto-medium {
  font-family: "Dancing Script", serif;
  font-weight: 500;
  font-style: normal;
}

.pacifico-regular {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
}

.bg {
  background-image: url(/flower.png);
  background-color: #c0392b;
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  position: absolute;
}
.parallax {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.time{
  background-image: url(/DJH08360.jpg);
}
.sc1{
  background-image: url(/DJH08743.jpg);
}
.time, .sc1 {
  background-size: cover;
  background-position: center;
  background-attachment: scroll; /* Đổi về scroll thay vì fixed */
  position: relative;
}

/* Tạo lớp phủ màu để giảm sự tập trung vào ảnh nền */
.time::before, .sc1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Điều chỉnh độ mờ */
  z-index: 1;
}
</style>
