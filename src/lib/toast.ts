import type { ToastSettings } from "@skeletonlabs/skeleton";

export function newErrorToats(
  message: string,
  classes?: string,
): ToastSettings {
  return {
    message,
    background: "variant-filled-error",
    autohide: false,
    classes,
  };
}

export function newSuccessToats(
  message: string,
  classes?: string,
): ToastSettings {
  return {
    message,
    hoverable: true,
    timeout: 5000,
    background: "variant-filled-success",
    classes,
  };
}
