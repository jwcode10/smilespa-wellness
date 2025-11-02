"use client";

import React from "react";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ breadcrumbs }) => {
  return (
    <>
      {breadcrumbs && (
        <div className="bg-white py-4">
          <div className="mx-auto max-w-7xl px-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductHeader;
