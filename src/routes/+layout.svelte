<script>
  import '../app.pcss';
</script>

<div class="flex space-x-3 p-4">
  <a
    class="border-b border-b-muted-foreground"
    href="/"
  >
    Range Calendar
  </a>
  <a
    class="border-b border-b-muted-foreground"
    href="/blank"
  >
    Blank Page
  </a>
  <a
    class="border-b border-b-muted-foreground"
    href="/popover"
  >
    Popover
  </a>
  <a
    class="border-b border-b-muted-foreground"
    href="/slow"
  >
    Slow Navigation
  </a>
</div>
<slot />
