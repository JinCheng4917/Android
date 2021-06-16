import {Component, OnInit} from '@angular/core';
import {User} from '../../../func/User';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {DriverService} from '../../../service/driver.service';
import {OwnerService} from '../../../service/owner.service';
import {Driver} from '../../../func/Driver';
import {Owner} from '../../../func/Owner';

@Component({
  selector: 'app-main',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  /**
   * 当前登录用户
   */
  currentUser: User;

  initOpts = {
    renderer: 'svg',
    width: 350,
    height: 350
  };

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '40%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }

}
