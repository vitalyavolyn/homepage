---js
{
  title: "vitalyavolyn",
  layout: process.env.LAYOUT || 'html'
}
---

# :red_haired_man: Виталя Волынский

{{ age }}-летний разработчик из Павлодара (Казахстан).

## :sparkles: Что делаю

Мини-приложения ВКонтакте, чат-ботов и не только, иногда даже open-source

Список некоторых активных проектов:

{% for project in projects %}
  - [{{ project.title }}]({{ project.link }}) ({{ project.text }})
{% endfor %}

## :hammer_and_wrench: Чем пользуюсь

Git, JavaScript (React), Node.js, Docker, MongoDB, PHP, Dart, Linux.

## :earth_asia: Где меня найти

{{ links | join(', ') }}.
