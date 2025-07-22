<script lang="ts">
  import Icon from "@iconify/svelte";
  const icon_size = 24;
</script>

<div class="mt-20 mb-8">
  <div class="flex flex-col items-center justify-center gap-6">
    <div class="flex gap-6 text-white">
      <a href="https://github.com/BreyKM" target="_blank">
        <Icon icon="mdi:github" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
      </a>
      <a href="mailto:bredankm@gmail.com" target="_blank">
        <Icon icon="mdi:email" width={icon_size} height={icon_size} class="transition-all hover:brightness-[.80]" />
      </a>
      <a href="https://www.linkedin.com/in/bredanmwaura/" target="_blank">
        <Icon
          icon="devicon:linkedin"
          width={icon_size}
          height={icon_size}
          class="transition-all hover:brightness-[.80]"
        />
      </a>
    </div>
    <p class="text-sm text-neutral-400">Bredan © 2025</p>
  </div>
</div>