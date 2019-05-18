import 'regenerator-runtime'

import ParseNewznab from 'newznab-feedparser'

async function main(): Promise<void> {
  const url = 'https://api.nzbgeek.info/rss?t=-11&dl=1&seekid=413997&num=200&r=c5dd230631fb1da1944f2b887e84c162'
  const feed = await ParseNewznab.fromFeed(url)

  feed.nzbs.forEach(nzb => {
    console.log(nzb)
  })
}

main().catch(console.error)
