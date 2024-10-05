import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "plyght's blog",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://blog.peril.lol",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F6F4F1",        // Very light pastel beige (background)
          lightgray: "#E3D2B8",    // Warmer pastel beige (secondary)
          gray: "#B0C4D6",         // Cooler pastel blue (tertiary)
          darkgray: "#788798",     // Muted blue-gray (text and links)
          dark: "#4F6367",         // Dark muted teal (text color)
          secondary: "#567A68",    // Darker muted green (primary)
          tertiary: "#ECC7A2",     // Soft pastel peach (highlight)
          highlight: "#ECC7A2",    // Soft pastel peach (highlight)
          textHighlight: "#88A089" // Softened pastel green (accent highlight)
        },
        darkMode: {
          light: "#1E262B",        // Very dark muted teal (background)
          lightgray: "#2B3A35",    // Dark forest green (secondary)
          gray: "#B2CEB3",         // Light pastel green (primary)
          darkgray: "#7B97AA",     // Muted steel blue (tertiary)
          dark: "#D4D4D4",         // Light gray (text color)
          secondary: "#84A59D",    // Soft pastel green-blue (links/interactive)
          tertiary: "#B9CCD7",     // Cool pastel blue (secondary highlight)
          highlight: "rgba(143, 159, 169, 0.15)", // Slightly translucent cool gray-blue (highlight)
          textHighlight: "#D9CAB3" // Soft pastel peach (accent highlight)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
