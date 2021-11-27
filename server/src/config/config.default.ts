import { IS_DEV } from '../const'
import { resolve } from 'path'

export default {
  port: IS_DEV ? 9000 : 80,
  // * 入口html文件
  entryPath: IS_DEV ? resolve(__dirname, '../../static/index.html') : './dist/index.html',
  // * 静态资源路径
  staticPath: IS_DEV ? resolve(__dirname, '../../../client/') : './dist/'
}