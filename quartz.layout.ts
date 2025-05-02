import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Reusable components for the website
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/houseofbrands",
      LinkedIn: "https://linkedin.com/company/sourcingwala",
      Instagram: "https://instagram.com/sourcingwala",
      Facebook: "https://facebook.com/sourcingwala"
    }
  }),
  afterBody: [],
}

// Default layout for content pages
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "❯",
        rootName: "Home",
        showCurrentPage: false
      }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.Explorer({
      title: "Navigation",
      folderDefaultState: "open",
    }),
  ],
  right: [
    Component.TableOfContents({
      layout: "modern"
    }),
    Component.RecentNotes({
      title: "Latest Articles",
      limit: 3,
      showTags: true
    }),
    Component.Backlinks(),
  ],
}

// Default layout for index/home page
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.Explorer({
      title: "Navigation",
      folderDefaultState: "open",
    }),
  ],
  right: [],
}
