import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiVideoPlayerService {
  private showVideo: boolean = false;
  private subject = new Subject<any>();
 
  constructor() { }

  toggleShowVideo(): void {
    this.showVideo = !this.showVideo;
    this.subject.next(this.showVideo);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
