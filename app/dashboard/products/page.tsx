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
import { Badge } from "@/components/ui/badge";
import { formatDate, formatPrice } from "@/lib/utils";

async function getData() {
  const data = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const page = async () => {
  noStore();
  const data = await getData();

  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Thêm mới sản phẩm</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Sản phẩm</CardTitle>
          <CardDescription>Danh sách các sản phẩm đang có</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ảnh</TableHead>
                <TableHead>Tên</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Ngày</TableHead>
                <TableHead className="text-end">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      alt="Product Image"
                      src={item.images[0]}
                      height={64}
                      width={64}
                      className="rounded-md object-cover h-16 w-16"
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Badge>{item.status}</Badge>
                  </TableCell>
                  <TableCell>{formatPrice(item.price)}</TableCell>
                  <TableCell>{formatDate(item.createdAt.toString())}</TableCell>
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
                          <Link href={`/dashboard/products/${item.id}`}>
                            Chỉnh sửa
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/products/${item.id}/delete`}>
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
};

export default page;
