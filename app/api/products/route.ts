import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { Category, Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  // Lấy query params từ URL
  const { searchParams } = new URL(req.url);

  // ✅ Pagination
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  // ✅ Filtering
  const categories = ((searchParams.get("categories") as string) || "")
    .split(",")
    .filter((cat) => Object.values(Category).includes(cat as Category))
    .map((cat) => cat as Category);
  const minPrice = parseFloat(searchParams.get("minPrice") as string) || 0;
  const maxPrice =
    parseFloat(searchParams.get("maxPrice") as string) || 9999999999999;
  // const search = searchParams.get("search") || "";

  // console.log(categories, minPrice, maxPrice, search);
  // ✅ Sorting
  const sortBy = (searchParams.get("sortBy") as string) || "createdAt";
  const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "desc";

  console.log(categories, categories);
  const where: Prisma.ProductWhereInput = {
    AND: [
      ...(categories.length > 0 ? [{ category: { in: categories } }] : []),
      {
        price: { gte: minPrice, lte: maxPrice },
      },
    ],
  };

  try {
    const [products, total] = await Promise.all([
      db.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      products,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalPages: Math.ceil(total / limit),
        totalProducts: total,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
