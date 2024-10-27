<script lang="ts">
  export let invertColor = false;
  export let constColor = false;
  export let height = "h-6";
  export let width = "w-6";
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
  class="{height} {width} {colorClass}"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    fill-rule="evenodd"
    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
    clip-rule="evenodd" />
</svg>
