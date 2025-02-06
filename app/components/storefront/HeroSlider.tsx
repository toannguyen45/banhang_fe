import db from "@/lib/db";
import Carousel from "../ui/Carousel";

async function getData() {
  const data = await db.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const HeroSlider = async () => {
  const data = await getData();

  const formattedBanners = data.map((item) => ({
    id: item.id,
    title: item.title,
    imageString: item.imageString,
  }));

  return (
    <>
      <Carousel items={formattedBanners} />
    </>
  );
};

export default HeroSlider;
