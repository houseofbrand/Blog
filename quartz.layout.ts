import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Reusable components for the website
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
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
  afterBody: [], // Add empty afterBody array to fix the error
}

// Default layout for content pages
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯",
      rootName: "Home",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.Explorer({
      title: "Navigation",
      folderDefaultState: "open",
      filterFn: (node) => {
        // Add your filter logic here
        return true
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.TableOfContents({
      layout: "modern"
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
