"use client";

import React from "react";
import { IconChevronRight, IconHome } from "@tabler/icons-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-neutral-600">
        <li>
          <a 
            href="/" 
            className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
            aria-label="Home"
          >
            <IconHome size={16} />
            <span>Home</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <IconChevronRight size={16} className="text-neutral-400" />
            </li>
            <li>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-neutral-900 font-medium">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
