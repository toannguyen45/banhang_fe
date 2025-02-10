import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import db from "@/lib/db";
import { format } from "date-fns";
import { bannerType } from "@/types/types";

async function getData() {
  const data = await db.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function BannerRoute() {
  noStore();
  const data = await getData();

  const formattedBanners: bannerType[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    imageString: item.imageString,
    createdAt: format(item.createdAt, "MMM do, yyyy"),
  }));

  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex gap-x-2">
          <Link href="/dashboard/banners/create">
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Thêm mới Banner</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banners</CardTitle>
          <CardDescription>Quản lí banner</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ảnh</TableHead>
                <TableHead>Tiêu đề</TableHead>
                <TableHead className="text-end">Hành động</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {formattedBanners.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      alt="ảnh-banner"
                      src={item.imageString}
                      width={200}
                      height={100}
                      loading="lazy"
                      className="rounded-lg object-cover h-25 w-25"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/banners/${item.id}/delete`}>
                            Xoá
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
