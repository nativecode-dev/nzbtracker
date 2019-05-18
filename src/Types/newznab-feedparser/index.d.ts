declare module 'newznab-feedparser' {
  export interface NzbAttribute {
    name: string
    value: number | string
  }

  export interface Enclosure {
    length: string
    type: string
    url: string
  }

  export interface Guid {
    isPermaLink: string
    $t: string
  }

  export interface Nzb {
    category: string
    comments: string
    description: string
    enclosure: any
    guid: Guid
    link: string
    pubDate: Date
    title: string
    'newznab:attr': NzbAttribute[]
    'newznab:categories': number[]
    'newznab:size': number
    'newznab:guid': string
  }

  export interface NzbRssFeed {
    description: string
    language: string
    lastUpdated: Date
    link: string
    title: string
    webMaster: string
    nzbs: Nzb[]
  }

  export default class ParseNewznab {
    static fromFeed(url: string): Promise<NzbRssFeed>
    static fromString(content: string): Promise<NzbRssFeed>
    static fromFile(file: string): Promise<NzbRssFeed>
  }
}
