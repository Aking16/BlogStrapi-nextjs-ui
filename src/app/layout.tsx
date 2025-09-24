import Container from "@/components/shared/container";
import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import ThemeProvider from "@/context/theme-provider";
import { getGlobalSettings } from "@/data/loaders";
import { getStrapiMedia } from "@/utils/get-strapi-media";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";

async function getGlobalData() {
  const { data } = await getGlobalSettings();

  if (!data) throw new Error("Failed to fetch global settings");

  return {
    siteName: data.siteName,
    siteDescription: data.siteDescription,
    favicon: data?.favicon,
    header: data.header,
    footer: data.footer,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobalData();
  const favIconUrl = getStrapiMedia(global.favicon?.url);

  return {
    title: global.siteName ?? "BlogStrapi",
    description: global.siteDescription ?? "BlogStrapi",
    icons: {
      icon: favIconUrl ?? "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { siteName, header, footer } = await getGlobalData();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <Header {...header} />
            <Container>{children}</Container>
            <Footer siteName={siteName} {...footer} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
