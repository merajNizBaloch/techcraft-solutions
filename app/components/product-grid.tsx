import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "../data/catalog";

export default function ProductGrid() {
  return (
    <div className="catalog-product-grid">
      {products.map((product) => {
        const Icon = product.icon;
        return (
          <article className={"catalog-card catalog-card-" + product.id} key={product.id}>
            <div className="catalog-card-top"><span className="catalog-icon"><Icon size={24} /></span><span>{product.number} / LIVE</span></div>
            <p className="catalog-category">{product.eyebrow.split(" / ")[0]}</p>
            <h3>{product.name}</h3>
            <p className="catalog-description">{product.description}</p>
            <ul className="catalog-tags">{product.stats.slice(0, 3).map(([label]) => <li key={label}>{label}</li>)}</ul>
            <div className="catalog-card-actions">
              <a href={product.href} target="_blank" rel="noopener noreferrer">Open {product.name}<ArrowUpRight size={15} /></a>
              <Link href={"/products#" + product.id} aria-label={"Learn more about " + product.name}>Details</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
