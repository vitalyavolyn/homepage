const fetch = require('node-fetch')

module.exports = async () => {
  console.log('Fetching users count...')

  const getJson = (url) => fetch(url).then(res => res.json())

  const readableNumber = (n) => n.toLocaleString('ru-RU').replace(/,/g, ' ')

  return [
    {
      title: 'GitHub Events Bot',
      link: 'https://vk.com/githubbot',
      text: await getJson('https://gh.vitalya.me/stats')
        .then(res => `${readableNumber(res.users)} пользователей`)
    },
    {
      title: 'Трекер Настроения',
      link: 'https://vk.com/moodapp',
      text: await getJson('https://mood.vitalya.me/api/stats')
        .then(res => `${readableNumber(res.users)} пользователей`)
    },
    /* {
      title: 'Watchy - Дневник киномана',
      link: 'https://vk.com/app7272727',
      text: await getJson('https://api.watchy.tech/health')
        .then(res => `${readableNumber(res.users)} пользователей`)
    } */
  ]
}
