<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { flyAndScale } from '$lib/utils';
  import { createPopover, melt } from '@melt-ui/svelte';

  const {
    elements: { trigger, content },
    states: { open },
  } = createPopover({ forceVisible: true });
</script>

<Button
  builders={[$trigger]}
  variant="outline"
>
  Open
</Button>

{#if $open}
  <div
    use:melt={$content}
    class="z-50 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none"
    transition:flyAndScale
  >
    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </div>
  </div>
{/if}
