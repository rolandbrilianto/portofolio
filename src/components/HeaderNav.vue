<template>
  <header class="bg-white shadow-md min-h-16 fixed w-full z-0 top-0">
    <section class="py-3 border-b border-gray-600 flex space-x-4">
      <FormKitIcon icon="email" class="w-6 my-auto ml-7 text-main-blue" />
      <span class="text-gray-700">rolandbrilianto@gmail.com</span>
    </section>
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo di kiri -->
      <div class="flex">
        <img src="@/assets/newIcon.png" alt="Logo" class="w-12" />
        <span class="font-semibold text-lg my-auto">Roland Brilianto</span>
      </div>
      <!-- Section di kanan -->
      <nav>
        <ul class="flex space-x-16 text-gray-700 uppercase">
          <li><a href="#about" class="hover:text-gray-300">About Me</a></li>
          <li>
            <a href="#education" class="hover:text-gray-300">Education</a>
          </li>
          <li>
            <a href="#experiences" class="hover:text-gray-300">Experiences</a>
          </li>
          <li><a href="#project" class="hover:text-gray-300">Projects</a></li>
          <li><a href="#" class="hover:text-gray-300">Skills</a></li>
          <li><a href="#" class="hover:text-gray-300">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { FormKitIcon } from "@formkit/vue";
</script>
