"use client";

import { FunctionComponent } from "react";
import { Code, Database, Palette, Smartphone, Server, Zap, Users, Shield } from "lucide-react";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Analysis & Planning",
    description: "Understanding requirements, defining architecture, and project planning with agile methodologies.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces and optimized user experiences with modern tools.",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Frontend Development",
    description: "Implementing responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
    icon: <Code className="w-8 h-8" />,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Building RESTful APIs, business logic, and database integrations.",
    icon: <Server className="w-8 h-8" />,
    color: "bg-red-100 text-red-600"
  },
  {
    id: 5,
    title: "Database",
    description: "Data modeling, optimization, and management with SQL/NoSQL and caching systems.",
    icon: <Database className="w-8 h-8" />,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 6,
    title: "Mobile Responsiveness",
    description: "Adaptation for mobile devices and mobile-first application development.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 7,
    title: "Testing & Quality",
    description: "Implementing automated tests, CI/CD, and ensuring code quality.",
    icon: <Shield className="w-8 h-8" />,
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 8,
    title: "Deployment & Monitoring",
    description: "Production deployment, performance monitoring, and continuous maintenance.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-orange-100 text-orange-600"
  },
];

export const Workflow: FunctionComponent = () => {
  return (
    <section 
      id="workflow" 
      className="relative py-16 md:py-24"
      style={{
        background: `linear-gradient(
          to bottom,
          transparent 0%,
          rgba(249, 250, 251, 0.3) 10%,
          rgba(249, 250, 251, 0.6) 20%,
          rgba(249, 250, 251, 0.8) 30%,
          rgba(249, 250, 251, 0.9) 40%,
          rgba(249, 250, 251, 1) 50%,
          rgba(249, 250, 251, 0.9) 60%,
          rgba(249, 250, 251, 0.8) 70%,
          rgba(249, 250, 251, 0.6) 80%,
          rgba(249, 250, 251, 0.3) 90%,
          transparent 100%
        )`
      }}
    >
      {/* Versão para modo escuro */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(17, 24, 39, 0.3) 10%,
            rgba(17, 24, 39, 0.6) 20%,
            rgba(17, 24, 39, 0.8) 30%,
            rgba(17, 24, 39, 0.9) 40%,
            rgba(17, 24, 39, 1) 50%,
            rgba(17, 24, 39, 0.9) 60%,
            rgba(17, 24, 39, 0.8) 70%,
            rgba(17, 24, 39, 0.6) 80%,
            rgba(17, 24, 39, 0.3) 90%,
            transparent 100%
          )`
        }}
      />
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
            My Workflow Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Complete development process from conception to final delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {step.description}
              </p>
              <div className="mt-4 text-sm font-medium text-gray-500">
                Step {step.id}/8
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center relative">
          <div className="inline-flex items-center justify-center space-x-4 text-gray-500">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#F63D3C] animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F63D3C] via-gray-300 to-gray-300"></div>
              </div>
            ))}
            <div className="w-3 h-3 rounded-full bg-[#F63D3C] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};