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
  fill="none"
  viewBox="0 0 24 24">
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 4v15c0 .6.4 1 1 1h15M8 16l2.5-5.5 3 3L17.3 7 20 9.7" />
</svg>
