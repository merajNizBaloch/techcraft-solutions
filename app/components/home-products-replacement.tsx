import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductGrid from "./product-grid";
import { products } from "../data/catalog";

export default function HomeProductsReplacement() {
  return (
    <div className="home-products-content">
      <div className="home-products-heading">
        <div>
          <span className="section-kicker">05 / PRODUCTS</span>
          <h2>Built for your <span>everyday work.</span></h2>
          <p>Explore all {products.length} TechCraft products for schools, businesses and your next opportunity.</p>
        </div>
        <Link href="/products" className="techcraft-button">Explore all products <ArrowUpRight size={16} /></Link>
      </div>
      <ProductGrid />
      <div className="home-products-footer">
        <p>Looking for free tools? Find Zubán DocX, Gradly, ConvertX and more.</p>
        <Link href="/freebies">Browse freebies <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  );
}
