<script lang="ts">
  import { onMount } from 'svelte';
  
  interface Props {
    /** Current time to display */
    time?: Date;
    /** Size of the clock in pixels */
    size?: number;
    /** Theme: light or dark mode */
    theme?: 'light' | 'dark';
  }
  
  const { time = new Date(), size = 600, theme = 'light' }: Props = $props();
  
  let currentTime = $state(time);
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
    currentTime = time;
    const interval = setInterval(() => {
      currentTime = new Date();
    }, 1000);
    
    return () => clearInterval(interval);
  });
  
  let hours = $derived((currentTime.getHours() % 12));
  let minutes = $derived(currentTime.getMinutes());
  let seconds = $derived(currentTime.getSeconds());
  
  let hourAngle = $derived((hours * 30) + (minutes * 0.5));
  let minuteAngle = $derived(minutes * 6);
  let secondAngle = $derived(seconds * 6);
</script>

<div class="clock" class:dark={theme === 'dark'} style="--size: {size}px">
  <div class="clock-face">
    <!-- Hour markers -->
    {#each Array(12) as _, i}
      <div 
        class="hour-marker" 
        style="transform: rotate({i * 30}deg)"
      >
        <div class="marker-line"></div>
        <div class="hour-number">{i === 0 ? 12 : i}</div>
      </div>
    {/each}
    
    <!-- Clock hands -->
    <div class="hand hour-hand" style="transform: rotate({hourAngle}deg)"></div>
    <div class="hand minute-hand" style="transform: rotate({minuteAngle}deg)"></div>
    <div class="hand second-hand" style="transform: rotate({secondAngle}deg)"></div>
    
    <!-- Center dot -->
    <div class="center-dot"></div>
  </div>
</div>

<style>
  .clock {
    width: var(--size);
    height: var(--size);
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  }
  
  .clock-face {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: white;
    border: 2px solid #ddd;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark .clock-face {
    background: #1a1a1a;
    border-color: #444;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  }
  
  .hour-marker {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 50%;
    transform-origin: bottom center;
  }
  
  .marker-line {
    width: 2px;
    height: 20px;
    background: #666;
    margin: 0 auto;
  }
  
  .dark .marker-line {
    background: #ccc;
  }
  
  .hour-number {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%) rotate(calc(var(--i, 0) * -30deg));
    font-weight: 600;
    color: #333;
    font-size: calc(var(--size) * 0.06);
  }
  
  .dark .hour-number {
    color: #ddd;
  }
  
  .hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    border-radius: 2px;
  }
  
  .hour-hand {
    width: 4px;
    height: 25%;
    background: #333;
    margin-left: -2px;
  }
  
  .minute-hand {
    width: 3px;
    height: 35%;
    background: #333;
    margin-left: -1.5px;
  }
  
  .second-hand {
    width: 1px;
    height: 40%;
    background: #ff4444;
    margin-left: -0.5px;
  }
  
  .dark .hour-hand,
  .dark .minute-hand {
    background: #ddd;
  }
  
  .center-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .dark .center-dot {
    background: #ddd;
  }
</style>