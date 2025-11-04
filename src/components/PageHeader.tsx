type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center my-8 md:my-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
      <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
        {subtitle}
      </p>
    </div>
  );
}
