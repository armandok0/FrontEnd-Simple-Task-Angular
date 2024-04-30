import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.dataService.fetchProducts().subscribe(
      data => {
        const deletedProducts = JSON.parse(sessionStorage.getItem("deletedProducts") ?? "[]") || [];
        this.products = data.filter(product => !deletedProducts.some((deletedProduct: { code: any; }) => deletedProduct.code === product.code));
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  storeDeletedProduct(product: any): void {
    let deletedProducts = JSON.parse(sessionStorage.getItem("deletedProducts") || "[]");
    deletedProducts.push(product);
    sessionStorage.setItem("deletedProducts", JSON.stringify(deletedProducts));
  }

  deleteSelectedProducts(): void {
    const selectedProducts = this.products.filter(product => product.selected);

    if (selectedProducts.length === 0) {
      alert('Please select a product to delete.');
      return;
    } else if (selectedProducts.length > 1) {
      alert('Please select only one product to delete.');
      return;
    }

    const confirmation = confirm('Are you sure you want to delete this product?');
    if (!confirmation) {
      return;
    }

    const deletedProduct = selectedProducts[0];
    const remainingProducts = this.products.filter(product => !product.selected);

    this.storeDeletedProduct(deletedProduct);

    this.products = remainingProducts;
  }

  toggleSelection(product: any): void {
    product.selected = !product.selected;
  }

}
