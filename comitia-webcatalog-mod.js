(() => {
  const pdfPath = 'http://localhost:8000/COMITIA152_配置図_20250528.pdf';  // Use `python3 -m http.server` to setup a naive server!
  const mapContainer = document.createElement('div');
  Object.assign(mapContainer.style, {
    width: '100%',
    height: `${window.innerHeight * 0.6}px`,
    overflow: 'hidden',
    margin: '0 0 0 0',
  });
  const obj = document.createElement('object');
  obj.setAttribute('data', `${pdfPath}#page=1&view=FitH`);
  obj.setAttribute('type', 'application/pdf');
  Object.assign(obj.style, {
    width: '100%',
    height: '100%',
    border: 'none',
  });
  mapContainer.appendChild(obj);

  const colorMap = {
    pri1: '#FF00FF',
    pri2: '#FF0000',
    pri3: '#FFA500',
    pri4: '#FFFF00',
    pri5: '#00FF00',
    pri6: '#008000',
    pri7: '#00FFFF',
    pri8: '#0000FF',
    pri9: '#000080'
  };

  const circles = [];
  document.querySelectorAll('tr.circle-root').forEach(row => {
    const nameEl = row.querySelector(
      'td.list-info .cut-list-info > div:nth-child(2) a.cut-list-name'
    );
    const circleName = nameEl?.textContent.trim() || '';
    if (!circleName) return;

    const priClass = [...row.classList].find(c => /^pri\d+$/.test(c)) || '';
    let imgUrl   = row.querySelector('td.list-cut img.circle-web-cut-img')?.src || 'data:';
    if (imgUrl.startsWith('data:')) {
      imgUrl = row.querySelector('td.list-cut img.circle-cut-img')?.src || '';
    }
    const booth    = row.querySelector(
      'td.list-info .cut-list-info > div:nth-child(2) strong.circle-chk-sp'
    )?.textContent.trim() || '';
    const author   = row.querySelector(
      'td.list-info .cut-list-info > div:nth-child(3) span.circle-chk-pn'
    )?.textContent.trim() || '';
    const tags = Array.from(
      row.querySelectorAll(
        'td.list-info .cut-list-info > div:nth-child(6) span.circle-chk-tag > div'
      ),
      t => t.textContent.trim()
    );

    circles.push({ priClass, imgUrl, booth, circleName, author, tags });
  });

  console.log('抓取到的 circles：', circles);

  const container = document.createElement('div');
  container.id = 'compact-circle-display';
  container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
    padding: 0px;
    background: #fafafa;
  `;
  document.body.prepend(container);
  document.body.prepend(mapContainer);

  circles.forEach(c => {
    const card = document.createElement('div');
    card.style.cssText = `
      position: relative;
      width: 180px;
      font-size: 16px;
      line-height: 1.2;
      border: 0px solid #ddd;
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      background: #fff;
    `;

    const marker = document.createElement('div');
    marker.style.cssText = `
      position: absolute;
      top: 7px; left: 7px;
      width: 46px; height: 46px;
      background: ${colorMap[c.priClass] || 'transparent'};
      pointer-events: none;
    `;
    card.append(marker);

    const img = document.createElement('img');
    img.src = c.imgUrl;
    img.style.cssText = `
      display: block;
      width: 100%;
      height: auto;
      margin-top: 0px;
      margin-bottom: 0px;
    `;
    card.append(img);

    const booth = document.createElement('div');
    booth.textContent = `${c.booth}`;
    booth.style.cssText = 'font-weight: bold; margin-bottom: 2px; white-space: nowrap;';
    card.append(booth);

    const title = document.createElement('div');
    title.textContent = `${c.circleName}`;
    title.style.cssText = 'font-weight: bold; margin-bottom: 2px; white-space: nowrap;';
    card.append(title);

    const authorEl = document.createElement('div');
    authorEl.textContent = `${c.author}`;
    authorEl.style.cssText = 'margin-bottom: 2px; white-space: nowrap;';
    card.append(authorEl);

    const tagsEl = document.createElement('div');
    tagsEl.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 1px;
    `;
    c.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      span.style.cssText = `
        padding: 1px 3px;
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 12px;
        white-space: nowrap;
      `;
      tagsEl.append(span);
    });
    card.append(tagsEl);

    container.append(card);
  });
})();
