
function updateDaysCounter() {

  const startDate = new Date(2025, 4, 6);

  const today = new Date();


  const diffMs = today - startDate;
  const oneDayMs = 1000 * 60 * 60 * 24;
  const days = Math.floor(diffMs / oneDayMs);

  const daysEl = document.getElementById("days-count");
  daysEl.textContent = days + " ngày";
}


function showRandomLoveMessage() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");

  const index = Math.floor(Math.random() * loveMessages.length);
  const item = loveMessages[index];

  quoteTextEl.textContent = item.message;
  quoteAuthorEl.textContent = item.from ? "— " + item.from : "";
}

const loveMessages = [
  { 
    message: "Cảm ơn em vì đã xuất hiện trong cuộc đời anh, mỗi ngày có em đều trở nên đáng mong chờ hơn bao giờ hết.", 
    from: "Lâm béoo" 
  },
  { 
    message: "Dù bận thế nào anh cũng vẫn nhớ đến em, chỉ là anh có muốn thể hiện ra hay không thui.", 
    from: "Lâm béoo" 
  },
  { 
    message: "Dường như giờ mỗi ngày thói quen của anh là thức dậy và nhớ em, sau đó mới tới những việc khác.", 
    from: "Lâm béoo" 
  },
  { 
    message: "Anh rất thích thấy em cười, thực sự rất thích vì em cười rất xinh, và nó cũng làm anh vui theo nữa.", 
    from: "Lâm béoo" 
  },
  { 
    message: "Chính ra, có những hiểu nhầm, cãi vã mà chỉ cần là 2 đứa mình ngồi lại với nhau, mọi thứ nhẹ nhàng hơn nhìu em ha!", 
    from: "Lâm béoo" 
  },
    { 
    message: "Em xinh lắm, rất rất xinh đó em biết khong. Nhiều khi chỉ cần được ngồi ngắm em thoi với anh là đủ rui công chúa ạ. ", 
    from: "Lâm béoo" 
  },
    { 
    message: "Nếu hôm nay em thấy nhớ anh hay muốn anh ôm, cứ nói anh nghe nhen, anh thích lắm á.", 
    from: "Lâm béoo" 
  },
    { 
    message: "Em có đang giận anh hong? Anh ngốc lắm, anh không biết được đâu.. Mắng cho anh 1 trận ra trò i nhenn.", 
    from: "Lâm béoo" 
  },
    { 
    message: "Yêu em, được em yêu và được ở cạnh em, đúng là thứ ngọt ngào tuỵt vời cho TVL. ", 
    from: "Lâm béoo" 
  },
   { 
    message: "Anh khong bao giờ muốn mất em, nên đừng rời xa anh nhen. Anh nhớ em lắm  ", 
    from: "Lâm béoo" 
  }, { 
    message: "Chắc là em đã phải mạnh mẽ chịu đựng nhiều thứ lắm rui. Về đây anh ôm, anh thương em bé nhà anh nhen.  ", 
    from: "Lâm béoo" 
  }, { 
    message: "Hôm nay chắc là vất vả lắm đúng hong babi.. Khong sao đâuu vì em đã làm hết sức mình rui, khen emmm ", 
    from: "Lâm béoo" 
  },
  { 
    message: "Anh cũng không biết là ngày thứ bao nhiêu mình yêu nhau rui nữa, anh chỉ biết là ANH YÊU EMM và ANH RẤT YÊU EMMMMMM arghhhhh", 
    from: "Lâm béoo" 
  }, 
    { 
    message: "Bất kể là ngoài kia thế giới có tệ bạc với em thế nào, về đây với anh, sẽ luôn có người yêu em và dỗ dành em bé iuu", 
    from: "Lâm béoo" 
  },
    { 
    message: "Hôm nay em có chuyện gì hay ho hongg, kể anh nghe vớii", 
    from: "Lâm béoo" 
  },   { 
    message: "Đồ cứng đầu có tự biết chăm sóc bản thân mình khong đấy?!. Anh kiểm tra mà thấy gầy ốm yếu là khong ổn với anh đâu!", 
    from: "Lâm béoo" 
  },
   { 
    message: "Anh cũng không hiểu tại sao em cứ than về ngoại hình của mình suốt, trong khi nó đẹp không biết chê vào đâu cả??", 
    from: "Lâm béoo" 
  },   { 
    message: "Chúng mình đã ở cạnh nhau tới giờ rui, cùng cố gắng đi xa hơn nữa nhen em bée", 
    from: "Lâm béoo" 
  },
     { 
    message: "Anh tin babi sẽ làm được! Cố lênn", 
    from: "Lâm béoo" 
  },
     { 
    message: "Bé con dũng cảm lên, dù có chuyện gì vẫn có gia đình, có anh và mng ở cạnh em maa. Đừng buồn nhaa", 
    from: "Lâm béoo" 
  },
];

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "message-f12b3.firebaseapp.com",
  projectId: "message-f12b3",
  storageBucket: "message-f12b3.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function showIdCardOnce() {
  const overlay = document.getElementById("id-card-overlay");
  if (!overlay) return;

  overlay.classList.remove("show");
  void overlay.offsetWidth;
  overlay.classList.add("show");
    setTimeout(() => {
    overlay.classList.remove("show");
  }, 1800);

  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
  }, { once: true });
}

