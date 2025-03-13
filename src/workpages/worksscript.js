function data(e){
    let tag
    if(e == undefined){}
    else{
        tag = e.currentTarget.id;
    }
    if(tag==""){return}
    switch (tag){
        case "app1":
            $("#name").html("支出表アプリ"); 
            $("#img").attr("src","src/app1.png");
            $("#img").attr("width","20%");
            $("#img").attr("height","20%");
            $("#img").attr("text-align","center");
            $('#using').html("AndroidStudio,Java");
            $('#what').html("AndroidStudioの練習と普段使いできるような、支出を素早くメモできるものがほしかったから"); 
            $('#appeal').html("起動してすぐにメモができるUI");
            $('#comment').html("初めて作ったアプリだったのでソースが雑になってしまった。<br>素早くかけるが、管理が面倒");      
        break;
        case "app2":
            $("#name").html("ブラックジャック"); 
            $("#img").attr("src","src/app2.png");
            $("#img").attr("width","40%");
            $("#img").attr("height","40%");
            $('#using').html("Java(JFrame),Eclipse");
            $('#what').html("ゲームエンジンに頼らずにゲームを作るを目標に制作"); 
            $('#appeal').html("JFrameの要素を使って掛け金などを実装した。<br>クラスの概念に極力気を使った");
            $('#comment').html("<a href='https://github.com/Takoyaki0805/BlackJack'>ソースコードはこちらから見られます。</a>");      
        break;
        case "app3":
            $("#name").html("ReflectBall"); 
            $("#img").attr("src","src/app3.png");
            $("#img").attr("width","40%");
            $("#img").attr("height","40%");
            $('#using').html("Unity");
            $('#what').html("1週間でゲームを作成してみる"); 
            $('#appeal').html("シンプルでシステムがわかりやすいゲーム");
            $('#comment').html("期間が決まっていた中で作ったので素材などのクオリティが低くなってしまったが、完成形までもってこられたので、<br>短期集中でものを作る能力は身についたと感じた。");      
        break;
        case "app4":
            $("#name").html("TankTankRevolutions"); 
            $("#img").attr("src","src/app4.png");
            $("#img").attr("width","40%");
            $("#img").attr("height","40%");
            $('#using').html("Unity");
            $('#what').html("授業内で制作、オンラインゲームを作りたい"); 
            $('#appeal').html("コントローラーやオンラインなど");
            $('#comment').html("オンライン特有の問題が多く、解決するのに手間取ってしまった。");      
        break;
        default:
            $("#name").html("支出表アプリ"); 
            $("#img").attr("src","src/app1.png");
            $("#img").attr("width","20%");
            $("#img").attr("height","20%");
            $('#using').html("AndroidStudio,Java");
            $('#what').html("AndroidStudioの練習と普段使いできるような、支出を素早くメモできるものがほしかったから"); 
            $('#appeal').html("起動してすぐにメモができるUI");
            $('#comment').html("初めて作ったアプリだったのでソースが雑になってしまった。<br>素早くかけるが、管理が面倒");      
        break;
    }
    // console.log(tag);
}


$('li').on('click',data)
// $().on('click',data)
// $('#app1').ready(data)
let e;
data(e);