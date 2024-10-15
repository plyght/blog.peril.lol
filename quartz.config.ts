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
    lightgray: "#D2DCD7",    // Light gray-green (secondary background, more contrast)
    gray: "#A6B6AF",         // Muted gray-green (tertiary, higher contrast)
    darkgray: "#3F5B50",     // Muted dark green-gray (text and link colors, more contrast)
    dark: "#2B463A",         // Darker muted green (primary text, much more contrast)
    secondary: "#6A897A",    // Softer green-blue (links/interactive elements)
    tertiary: "#82B894",     // Pastel green (for highlights, higher contrast)
    highlight: "#B8CABF",    // Softer mint green for highlights (more defined contrast)
    textHighlight: "#4B655A" // Muted dark green for accent text (stands out more)
        },
        darkMode: {
         light: "#0F1813",        // Even darker muted green (background for deeper contrast)
                lightgray: "#1B2823",    // Darker forest green (secondary background)
                gray: "#2F4239",         // Dark muted green (tertiary elements for clearer separation)
                darkgray: "#466A5A",     // Muted green (lighter contrast for secondary text or details)
                dark: "#E6E6E6",         // Brighter gray for primary text (better readability)
                secondary: "#6A9481",    // Brighter green-blue for links/interactive elements
                tertiary: "#8DC7A7",     // Lighter pastel green (higher contrast for highlights)
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
