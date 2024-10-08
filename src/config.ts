const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Thiago dos Santos.";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Thiago";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Portfolio by Thiago";
  const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Blog about Thiago's portfolio.";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://thiago-dosantos.vercel.app/",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
