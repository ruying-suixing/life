// 页面加载完成后执行
$(document).ready(function() {
    // 定义读取本地毒鸡汤数据的函数
    function loadDujitang() {
        // 读取本地 data.json 文件（相对路径，确保和 index.html 同级的 js 目录下有该文件）
        $.getJSON('/js/data.json', function(data) {
            // 随机选一条毒鸡汤
            var randomIndex = Math.floor(Math.random() * data.length);
            var randomText = data[randomIndex];
            // 把内容显示到页面的 jttext 元素里
            $('#jttext').text(randomText);
        }).fail(function() {
            // 如果读取失败，显示友好提示
            $('#jttext').text('网络错误！（本地数据文件未找到）');
        });
    }

    // 页面首次加载时，先显示一条毒鸡汤
    loadDujitang();

    // 点击“再来一碗”按钮，重新加载一条毒鸡汤
    $('.load_jt').click(function() {
        loadDujitang();
    });
});