const username = 'vitalyavolyn'

const links = {
  // 'ВКонтакте': `https://vk.com/${username}`,
  'telegram': `https://t.me/${username}`,
  'github': `https://github.com/${username}`,
  // 'Keybase': `https://keybase.io/${username}`,
  'i@vitalya.me': `mailto:i@vitalya.me`
}

module.exports = Object.entries(links).map(e => `[${e[0]}](${e[1]})`)
