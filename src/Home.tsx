import React from 'react';
import './Home.css';
import { projects } from './data/projects';
import Card from './components/Card';

const Home = () => {
  return (
    <main className="main">
      {projects.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} />
      ))}
    </main>
  );
};

export default Home;
