<template>
  <TransitionGroup name="fade">
    <div class="loader" v-if="props.position !== 'center'"></div>
    <div class="loader_container" v-if="props.position === 'center'">
      <div class="loader"></div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
const props = defineProps<{
  position?: 'center' | 'none';
}>();
</script>

<style scoped>
.loader_container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--column-gutter);
}
.loader {
  --ballcolor: var(--primary-color);
  --shadow: 0px 0 #ffffff00;
  --shadowcolor: #ffffff00;
  width: 10px;
  height: 10px;
  left: -120px;
  border-radius: 50%;
  position: relative;
  color: var(--ballcolor);
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: var(--shadow), var(--shadow), var(--shadow), var(--shadow);
  }

  12% {
    box-shadow: 100px 0 var(--ballcolor), var(--shadow), var(--shadow),
      var(--shadow);
  }

  25% {
    box-shadow: 110px 0 var(--ballcolor), 100px 0 var(--ballcolor),
      var(--shadow), var(--shadow);
  }

  36% {
    box-shadow: 120px 0 var(--ballcolor), 110px 0 var(--ballcolor),
      100px 0 var(--ballcolor), var(--shadow);
  }

  50% {
    box-shadow: 130px 0 var(--ballcolor), 120px 0 var(--ballcolor),
      110px 0 var(--ballcolor), 100px 0 var(--ballcolor);
  }

  62% {
    box-shadow: 200px 0 var(--shadowcolor), 130px 0 var(--ballcolor),
      120px 0 var(--ballcolor), 110px 0 var(--ballcolor);
  }

  75% {
    box-shadow: 200px 0 var(--shadowcolor), 200px 0 var(--shadowcolor),
      130px 0 var(--ballcolor), 120px 0 var(--ballcolor);
  }

  87% {
    box-shadow: 200px 0 var(--shadowcolor), 200px 0 var(--shadowcolor),
      200px 0 var(--shadowcolor), 130px 0 var(--ballcolor);
  }

  100% {
    box-shadow: 200px 0 var(--shadowcolor), 200px 0 var(--shadowcolor),
      200px 0 var(--shadowcolor), 200px 0 var(--shadowcolor);
  }
}
</style>
