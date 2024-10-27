<template>
    <aside class="w-full md:w-1/5 p-4">
      <nav class="-mx-3 flex">
        <div  class="flex items-center space-x-4">
          <img src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/462216533_1105984637550595_3702023051989659662_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQ0sKw76buWOJYG-51Cxd2WKKP1f7P-etYoo_V_s_56_iT4QtIyY-NepITHvcysrA8EA7ANIjhb0MB7d7etAev&_nc_ohc=PP3qqnB0MYcQ7kNvgED_HDA&_nc_ht=scontent.fhan5-2.fna&_nc_gid=ANCoGPkeEkIMvO0ZPB3huWh&oh=00_AYD4gQ-gHN1kGuM6mVnzE6QerBQ3pqdKbiFKtE3wHKflOQ&oe=670B25CB" alt="Avatar" class="w-10 h-10 rounded-full" />
          <div>
            <a href="">
              <div class="text-gray-800 font-semibold">username</div>
            </a>
            <div class="text-gray-500">name</div>
          </div>
          <button class="ml-auto text-blue-500">Switch</button>
        </div>
      </nav>
      <div  class="mt-4">
        <div class="flex justify-between items-center mb-2">
          <div class="text-gray-800">Suggested for you</div>
        </div>
        <div>
          <div v-for="(user , index) in users" :key="user.id" class="flex items-center space-x-4 justify-between my-5">
            <div class="flex items-center space-x-4">
              <img :src="getImagePath(user.photo)" alt="Avatar" class="w-10 h-10 rounded-full"/>
              <div>
                <div class="text-gray-800">{{ user.username }}</div>
                <div class="text-gray-500 text-sm">Suggested for you</div>
              </div>
            </div>
            <button @click="followed(index)" class="follow-btn text-blue-500">{{ user.followed ? 'Unfollow' : 'Follow' }}</button>
          </div>
        </div>
        <footer class="bg-white mt-auto">
          <div class="container mx-auto px-4 py-4 text-center text-gray-500">
            <p>© 2024 INSTAGRAM FROM META</p>
          </div>
        </footer>
      </div>
    </aside>
  </template>
  <script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const users = ref([]);
  
    const getUsers = async () => {
      try {
          const response = await axios.get('http://localhost:8000/getuser');
          users.value = response.data;
          users.value.forEach(user => {
            user.followed = true ;
          });
      } catch (error) {
          console.error('Lỗi khi gọi API: ', error);
      }
    };

    const followed = (index) => {
      return users.value[index].followed = !users.value[index].followed;
    };

    const getImagePath = (path) => {
        return 'http://localhost:8000/' + path.replace('public', 'storage');
    };
    
    onMounted(() => {
        getUsers();
    });
  </script>
  