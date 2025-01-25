import React from 'react';
import HeroBanner from '@/app/components/ui/HeroBanner';

export default function MaintenancePage() {
  return (
    <div>
      <HeroBanner
        title="Bảo trì & Hỗ trợ"
        description="Dịch vụ bảo trì, cập nhật và hỗ trợ kỹ thuật 24/7 cho khách hàng"
        image="/images/services/service-6.jpg"
        alt="Maintenance Service"
        breadcrumb={[
          { label: "Dịch vụ", href: "/services" },
          { label: "Bảo trì & Hỗ trợ" }
        ]}
      />

      <div className="container py-16">
        {/* Content will go here */}
      </div>
    </div>
  );
} 