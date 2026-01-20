import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'panel-products',
  imports: [],
  templateUrl: './panel-products.html',
  styleUrl: './panel-products.css',
})
export class PanelProducts implements OnInit {
  private readonly route = inject(ActivatedRoute);

  constructor() {
    
  }
  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    console.log('ngOnInit', categoryId);
  }
}
