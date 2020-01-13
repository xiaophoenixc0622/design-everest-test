import { Component } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Design Everest Test';
  faCommentDots = faCommentDots;
  faEnvelope = faEnvelope;
  faCog = faCog;
}
