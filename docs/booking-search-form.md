# Booking search form (3 tabs)

เอกสารข้อตกลงโครงสร้างฟอร์มค้นหารถ MOVAGO (Home / Book)  
เก็บเป็นเอกสารอย่างเดียว — ยังไม่ผูก implementation

---

## วัตถุประสงค์ของ End Time

ต้องมี **End Time** ทุกแท็บ เพื่อล็อกช่วงครอง **รถ + คนขับ** เป็น `[start, end]`

หลังถึงเวลา End (บวก buffer ถ้ามี) สามารถ:

- ปล่อยรถไปเช่ารายวันต่อในวันเดียวกัน
- ให้คนขับไปรับลูกค้าทริปถัดไปได้ หากยังมีเวลาในวัน / ไม่ชน OT

---

## กฎร่วมทุกแท็บ

| กฎ | รายละเอียด |
|----|------------|
| End > Start | เวลาจบต้องหลังเวลาเริ่ม |
| Availability | ค้นหาเฉพาะรถ/คนขับที่ว่างทั้งช่วง `[start, end]` |
| Location | รองรับ Google Places หรือปักหมุดแผนที่ |
| Vehicle | ตอนค้นหาอาจยังไม่เลือก — ต้องมีก่อนยืนยันจอง |

### ฟิลด์ร่วม

| ฟิลด์ | ความจำเป็น | หมายเหตุ |
|------|------------|----------|
| From | จำเป็น | จุดรับ / ต้นทาง |
| Date | จำเป็น | วันใช้บริการ |
| Start Time | จำเป็น | เวลาเริ่ม |
| End Time | จำเป็น | ล็อกช่วงครองรถ/คนขับ |
| Vehicle | ตาม flow | optional ตอน search |
| Passengers | แนะนำ | |
| Luggage | แนะนำ | |

---

## 1) Airport Transfer (`airport`)

รับ–ส่งสนามบิน (ด้านหนึ่งเป็นสนามบิน)

| ฟิลด์ | ความจำเป็น | รายละเอียด |
|------|------------|------------|
| Direction | จำเป็น | Airport → ที่หมาย หรือ ที่หมาย → Airport |
| From | จำเป็น | สนามบิน หรือจุดรับ |
| To | จำเป็น | จุดตรงข้าม |
| Date | จำเป็น | |
| Start Time | จำเป็น | เวลารับ |
| End Time | จำเป็น | เวลาคาดว่าส่งเสร็จ / คืนรถเข้า pool |
| Flight Number | แนะนำ | ติดตามไฟล์ท / meet & greet |
| Vehicle | ตาม flow | |
| Passengers | แนะนำ | |
| Luggage | แนะนำ | |

---

## 2) Hourly Service (`hourly`)

เช่าคนขับรายชั่วโมง / ช่วงเวลาในพื้นที่

| ฟิลด์ | ความจำเป็น | รายละเอียด |
|------|------------|------------|
| From (Pickup) | จำเป็น | จุดเริ่มต้น |
| To | ไม่บังคับ | บอกพื้นที่ใช้งานคร่าวๆ ได้ |
| Date | จำเป็น | |
| Start Time | จำเป็น | |
| End Time | จำเป็น | หรือคำนวณจาก Duration |
| Duration (hours) | ทางเลือก | UI ช่วยกรอก → ต้องได้ End Time ก่อนค้นหา |
| Service Area | แนะนำ | เช่น กรุงเทพ / รัศมี |
| Vehicle | ตาม flow | |
| Passengers | แนะนำ | |

หมายเหตุ: ถ้าใช้ Duration ให้ถือว่า `End = Start + Duration` แล้วเก็บ End ชัดเจนเสมอ

---

## 3) Intercity Transfer (`intercity`)

รับ–ส่งข้ามเมือง (ครองรถนานกว่า)

| ฟิลด์ | ความจำเป็น | รายละเอียด |
|------|------------|------------|
| From | จำเป็น | เมือง/จุดต้นทาง |
| To | จำเป็น | เมือง/จุดปลายทาง |
| Date | จำเป็น | |
| Start Time | จำเป็น | |
| End Time | จำเป็น | สำคัญมากสำหรับปล่อยรถ/คนขับต่อ |
| Trip Type | แนะนำ | one_way / round_trip |
| Vehicle | ตาม flow | |
| Passengers | แนะนำ | |
| Luggage | แนะนำ | |

---

## ตารางเทียบเร็ว

| ฟิลด์ | Airport | Hourly | Intercity |
|------|:-------:|:------:|:---------:|
| Direction | จำเป็น | — | — |
| From | จำเป็น | จำเป็น | จำเป็น |
| To | จำเป็น | optional | จำเป็น |
| Date | จำเป็น | จำเป็น | จำเป็น |
| Start Time | จำเป็น | จำเป็น | จำเป็น |
| End Time | จำเป็น | จำเป็น | จำเป็น |
| Duration | — | ทางเลือกแทน End | — |
| Flight Number | แนะนำ | — | — |
| Service Area | — | แนะนำ | — |
| Trip Type | — | — | แนะนำ |
| Vehicle | ตาม flow | ตาม flow | ตาม flow |
| Passengers / Luggage | แนะนำ | แนะนำ | แนะนำ |

---

## ข้อมูลที่ต้องได้หลังกด Search

ทุกแท็บต้องได้ช่วงเวลาชัดเจนสำหรับล็อกทรัพยากร:

- `serviceType`: `airport` | `hourly` | `intercity`
- `from`, `to` (hourly อาจเป็น null)
- `date`
- `startTime`, `endTime`
- (optional) vehicle, passengers, luggage
- ฟิลด์เฉพาะแท็บ: direction, flightNumber, durationHours, serviceArea, tripType

หลัง `endTime` → รถ/คนขับว่าง → หมุนไปทริปถัดไปหรือเช่ารายวันในวันนั้นได้
