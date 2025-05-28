# comitia-webcatalog-mod

Make the webcatalog of Comitia more like "comiket" ♥ 
コミティアのウェブカタログをもっと「コミケット」っぽく ♥

Only open source at [GitHub](https://github.com/Ice9Coffee/comitia-webcatalog-mod).
仅在 [GitHub](https://github.com/Ice9Coffee/comitia-webcatalog-mod) 上开源。
このプロジェクトは [GitHub](https://github.com/Ice9Coffee/comitia-webcatalog-mod) のみでオープンソースです。

Free to use with absolutely NO WARRANTY under the AGPL-3.0 License.
在 AGPL-3.0 许可证下自由使用，但完全不提供任何担保。
AGPL-3.0ライセンスの下で無料で使用できますが、保証は一切ありません。

I believe AGPL would make the world more peaceful.

## Usage - 用法 - 使い方

* Open [https://comitia-webcatalog.net/list?cut=2](https://comitia-webcatalog.net/list?cut=2)
* Save the script below as a bookmark
* Click the bookmark to run!

```javascript
javascript:(()=>{var m={pri1:'#FF00FF',pri2:'#FF0000',pri3:'#FFA500',pri4:'#FFFF00',pri5:'#00FF00',pri6:'#008000',pri7:'#00FFFF',pri8:'#0000FF',pri9:'#000080'},d=[];document.querySelectorAll('tr.circle-root').forEach(r=>{var ne=r.querySelector('td.list-info .cut-list-info > div:nth-child(2) a.cut-list-name');if(!ne||!ne.textContent.trim())return;var p=(r.className.match(/\bpri\d+\b/)||[''])[0],u=r.querySelector('td.list-cut img.circle-cut-img')?.src||'',b=r.querySelector('td.list-info .cut-list-info > div:nth-child(2) strong.circle-chk-sp')?.textContent.trim()||'',n=ne.textContent.trim(),a=r.querySelector('td.list-info .cut-list-info > div:nth-child(3) span.circle-chk-pn')?.textContent.trim()||'',t=Array.from(r.querySelectorAll('td.list-info .cut-list-info > div:nth-child(6) span.circle-chk-tag > div'),x=>x.textContent.trim());d.push({p,u,b,n,a,t})});console.log(d);var c=document.createElement('div');c.style.cssText='display:flex;flex-wrap:wrap;gap:0;padding:0;background:#fafafa;';document.body.prepend(c);d.forEach(o=>{var f=document.createElement('div');f.style.cssText='position:relative;width:240px;font-size:16px;line-height:1.2;border:0;padding:0;margin:0;box-sizing:border-box;background:#fff;';var k=document.createElement('div');k.style.cssText='position:absolute;top:9px;left:8px;width:63px;height:62px;background:'+(m[o.p]||'transparent')+';pointer-events:none;';f.append(k);var im=document.createElement('img');im.src=o.u;im.style.cssText='display:block;width:100%;height:auto;margin:0;';f.append(im);['b','n'].forEach(w=>{var te=document.createElement('div');te.textContent=o[w];te.style.cssText='font-weight:bold;margin-bottom:2px;white-space:nowrap;';f.append(te)});var au=document.createElement('div');au.textContent=o.a;au.style.cssText='margin-bottom:2px;white-space:nowrap;';f.append(au);var te2=document.createElement('div');te2.style.cssText='display:flex;flex-wrap:wrap;gap:1px;';o.t.forEach(x=>{var s=document.createElement('span');s.textContent=x;s.style.cssText='padding:1px 3px;border:1px solid #ccc;border-radius:2px;font-size:12px;white-space:nowrap;';te2.append(s)});f.append(te2);c.append(f)});})();
```

There is a more readable version in this repository, and it can embed the PDF map onto circle cards.
