export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}