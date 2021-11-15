import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ProductService {
    private productsData: Array<Product>;

    constructor() {
        this.productsData = [
            {
                id: 1,
                name: "Event One",
                description:
                    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                status: "Available"
            },
            {
                id: 2,
                name: "Event Two",
                description: "sunt aut facere ptio reprehenderit",
                status: "Not Available"
            },
            {
                id: 3,
                name: "Event Three",
                description: "provident occaecati excepturi optio reprehenderit",
                status: "Available"
            },
            {
                id: 4,
                name: "Event Four",
                description: "reprehenderit",
                status: "Not Available"
            }
        ]
    }

//     private url: string;

//   constructor(private httpClient: HttpClient) {
//     this.productsData = [];
//     this.url = "http://localhost:8000/api/products";
//   }

//   getAllProducts() {
//     this.httpClient.get<Array<Product>>(this.url).subscribe(resData => {
//         this.productsData = resData;
//         return this.productsData;
//     })
//   }

//   private _handleError<T>(operation = 'operation', result?: T) {
//     return (err: HttpErrorResponse): Observable<T> => {
//       console.log(`${operation} failed: ${err.message}`);
//       switch (err.status) {
//         case 403:
//           return throwError(err.error.message);
//         case 500:
//           return throwError(err.statusText);
//         default:
//           return throwError("Connection Error, please try again later...");
//       }
//     }
//   }

    get Products() {
        return this.productsData;        
    }
}