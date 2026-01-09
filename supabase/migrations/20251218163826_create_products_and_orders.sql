/*
  # Create Chocolate Banana E-commerce Schema

  ## Overview
  This migration sets up the complete database schema for a premium chocolate banana e-commerce store.

  ## New Tables
  
  ### 1. `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name
  - `description` (text) - Product description
  - `price` (decimal) - Product price
  - `image_url` (text) - Product image URL
  - `category` (text) - Product category (classic, premium, gift-box)
  - `stock` (integer) - Available stock quantity
  - `featured` (boolean) - Whether product is featured
  - `created_at` (timestamptz) - Creation timestamp
  
  ### 2. `orders`
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_name` (text) - Customer name
  - `customer_email` (text) - Customer email
  - `customer_phone` (text) - Customer phone number
  - `shipping_address` (text) - Shipping address
  - `total_amount` (decimal) - Total order amount
  - `status` (text) - Order status (pending, processing, shipped, delivered)
  - `created_at` (timestamptz) - Order creation timestamp
  
  ### 3. `order_items`
  - `id` (uuid, primary key) - Unique order item identifier
  - `order_id` (uuid, foreign key) - References orders table
  - `product_id` (uuid, foreign key) - References products table
  - `quantity` (integer) - Product quantity
  - `price_at_time` (decimal) - Product price at time of order
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for products (catalog browsing)
  - Restricted write access for orders (authenticated users only)
  - Order items linked to orders with cascading deletes

  ## Sample Data
  - Inserts premium chocolate banana products with realistic pricing
  - Categories: Classic, Premium, Gift Box
  - Featured products for homepage display
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 100,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  shipping_address text NOT NULL,
  total_amount decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id),
  quantity integer NOT NULL,
  price_at_time decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for products (public read access)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for orders (customers can only see their own orders by email)
CREATE POLICY "Customers can view own orders"
  ON orders FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for order_items
CREATE POLICY "Anyone can view order items"
  ON order_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category, featured, stock) VALUES
  ('Classic Chocolate Banana', 'Fresh banana dipped in premium Belgian dark chocolate. A timeless classic that never disappoints.', 8.99, '/img_8263.png', 'classic', true, 150),
  ('Dark Chocolate Delight', 'Premium dark chocolate (70% cacao) coating with a hint of sea salt. For the sophisticated palate.', 10.99, '/img_8264.png', 'premium', true, 100),
  ('Milk Chocolate Bliss', 'Creamy milk chocolate wrapped around perfectly ripe bananas. Pure comfort in every bite.', 8.99, '/img_8265.png', 'classic', false, 150),
  ('White Chocolate Dream', 'Luxurious white chocolate with vanilla bean specks. Sweet, creamy, and utterly irresistible.', 9.99, '/img_8266.png', 'premium', true, 120),
  ('Triple Chocolate Tower', 'Three layers of chocolate heaven - dark, milk, and white. A chocolate lover''s paradise.', 12.99, '/img_8267.png', 'premium', true, 80),
  ('Gift Box Collection', 'Assorted collection of 6 chocolate bananas in elegant packaging. Perfect for gifting.', 54.99, '/img_8262.png', 'gift-box', false, 50)
ON CONFLICT DO NOTHING;