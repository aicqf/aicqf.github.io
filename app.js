
(function(){
  // 搜索
  var box = document.getElementById('searchlist');
  if (box){
    var idx = window.SEARCH_INDEX || [];
    var m = location.search.match(/[?&]q=([^&]*)/);
    var kw = m ? decodeURIComponent(m[1].replace(/\+/g,' ')) : '';
    kw = kw.trim();
    var head = document.getElementById('searchkw');
    if (head) head.textContent = kw;
    if (!kw){
      box.innerHTML = '<div class="empty">请输入版本名、地图名或关键词，例如“冰雪 打金”“1.76 开区”。</div>';
    } else {
      var keys = kw.split(/\s+/).filter(Boolean);
      var hits = idx.filter(function(it){
        var s = it.t + ' ' + it.k;
        return keys.every(function(k){ return s.indexOf(k) >= 0; });
      }).slice(0, 60);
      box.innerHTML = hits.length ? hits.map(function(it, i){
        return '<div class="rowline"><span class="idx">' + (i + 1) + '</span><a href="' + it.u + '">' + it.t + '</a><time>' + it.d + '</time></div>';
      }).join('') : '<div class="empty">没有找到相关内容，换个关键词试试，例如“合击”“复古”“攻沙”。</div>';
    }
  }
  // 回到顶部
  var top = document.getElementById('totop');
  if (top){
    window.addEventListener('scroll', function(){ top.classList.toggle('on', window.scrollY > 600); });
    top.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  }
})();
