<template>
  <section class="container about">
    <h2 class="about-title">Used resources</h2>

    <ol>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/"
          >VueJS</a
        >
        - An approachable, performant and versatile framework for building web
        user interfaces.
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://nestjs.com/"
          >NestJS</a
        >
        - A progressive Node.js framework for building efficient, reliable and
        scalable server-side applications.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/developers"
          >Unsplash API</a
        >
        - Largest open collection of high-quality photos.
      </li>
    </ol>
    <h2 class="about-title">Source code</h2>
    <ol>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexeyvalko/photo-app"
          >Frontend</a
        >
        - github repository.
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexeyvalko/photo-rest-service"
          >Backend</a
        >
        - github repository.
      </li>
    </ol>
  </section>
</template>
<script setup lang="ts">
import { DEFAULT_TITLE } from '@/common/config';

document.title = `About page - ${DEFAULT_TITLE}`;
</script>
<style>
.about-title {
  padding: 30px 0;
  text-align: center;
  font-weight: 600;
}
.about {
  padding: 0 60px 30px 60px;
}
</style>
