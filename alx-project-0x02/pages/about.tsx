//the about page

import React from 'react';
import Button from '../components/common/Button';

const About: React.FC = () => {

    return (
        <div className="space-x-4">
      <Button size="small" shape="rounded-sm">Small</Button>
      <Button size="medium" shape="rounded-md">Medium</Button>
      <Button size="large" shape="rounded-full">Large</Button>
    </div>
    );

};

export default About;
