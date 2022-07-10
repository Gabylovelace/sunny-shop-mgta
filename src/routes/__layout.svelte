<script>
  import "virtual:windi.css";
</script>

<div class="mx-auto min-h-screen p-4 prose">
  <slot />
</div>

<style>
  :global(html) {
    @apply bg-gradient-to-br from-pink-100 to-pink-300;
  }
</style>
