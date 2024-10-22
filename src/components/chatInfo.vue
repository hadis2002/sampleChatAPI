<template>
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
            <img src="" alt="profile image" class="rounded-lg">
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'ChatInfo',
  };
  </script>
  
  <style scoped>
  /* در صورت نیاز می‌توانی استایل‌های اضافی اضافه کنی */
  </style>