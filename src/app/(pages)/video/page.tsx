import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function VideoPage() {
  const videoProjects = projects.filter(p => p.category === 'Video Projects');

  return (
    <>
      <PageHeader
        title="Video Projects"
        subtitle="Engaging stories brought to life through motion, from promotional content to artistic shorts."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {videoProjects.map((project, index) => (
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
