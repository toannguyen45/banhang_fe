import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionAbout = () => {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={"/images/about-image.png"}
            alt="Team collaboration illustration"
            width={900}
            height={900}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-red-600 text-xl font-medium">
            Bạn đang tìm kiếm điều gì?
          </span>
          <h2 className="text-3xl font-semibold">ĐÔI ĐIỀU VỀ CHÚNG TÔI</h2>
          <p className="text-gray-500 font-medium">
            Repudiandae dicta aut ullam. Est dolor in. Sint a libero sint
            dolores a libero sint dolores a libero sint dolores natus quibusdam.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Corrupti nihil nesciunt saepe quos ut quasi.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Itaque non soluta dolor magnam vel dolorem.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                Nam dolores rerum eos adipisci. Nisi voluptatem enim et et non.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                Quasi sapiente dicta beatae est maxime veritatis minima quasi.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Sapiente beatae vitae eius quo odit.</span>
            </div>
          </div>
          <div className="flex">
            <Link
              href={"/about"}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
