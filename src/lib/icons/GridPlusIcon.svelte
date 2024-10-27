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
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    fill-rule="evenodd"
    d="M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
    clip-rule="evenodd" />
</svg>
