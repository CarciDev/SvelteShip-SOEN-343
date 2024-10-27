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
  class="h-6 w-6 flex-shrink-0 {colorClass}"
  aria-hidden="true"
  fill="currentColor"
  width="24px"
  height="24px"
  viewBox="0 0 256.00098 256.00098"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M232.47656,215.51563l-40.67773-40.67774a96.10791,96.10791,0,1,0-16.97168,16.96973l40.67871,40.67871a12.0001,12.0001,0,1,0,16.9707-16.9707ZM43.99707,116a72,72,0,1,1,72,72A72.08124,72.08124,0,0,1,43.99707,116Z" />
</svg>
