import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  keyframes,
  animate,
  transition,
  state,
  style,
} from '@angular/animations';

import * as kf from '../../services/keyframes';
import { User } from '../../models/user';
import userData from '../../services/users.json';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
    ]),
  ],
})
export class MatchesComponent {
  public users: User[] = userData;
  public index = 0;

  @Input()
  parentSubject!: Subject<any>;
  @Output() profileEvent: EventEmitter<any> = new EventEmitter<any>();

  animationState: string = '';
  isSelected: boolean = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    console.log('users', this.users);
    this.parentSubject.subscribe((event) => {
      this.startAnimation(event);
    });
  }

  startAnimation(state: any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state: any) {
    this.animationState = '';
    this.index++;
    this.profileEvent.emit(this.users[this.index]);
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
    if (this.isSelected == true) {
      this.showShortListed();
    }
  }

  showShortListed() {
    this.toastr.warning('Shortlisted !', '', {
      positionClass: 'toast-bottom-left',
      timeOut: 2000,
    });
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
