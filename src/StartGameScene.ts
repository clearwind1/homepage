/**
 * Created by pior on 16/9/9.
 */

class StartGameScene extends GameUtil.BassPanel {

    public constructor() {
        super();
    }

    public init() {
        BGMPlayer._i().play(SoundName.startgamebgm);
        var data: any = {
            'code': 1
        };
        this.show(data);
    }

    private show(data: any) {
        if (data['code'] == 1) {
            this.showbg();
            this.showcontain();
        }
        else {
            GameUtil.trace(data['msg']);
        }
    }
    /**显示背景界面 */
    private showbg() {

        var shap: MyBitmap = new MyBitmap(RES.getRes('startgamebg_jpg'), 0, 0);
        shap.setanchorOff(0, 0);
        shap.width = this.mStageW;
        shap.height = this.mStageH;
        this.addChild(shap);
    }
    private showcontain() {
        var offx = (this.mStageW - 500) / 2;
        var offy = 300;
        var list = new GameUtil.ScrollView(900, 450);
        list.x = 62;
        list.y = 300;
        this.addChild(list);

        var rectbg = GameUtil.createRect(0, 0, 900, 920, 1, 0x37b4c7);
        list.putItem(rectbg);

        for (let i: number = 0; i < GameConfig.SERVERGAMENAME.length; i++) {
            var gameicon = new GameUtil.Menu(this, GameConfig.SERVERGAMENAME[i] + '_jpg', GameConfig.SERVERGAMENAME[i] + '_jpg', this.jumpurl, [i]);
            gameicon.x = 100 + 210 * (i % 4);
            gameicon.y = 60 + Math.floor(i / 4) * 210;
            //this.addChild(gameicon);
            list.putItem(gameicon);
        }
    }

    private jumpurl(gameid) {
        window.open("http://h5.sxd55.com" + "/" + GameConfig.SERVERGAMENAME[gameid]);
    }

    /**开始游戏 */
    private startgame() {
        GameUtil.trace('startgame');
        GameUtil.GameScene.runscene(new GameScene());
    }
    /**游戏排行榜 */
    private gamerank() {
        GameUtil.trace('gamerank');
        this.addChild(new GameRankPageShow());
    }
    /**游戏帮助 */
    private gamehelp() {
        GameUtil.trace('gamehelp');
        this.addChild(new GameHelpPageShow());
    }
    /**游戏设置，音乐与音效 */
    private setting() {
        GameUtil.trace('setting');
        this.addChild(new GameSetting());
    }
    /**更多游戏 */
    private moregame() {
        //this.addChild(new MoreGamePage());
    }
}