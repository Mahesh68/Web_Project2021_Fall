import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8000/api/products";
  }

  getAllProducts() {
    return this.httpClient.get<Array<Product>>(this.url).pipe(
      retry(3),
      catchError(this._handleError<Array<Product>>('getAllProducts', []))
    )
  }

  getProduct(productId: number) {
    return this.httpClient.get<Product>(`${this.url}/${productId}`).pipe(
      retry(3),
      catchError(this._handleError<Product>('getProduct', undefined))
    )
  }

  createProduct(product: Product) {
    return this.httpClient.post<Product>(this.url, product).pipe(
      retry(3),
      catchError(this._handleError<Product>('createProduct', undefined))
    )
  }

  updateProduct(product: Product) {
    return this.httpClient.put<Product>(`${this.url}/${product.id}`, product).pipe(
      retry(3),
      catchError(this._handleError<Product>('updateProduct', undefined))
    )
  }

  deleteProduct(productId: number) {
    return this.httpClient.delete(`${this.url}/${productId}`).pipe(
      retry(3),
      catchError(this._handleError('deleteProduct', undefined))
    )
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      console.log(`${operation} failed: ${err.message}`);
      switch (err.status) {
        case 403:
          return throwError(err.error.message);
        case 500:
          return throwError(err.statusText);
        default:
          return throwError("Connection Error, please try again later...");
      }
    }
  }
}
