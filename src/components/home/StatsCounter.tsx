'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function StatsCounter() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Projects (0 to 50)
          let startProjects = 0;
          const endProjects = 50;
          const durationProjects = 1500;
          const stepProjects = Math.ceil(endProjects / (durationProjects / 30));
          const timerProjects = setInterval(() => {
            startProjects += stepProjects;
            if (startProjects >= endProjects) {
              setProjectsCount(endProjects);
              clearInterval(timerProjects);
            } else {
              setProjectsCount(startProjects);
            }
          }, 30);

          // Animate Clients (0 to 25)
          let startClients = 0;
          const endClients = 25;
          const durationClients = 1500;
          const stepClients = Math.ceil(endClients / (durationClients / 30));
          const timerClients = setInterval(() => {
            startClients += stepClients;
            if (startClients >= endClients) {
              setClientsCount(endClients);
              clearInterval(timerClients);
            } else {
              setClientsCount(startClients);
            }
          }, 30);

          // Animate Years (0 to 5)
          let startYears = 0;
          const endYears = 5;
          const timerYears = setInterval(() => {
            startYears += 1;
            if (startYears >= endYears) {
              setYearsCount(endYears);
              clearInterval(timerYears);
            } else {
              setYearsCount(startYears);
            }
          }, 200);

          // Animate Success (0 to 99)
          let startSuccess = 0;
          const endSuccess = 99;
          const stepSuccess = Math.ceil(endSuccess / (1500 / 30));
          const timerSuccess = setInterval(() => {
            startSuccess += stepSuccess;
            if (startSuccess >= endSuccess) {
              setSuccessCount(endSuccess);
              clearInterval(timerSuccess);
            } else {
              setSuccessCount(startSuccess);
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const stats = [
    { label: 'Projects Done', count: `${projectsCount}+` },
    { label: 'Happy Clients', count: `${clientsCount}+` },
    { label: 'Years Experience', count: `${yearsCount}+` },
    { label: 'Success Rate', count: `${successCount}%` },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-5 bg-dark border-b border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Info */}
          <div className="lg:col-span-6 text-left">
            <span className="tag mb-4">Stats & Metrics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Our Professional IT Services <br />
              Can <span className="gradient-text">Help You Grow</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We are a team of dynamic software engineers and digital strategists who believe in providing high-quality services to our clients. We work across domains such as custom UX/UI design, websites, mobile applications, and secure dashboard apps, providing dedicated developer resources to ensure long-term stability.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black stat-number mb-2">{stat.count}</div>
                <div className="text-xs sm:text-sm text-[#cbd5e1] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
