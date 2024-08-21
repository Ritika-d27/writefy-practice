import React from 'react';
import '../styles/components/Categories.css';
import { Pencil, Presentation, Palette, Code, DraftingCompass, BookOpenText, LucideIcon } from 'lucide-react';

interface CategoryItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const Categories: React.FC = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <span className="title">
          We care for every <span className="highlight">student</span> out there!
        </span>
        <div className="categories-container">
          <div className="category-column">
            <CategoryItem 
              icon={Pencil} 
              title="Write-Ups" 
              description="All copy paste assignments" 
              link="/users/post-req?q=write-ups" 
            />
            <CategoryItem 
              icon={DraftingCompass} 
              title="Technical Drawing" 
              description="Writers for all 'Views' in one go" 
              link="/users/post-req?q=tech-drawing" 
            />
            <CategoryItem 
              icon={Code} 
              title="Programming" 
              description="Stuck somewhere? Get programmers for hire" 
              link="/users/post-req?q=tech-projects" 
            />
          </div>
          <div className="category-column">
            <CategoryItem 
              icon={Presentation} 
              title="PPT Making" 
              description="Get writers for the last-minute PPTs" 
              link="/users/post-req?q=ppt-making" 
            />
            <CategoryItem 
              icon={Palette} 
              title="Art and Craft" 
              description="Art projects or models? Get it here" 
              link="/users/post-req?q=art-craft" 
            />
            <CategoryItem 
              icon={BookOpenText} 
              title="Subject Matter Expert" 
              description="Essays, Reports and much more" 
              link="/users/post-req?q=subject-expert" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryItem: React.FC<CategoryItemProps> = ({ icon: Icon, title, description, link }) => (
  <a href={link} className="category-item">
    <div className="icon-wrapper">
      <Icon size={18} />
    </div>
    <span className="category-title">{title}</span>
    <span className="category-description">{description}</span>
  </a>
);

export default Categories;
