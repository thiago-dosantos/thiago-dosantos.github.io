"use client";

import { FunctionComponent, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What's the difference between frontend and backend?",
    answer: "Frontend is the visible part of the application that users interact with (interface). Backend is the part that processes data, business logic, and communicates with the database. As a Full Stack developer, I work on both parts.",
    category: "General"
  },
  {
    id: 2,
    question: "Which technologies do you recommend for beginners?",
    answer: "For frontend: HTML, CSS, JavaScript, React. For backend: Node.js with Express or Python with Django. For databases: MySQL or MongoDB. It's important to master fundamentals before frameworks.",
    category: "Technologies"
  },
  {
    id: 3,
    question: "How do you manage different projects simultaneously?",
    answer: "I use agile methodologies (Scrum/Kanban), tools like Jira/Trello, version control with Git, and prioritize tasks based on deadlines and complexity. Clear communication with stakeholders is essential.",
    category: "Process"
  },
  {
    id: 4,
    question: "What's the importance of testing in development?",
    answer: "Testing ensures quality, prevents regressions, and saves time long-term. I implement unit tests, integration tests, and E2E tests. Minimum 80% coverage is a good practice for critical projects.",
    category: "Quality"
  },
  {
    id: 5,
    question: "How do you handle application scalability?",
    answer: "I use microservices architecture when needed, caching (Redis), CDN, load balancing, and query optimization. I choose appropriate databases for each use case (SQL for transactions, NoSQL for scale).",
    category: "Architecture"
  },
  {
    id: 6,
    question: "What is your deployment process?",
    answer: "Automated with CI/CD (GitHub Actions/GitLab CI). Staging environment for testing before production. Docker containers for consistency and Kubernetes for orchestration in larger projects.",
    category: "DevOps"
  },
  {
    id: 7,
    question: "How do you maintain application security?",
    answer: "I implement JWT/OAuth authentication, input sanitization, protection against SQL injection/XSS/CSRF, mandatory HTTPS, rate limiting, and regular dependency updates.",
    category: "Security"
  },
  {
    id: 8,
    question: "What are the current major trends?",
    answer: "AI integration in applications, development with AI assistants, Jamstack, serverless, edge computing, PWAs, and meta frameworks like Next.js 14 with server components.",
    category: "Trends"
  },
  {
    id: 9,
    question: "What's your experience with cloud platforms?",
    answer: "I have experience with AWS (EC2, S3, Lambda, RDS), Vercel for frontend deployment, and cloud services for scalability and reliability. I choose platforms based on project requirements.",
    category: "Cloud"
  },
  {
    id: 10,
    question: "How do you ensure code maintainability?",
    answer: "I follow clean code principles, design patterns, documentation, code reviews, and modular architecture. I also use TypeScript for type safety and ESLint/Prettier for code consistency.",
    category: "Best Practices"
  },
];

export const FAQ: FunctionComponent = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  // Dividir as perguntas em duas colunas (5 em cada)
  const leftColumnItems = faqItems.slice(0, 5);
  const rightColumnItems = faqItems.slice(5, 10);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const renderFAQItem = (item: FAQItem) => (
    <div
      key={item.id}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4"
    >
      <button
        onClick={() => toggleItem(item.id)}
        className="w-full px-5 py-3 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-medium text-sm md:text-base leading-tight pr-4">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-2">
          {openItem === item.id ? (
            <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          )}
        </span>
      </button>
      
      <div
        className={cn(
          "px-5 overflow-hidden transition-all duration-300",
          openItem === item.id ? "py-3 border-t" : "max-h-0"
        )}
      >
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {item.answer}
        </p>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="faq" className="py-14 md:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Common questions about Full Stack Development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Coluna Esquerda */}
          <div>
            {leftColumnItems.map(renderFAQItem)}
          </div>
          
          {/* Coluna Direita */}
          <div>
            {rightColumnItems.map(renderFAQItem)}
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Have more questions?{" "}
            <a 
              href="#contact" 
              className="text-[#F63D3C] font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};