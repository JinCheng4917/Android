/**
 * 模型实体
 */
import {GoodsType} from './GoodsType';
import {User} from './User';

export class Orders {

  static collected = 0;
  static transforming = 1;
  static transformed = 2;
  static compiled = 3;


  /** id */
  id: number;

  /** 名称 */
  goodsName: string;

  /** 类型 */
  goods: GoodsType;

  /**
   * 初始地
   */
  startPlace: string;

  /**
   * 目的地
   */
  endPlace: string;

  /**
   * 运费
   */
  freight: number;

  /** 发布人 */
  publisher: User;

  collector: User;

  /** 发布时间 */
  startTime: string;

  endTime: string;

  status: number;

  constructor(param?: {
    name?: string;
    id?: number;
    goods?: GoodsType;
    startPlace?: string;
    endPlace?: string;
    freight?: number;
    publisher?: User;
    collector?: User;
    startTime?: string;
    engTime?: string;
    status?: number;
  }) {
    if (param) {
      this.goodsName = param.name;
      this.id = param.id;
      this.goods = param.goods;
      this.startPlace = param.startPlace;
      this.endPlace = param.endPlace;
      this.freight = param.freight;
      this.collector = param.collector;
      this.publisher = param.publisher;
      this.startTime = param.startTime;
      this.endTime = param.engTime;
      this.status = param.status;
    }
  }
}
