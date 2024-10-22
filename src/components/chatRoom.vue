<template>
    <main class="flex-grow bg-gray-700 p-4">
      <!-- هدر چت -->
      <header class="bg-gray-800 p-4 flex justify-between items-center">
        <h1 class="text-lg">Chat with Hamed</h1>
        <input type="text" placeholder="Search" class="bg-gray-700 rounded-full px-4 py-2 focus:outline-none">
      </header>
  
      <!-- بخش چت -->
      <section class="mt-4 flex flex-col space-y-4">
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
              <source src="" type="audio/mpeg">
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
  </template>
  
  <script>
  export default {
    name: 'ChatWindow',
  };
  </script>
  
  <style scoped>
  /* در صورت نیاز می‌توانی استایل‌های اضافی اضافه کنی */
  </style>