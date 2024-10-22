<template>
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-900 text-white">
  <div id="app" class="flex h-screen">
    <!-- بخش ۱: لیست چت‌ها و گروه‌ها -->
    <aside class="w-1/4 bg-pink-500 p-4">
      <h2 class="text-lg font-bold mb-4">Chats</h2>
      <ul class="space-y-2">
        <li class="p-2 bg-gray-700 rounded-lg">Hamed</li>
        <li class="p-2 bg-gray-700 rounded-lg">Daria</li>
        <li class="p-2 bg-gray-700 rounded-lg">BRIX Templates</li>
      </ul>
    </aside>

    <!-- بخش ۲: صفحه چت -->
    <main class="flex-grow bg-gray-700 p-4">
      <!-- هدر چت -->
      <header class="bg-gray-800 p-4 flex justify-between items-center">
        <h1 class="text-lg">Chat with Hamed</h1>
        <input type="text" placeholder="Search" class="bg-gray-700 rounded-full px-4 py-2 focus:outline-none">
      </header>

      <!-- بخش چت -->
      <section class="mt-4 flex flex-col space-y-4">
        <!-- پیام‌های چت -->
        <div class="text-right">
          <p class="inline-block bg-purple-700 rounded-xl px-4 py-2">I just wanted to know if you have that template available</p>
        </div>
        <div>
          <p class="inline-block bg-purple-700 rounded-xl px-4 py-2">Yes, here's the link to it</p>
        </div>

        <!-- پیام صوتی -->
        <div>
          <div class="bg-gray-700 rounded-xl p-2 inline-block">
            <audio controls class="w-full">
              <source src="audio-file.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <!-- آپلود فایل -->
        <div>
          <div class="bg-gray-700 rounded-xl p-2 inline-block">
            <p>BRIX Templates Agency</p>
            <p class="text-xs text-gray-400">4.5 MB</p>
          </div>
        </div>
      </section>
    </main>

    <!-- بخش ۳: اطلاعات چت -->
    <aside class="w-1/4 bg-gray-800 p-4">
      <h2 class="text-lg font-bold mb-4">Contact Info</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <p>Hamed</p>
          <div class="space-x-2">
            <button class="text-white">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12h4.553l-.964 9.672a2 2 0 01-1.991 1.781H7.402a2 2 0 01-1.992-1.781L4.445 12H9" />
              </svg>
            </button>
            <button class="text-white">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7v.01M4 6v.01M12 6v.01M7 3v.01M12 5v.01M9 4v.01M5 5v.01M10 4v.01M8 3v.01M9 5v.01M5 3v.01M4 5v.01" />
              </svg>
            </button>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-gray-400">Online</p>
          <p class="text-sm">Hello, my name is Hamed...</p>
          <div class="space-y-2">
            <img src="image-url.jpg" alt="profile image" class="rounded-lg">
          </div>
        </div>
      </div>
    </aside>
  </div>

  <!-- Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        // اطلاعات چت می‌تواند در اینجا ذخیره شود
      }
    })
  </script>
</body>

</html>
</template>

<script>
export default {

}
</script>

<style>

</style>