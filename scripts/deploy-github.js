const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://rfreites.github.io/rfreites.github.io/',
  },
  () => {
    console.log('Deploy Complete!')
  }
)