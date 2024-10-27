<script lang="ts">
  export let invertColor = false;
  export let color = "";
  let colorClass = "";

  if (!invertColor) {
    colorClass = invertColor
      ? "text-white dark:text-black"
      : "text-black dark:text-white";
  } else if (color) {
    colorClass = `text-${color}`;
  }
</script>

<svg
  class="h-[28px] w-[28px] {colorClass}"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24">
  <path
    stroke="black"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h0" />
</svg>
