const PASSWORD = "0314jun!";

const getData = k => JSON.parse(localStorage.getItem(k) || "[]");
const setData = (k,v) => localStorage.setItem(k, JSON.stringify(v));

function ownerAccess(){
  const pw = prompt("비밀번호 입력");
  if(pw !== PASSWORD) return alert("비밀번호가 틀렸습니다");

  content.innerHTML = `
  <section class="center">
    <h1>Owner only</h1>

    <h2>업적 추가</h2>
    <input id="achInput" placeholder="업적">
    <button onclick="addAchievement()">추가</button>

    <h2 style="margin-top:30px">일기 추가</h2>
    <input id="dTitle" placeholder="제목">
    <input id="dDate" placeholder="날짜">
    <input type="file" id="dImg">
    <button onclick="addDiary()">추가</button>

    <h2 style="margin-top:30px">포트폴리오 추가</h2>
    <input id="pTitle" placeholder="제목">
    <select id="pTag">
      <option>서버 제작🔨</option>
      <option>봇 개발🤖</option>
    </select>
    <input type="file" id="pImg">
    <button onclick="addPortfolio()">추가</button>
  </section>`;
}

function addAchievement(){
  const v = achInput.value;
  if(!v) return;
  const d = getData("ach");
  d.push(v);
  setData("ach", d);
  alert("업적 추가 완료");
}

function fileToBase64(file, cb){
  const r = new FileReader();
  r.onload = () => cb(r.result);
  r.readAsDataURL(file);
}

function addDiary(){
  const f = dImg.files[0];
  if(!f) return alert("이미지 필요");

  fileToBase64(f, img=>{
    const d = getData("diary");
    d.push({ title:dTitle.value, date:dDate.value, img });
    setData("diary", d);
    alert("일기 추가 완료");
  });
}

function addPortfolio(){
  const f = pImg.files[0];
  if(!f) return alert("이미지 필요");

  fileToBase64(f, img=>{
    const p = getData("port");
    p.push({
      title:pTitle.value,
      tag:pTag.value,
      date:new Date().toLocaleDateString(),
      img
    });
    setData("port", p);
    alert("포트폴리오 추가 완료");
  });
}
