console.log('1::', +new Date());
document.querySelector('.div12').onclick = function() {
  _czc.push(['_trackEvent', '测试点击统计', '点击', 'div12']);
};

document.querySelector('.div13').onclick = function() {
  _czc.push(['_trackEvent', '测试点击统计', '点击', 'div13']);
};
