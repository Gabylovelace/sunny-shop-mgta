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
  :global(img) {
    @apply rounded-lg shadow-lg;
  }

  :global(button) {
    @apply p-2 rounded bg-pink-500 font-bold text-white shadow transform duration-200 hover:scale-105;
  }
</style>
