function ownerAccess(){
  const pw=prompt('비밀번호 입력')
  if(pw!==PW) return alert('비밀번호 틀림!')
  localStorage.owner='true'
  content.innerHTML=`
  <section class="center">
    <h1>Owner only</h1>

    <input id="a" placeholder="업적">
    <button onclick="addAch()">업적 추가</button>

    <input id="dt" placeholder="일기 제목">
    <input id="dd" placeholder="날짜">
    <input id="di" placeholder="이미지 URL">
    <button onclick="addDiary()">일기 추가</button>

    <input id="pt" placeholder="포트폴리오 제목">
    <select id="pg">
      <option>서버 제작🔨</option>
      <option>봇 개발🤖</option>
    </select>
    <input id="pi" placeholder="이미지 URL">
    <button onclick="addPort()">포트폴리오 추가</button>
  </section>`
}

function addAch(){
  const a=get('ach');a.push(aInput.value);set('ach',a)
}

function addDiary(){
  const d=get('diary')
  d.push({title:dt.value,date:dd.value,img:di.value})
  set('diary',d);alert('일기 추가')
}

function addPort(){
  const p=get('port')
  p.push({title:pt.value,tag:pg.value,img:pi.value,date:new Date().toLocaleDateString()})
  set('port',p);alert('포트폴리오 추가')
}

function delDiary(i){
  if(prompt('비밀번호')!==PW) return
  const d=get('diary');d.splice(i,1);set('diary',d);pages.diary()
}
function delPort(i){
  if(prompt('비밀번호')!==PW) return
  const p=get('port');p.splice(i,1);set('port',p);pages.portfolio()
}

    setData("port", p);
    alert("포트폴리오 추가 완료!");
  });
}

