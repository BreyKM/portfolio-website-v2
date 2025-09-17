<script>
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Icon from "@iconify/svelte";

  let projects = [
    {
      name: "Nova Notes",
      href: "https://github.com/BreyKM/NovaNotes",
      desc: "Markdown note editor built using electron",
      tool_icons: [
        "ri:svelte-fill",
        "devicon-plain:javascript",
        "mdi:tailwind",
        "file-icons:electron",
      ],
      github: true,
    },
    {
      name: "pokePlex",
      href: "https://breykm.github.io/pokePlex/",
      desc: "pokemon card showcase using pokeAPI",
      tool_icons: [
        "uil:react",
        "devicon-plain:javascript",
        "simple-icons:redux",
      ],
      github: false,
    },
    {
      name: "ships-co_data_analysis",
      href: "https://github.com/BreyKM/ships-co_data_analysis",
      desc: "database cleanup using python and a supabase database",
      tool_icons: ["devicon-plain:python", "devicon-plain:supabase"],
      github: true,
    },
  ];
</script>

<Header />
<main class="layout-md pt-12">
  <div class="pb-6">
    <h1 class="my-0! text-4xl! sm:text-5xl">Hi, I'm Bredan</h1>
    <p class="text-lg">Computer Science Student</p>
  </div>

  <div class="space-y-12 text-xl">
    <div class="space-y-6 border-b pb-4 border-neutral-700">
      <p>
        I'm currently pursing a <b>B.S. in Computer Science</b> at the
        <a class="link" href="https://www.uhd.edu/" target="_blank">
          University of Houston-Downtown</a
        >, but I think of myself as a builder first. I love the process of
        taking an idea and turning it into clean, working software that people
        can actually use. For me, good code isn't just about being efficient; it
        has to create an experience that feels right.
      </p>
      <p>
        My coursework gave me a great foundation in algorithms and data
        structures, but I learned the most by just doing. I’ve gotten
        comfortable with C++, Python, and JavaScript. I’m always tinkering on a
        personal project, as it's the best way for me to try out new
        technologies and really understand them. I'm excited to bring that
        hands-on approach to a team and help solve some interesting problems.
      </p>
    </div>
  </div>
  <div class="pt-4">
    <h2 class="mb-6!">My notable projects:</h2>
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
      {#each projects as project}
        <a
          href={project.href}
          target="_blank"
          class="flex flex-col justify-between rounded-lg border p-6 shadow-none transition-all duration-150 ease-out border-neutral-700 bg-neutral-800 hover:bg-[#333333]"
        >
          <div class="flex flex-col gap-y-2">
            <h3 class="text-xl font-bold text-neutral-200">{project.name}</h3>
            <p class="text-base leading-snug text-neutral-400">
              {project.desc}
            </p>
          </div>
          <div class="flex flex-row-reverse justify-between">
            {#if project.github}
              <Icon
                icon="mdi:github"
                width="18"
                height="18"
                class="mt-4 block text-neutral-400"
              />
            {:else}
              <Icon
                icon="prime:arrow-up-right"
                width="18"
                height="18"
                class="mt-4 block text-neutral-400"
              />
            {/if}
            <div class="flex gap-2">
              {#each project.tool_icons as icon}
                <Icon
                  {icon}
                  width="18"
                  height="18"
                  class="mt-4 block text-neutral-400"
                />
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</main>
<Footer />
