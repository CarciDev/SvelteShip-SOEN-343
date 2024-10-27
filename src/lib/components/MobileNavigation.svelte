<script lang="ts">
  import { page } from "$app/stores";
  import { getDrawerStore } from "@skeletonlabs/skeleton";

  import type { Link } from "../../routes/+layout.svelte";

  export let links: Link[];

  $: selected = $page.url.pathname;
  const drawerStore = getDrawerStore();

  function drawerClose() {
    drawerStore.close();
  }
</script>

<nav class="list-nav p-4">
  <ul>
    {#each links as link (link.name)}
      <li>
        <a
          class={selected === link.href ? "variant-filled-primary" : ""}
          href={link.href}
          on:click={drawerClose}
          ><svelte:component this={link.icon} /><span>{link.name}</span></a>
      </li>
    {/each}
  </ul>
</nav>
