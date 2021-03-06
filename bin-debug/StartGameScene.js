/**
 * Created by pior on 16/9/9.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StartGameScene = (function (_super) {
    __extends(StartGameScene, _super);
    function StartGameScene() {
        return _super.call(this) || this;
    }
    StartGameScene.prototype.init = function () {
        BGMPlayer._i().play(SoundName.startgamebgm);
        var data = {
            'code': 1
        };
        this.show(data);
    };
    StartGameScene.prototype.show = function (data) {
        if (data['code'] == 1) {
            this.showbg();
            this.showcontain();
        }
        else {
            GameUtil.trace(data['msg']);
        }
    };
    /**显示背景界面 */
    StartGameScene.prototype.showbg = function () {
        var shap = new MyBitmap(RES.getRes('startgamebg_jpg'), 0, 0);
        shap.setanchorOff(0, 0);
        shap.width = this.mStageW;
        shap.height = this.mStageH;
        this.addChild(shap);
    };
    StartGameScene.prototype.showcontain = function () {
        var offx = (this.mStageW - 500) / 2;
        var offy = 300;
        var list = new GameUtil.ScrollView(900, 450);
        list.x = 62;
        list.y = 300;
        this.addChild(list);
        var rectbg = GameUtil.createRect(0, 0, 900, 920, 1, 0x37b4c7);
        list.putItem(rectbg);
        for (var i = 0; i < GameConfig.SERVERGAMENAME.length; i++) {
            var gameicon = new GameUtil.Menu(this, GameConfig.SERVERGAMENAME[i] + '_jpg', GameConfig.SERVERGAMENAME[i] + '_jpg', this.jumpurl, [i]);
            gameicon.x = 100 + 210 * (i % 4);
            gameicon.y = 60 + Math.floor(i / 4) * 210;
            //this.addChild(gameicon);
            list.putItem(gameicon);
        }
    };
    StartGameScene.prototype.jumpurl = function (gameid) {
        window.open("http://h5.sxd55.com" + "/" + GameConfig.SERVERGAMENAME[gameid]);
    };
    /**开始游戏 */
    StartGameScene.prototype.startgame = function () {
        GameUtil.trace('startgame');
        GameUtil.GameScene.runscene(new GameScene());
    };
    /**游戏排行榜 */
    StartGameScene.prototype.gamerank = function () {
        GameUtil.trace('gamerank');
        this.addChild(new GameRankPageShow());
    };
    /**游戏帮助 */
    StartGameScene.prototype.gamehelp = function () {
        GameUtil.trace('gamehelp');
        this.addChild(new GameHelpPageShow());
    };
    /**游戏设置，音乐与音效 */
    StartGameScene.prototype.setting = function () {
        GameUtil.trace('setting');
        this.addChild(new GameSetting());
    };
    /**更多游戏 */
    StartGameScene.prototype.moregame = function () {
        //this.addChild(new MoreGamePage());
    };
    return StartGameScene;
}(GameUtil.BassPanel));
__reflect(StartGameScene.prototype, "StartGameScene");
//# sourceMappingURL=StartGameScene.js.map