// 随机背景图核心脚本（适配 dist/images 目录）
(function() {
    // 图片基础路径（对应 dist/images 目录）
    const imgBase = '/media/js/images/';
    
    // 图片名称列表（只写文件名，包含后缀）
    const imgList = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
        'background8.jpg',
        'background9.jpg',
        'background10.jpg'
        // 新增图片直接在这里加一行即可
    ];

    // 随机选一张图
    function getRandomImg() {
        const randomIndex = Math.floor(Math.random() * imgList.length);
        return imgBase + imgList[randomIndex];
    }

    // 设置背景图
    function setBackground() {
        const imgUrl = getRandomImg();
        const body = document.body;
        
        // 直接设置背景样式
        body.style.backgroundImage = `url('${imgUrl}')`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundAttachment = 'fixed'; // 固定背景，滚动不移动
    }

    // 页面加载完成后执行
    window.addEventListener('DOMContentLoaded', setBackground);
})();