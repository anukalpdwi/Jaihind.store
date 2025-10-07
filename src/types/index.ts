export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  displayOrder: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  imageUrl: string;
  images: string[];
  isFeatured: boolean;
  isAvailable: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface OrderInquiry {
  productId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
}
