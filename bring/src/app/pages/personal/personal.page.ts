import {Component, OnInit} from '@angular/core';
import {User} from '../../func/User';
import {AuthService} from '../../service/auth.service';
import {Orders} from '../../func/Orders';
import {config} from '../../conf/app.conf';
import {FormControl} from '@angular/forms';
import {OrdersService} from '../../service/orders.service';
import {CommonService} from '../../service/common.service';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  /**
   * 当前登录用户
   */
  currentUser: User;
  bringNum: number;
  successNum: number;
  evaNum: number;

  /**
   * 表格选项.
   */
  chartOption: EChartsOption;

  /**
   * 分页信息
   */
  public params = {
    page: 0,
    size: 10,
  };

  /* 查询参数 */
  queryParams = {
    page: 0,
    status: undefined,
    size: this.params.size,
    startPlace: new FormControl(),
    endPlace: new FormControl()
  };

  isLoading = false;
  /* 分页数据 */
  takeOrders = {
    totalPages: 0,
    content: new Array<Orders>()
  };

  /* 分页数据 */
  successOrders = {
    totalPages: 0,
    content: new Array<Orders>()
  };

  /* 分页数据 */
  evaOrders = {
    totalPages: 0,
    content: new Array<Orders>()
  };


  constructor(private authService: AuthService,
              private commonService: CommonService,
              private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
        this.getTake();
        this.takeSuccess();
        this.getEva();
      });
    this.initXData();
  }

  /**
   * 获取echarts的选项.
   *
   * @param title 标题
   * @param xData X轴
   * @param yData Y轴
   */
  public getEchartsOption(xData: any[]): EChartsOption {
    console.log(xData);
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: xData
        }
      ]
    };
  }


  /**
   * 加载数据
   */
  quaryTake(): number {
    this.bringNum = 0;
    const queryParams = {
      page: this.params.page,
      size: config.size,
      status: this.queryParams.status,
      startPlace: this.queryParams.startPlace.value,
      endPlace: this.queryParams.endPlace.value
    };
    if (this.currentUser?.role === 0) {
      this.orderService.ownerQuaryTake(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.bringNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    } else if (this.currentUser?.role === 1) {
      this.orderService.driverQuaryTake(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.bringNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
      console.log(1111);
      return this.bringNum;
  }

  /**
   * 加载数据
   */
  quarySuccess(): number {
    this.successNum = 0;
    const queryParams = {
      page: this.params.page,
      size: config.size,
      status: this.queryParams.status,
      startPlace: this.queryParams.startPlace.value,
      endPlace: this.queryParams.endPlace.value
    };
    if (this.currentUser?.role === 0) {
      this.orderService.ownerQuarySuccess(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.successNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    } else if (this.currentUser?.role === 1) {
      this.orderService.driverQuarySuccess(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.successNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
      return this.successNum;
  }


  /**
   * 加载数据
   */
  quaryEva(): number {
    this.evaNum = 0;
    const queryParams = {
      page: this.params.page,
      size: config.size,
      status: this.queryParams.status,
      startPlace: this.queryParams.startPlace.value,
      endPlace: this.queryParams.endPlace.value
    };
    if (this.currentUser?.role === 0) {
      this.orderService.ownerQuarySuccess(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.evaNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    } else if (this.currentUser?.role === 1) {
      this.orderService.driverQuarySuccess(queryParams)
        .subscribe((response: { totalPages: number; content: Array<Orders> }) => {
          this.evaNum = response.content.length;
          this.initXData();
          // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
        });
    }
      return this.evaNum;
  }

  /**
   * 参数初始化
   */
  paramsInit(): void {
    this.params.page = 0;
    this.params.size = config.size;

    // 获取历史参数
    const params = this.commonService.getCurrentRouteState();

    if (params.page) {
      this.params.page = params.page as number;
    }
    if (params.size) {
      this.params.size = params.size as number;
    }
  }

  private getTake(){
    this.queryParams.status = 1;
    this.paramsInit();
    this.quaryTake();
    this.initXData();
  }

  private takeSuccess() {
    this.queryParams.status = 4;
    this.paramsInit();
    this.quarySuccess();
    this.initXData();
  }

  private getEva(){
    this.queryParams.status = 5;
    this.paramsInit();
    this.quaryEva();
  }

  private initXData() {
    const xData = [];
    xData.push( {value: this.bringNum, name: '已揽收'});
    xData.push({value: this.successNum, name: '已完成'});
    xData.push({value: this.evaNum, name: '已评价'});
    this.chartOption = this.getEchartsOption(xData);
    console.log(this.chartOption);
  }

  update(refresher) {
    setTimeout(() => {
      console.log('下拉刷新2');
      this.ngOnInit();
      refresher.detail.complete();
    }, 2000);
  }
}
