import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function PostersPage() {
  const posterProjects = projects.filter(p => p.category === 'Posters');

  return (
    <>
      <PageHeader
        title="Poster Design"
        subtitle="A collection of posters created for various events, promotions, and artistic expressions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posterProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </>
  );
}
