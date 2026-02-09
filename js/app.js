const content = document.getElementById("content");

const get = k => JSON.parse(localStorage.getItem(k) || "[]");

function toggleMenu(){
  const m = document.getElementById("menu");
  m.style.display = m.style.display === "flex" ? "none" : "flex";
}

function navigate(p){
  toggleMenu();
  pages[p]();
}

const pages = {
  home(){
    content.innerHTML = `
    <section class="center" style="height:80vh">
      <h1>더 나은 미래를 만드는 개발자가 되자</h1>
      <h3>Dev. JUN</h3>
      <img src="assets/working.jpg" style="width:320px;margin-top:20px">
    </section>`;
  },

  about(){
    const ach = get("ach");
    content.innerHTML = `
    <section class="list">
      <div>
        <h1>About me</h1>
        <p style="font-size:13pt;margin-top:10px">
          안녕하세요! 디스코드 서버 제작과 봇 개발을 좋아하는 학생 개발자 Dev. JUN입니다.<br><br>
          사용자가 쉽고 편리하게 사용할 수 있는 서비스를 제작하기 위해 노력하고 있습니다.
        </p>

        <h2 style="text-align:center;margin-top:40px">Achievements</h2>
        <div style="text-align:center">
          ${ach.map(a=>`<p style="font-size:13pt">${a}</p>`).join("")}
        </div>
      </div>
      <img src="assets/me.jpg" style="width:260px">
    </section>`;
  },

  diary(){
    const d = get("diary");
    content.innerHTML =
      `<h1 style="text-align:center">Diary</h1>` +
      d.map(i=>`
        <div class="card">
          <div>
            <h3>${i.title}</h3>
            <small>${i.date}</small>
          </div>
          <img src="${i.img}">
        </div>
      `).join("");
  },

  portfolio(){
    const p = get("port");
    content.innerHTML =
      `<h1 style="text-align:center">Portfolio</h1>` +
      p.map(i=>`
        <div class="card">
          <div>
            <h3>${i.title}</h3>
            <div class="tag">${i.tag}</div>
            <small>${i.date}</small>
          </div>
          <img src="${i.img}">
        </div>
      `).join("");
  },

  contact(){
    content.innerHTML = `
    <form action="https://formcarry.com/s/UGFnf7TCJeA" method="POST" class="list">
      <h2>문의 / 연락</h2>
      <input name="title" placeholder="제목">
      <input name="email" placeholder="이메일">
      <textarea name="message" placeholder="내용"></textarea>
      <button type="submit">보내기</button>
    </form>`;
  }
};

pages.home();
