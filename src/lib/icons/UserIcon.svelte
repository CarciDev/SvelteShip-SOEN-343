<script lang="ts">
  export let invertColor = false;
  let colorClass = invertColor
    ? "text-white dark:text-black"
    : "text-black dark:text-white";
</script>

<svg
  class="h-6 w-6 flex-shrink-0 {colorClass}"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    fill-rule="evenodd"
    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
    clip-rule="evenodd" />
</svg>
