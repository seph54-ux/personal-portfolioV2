import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function WebUiPage() {
  const webUiProjects = projects.filter(p => p.category === 'Web UI Design');

  return (
    <>
      <PageHeader
        title="Web UI Design"
        subtitle="Crafting intuitive, beautiful, and user-centric interfaces for web and mobile applications."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {webUiProjects.map((project, index) => (
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
