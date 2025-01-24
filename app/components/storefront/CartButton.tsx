import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface CartButtonProps {
  itemCount?: number
  total?: number
}

const CartButton = ({ itemCount = 0, total = 0 }: CartButtonProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div 
          className="relative flex items-center gap-2 text-white cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-expanded="false"
          aria-controls="cart-sheet"
        >
          <div className="relative">
            <ShoppingCart 
              className="h-6 w-6 transition-colors group-hover:text-yellow-400" 
              aria-hidden="true"
            />
            {itemCount > 0 && (
              <span 
                className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-yellow-400 
                  text-[10px] font-bold flex items-center justify-center text-customBlack"
                aria-live="polite"
              >
                {itemCount}
              </span>
            )}
          </div>
          <span className="hidden md:block font-medium uppercase group-hover:text-yellow-400 transition-colors">
            Giỏ hàng
          </span>
        </div>
      </SheetTrigger>

      <SheetContent 
        side="right"
        className="w-full sm:max-w-lg border-l border-l-gray-200 bg-white"
        id="cart-sheet"
        role="dialog"
        aria-label="Shopping cart"
      >
        <SheetHeader className="space-y-2.5">
          <SheetTitle className="text-xl font-bold text-gray-900">
            Giỏ hàng ({itemCount})
          </SheetTitle>
          {itemCount === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <ShoppingCart className="h-16 w-16 text-gray-400" aria-hidden="true" />
              <div className="text-center" role="status">
                <p className="text-lg font-medium text-gray-900">
                  Giỏ hàng trống
                </p>
                <p className="text-gray-500">
                  Chưa có sản phẩm nào trong giỏ hàng
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                {/* Cart items will go here */}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium text-gray-900">
                    Tổng tiền
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </>
          )}
        </SheetHeader>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button 
              className="w-full bg-customBlack hover:bg-customBlack/90 text-white font-medium
                transition-colors duration-200"
              disabled={itemCount === 0}
              aria-label="Proceed to checkout"
            >
              Thanh toán
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartButton