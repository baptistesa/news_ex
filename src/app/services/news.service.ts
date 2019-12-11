import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b1378b398f404be18ddd252068b3b099"

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.url);
  }
}
