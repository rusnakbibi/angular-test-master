import { BehaviorSubject, Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { AboutInterface } from './about.interface';

export const COLLEGE_ABOUT$ = new InjectionToken<Observable<AboutInterface>>('About college', {
  providedIn: 'root',
  factory: () => {
    const college = new BehaviorSubject<AboutInterface>({
      id: 1,
      name: 'Vinnytsia National Technical University',
      photo: 'https://vntu.edu.ua/style/vntu-preview.jpg',
      about: `Vinnytsia National Technical University is an educational establishment of
      the fourth level of accreditation well known both in Ukraine and far abroad`,
      media_type: 2,
      vimeo_video_id: 3
    });

    if (!college) {
      throw new Error('College is not available');
    }

    return college.asObservable();
  },
});
