import React from 'react';
import './Home.css';
import { projects, Project } from '../../data/projects';
import Card from './Card';

const Home: React.FC = () => {
  return (
    <main className="main">
      {projects.map((project: Project, i: number) => (
        <Card key={`p_${i}`} {...project} i={i} />
      ))}
    </main>
  );
};

export default Home;
