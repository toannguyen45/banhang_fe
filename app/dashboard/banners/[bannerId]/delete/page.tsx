import { deleteBanner } from "@/app/actions/bannerAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function DeleteBannerRoute({
  params,
}: {
  params: Promise<{ bannerId: string }>;
}) {
  const { bannerId } = await params;

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Bạn có chắc chắn muốn xoá không?</CardTitle>
          <CardDescription>
            Bạn không thể hoàn tác hành động này sau khi đã xoá.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/banner">Huỷ</Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={bannerId} />
            <Button variant="destructive">Xoá</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
