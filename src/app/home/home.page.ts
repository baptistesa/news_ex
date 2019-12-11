import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private articles;

  constructor(private service : NewsService, private router: Router) {
    this.getArticles();
  }

  getArticles() {
    this.service.getArticles()
      .subscribe(data => {
        this.articles = data
      })
  }

  // Go to article
  goToDetails(article) {
    let params : NavigationExtras = {
      state : {
        article : article
      }
    }
    this.router.navigate(['/details'], params)
  }

}
