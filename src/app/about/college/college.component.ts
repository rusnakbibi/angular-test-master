import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { COLLEGE_ABOUT$ } from '../about.providers';
import { AboutInterface } from '../about.interface';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  college?: AboutInterface;
  isLoading = true;

  selectedLanguage: string;
  languages: { id: string, title: string }[] = [];

  constructor(
    @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>,
    private translateService: TranslateService
  ) { }

  ngOnInit() {

    this.getCollegeInfo();

    this.translateService.use(environment.defaultLocale);
    this.selectedLanguage = environment.defaultLocale;

    this.getLanguage();
  }

  getLanguage(): void {
    this.translateService.get(environment.locales.map(x => x.toUpperCase()))
    .subscribe(() => {
      this.languages = environment.locales.map(x => {
        console.log(x);
        return {
          id: x,
          title: x.toUpperCase(),
        };
      });
    });
  }


  getCollegeInfo(): void {
    this.college$.pipe(
      delay(100)
    )
      .subscribe(res => {
        this.college = res;
      });
  }

  changeLocale() {
    this.translateService.use(this.selectedLanguage);
  }
}
