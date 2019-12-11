import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private article;

  constructor(private router: Router, private activated: ActivatedRoute) {
    this.activated.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state)
        this.article = this.router.getCurrentNavigation().extras.state.article
    })
  }

  ngOnInit() {
  }

}
