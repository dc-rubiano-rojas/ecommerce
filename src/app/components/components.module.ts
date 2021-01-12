import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SlideComponent } from './slide/slide.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    SlideComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  exports: [
    SidebarComponent,
    SlideComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
