import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../../services/keyframes';
import { User } from '../../models/user';
import * as data from '../../services/users.json';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public users: User[] = data;
  public index = 0;
  durationInSeconds = 5;
  isSelected: boolean = false;
  candidateInfo: any;

  constructor(
    private route: ActivatedRoute,
    private readonly shared: SharedService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.candidateInfo = this.shared.getSelectedData();
    if (this.candidateInfo == undefined) {
      this.candidateInfo = this.shared.getFromLocalStorage('candidateInfo');
    }
  }
  toggleSelection() {
    this.isSelected = !this.isSelected;
    if (this.isSelected == true) {
      this.showShortListed();
    }
  }
  showShortListed() {
    this.toastr.info('Liked !', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 2000,
    });
  }
}
