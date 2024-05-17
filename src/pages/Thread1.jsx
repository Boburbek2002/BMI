import React from 'react'
import fishing2 from './../assets/images/fishing2.jpg'

function Thread1() {
  return (
    <div className='container'>
<strong>
Phishing nima?
</strong>
<br/><br/>

<img src={fishing2} alt="Description of the image" />
<p><br/>
&nbsp;&nbsp;&nbsp;&nbsp; Phishing - bu shaxsiy ma'lumotlaringizni o'g'irlash uchun firibgarlarning yashirin urinishi. Ular odatda sizni aldashga harakat qiladilar, masalan, bankingiz yoki tanish kompaniyangiz nomidan foydalanishadi. Parollaringiz yoki hisob raqamlaringiz kabi nozik ma'lumotlarni oshkor qilishingizga umid qilib, ular sizga elektron pochta xabarlari, SMS yuborishadi hatto qo'ng'iroq qilishadi.
</p>
<br/>








<strong>
Phishing turlari:
</strong>
<br></br>

<p>
1. Elektron pochta orqali fishing: eng keng tarqalgan turi. Elektron pochta xabarlari banklar, ijtimoiy media platformalari yoki hatto davlat idoralari kabi qonuniy manbalardan kelganga o'xshaydi. Ular ko'pincha quyidagilarni o'z ichiga oladi:
</p>
<ul style={{ listStyleType: 'disc' }}>
  <li>Soxta yuboruvchi manzillari: Haqiqiy kompaniyalarga taqlid qilish uchun mo'ljallangan aldamchi elektron pochta manzillari.</li>
  <li>Shoshiltirish usuli: Hisob xavflari yoki cheklangan vaqtli takliflar tufayli sizni tezda harakat qilishga undaydigan bosim taktikasi.</li>
  <li>Shubhali qo'shimchalar yoki havolalar: Bularni bosish ma'lumotni o'g'irlash yoki zararli dasturlarni yuklab olish uchun yaratilgan soxta veb-saytlarga olib boradi.</li>
</ul>
<br/>

<p>
2. Smishing: SMS matnli xabarlar orqali yetkaziladigan fishing urinishlari. Elektron pochta orqali fishingga o'xshash taktikalar, qisqartirilgan URL manzillari yoki soxta raqamlarga qo'ng'iroqlarni taklif qiluvchi shoshilinch xabarlar bilan qo'llaniladi.
</p>
<br/>

<p>
3. Vishing: Vishing ovozli qo'ng'iroqlar orqali amalga oshiriladi. Fisherlar ishonchli tashkilotlar vakillariga o‘xshab, sizni aldab telefon orqali ma’lumotlarni olishga urinadi.
</p>
<br/>

<p>
4. Spear Phishing: Fisherlar elektron pochta xabarlarini shaxsiylashtirish uchun qurbonlarni oldindan o'rganib, ularni ishonchliroq qilish uchun amalga oshiriladigan maqsadli hujum. Ma'lumotlar ijtimoiy media profillaridan yoki ma'lumotlar buzilishidan olinishi mumkin.
</p>
<br/>

<strong>
  Phishingni amalga oshirish usullari:
</strong>

<ul style={{ listStyleType: 'disc' }}>
  <li>Soxta jo'natuvchi manzillari: Ular qonuniy kompaniyalarnikiga o'xshash elektron pochta manzillarini yaratadilar.
</li>
  <li>Ssenariy: Fisherlar sizni jalb qilish uchun ssenariy tuzadilar. Ular sizning hisobingiz buzilganligini, buyurtmangiz bilan bog‘liq muammo borligini yoki siz kutilmagan foyda olish huquqiga ega ekanligingizni da’vo qilishlari mumkin.</li>
  <li>Shoshiltirish: Ular sizda shoshilinchlik tuyg'usini yaratib, tezda harakat qilishingizga majbur qiladi. Ushbu taktikada qo'rquv juda katta rol o'ynaydi va sizni xavfsizlik protokollarini chetlab o'tishga majbur qilishi mumkin.</li>
  <li>Soxta veb-saytlar: Phishing elektron pochta xabarlari yoki matnlarida ko'pincha haqiqiy kirish sahifalarini taqlid qilish uchun mo'ljallangan veb-saytlarga havolalar mavjud. Hisob ma'lumotlaringizni kiritganingizdan so'ng, fisher ma'lumotlaringizni o'g'irlaydi.  </li>
  <li>Zararli dasturlarni yuklab olish: Fishing elektron pochta xabarlari yoki matnlari ochilganda qurilmangizga zararli dasturlarni o'rnatadigan qo'shimchalarni o'z ichiga olishi mumkin. Ushbu zararli dastur ma'lumotlarni o'g'irlashi, tugmalar bosishlarini kuzatishi yoki fisherga qurilmangizga masofadan kirish huquqini berishi mumkin.</li>
</ul>



<strong>
Phishing tarmog'idan qanday himoyalanish mumkin?
</strong><br/>

<p>
Phishing taktikasini tushunib, siz qurbon bo'lish xavfini sezilarli darajada kamaytirishingiz mumkin. Himoyalanish uchun asosiy strategiyalar:
</p>
<br/>

<ul style={{ listStyleType: 'disc' }}>
  <li>Elektron pochta xabarlari, matnlar va qo'ng'iroqlarni ko'rib chiqing: noma'lum yuboruvchilarning havolalari yoki qo'shimchalarini bosmang. Keraksiz qo'ng'iroqlardan ehtiyot bo'ling, hatto ular qonuniy tashkilotlardan bo'lsa ham.</li>
  <li>Yuboruvchining qonuniyligini tekshiring: Agar elektron pochta yoki xabar mazmuniga ishonchingiz komil bo'lmasa, to'g'ri deb bilgan telefon raqami kabi ishonchli kanal orqali jo'natuvchi bilan bevosita bog'laning. Shubhali xabarda ko'rsatilgan aloqa ma'lumotlaridan foydalanmang.</li>
  <li>Kuchli parollar va KFA(Ko'p faktorli autentifikatsiya): Barcha onlayn hisoblar uchun kuchli, noyob parollardan foydalaning va iloji boricha ko'p faktorli autentifikatsiyani (KFA) yoqing. KFA faqat parolingizdan tashqari barmoq izi, yuz skaneri yoki 1 martalik parollar orqali ikkinchi tekshirish bosqichini talab qilib, qoʻshimcha xavfsizlik qatlamini qoʻshadi.</li>
  <li>Dasturiy ta'minotni yangilab turing: Phisherlar foydalanishi mumkin bo'lgan zaifliklarni tuzatish uchun operatsion tizimingizni, veb-brauzeringizni va xavfsizlik dasturlarini muntazam yangilab turing.</li>
  <li>Shaxsiy ma'lumotlaringizni hech kimga uzatmang: Internetda va telefon orqali qanday shaxsiy ma'lumotlaringizni uzatishda ehtiyot bo'ling. Qonuniy kompaniyalar nomaqbul elektron pochta xabarlari, SMS xabarlar yoki qo'ng'iroqlar orqali maxfiy ma'lumotlarni so'ramaydi.</li>
  <li>Veb sahifalar domeniga doimo e'tiborli bo'ling: Masalan microsoft.com va rnicrosoft.com domen nomlari bir qarashda bir xil ammo ular umuman boshqa saytlar domeni. Faqat 1-si haqiqiy Microsoft kompaniyasi sayti</li>
</ul>


<center>
  <strong>
Afsuski, fishing hujumlaridan to'liq himoyalanish qilish juda qiyin. Hujumchilar doimiy ravishda o'z taktikalarini rivojlantirmoqdalar, hatto eng oxirgi texnologiyani biladigan odamlar ham aqlli tarzda yaratilgan firibgarlikka aldanib qolishlari mumkin. Biroq, eng so'nggi phishing taktikalaridan xabardor bo'lish sizning hujumlarga qarshi turishingizda yordam beradi. Bizning veb sahifamiz bunda sizga yordam beradi. Sahifamizga tashrif buyuring va eng oxirgi yangiliklardan xabardor bo'ling.
</strong>
</center>
<br/>




    </div>
  )
}

export default Thread1
