import React from 'react'
import ransomware2 from './../assets/images/ransomware2.jpg'

const Thread2 = () => {
  return (
    <div className='container'>

    <strong>
      Ransomware nima?
    </strong>
    <br/><br/>
    <img src={ransomware2} alt="Description of the image" /><br/><br/>
    <p>
    Ransomware - bu qurbonning fayllarini shifrlaydigan va ularni  garovda ushlab turadigan hujum turi. Hujumchilar ma'lumotlarga kirishni qayta tiklash uchun shifrni ochish kaliti evaziga to'lov talab qiladi.
    </p>
    <br/>
    
    <strong>
    Ransomware turlari:
    </strong>
    <p>
      <ul style={{listStyleType: 'disc'}}>
        <li>Kripto-Ransomware: Bu eng keng tarqalgan turi. U jabrlanuvchining fayllarini shifrlaydi va ularni shifrni hal qilish kalitisiz ishlatib bo'lmaydi.</li>
        <li>Locker Ransomware: Ushbu turdagi fayllarni shifrlamaydi, lekin butun tizim yoki qurilmaga kirishni cheklaydi va foydalanuvchi hatto tizimga kirishiga to'sqinlik qiladi.</li>
        <li>Doxware/Leakware: Bu variant, agar to'lov to'lanmasa, jabrlanuvchining o'g'irlangan ma'lumotlarini ochiq manbalar yoki aniq shaxslarga oshkor qilish bilan tahdid qiladi.</li>
        <li>RaaS (Ransomware as a Service): Ushbu model cheklangan texnik tajribaga ega kiber jinoyatchilarga boshqa jinoyatchilardan to'lov vositalari va infratuzilmalariga kirishni ijaraga olish orqali to'lov dasturi hujumlarini boshlash imkonini beradi.</li>
      </ul>
      </p>
    <br/>
    
    <strong>
    Ishlash prinsipi:
    </strong>
    <br/>
    <p>
    Ransomware tajovuzkorlari tizimlariga o'zlarining zararli dasturlarini joylashtirish uchun turli xil taktikalardan foydalanadilar.
    </p>
    <br/>
    
    <p>

    <ul style={{listStyleType: 'disc'}}>
      <li>Fishing elektron pochta xabarlari: Zararli qoʻshimchalar yoki havolalarni oʻz ichiga olgan aldamchi elektron pochta xabarlari bosilganda, toʻlov dasturini qurbonning qurilmasiga yuklab oladi.</li>
      <li>Dasturiy ta'minotning zaifliklaridan foydalanish: Buzg'unchilar tizimlarga ruxsatsiz kirish uchun operatsion tizimlar, dasturiy ta'minot yoki proshivkadagi tuzatilmagan zaifliklarni nishonga oladi.</li>
      <li>Zararli sayt: ma'lum bir qurbonlar guruhi tashrif buyuradigan veb-saytlarni nishonga olish. Foydalanuvchi buzilgan veb-saytga tashrif buyurganida, uning qurilmasi to'lov dasturi hujumiga qarshi himoyasiz bo'ladi.</li>
      <li>Zararli reklama: bosilganda to'lov dasturini o'rnatib beruvchi buzilgan onlayn reklamalar.</li>
      <li>Ijtimoiy muhandislik: qurbonlarni to'lov dasturini yuklab olish yoki ularning tizimlariga kirish huquqini berish uchun aldashga qaratilgan manipulyatsiya taktikasi.</li>
    </ul>

    </p>
    <br/>
    
    <strong>
    Ransomware hujumlaridan himoyalanish usullari:
    </strong>


    <ul style={{listStyleType: 'disc'}}>
      <li>
      Muntazam zahira nusxalari: alohida, oflayn qurilmada maʼlumotlaringizning muntazam zaxira nusxalarini saqlang. Bu sizning fayllaringizni to'lov dasturi tomonidan shifrlangan bo'lsa ham tiklashingizni ta'minlaydi.
      </li>
      <li>
      Dasturlaringizni va operatsion tizimingizni yangilab turing: Dasturlar va operatsion tizimlarni muntazam yangilab turish sizni zararli dasturlardan himoya qilishga yordam beradi. Yangilanishlarni amalga oshirayotganda, eng so'nggi xavfsizlik yamoqlaridan foydalanayotganingizga ishonch hosil qiling. Bu kiberjinoyatchilarga dasturlaringizdagi zaifliklardan foydalanishni qiyinlashtiradi.
      </li>
      <li>
      Shubhali elektron pochta biriktirmalarini ochmang: Ransomware elektron pochta ilovasi orqali ham qurilmangizga yo'l topishi mumkin. Shubhali ko'rinishdagi qo'shimchalarni ochishdan saqlaning. Elektron pochta ishonchli ekanligiga ishonch hosil qilish uchun jo'natuvchiga diqqat bilan e'tibor bering va manzil to'g'ri ekanligini tekshiring.
      </li>
      <li>Xavfsizlik Dasturi: Zararli dasturlarni aniqlash va blokirovka qilish uchun taniqli anti-malware va virusga qarshi dasturlardan foydalaning.
      </li>
      <li>Hech qachon noma'lum USB flesh-disklardan foydalanmang: USB flesh-disklarni yoki boshqa xotira vositalarini qaerdan kelganini bilmasangiz, hech qachon kompyuteringizga ulamang. Kiberjinoyatchilar saqlash muhitini yuqtirgan va kimnidir undan foydalanishga undash uchun uni jamoat joyiga qo'ygan bo'lishi mumkin.
      </li>
      <li>
      Faqat ma'lum yuklab olish manbalaridan foydalaning: To'lov dasturini yuklab olish xavfini kamaytirish uchun hech qachon noma'lum saytlardan dasturiy ta'minot yoki media fayllarni yuklab olmang. Yuklab olish uchun tasdiqlangan va ishonchli saytlarga ishoning. Ushbu turdagi veb-saytlar ishonch muhrlari bilan tan olinishi mumkin. Siz tashrif buyurayotgan sahifaning brauzer manzil satrida “http” o‘rniga “https” ishlatilganligiga ishonch hosil qiling. Manzil satridagi qalqon yoki qulf belgisi ham sahifa xavfsiz ekanligini ko'rsatishi mumkin. Mobil qurilmangizga biror narsani yuklab olayotganda ham ehtiyot bo'ling. Qurilmangizga qarab Google Play do'koniga yoki Apple App Store do'koniga ishonishingiz mumkin.
      </li>
      <li>
      Umumiy Wi-Fi tarmoqlarida VPN xizmatlaridan foydalaning: Umumiy Wi-Fi tarmoqlaridan vijdonan foydalanish to'lov dasturidan oqilona himoya chorasi hisoblanadi. Umumiy Wi-Fi tarmog'idan foydalanganda, kompyuteringiz hujumlarga ko'proq moyil bo'ladi. Himoyalangan bo‘lish uchun maxfiy tranzaksiyalar uchun umumiy Wi-Fi-dan foydalanmang yoki xavfsiz VPN xizmatidan foydalaning.
      </li>
      <li>
      Shaxsiy ma'lumotlarni oshkor qilishdan saqlaning: Agar siz ishonchsiz manbadan shaxsiy ma'lumotlarni so'rab qo'ng'iroq, matnli xabar yoki elektron pochta xabarini olsangiz, javob bermang. Ransomware hujumini rejalashtirayotgan kiberjinoyatchilar shaxsiy ma'lumotlarni oldindan to'plashga harakat qilishlari mumkin, keyinchalik ular fishing xabarlarini sizga moslashtirish uchun ishlatiladi. Xabarning qonuniy ekanligiga shubhangiz bo'lsa, to'g'ridan-to'g'ri jo'natuvchi bilan bog'laning.
      </li>
      <li>
      Hech qachon xavfli havolalarni bosmang: spam xabarlardagi yoki noma'lum veb-saytlardagi havolalarni bosishdan saqlaning. Agar siz zararli havolalarni bossangiz, avtomatik yuklab olish ishga tushishi mumkin, bu esa kompyuteringizga zarar etkazishi mumkin.
      </li>
    </ul>
    
   
   <strong>
   To'liq himoya qilish qiyin
   </strong>
   
    <p>
    Afsuski, ransomware hujumlaridan to'liq himoyaga erishish juda qiyin. Kiberjinoyatchilar doimiy ravishda xavfsizlik choralarini chetlab o'tishning yangi usullarini ishlab chiqmoqdalar. Biroq, yuqoridagi strategiyalarni amalga oshirish orqali siz qurbon bo'lish xavfini sezilarli darajada kamaytirishingiz va hujumdan tiklanish imkoniyatini oshirishingiz mumkin.
    </p>
    <br/>
    
    <strong>
    E'tiborga olish kerak bo'lgan qo'shimcha maslahatlar
    </strong>

    <p>

    <ul style={{listStyleType: 'disc'}}>
      <li>
      Baxtsiz hodisalarga javob berish rejalarining ahamiyati: to'lov dasturi hujumiga javob berish rejasiga ega bo'lish zararni minimallashtirish va tiklanishni tezlashtirishi mumkin.
      </li>
      <li>
      Huquqni muhofaza qilish organlarining roli: har doim to'lov dasturi hujumlari haqida huquqni muhofaza qilish organlariga xabar bering. Bu ularga tajovuzkorlarni kuzatishga va ushbu tahdidlarga qarshi kurashish strategiyalarini ishlab chiqishga yordam beradi.
      </li>
    </ul>

    </p>
    <br/>

    </div>
  )
}

export default Thread2