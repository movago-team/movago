const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <header class="brand">
      <p class="logo">Movago</p>
      <h1>เทมเพลตพื้นฐานสำหรับทดสอบ</h1>
      <p class="lede">โปรเจคเริ่มต้นเปล่า — ใช้เป็นฐานสำหรับทดลองฟีเจอร์หรือ UI</p>
    </header>

    <section class="status" aria-label="สถานะโปรเจค">
      <p>สถานะ: <strong id="status">พร้อมทดสอบ</strong></p>
      <button type="button" id="ping">ทดสอบคลิก</button>
      <p class="hint" id="hint" hidden></p>
    </section>
  </main>
`

const button = document.querySelector('#ping')
const hint = document.querySelector('#hint')
const status = document.querySelector('#status')

button.addEventListener('click', () => {
  const time = new Date().toLocaleTimeString('th-TH')
  status.textContent = 'ทำงานปกติ'
  hint.hidden = false
  hint.textContent = `คลิกสำเร็จเมื่อ ${time}`
})
