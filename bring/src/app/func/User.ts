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

  /** 角色 */
  role: number;

  /** 手机号 */
  phone: string;

  /** 是否为admin */
  admin: boolean;

  quota: number;

  idnumber: string;

  startTime: any;

  constructor(data?:
                {
                  id?: number; name?: string; username?: string; phone?: string; password?: string; role?: number; admin?: boolean;
                  quota?: number; idnumber?: string; startTime?: any;
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

      if (data.role) {
        this.role = data.role;
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
      if (data.startTime) {
        this.startTime = data.startTime;
      }
    }

  }
}
