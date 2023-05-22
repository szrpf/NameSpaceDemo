/*******************************************************************************
 * 创建:    2023年05月22日
 * 作者:    水煮肉片饭(27185709@qq.com)
 * 描述:    游戏主入口
 * 定义全局命名空间gi
 * 游戏全局初始化
*******************************************************************************/
export namespace gi {
    /**定义全局变量 */
    export let log = CC_EDITOR ? cc.log : console.log;
    export let warn = CC_EDITOR ? cc.warn : console.warn;
    export let error = CC_EDITOR ? cc.error : console.error;
    export let rootNode: cc.Node = null;
    /**……等等 */
    /**定义全局函数 */
    export function random(a: number, b: number = 0): number { return (a - b) * Math.random() + b; }
    export function randomInt(a: number, b: number = 0): number { return ~~((a - b) * Math.random() + b); }
    /**……等等 */
};
window['gi'] = gi;

const { ccclass, property } = cc._decorator;
@ccclass
export default class Game extends cc.Component {
    /**游戏全局初始化 */
    protected start() {
        cc.game.setFrameRate(60);              //设置刷新率
        cc.debug.setDisplayStats(true);        //是否显示调试信息
        cc.macro.ENABLE_MULTI_TOUCH = false;   //是否支持多点触摸
        gi.rootNode = this.node;               //由于Game挂在Canvas上，this.node就是Canvas节点
        /**……等等 */
    }
}