import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutRoutingModule } from './about-routing.module';
import { CollegeComponent } from './college/college.component';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [CollegeComponent],
  exports: [CollegeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ]
})
export class AboutModule {
}
