<script lang="ts">
  export let invertColor = false;
  export let constColor = false;
  let colorClass: string;
  if (constColor) {
    colorClass = "text-white";
  } else {
    colorClass = invertColor
      ? "text-white dark:text-gray-800"
      : "text-gray-800 dark:text-white";
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
    d="M6 18 18 6m0 12L6 6" />
</svg>
