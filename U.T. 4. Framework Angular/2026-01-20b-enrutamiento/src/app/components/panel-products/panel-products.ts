import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyRestService } from '../../services/dummy-rest-service';
import { CommonModule } from '@angular/common';

import DataTable from 'datatables.net-dt';

@Component({
  selector: 'panel-products',
  imports: [ CommonModule ],
  templateUrl: './panel-products.html',
  styleUrl: './panel-products.css',
})
export class PanelProducts implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly restService = inject(DummyRestService);
  protected products$;

  constructor() {

    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    // console.log(categoryId);
    if (categoryId) {
      this.products$ = this.restService.getProductsByCategory$(categoryId);
    } else {
      this.products$ = this.restService.getProducts$();
    }

  }

  ngOnInit(): void {
    // let table = new DataTable('#tTabProducts');

    this.products$.subscribe((products) => {
      new DataTable('#tTabProducts', {
        data: products,
        columns: [
          { 
            data: 'thumbnail',
            title: 'Imagen',
            render: (thumbnail) => `<img src="${thumbnail}"/>`
          },
          { 
            title: 'Nombre',
            data: 'title' 
          },
          { 
            title: 'Categoría',
            data: 'category'
          },
          { 
            title: 'Precio',
            data: 'price', render: DataTable.render.number( ',', '.', 2, '€' ) 
          },
        ]
      });
    });
  }
}
