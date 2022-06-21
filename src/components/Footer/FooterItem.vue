<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-container">
        Made by
        <a
          href="https://github.com/alexeyvalko"
          class="footer-link"
          target="_blank"
          >@alexeyvalko</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  flex: 0 0 auto;
}
.footer-container {
  padding: 50px 0;
  text-align: right;
}

.footer-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  .footer-container {
    text-align: center;
  }
}
</style>
