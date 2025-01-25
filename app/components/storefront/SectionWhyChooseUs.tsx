import {
  ShieldCheck,
  Clock,
  Users2,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Chất Lượng Đảm Bảo",
    description:
      "Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất cho khách hàng",
    image: "/images/why/quality.jpg",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Thời Gian Nhanh Chóng",
    description:
      "Tối ưu quy trình làm việc, đảm bảo thời gian thực hiện dự án nhanh chóng",
    image: "/images/why/time.jpg",
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Đội Ngũ Chuyên Nghiệp",
    description:
      "Đội ngũ kỹ sư giàu kinh nghiệm, được đào tạo chuyên sâu về công nghệ quét 3D",
    image: "/images/why/team.jpg",
  },
];

const stats = [
  { number: "10+", label: "Năm Kinh Nghiệm" },
  { number: "1000+", label: "Dự Án" },
  { number: "50+", label: "Đối Tác" },
  { number: "100%", label: "Hài Lòng" },
];

const SectionWhyChooseUs = () => {
  return (
    <section className="pb-16 md:pb-24">
      {/* Main Image Banner */}
      <div className="relative h-[400px] mb-16">
        <Image
          src="/images/why/why-hero.jpg"
          alt="Why Choose Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold mb-4">
                Tại Sao Chọn Chúng Tôi?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-lg text-gray-200">
                Với kinh nghiệm nhiều năm trong lĩnh vực quét 3D, chúng tôi tự
                hào mang đến những giải pháp tốt nhất cho khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Stats Section */}
        <div className="relative mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-yellow-400/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-70" />
          <div className="relative bg-white rounded-2xl border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`relative group p-8 ${index < 2 ? 'border-b md:border-b-0' : ''}`}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features with Images */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="text-gray-600">
                        Benefit point {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWhyChooseUs;
