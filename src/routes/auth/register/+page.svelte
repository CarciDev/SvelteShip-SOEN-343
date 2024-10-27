<script lang="ts">
  import CloseIcon from "$lib/icons/CloseIcon.svelte";
  import ExclamationCircleIcon from "$lib/icons/ExclamationCircleIcon.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { getToastStore } from "@skeletonlabs/skeleton";
  import type { ToastSettings } from "@skeletonlabs/skeleton";

  const toastStore = getToastStore();

  let nameInput: HTMLInputElement;

  onMount(() => {
    nameInput.focus();
  });

  export let form;

  // TODO: Implement disabling submit when submission is in progress
  let showErrors = form?.error != null;

  const newUserToast: ToastSettings = {
    message: `${form && !form?.error ? form?.name : ""}'s account has been created!`,
    timeout: 8000,
    hoverable: true,
    background: "variant-filled-success",
  };

  $: if (form && !form?.error) {
    toastStore.trigger(newUserToast);
  }
</script>

<div class="flex flex-col items-center justify-center gap-4">
  <div style="min-width: 36em;" class="card min-w-fit flex-grow">
    <header class="text4xl card-header flex justify-center font-bold">
      <h1 class="text-4xl">Create Account</h1>
    </header>
    <section class="p-4">
      <form method="POST" class="flex flex-col gap-3">
        {#if showErrors}
          <aside
            style="min-width: 32em;"
            class="alert variant-filled-error max-w-lg self-center"
            transition:fade|local={{ duration: 200 }}>
            <!-- Icon -->
            <div>
              <ExclamationCircleIcon
                constColor={true}
                height="h-10"
                width="w-10" />
            </div>
            <!-- Message -->
            <div class="alert-message">
              <h3 class="h3 font-bold">{form?.error}</h3>
              <p>{form?.errorMessage}</p>
            </div>
            <!-- Actions -->
            <div class="alert-actions">
              <button
                class="variant-filled btn-icon"
                on:click={(e) => {
                  e.preventDefault();
                  showErrors = false;
                }}><CloseIcon invertColor={true} /></button>
            </div>
          </aside>
        {/if}
        <label class="label">
          <span>Name</span>
          <input
            bind:this={nameInput}
            class="input"
            title="Name"
            name="name"
            type="text"
            value={form?.name ?? ""}
            placeholder="John Doe"
            autocomplete="off"
            required />
        </label>
        <label class="label">
          <span>Email</span>
          <input
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
        <label class="label">
          <span>Confirm Password</span>
          <input
            class="input"
            title="Confirm Password"
            name="confirmPassword"
            type="password"
            required />
        </label>
        <p>Passwords must:</p>
        <ul class="list-inside list-disc">
          <li>Be at least 8 characters long</li>
          <li>Contain an uppercase letter</li>
          <li>Contain a lowercase letter</li>
          <li>Contain a digit</li>
        </ul>
        <button class="variant-filled-primary btn mt-4" type="submit"
          >Register</button>
      </form>
    </section>
    <footer class="card-footer mt-2 flex items-center justify-around"></footer>
  </div>
</div>
