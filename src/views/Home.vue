<template>
    <main class="flex w-full justify-center overflow-y-auto h-screen">
        <div class="flex w-2/4 flex-col items-center">
            <section v-for="(post, index) in posts" :key="post.id"
                class="md:w-3/4 p-4 flex flex-col items-center justify-center">
                <div class="bg-white p-4 mb-4">
                    <div class="flex items-center space-x-4">
                        <img :src="getImagePath(user.photo)" alt="Avatar" class="w-10 h-10 rounded-full">
                        <div class="text-gray-800 font-semibold">{{ user.username }}</div>
                        <div class="text-gray-500 text-sm">{{ new Date(post.created_at).toLocaleDateString('vi-VN') }}</div>
                    </div>
                    <div class="mt-2 text-gray-800">{{ post.description }}</div>
                    <div id-post="" class="slide-post">
                        <div class="carousel-wrapper">
                            <swiper 
                                :slides-per-view="'auto'" 
                                :centered-slides="true" 
                                :space-between="30"
                                :pagination="pagination" 
                                :navigation="navigation" 
                                :modules="modules"
                                class="mySwiper"
                                >
                                <swiper-slide v-for="(path, index) in post.files" :key="index" class="flex justify-center">
                                    <img class=" w-5/6 rounded-xl" :src="getImagePath(path.path)" alt="Post Image">
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="w-full flex">
                        <div class="flex mr-2">
                            <button @click="toggleLike(index)" :class="{ 'text-red-500': post.liked }"
                                class="like-btn transition-colors duration-500 ease-in-out">
                                <i :class="post.liked ? 'fa-solid' : 'fa-regular'" class="fa-heart text-2xl"></i>
                            </button>
                        </div>
                        <div class="flex">
                            <button  @click="post.showComment = !post.showComment" class="commentBtn"><i class="fa-regular fa-comment text-2xl hover:opacity-70"></i></button>
                        </div>
                        <div :class="!post.showComment ? 'hidden' : 'block' " class="fixed w-screen inset-0 h-screen z-20 bg-gray-600 bg-opacity-75 flex items-center justify-center">
                            <div class="bg-white h-5/6 shadow-xl flex max-w-7xl">
                                <div class="slide-post">
                                    <div class="carousel-wrapper">
                                        <swiper
                                        :slides-per-view="'auto'" 
                                        :centered-slides="true" 
                                        :space-between="30"
                                        :pagination="pagination" 
                                        :navigation="navigation" 
                                        :modules="modules"
                                        class="mySwiper"
                                        >
                                            <swiper-slide v-for="(path, index) in post.files" :key="index" class="flex justify-center">
                                                <img class=" w-5/6 rounded-xl" :src="getImagePath(path.path)" alt="Post Image">
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>
                                <div class="max-w-lg flex flex-col " style="min-width:400px">
                                    <div class="w-full flex justify-between items-center border-b border-b-gray-300 h-14 p-4">
                                        <div class="w-full h-full flex items-center">
                                            <img :src="getImagePath(user.photo)" alt="Avatar" class="w-10 h-10 rounded-full mr-2">
                                            <a href="">
                                                <div class="text-gray-800 font-semibold">{{ user.username }}</div>
                                            </a>
                                        </div>
                                        <button @click="post.showComment = !post.showComment" id="close-comment"><i class="fa-solid fa-x text-xl right-0"></i></button>
                                    </div>
                                    <div class="h-full overflow-y-auto">
                                        
                                    </div>
                                    <div class="w-full justify-between flex items-center h-10 relative">
                                        <form action="" class="w-full flex items-center h-10 relative" method="POST">
                                            <div class="absolute right-2">
                                                <button class="text-blue-500 text-xl" type="submit">Đăng</button>
                                            </div>
                                            <input class="w-full focus:ring-0 focus:outline-none box-border h-full  border-b-0 border-l-0 border-r-0" autocomplete="off"  name="message" type="text" placeholder="Thêm bình luận ..." required>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const navigation = true;
const pagination = {
    clickable: true,
};
const modules = [Pagination, Navigation];

const posts = ref([]);
const user = ref([]);

const getPosts = async () => {
    try {
        const response = await axios.get('http://localhost:8000/allposts');
        posts.value = response.data.posts;
        user.value = response.data.user;

        // posts.value.forEach(post => {
        //     post.liked = true;
        // });
        // posts.value.forEach(post => {
        //     post.showComment = false;
        // })
    } catch (error) {
        console.error('Lỗi khi gọi API: ', error);
    }
};

const getImagePath = (path) => {
    return 'http://localhost:8000/' + path.replace('public', 'storage');
};
const toggleLike = (index) => {
    posts.value[index].liked = !posts.value[index].liked;
};
onMounted(() => {
    getPosts();
});
</script>


<style>
.swiper-button-prev,
.swiper-button-next {
    color: rgb(0, 0, 0);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-pagination-bullet {
    background-color: rgb(255, 255, 255);
    width: 12px;
    height: 12px;
    opacity: 1;
    margin: 0 5px;
    border-radius: 50%;
}

.swiper-pagination-bullet-active {
    background-color: rgb(155, 155, 155) !important;
    width: 12px;
    height: 12px;
}
</style>