const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start () {
        let rd = gi.random(-6.18,6.18);
        gi.log('HelloWorld：[-6.18,6.18)随机浮点数',rd);
        let rdInt = gi.randomInt(-6.18,6.18);
        gi.log('HelloWorld：[-6.18,6.18)随机整数',rdInt);
        gi.log('页面宽高',gi.rootNode.width,gi.rootNode.height);
        gi.log(cc.find('cocos',gi.rootNode).getComponent('Helloworld'));
    }
}
