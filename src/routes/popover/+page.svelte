<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Popover from '$lib/components/ui/popover';
</script>

<Popover.Root portal={null}>
  <Popover.Trigger
    asChild
    let:builder
  >
    <Button
      builders={[builder]}
      variant="outline">Open</Button
    >
  </Popover.Trigger>
  <Popover.Content class="w-80">
    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </div>
  </Popover.Content>
</Popover.Root>
