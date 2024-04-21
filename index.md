---js
{
  title: "vitalyavolyn",
  layout: process.env.LAYOUT || 'html'
}
---

# :red_haired_man: welcome!

my name is Vitalya, i'm a JS developer from Kazakhstan.

## :sparkles: what do i do?

i've made some VK mini-apps, chat-bots and open-source projects.

a list of some of my active projects:

{% for project in projects %}
  - [{{ project.title }}]({{ project.link }}) ({{ project.text }})
{% endfor %}

## :hammer_and_wrench: what do i use?

i like to work with:
typescript, react, node.js, docker, mongodb, dart, linux, nix and nixos.

## :earth_asia: links

{{ links | join(', ') }}.
