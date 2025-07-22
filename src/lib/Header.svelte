<script>
  const links = [
    {
        name: "github",
        href: "https://github.com/BreyKM",
        external: true
    },
    {
      name: "linkedIn",
      href: "https://www.linkedin.com/in/bredanmwaura/",
      external: true,
    },
  ];
</script>

<header class="header-container">
  <div class="layout-md flex items-center justify-between border-b py-1 border-neutral-700">
    <div class="header-title">
      <a href="/">BredanKM.dev</a>
    </div>
    <nav class="flex items-start justify-end space-x-4 py-0.5 text-lg text-neutral-500">
        {#each links as link (link)}
        <a href={link.href} target="_blank" rel="noopener noreferrer" class="hover:text-neutral-100">{link.name}</a>
        {/each}
    </nav>
  </div>
</header>
