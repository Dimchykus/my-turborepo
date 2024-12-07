type Params = {
  params: {
    slug: string;
  };
};

// Generates metadata dynamically based on the slug
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// Component for rendering the dynamic page
export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}

// Generates static paths for dynamic routes
export async function generateStaticParams() {
  // Example: Fetch the slugs from a CMS, API, or database

  // Ensure the fetched data contains valid slugs and return them
  return [].map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
