<template>
  <button class="button search-button">
    <IconSearch class="search-icon" />
    <span class="visually-hidden">search</span>
  </button>
</template>

<style scoped>
.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
  height: 50px;
}

.search-icon {
  fill: #7f7f7f;
  transition: var(--primary-transition);
}

.search-icon:hover {
  fill: var(--primary-color);
}
</style>
