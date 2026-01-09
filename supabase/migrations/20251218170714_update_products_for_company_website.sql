/*
  # Update Products for Company Website

  ## Overview
  This migration updates the products table to reflect the actual ChocoBanana flavors
  for a company showcase website (not e-commerce).

  ## Changes
  - Removes old sample products
  - Inserts 3 actual products: Om-Biscoff Banana, Oubaas Oreo Banana, Vrou-Nut Banana
  - Updates product descriptions and details

  ## Important Notes
  - This is a showcase website, not an e-commerce platform
  - Products are for informational display only
  - No pricing or inventory management needed
*/

-- Remove old products
DELETE FROM products;

-- Insert the actual ChocoBanana products
INSERT INTO products (name, description, price, image_url, category, featured, stock) VALUES
  ('Om-Biscoff Banana', 'Smooth banana dipped in rich Belgian chocolate, topped with crunchy Biscoff cookie pieces. A perfect blend of creamy and crunchy.', 0, '/img_8263.png', 'signature', true, 999),
  ('Oubaas Oreo Banana', 'Classic combination of fresh banana, premium chocolate, and crushed Oreo cookies. A nostalgic treat with a gourmet twist.', 0, '/img_8264.png', 'signature', true, 999),
  ('Vrou-Nut Banana', 'Decadent banana covered in velvety chocolate with a generous coating of chopped nuts. Rich, satisfying, and utterly delicious.', 0, '/img_8265.png', 'signature', true, 999);