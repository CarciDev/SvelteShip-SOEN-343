<script lang="ts">
  export let invertColor = false;
  export let color = "";
  let colorClass = "";

  if (invertColor) {
    colorClass = invertColor
      ? "text-white dark:text-black"
      : "text-black dark:text-white";
  } else if (color) {
    colorClass = `text-${color}`;
  }
</script>

<svg
  class="h-6 w-6 {colorClass}"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24">
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 19V5m0 14-4-4m4 4 4-4" />
</svg>
