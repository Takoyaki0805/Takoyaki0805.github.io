function data(e){
    let tag = e.currentTarget.id;
    switch (tag){
        case "app1":
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
    // console.log(e.currentTarget.id);
}


$('#app1').on('click',data)
// $('#app1').ready(data)