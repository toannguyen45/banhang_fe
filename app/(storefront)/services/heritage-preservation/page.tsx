import React from 'react';
import HeroBanner from '@/app/components/ui/HeroBanner';

export default function HeritagePreservationPage() {
  return (
    <div>
      <HeroBanner
        title="Bảo tồn di sản"
        description="Số hóa và lưu trữ các di tích lịch sử, tác phẩm nghệ thuật với độ chính xác tuyệt đối"
        image="/images/services/service-5.jpg"
        alt="Heritage Preservation Service"
        breadcrumb={[
          { label: "Dịch vụ", href: "/services" },
          { label: "Bảo tồn di sản" }
        ]}
      />

      <div className="container py-16">
        {/* Content will go here */}
      </div>
    </div>
  );
} 