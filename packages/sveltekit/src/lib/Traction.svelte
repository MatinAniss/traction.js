<script lang="ts">
  // Imports
  import { afterNavigate, beforeNavigate } from "$app/navigation";

  // Props and defaults
  export let color = "#FF0000";
  export let incrementInterval = 100;
  export let incrementAmount = 10;

  // Declare states
  let isVisible = false;
  let progress = 0;

  // Declare timeout
  let increment: NodeJS.Timeout;

  // Start navigation
  beforeNavigate(() => {
    isVisible = true;
    progress = incrementAmount;
    increment = setInterval(() => {
      progress = Math.min(progress + incrementAmount, 90);
    }, incrementInterval);
  });

  // Complete navigation
  afterNavigate(() => {
    clearInterval(increment);
    progress = 100;
    setTimeout(() => {
      isVisible = false;
      progress = 0;
    }, 500);
  });
</script>

<div style={`position: fixed; top: 0; left: 0; width: ${progress}%; height: 2px; background-color: ${color}; transition: width 0.5s ease; opacity: ${isVisible ? 1 : 0};`} />
