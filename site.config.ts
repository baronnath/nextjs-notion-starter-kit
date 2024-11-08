import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '12ff70952caa80b59edec6b3595943f4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '5c29a4c2-65f2-428d-9552-7a0c7e22a1f7',

  // basic site info (required)
  name: 'Thēria World',
  domain: 'theriarpg.com',
  author: 'nathanlosabe',

  // open graph metadata (optional)
  description: 'Thēria RPG Game',

  // social usernames (optional)
  // instagram: 'theria.rpg',
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.2,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/home': '12ff70952caa80b59edec6b3595943f4',
    '/reglas': 'fdba6295c2444e7dabdc6e10d925e3f1',
    '/camapanas': 'f1520856273f4f6b9004ceeea144c69c'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Rules Set',
      pageId: 'fdba6295c2444e7dabdc6e10d925e3f1'
    },      
    {
      title: 'Campaigns',
      pageId: 'f1520856273f4f6b9004ceeea144c69c'
    },
    {
      title: 'Characters',
      pageId: 'd3646eadfa394a568e65b116146c80a8'
    },
    {
      title: 'Monsters',
      pageId: 'fc7ed021048949db868448a44ccf26d8'
    },
    {
      title: 'Abilities',
      pageId: '8e7bf1f12333432089c9ca6b7435a2d5'
    },
    {
      title: 'Items',
      pageId: '836b85b669734c2b9dca62515eea7f68'
    }
  ]
})
