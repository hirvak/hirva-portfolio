import React, { useState } from 'react';
import { Target, Database, Layers, KeyRound, Network } from 'lucide-react';

// Official Devicon CDN URLs for exact brand logos
const deviconMap = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
  scikitlearn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  streamlit: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  js: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  jupyter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  jupyternotebook: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
};

export default function TechLogo({ name, className = "w-full h-full object-contain" }) {
  const [hasError, setHasError] = useState(false);
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 1. Generic Lucide icons for non-branded concepts or specific vision models
  if (normalized === 'yolov8' || normalized === 'yolo') {
    return <Target className="w-full h-full text-[#F59E0B]" />;
  }
  if (normalized === 'sql') {
    return <Database className="w-full h-full text-[#F59E0B]" />;
  }
  if (normalized === 'mernstack' || normalized === 'mern') {
    return <Layers className="w-full h-full text-[#47A248]" />;
  }
  if (normalized === 'jwt') {
    return <KeyRound className="w-full h-full text-[#D63AFF]" />;
  }
  if (normalized === 'restapis' || normalized === 'restapi' || normalized === 'api') {
    return <Network className="w-full h-full text-[#F59E0B]" />;
  }

  // 2. Official Matplotlib SVG with dark navy background + orange/red pie slice + cyan curve
  if (normalized === 'matplotlib') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#11557C"/>
        <path d="M12 12L18.5 6.5A9.2 9.2 0 0 0 12 2.5v9.5z" fill="#FF4B4B"/>
        <path d="M12 12l5 5A8 8 0 0 0 20 12h-8z" fill="#FFA500"/>
        <path d="M5.5 12a6.5 6.5 0 0 1 6.5-6.5V12H5.5z" fill="#61DAFB" opacity="0.9"/>
      </svg>
    );
  }

  // 3. Official C language Blue SVG (#659AD2)
  if (normalized === 'c') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#659AD2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.4 0 2.6.6 3.4 1.6l-1.4 1.2c-.5-.6-1.2-1-2-1-1.4 0-2.5 1.1-2.5 2.7s1.1 2.7 2.5 2.7c.8 0 1.5-.4 2-1l1.4 1.2c-.8 1-2 1.6-3.4 1.6z"/>
      </svg>
    );
  }

  // 4. Custom Seaborn Blue Wave SVG
  if (normalized === 'seaborn') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4C72B0" strokeWidth="2.5" strokeLinecap="round">
        <path d="M3 12c3-6 6-6 9 0s6 6 9 0" />
        <path d="M3 17c3-6 6-6 9 0s6 6 9 0" strokeOpacity="0.4" />
      </svg>
    );
  }

  // 5. Official Devicon CDN SVG Image
  const iconUrl = deviconMap[normalized];

  if (!iconUrl || hasError) {
    return <Database className="w-full h-full text-[#F59E0B]" />;
  }

  return (
    <img
      src={iconUrl}
      alt={`${name} logo`}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
