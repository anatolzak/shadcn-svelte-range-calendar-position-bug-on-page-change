<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';

  const links: { href: string; label: string }[] = [
    {
      href: '/blank',
      label: 'Blank Page',
    },
    {
      href: '/',
      label: 'Bits-UI Popover',
    },
    {
      href: '/melt-ui-popover',
      label: 'Melt-UI Popover',
    },
    {
      href: '/slow',
      label: 'Slow Navigation',
    },
  ];
</script>

<div class="p-10">
  <div class="flex space-x-3 py-4">
    {#each links as { href, label }}
      {@const isActive = $page.url.pathname === href}
      <a
        class={` ${isActive ? 'border-b border-b-muted-foreground' : 'text-gray-400'}`}
        {href}
      >
        {label}
      </a>
    {/each}
  </div>
  <slot />
</div>