window.addEventListener("DOMContentLoaded", () => {
  updateDaysCounter();
  showRandomLoveMessage();
  document.getElementById("refresh-btn").addEventListener("click", () => {
    showRandomLoveMessage();
  });
  setupChatBoxFirestore();

  showIdCardOnce();  
});


function getTodayKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function renderChat(messages) {
  const container = document.getElementById("chat-messages");
  if (!container) return;
  container.innerHTML = "";

  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.className = "chat-message";

    const timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = msg.timeText ? `[${msg.timeText}]` : "";

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = " " + msg.text;

    div.appendChild(timeSpan);
    div.appendChild(textSpan);
    container.appendChild(div);
  });

  container.scrollTop = container.scrollHeight;
}

function setupChatBoxFirestore() {
  const input = document.getElementById("chat-input");
  const btn = document.getElementById("chat-send-btn");
  if (!input || !btn) return;

  const todayKey = getTodayKey();
  const messagesCol = collection(db, "dailyMessages", todayKey, "messages");

  const q = query(messagesCol, orderBy("createdAt", "asc"));
  onSnapshot(q, (snapshot) => {
    const msgs = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (!data.text) return;

      let timeText = "";
      if (data.createdAt && data.createdAt.toDate) {
        const dt = data.createdAt.toDate();
        const hh = String(dt.getHours()).padStart(2, "0");
        const mi = String(dt.getMinutes()).padStart(2, "0");
        timeText = `${hh}:${mi}`;
      }

      msgs.push({ text: data.text, timeText });
    });

    renderChat(msgs);
  });

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    await addDoc(messagesCol, {
      text: text,
      createdAt: serverTimestamp(),
    });

    input.value = "";
    input.focus();
  }

  btn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

  const input = document.getElementById("chat-input");
  const btn = document.getElementById("chat-send-btn");
  if (!input || !btn) {}

 
  const todayKey = getTodayKey();
  const messagesCol = collection(
    db,
    "dailyMessages",
    todayKey,
    "messages"
  );

  // Lắng nghe realtime, sắp xếp theo thời gian
const q = query(messagesCol, orderBy("createdAt", "asc"));

onSnapshot(q, (snapshot) => {
  const msgs = [];
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    if (!data.text) return;

    let timeText = "";
    if (data.createdAt && data.createdAt.toDate) {
      const dt = data.createdAt.toDate();
      const hh = String(dt.getHours()).padStart(2, "0");
      const mi = String(dt.getMinutes()).padStart(2, "0");
      timeText = `${hh}:${mi}`;
    }

    msgs.push({
      text: data.text,
      timeText: timeText,
    });
  });

  renderChat(msgs);
});