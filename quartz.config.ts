import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "House of Brands Blog",
    pageTitleSuffix: " - House of Brands",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "", // Replace with your Google Analytics tag
    },
    locale: "en-US",
    baseUrl: "http://blog.houseofbrands.in/",
    ignorePatterns: ["private", "templates", ".git/"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto",
        body: "Roboto",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f5f5f5",
          gray: "#b8b8b8",
          darkgray: "#2b2b2b",
          dark: "#000000",
          secondary: "#6b6b6b",
          tertiary: "#757575",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(0, 0, 0, 0.1)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#0a0a0a",
          gray: "#303030",
          darkgray: "#d4d4d4",
          dark: "#ffffff",
          secondary: "#b3b3b3",
          tertiary: "#888888",
          highlight: "rgba(143, 159, 169, 0.10)",
          textHighlight: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
