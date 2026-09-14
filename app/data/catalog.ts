import { Building2, FileText, GraduationCap, PackageSearch, Pill, UsersRound, UtensilsCrossed } from "lucide-react";

export const products = [
  {
    number: "01",
    id: "academiq",
    name: "Academiq",
    eyebrow: "EDTECH / SCHOOL MANAGEMENT SYSTEM",
    status: "LIVE PRODUCT",
    description:
      "A complete school management system designed to bring administration, students, teachers, attendance, fees, exams and reporting into one connected workspace.",
    icon: GraduationCap,
    stats: [
      ["Students", "Central student records"],
      ["Attendance", "Daily tracking"],
      ["Fees", "Payment management"],
      ["Exams", "Results & grading"],
    ],
    href: "https://academiq.techcraftsolution.com",
  },
  {
    number: "02",
    id: "estara",
    name: "Estara",
    eyebrow: "REAL ESTATE / PROPERTY MANAGEMENT",
    status: "LIVE PRODUCT",
    description:
      "A real-estate management platform built around properties, listings, leads, clients, agents and transactions — giving property businesses one operational view.",
    icon: Building2,
    stats: [
      ["Properties", "Portfolio management"],
      ["Listings", "Inventory & status"],
      ["Leads", "Client pipeline"],
      ["Transactions", "Deal workflow"],
    ],
    href: "https://estara.techcraftsolution.com",
  },
  {
    number: "03",
    id: "dinecore",
    name: "DineCore",
    eyebrow: "RESTAURANT / MANAGEMENT SYSTEM",
    status: "LIVE PRODUCT",
    description: "Manage menus, tables, waiters, orders, discounts and billing in one restaurant workspace, with printable receipts for your POS workflow.",
    icon: UtensilsCrossed,
    stats: [
      ["Orders", "Table & waiter management"],
      ["Menus", "Dishes & pricing"],
      ["Billing", "Payments & discounts"],
      ["Receipts", "Print-ready bills"],
    ],
    href: "https://dinecore.techcraftsolution.com",
  },
  {
    number: "04",
    id: "resumly",
    name: "Resumly",
    eyebrow: "CAREERS / CV BUILDER",
    status: "LIVE PRODUCT",
    description: "Create a professional CV with a guided editor, preview your progress and export your application. Save your work for future updates, with free starter downloads and credit packs for more exports.",
    icon: FileText,
    stats: [
      ["Create", "Guided CV editor"],
      ["Preview", "Review your CV"],
      ["Save", "Import & update later"],
      ["Export", "Download your CV"],
    ],
    href: "https://resumly.techcraftsolution.com",
  },
  {
  "id": "pharmaflow",
  "number": "05",
  "name": "PharmaFlow",
  "eyebrow": "PHARMACY / MANAGEMENT SYSTEM",
  "status": "LIVE PRODUCT",
  "description": "Keep pharmacy sales, medicine stock, batches, expiry dates, suppliers and customer credit organized in one connected workspace.",
  "icon": Pill,
  "stats": [
    [
      "POS",
      "Fast pharmacy billing"
    ],
    [
      "Stock",
      "Medicines & batches"
    ],
    [
      "Expiry",
      "Expiry tracking"
    ],
    [
      "Purchases",
      "Suppliers & receiving"
    ]
  ],
  "href": "https://parma-flow.vercel.app"
},
  {
  "id": "realcrm",
  "number": "06",
  "name": "Real CRM",
  "eyebrow": "SALES / CUSTOMER RELATIONSHIPS",
  "status": "LIVE PRODUCT",
  "description": "Bring contacts, companies, sales pipelines, follow-ups and team activity together so every customer relationship has a clear next step.",
  "icon": UsersRound,
  "stats": [
    [
      "Contacts",
      "Customers & companies"
    ],
    [
      "Deals",
      "Sales pipelines"
    ],
    [
      "Tasks",
      "Follow-ups & activity"
    ],
    [
      "Team",
      "Shared workspaces"
    ]
  ],
  "href": "https://real-crm-pearl.vercel.app"
},
  {
  "id": "martedge",
  "number": "07",
  "name": "MartEdge",
  "eyebrow": "RETAIL / POS & STORE MANAGEMENT",
  "status": "LIVE PRODUCT",
  "description": "Run your shop or mart with fast barcode billing, inventory, suppliers, customer Khata accounts and daily sales reports.",
  "icon": PackageSearch,
  "stats": [
    [
      "Checkout",
      "Barcode POS"
    ],
    [
      "Inventory",
      "Stock & purchasing"
    ],
    [
      "Khata",
      "Customer credit"
    ],
    [
      "Reports",
      "Sales & expenses"
    ]
  ],
  "href": "https://martedge.vercel.app"
},
] as const;


export const freebieCategories = [
  { label: "Image & PDF tools", description: "Convert, compress, resize and organize files", href: "/freebies#free-tool-list" },
  { label: "Links & QR codes", description: "Short links, QR codes and campaign utilities", href: "/freebies#linkcraft-tools" },
  { label: "Academic", description: "Gradly, Resumly and Zubán DocX", href: "/freebies#academic-tools" },
] as const;
