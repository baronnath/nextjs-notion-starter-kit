import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '16ff70952caa8084abe6c83880f6f7f2',

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
    // EN
    '/home': '16ff70952caa8084abe6c83880f6f7f2',
    '/rules': '134f70952caa80a6acb8fd44dd1dfd8c',
    '/characters': '36b0ec5db9fc46b089be845fa580caba',
    '/campaigns': '2dea324af9f84ccab25ff13f4f543935',
    '/abilities': '16ff70952caa8099b5c9fb70821fcd6e',
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Rules',
      pageId: '134f70952caa80a6acb8fd44dd1dfd8c'
    },
    {
      title: 'Characters',
      pageId: 'd3646eadfa394a568e65b116146c80a8'
    },     
    {
      title: 'Campaigns',
      pageId: '2dea324af9f84ccab25ff13f4f543935'
    },
    {
      title: 'Abilities',
      pageId: '16ff70952caa8099b5c9fb70821fcd6e'
    },
    {
      title: 'Items',
      pageId: '836b85b669734c2b9dca62515eea7f68'
    },
    {
      title: 'Monsters',
      pageId: 'fc7ed021048949db868448a44ccf26d8'
    }
  ]
})
