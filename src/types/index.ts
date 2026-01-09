export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  featured: boolean;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  shipping_address: string;
  total_amount: number;
  status?: string;
  created_at?: string;
}

export interface OrderItem {
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
}
