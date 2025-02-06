export type mailType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type bannerType = {
  id: string;
  title: string;
  imageString: string;
  createdAt: string;
};

export type CarouselItem = {
  id: string;
  title: string;
  imageString: string;
};

export type CarouselProps = {
  items: CarouselItem[];
};
