import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import { EChartOption } from 'echarts';
// import { DashboardService } from '../../../service/dashboard.service';
// import { CollegeService } from '../../../service/college.service';
import {environment} from '../../../../environments/environment';
import {User} from '../../../func/User';
import {Menu} from '../../../func/Menu';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MenuService} from '../../../service/menu.service';
import {AuthService} from '../../../service/auth.service';
import {isDefined} from '../../../core/secondUtils';


@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

}
