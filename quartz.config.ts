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
   light: "#EEF1EC",        // Slightly darker pastel green (background)
        lightgray: "#D2DCD7",    // Light gray-green (secondary background)
        gray: "#A6B6AF",         // Muted gray-green (tertiary)
        darkgray: "#3F5B50",     // Dark muted green-gray for metadata (like dates)
        dark: "#2B463A",         // Darker muted green for body text (more contrast)
        secondary: "#6A897A",    // Softer green-blue for links/interactive elements
        tertiary: "#82B894",     // Pastel green for highlights
        highlight: "#B8CABF",    // Mint green for subtle highlights
        textHighlight: "#4B655A" // Muted dark green (for emphasized text)
        },
        darkMode: {
        light: "#0F1813",        // Very dark muted green (background)
                  lightgray: "#1B2823",    // Dark forest green (secondary background)
                  gray: "#2F4239",         // Dark muted green (tertiary elements)
                  darkgray: "#ACCFC0",     // Muted green (for less important text like metadata)
                  dark: "#F0F0F0",         // Brighter white-gray for body text (higher contrast)
                  secondary: "#6A9481",    // Green-blue for links/interactive elements
                  tertiary: "#8DC7A7",     // Light pastel green (for highlights)
                  highlight: "rgba(180, 200, 189, 0.3)", // More opaque green-gray for stronger highlights
                  textHighlight: "#D9CAB3" // Light beige for accent text (clearer contrast with dark background)
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
