const markdownIt = require('markdown-it')
const markdownItEmoji = require('markdown-it-emoji')

module.exports = (config) => {
  let options = {
    html: true
  }

  let markdownLib = markdownIt(options).use(markdownItEmoji)

  config.setLibrary('md', markdownLib)

  return {
    dir: {
      output: process.env.LAYOUT === 'markdown' ? '_md' : '_site'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  }
}
