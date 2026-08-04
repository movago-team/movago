# 🏎️ Movago Live Test

## 📌 โจทย์ชุดที่ 1 (รอบ 13:00 น.): Luxury Fleet Rental Card
ให้สร้าง Responsive Card / Grid สำหรับแสดงผลรายการรถเช่าหรู โดยใช้ React/Next.js + Tailwind CSS
- ดึงข้อมูลจากไฟล์ `cars.json` มาแสดงผล
- แสดงข้อมูล: รูปภาพ, ยี่ห้อ, รุ่น, ประเภทรถ, จำนวนที่นั่ง, เกียร์, และราคาต่อวัน
- ดีไซน์แนว **Luxury Minimal** (เน้น Spacing และ Typography ชัดเจนสวยงาม)
- **Logic:** 
  - รถที่ `is_available: true` ให้มีปุ่ม "จองรถคันนี้"
  - รถที่ `is_available: false` ให้แสดงป้าย "ถูกจองแล้ว" และปุ่มกดไม่ได้ (Disabled)