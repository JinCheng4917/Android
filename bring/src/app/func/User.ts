/**
 * 用户实体
 */
export class User {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 用户名 */
  username: string;

  /** 密码 */
  password: string;

  /** 性别 */
  sex: boolean;

  /** 手机号 */
  phone: string;

  /** 是否为admin */
  admin: boolean;

  quota: number;

  idnumber: string;

  /** 常用地址 **/
  usualAddress : string;

  constructor(data?:
                {
                  id?: number; name?: string; username?: string; phone?: string; password?: string; sex?: boolean; admin?: boolean;
                  quota?: number; idnumber?: string; usualAddress?:string;
                }) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }

      if (data.phone) {
        this.phone = data.phone;
      }

      if (data.name) {
        this.name = data.name;
      }

      if (data.username) {
        this.username = data.username;
      }

      if (data.password) {
        this.password = data.password;
      }

      if (data.sex) {
        this.sex = data.sex;
      }

      if (data.admin) {
        this.admin = data.admin;
      }

      if (data.quota) {
        this.quota = data.quota;
      }
      if (data.idnumber) {
        this.idnumber = data.idnumber;
      }
      if (data.usualAddress) {}
      this.usualAddress = data.usualAddress;
    }

  }
}
