<template>
    <nav class="bg-white h-screen">
      <header class="bg-white shadow-sm flex flex-col h-screen header">
        <div class="container mx-auto px-4 py-4 flex flex-col h-screen border-r-2">
          <div class="text-lg font-bold hover:cursor-auto playwrite-ar-uniquifier">Instagram</div>
          <div class="flex flex-col h-5/6">
            <div class="hover:bg-gray-100 rounded-md flex h-10 my-4 items-center space-x-2 zoom-on-hover">
              <i class="fa-solid fa-house text-xl mr-1 logo"></i>
              <router-link to="/" class="text-gray-700 hover:text-gray-1000 text-xl hover:text-current">Home</router-link>
            </div>
            <div class="search-box zoom-on-hover">
              <form class="search-box zoom-on-hover">
                <button class="fas fa-search btn-search text-xl logo" type="submit"></button>
                <button class="search text-xl">Search</button>
                <input type="text"  class="input-search text-xl border-none focus:outline-none focus:border-none" required placeholder="Type user name to search...">
              </form>
            </div>
            <div class="hover:bg-gray-100 rounded-md flex h-10 my-4 items-center space-x-2 zoom-on-hover">
              <i class="fa-brands fa-facebook-messenger text-xl mr-2 logo"></i>
              <router-link to="" class="text-gray-700 hover:text-gray-1000 text-xl hover:text-current">Message</router-link>
            </div>
            <div class="hover:bg-gray-100 rounded-md flex h-10 my-4 items-center space-x-2 zoom-on-hover" id="create-post">
              <i class="fa-solid fa-plus text-xl mr-2 logo"></i>
              <button @click="createPost = !createPost" class="text-gray-700 hover:text-gray-1000 text-xl hover:text-current">Create</button>
            </div>
            <div class="hover:bg-gray-100 rounded-md flex h-10 my-4 items-center space-x-2 zoom-on-hover">
              <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGjzJRnhJDqGSxbuvCGbk-mWt9TLzuBU1Ba31MvO4FTUJqGLbOyKa7E3l6wAYueiiHB7IYSozGJxl3hogmuj1bI&_nc_ohc=rm10Cw5r5BUQ7kNvgEZIj23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=AzNCGWfJb2n8CxUF-rAs5_k&oh=00_AYDNpJBgRIEZZLbYfI0D3Xe_UULpkUQazIUgbDaOvOmmOw&oe=672ABE3A" alt="Avatar" class="logo w-8 h-8 rounded-full text-xl">
              <router-link to="" class="text-gray-700 hover:text-gray-1000 text-xl hover:text-current">Profile</router-link>
            </div>
            <div class="zoom-on-hover mt-2">
              <router-link to="" class="text-gray-700 hover:text-gray-1000 text-red-500 text-xl">Đăng Xuất</router-link>
            </div>
          </div>
        </div>
      </header>
      <div id="myModal" :class="!createPost ? 'hidden' : 'block'" class="fixed z-20 inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg  overflow-auto overflow-x-hidden shadow-xl max-w-3xl h-5/6 w-full">
          <div class="flex justify-between items-center p-4 border-b zoom-on-hover">
            <h2 class="text-lg font-semibold ">Tạo bài viết mới</h2>
            <i @click="handleButtonClose" class="fa-solid fa-x text-xl logo close hover:cursor-pointer"></i>
          </div>
          <div class="flex flex-col w-full items-center justify-center text-center">
            <form id="uploadForm" class="w-full flex flex-col items-center justify-center" method="POST" enctype="multipart/form-data">
                <div @click="triggerFileInput" @dragover.prevent="handleDragOver" @dragleave.prevent="handleDragLeave" @drop.prevent="handleDrop"class="dropzone mt-4" id="dropzone">
                    <p>Drag & Drop your photos here or click to select photos</p>
                    <input type="file" id="fileUpload" name="fileUpload[]" class="mt-1 hidden w-full" ref="fileInput" @change="handleFileChange" multiple accept="image/*,video/*">
                </div>
                <div class="preview mb-3">
                  <div v-for="(file, index) in selectedFiles" :key="index" class="relative mx-2">
                    <img :src="getImageUrl(file)" class="">
                    <button type="button" class="remove-button" @click="removeFile(index)">X</button>
                  </div>
                </div>
                <textarea id="description" name="description" class="mt-1 block w-1/2 border-none p-2" placeholder="Chú thích:"></textarea>
                <button type="submit" class="upload-button" id="uploadButton" :disabled="!selectedFiles.length">Upload Photos</button>
            </form>
          </div>
        </div>
    </div>
    </nav>
</template>
  
<script setup>
import { ref } from 'vue';

const createPost = ref(false);
const fileInput = ref(null); 
const isDragging = ref(false);
const selectedFiles = ref([]);

const triggerFileInput = () => {
  fileInput.value.click();
};
const handleDragOver = () => {
  isDragging.value = true; 
};
const handleDragLeave = () => {
  isDragging.value = false; 
};

const handleDrop = (event) => {
  isDragging.value = false; 
  const files = event.dataTransfer.files;

  addFilesToSelection(files);
};

const handleFileChange = (event) => {
  const files = event.target.files; 
  addFilesToSelection(files);
};

const addFilesToSelection = (files) => {
  for (let i = 0; i < files.length; i++) {
    selectedFiles.value.push(files[i]);
  }
};

const getImageUrl = (file) => {
  return URL.createObjectURL(file); 
}
const handleButtonClose = () => {
  createPost.value = !createPost.value;
  selectedFiles.value = [];
};

const removeFile = (index) => {
  console.log(index);
  selectedFiles.value.splice(index, 1);
}
</script>

  