---js
{
  title: "vitalyavolyn",
  layout: process.env.LAYOUT || 'html'
}
---

# :red_haired_man: Виталя Волынский

{{ age }}-летний разработчик из Павлодара (Казахстан).

## :sparkles: Что делаю

Делаю мини-приложения ВКонтакте, чат-ботов и не только. Иногда выкладываю что-то в open-source.

Список некоторых проектов:

{% for project in projects %}
  - [{{ project.title }}]({{ project.link }}) ({{ project.text }})
{% endfor %}

## :hammer_and_wrench: Чем пользуюсь

Git, JavaScript, Node.JS, MongoDB, PHP, Linux.

## :earth_asia: Где меня найти

{{ links | join(', ') }}.
