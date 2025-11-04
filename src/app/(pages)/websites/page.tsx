import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function WebsitesPage() {
  const websiteProjects = projects.filter(p => p.category === 'Websites/Webapps');

  return (
    <>
      <PageHeader
        title="Websites & Webapps"
        subtitle="Bringing designs to life with code. Fully functional, responsive, and performant web experiences."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {websiteProjects.map((project, index) => (
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
