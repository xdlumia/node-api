/*
 * @Author: web.王晓冬
 * @Date: 2021-01-03 09:51:55
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 14:36:03
 * @Description: file content
 */
// export const DB_URL = 'mongodb://nic:nic123@139.196.100.36:27017/nicchan';
export const DB_URL = 'mongodb://117.50.10.67:27017/blog';

export const defaultSchemaExtend = {
  createTime: {
    type: Date,
    default: Date.now()
  },
  updateTime: {
    type: Date,
    default: Date.now()
  }
};

export const defaultSchemaOptions = {
  timestamps: {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  }
};

export const jwtConfig = {
  secret: 'myjwtsecret'
};