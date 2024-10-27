<script lang="ts">
  import { page } from "$app/stores";
  import CloseIcon from "$lib/icons/CloseIcon.svelte";
  import ExclamationCircleIcon from "$lib/icons/ExclamationCircleIcon.svelte";
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import { fade } from "svelte/transition";

  let emailInput: HTMLInputElement;

  onMount(() => {
    emailInput.focus();
  });

  export let form;

  let loggingIn = false;

  // TODO: Implement disabling submit when submission is in progress
  $: showErrors = form?.error != null;
</script>

<div class="flex flex-col items-center justify-center gap-4">
  <div style="min-width: 36em;" class="card min-w-fit flex-grow">
    <header class="text4xl card-header flex justify-center font-bold">
      <h1 class="text-4xl">Log In</h1>
    </header>
    <section class="flex flex-col gap-3 p-4">
      {#if showErrors}
        <aside
          style="min-width: 32em;"
          class="alert variant-filled-error max-w-lg self-center"
          transition:fade|local={{ duration: 200 }}>
          <!-- Icon -->
          <div>
            <ExclamationCircleIcon
              constColor={true}
              height="h-12"
              width="w-12" />
          </div>
          <!-- Message -->
          <div class="alert-message">
            <h3 class="h3 font-bold">{form?.error}</h3>
            <p>{form?.errorMessage}</p>
          </div>
          <!-- Actions -->
          <div class="alert-actions">
            <!-- TODO: The X Button is slightly larger than the Warning Icon (3px off). Looks bad -->
            <button
              class="variant-filled btn-icon"
              on:click={(e) => {
                e.preventDefault();
                showErrors = false;
              }}><CloseIcon invertColor={true} /></button>
          </div>
        </aside>
      {/if}
      <form
        method="POST"
        class="flex flex-col gap-3"
        use:enhance={() => {
          loggingIn = true;

          return async ({ update }) => {
            await update();
            loggingIn = false;
          };
        }}>
        <label class="label">
          <span>Email</span>
          <input
            bind:this={emailInput}
            class="input"
            title="Email address"
            name="email"
            type="email"
            value={form?.email ?? ""}
            placeholder="example@domain.com"
            required />
        </label>
        <label class="label">
          <span>Password</span>
          <input
            class="input"
            title="Password"
            name="password"
            type="password"
            required />
        </label>
        <button
          class="variant-filled-primary btn mt-4"
          type="submit"
          disabled={loggingIn}>Log in</button>
      </form>
    </section>
    <div class="card-footer mt-2 flex items-center justify-around">
      <p class="font-bold">Don't have an account?</p>
      <a
        class="variant-filled-secondary btn"
        href="/auth/register{$page.url.searchParams.get('destination')
          ? '?destination=' + $page.url.searchParams.get('destination')
          : ''}">Create Account</a>
    </div>
  </div>
</div>
