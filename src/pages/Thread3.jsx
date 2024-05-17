import React from 'react'
import ddos from './../assets/images/ddos.jpg'

const Thread3 = () => {
  return (
    <div className='container'>

    <strong>
    DoS va DDoS hujumlari
    </strong><br/><br/>

    <div><img src={ddos} alt="Description of the image" /></div><br/>

    <p>
    Xizmatni rad etish (DoS) va tarqatilgan xizmat ko‘rsatishni rad etish (DDoS) hujumlari veb-sayt, server yoki tarmoqni so‘rovlar oqimi bilan to‘ldirib, qonuniy foydalanuvchilar uchun foydalana olmaydigan qilib qo‘yishga qaratilgan.
    </p><br/>

    <p>
    DoS (Xizmatni rad etish): Bitta tajovuzkorning qurilmasi maqsadli tizimni ortiqcha trafik bilan to'ldiradi, resurslarni sarflaydi va qonuniy foydalanuvchilarning unga kirishiga to'sqinlik qiladi. Tasavvur qiling, bitta odam eshikni ulkan narsa bilan to'sib, boshqalarni kirishiga to'sqinlik qilmoqda.
    </p><br/>

    <p>
    DDoS (Distributed Denial-of-Service):   Bir vaqtning o'zida nishonga bir nechta buzilgan qurilmalar bilan (ko'pincha botnet) hujum qilish. Eshikni to'sib qo'ygan butun bir olomonni o'ylab ko'ring, bu deyarli hech kimning o'tishiga yo'l qo'ymaydi.
    </p><br/>

    <strong>
    DoS va DDoS hujumlarining ta'siri:
    </strong>

    
    <ul style={{ listStyleType: 'disc' }}>
      <li>
      To'xtash vaqti: veb-saytlar yoki xizmatlar foydalanuvchilar uchun mavjud bo'lmaydii, bu daromadning yo'qolishiga olib keladi.
      </li>
      <li>
      Obro'ga putur etkazish: Tez-tez hujumlar tashkilot obro'siga putur yetkazishi va foydalanuvchilarning ishonchini yo'qotishi mumkin.
      </li>
    </ul>
  
   <br/>

    <strong>
    DoS vs DDoS oldini olish usullari:
    </strong>

    <ul style={{ listStyleType: 'disc' }}>
      <li>
      Hujum sirtini kamaytirish: Hujum yuzasiga ta'sir qilishni cheklash DDoS hujumining ta'sirini kamaytirishga yordam beradi. Ushbu ta'sirni kamaytirishning bir necha usullari orasida ma'lum joylarga trafikni cheklash, yuk balansini qo'llash va eskirgan yoki foydalanilmagan portlar, protokollar va ilovalardan aloqani blokirovka qilish kiradi.
      </li>
      <li>
      Anycast: Anycast tarmog'i tashkilot tarmog'ining sirt maydonini ko'paytirishga yordam beradi, shuning uchun u bir nechta taqsimlangan serverlar bo'ylab trafikni tarqatish orqali hajmli trafik ko'tarilishini (va uzilishlarning oldini oladi) osonroq qabul qilishi mumkin.
      </li>
      <li>
      Haqiqiy vaqtda, moslashtirilgan tahdid monitoringi: Jurnal monitoringi tarmoq trafigini tahlil qilish, trafik ko'tarilishini yoki boshqa noodatiy faoliyatni kuzatish va anomal yoki zararli so'rovlar, protokollar va IP bloklardan himoyalanish uchun moslashish orqali potentsial tahdidlarni aniqlashga yordam beradi.
      </li>
      <li>
      Keshlash: Kesh so'ralgan kontentning nusxalarini saqlaydi , shunda kamroq so'rovlar kelib chiqish serverlari tomonidan xizmat qiladi. Resurslarni keshlash uchun kontentni etkazib berish tarmog'idan (CDN) foydalanish tashkilot serverlaridagi yukni kamaytirishi va ularning qonuniy va zararli so'rovlar bilan ortiqcha yuklanishini qiyinlashtirishi mumkin.
      </li>
    </ul>

    <strong>
    DoS va DDoS oldini olish vositalari:
    </strong>

    <ul style={{ listStyleType: 'disc' }}>
      <li>
      Veb-ilovalar xavfsizlik devori (WAF): WAF veb-ilovalar va Internet o'rtasidagi zararli HTTP trafigini filtrlash, tekshirish va blokirovka qilish uchun moslashtirilgan siyosatlar yordamida hujumlarni blokirovka qilishga yordam beradi . WAF yordamida tashkilotlar ma'lum joylar va IP manzillardan kiruvchi trafikni boshqaradigan ijobiy va salbiy xavfsizlik modelini qo'llashlari mumkin.
      </li>
      <li>
      Doimiy DDoS yumshatish: DDoS yumshatish provayderi tarmoq trafigini doimiy ravishda tahlil qilish, paydo bo'layotgan hujum shakllariga javoban siyosat o'zgarishlarini amalga oshirish va ma'lumotlar markazlarining keng va ishonchli tarmog'ini ta'minlash orqali DDoS hujumlarining oldini olishga yordam beradi. Bulutli DDoS yumshatish xizmatlarini baholashda murakkab va hajmli hujumlardan moslashuvchan, kengaytiriladigan va har doim ochiq tahdiddan himoyani taklif qiluvchi provayderni qidiring.
      </li>
    </ul><br/>


    DoS va DDoS hujumlaridan to'liq himoya qilish juda qiyin. Hujumchilar doimiy ravishda yangi usullarni ishlab chiqmoqdalar va hatto murakkab himoyaga ega yirik tashkilotlar ham nishonga olinishi mumkin. Mana nima uchun to'liq himoyaga erishish qiyin:
   <br/><br/>

    <ul style={{ listStyleType: 'disc' }}>
      <li>
      Rivojlanayotgan taktikalar: Hujumchilar doimiy ravishda mavjud mudofaalardan qochish uchun yangi usullarni ishlab chiqadilar va ishlab chiqadilar. So'nggi hujum tendentsiyalaridan xabardor bo'lish va mudofaangizni shunga mos ravishda moslashtirish doimiy jarayondir.
      </li>
      <li>
      DDoS hujumlarining taqsimlangan tabiati: DDoS hujumlari bir nechta buzilgan qurilmalardan foydalanadi, bu hujumni manbasini aniqlash va blokirovka qilishni qiyinlashtiradi. Bitta tajovuzkordan farqli o'laroq, minglab buzilgan qurilmalarga ega botnet geografik jihatdan tarqalishi mumkin, bu esa hujumni izolyatsiya qilish va yumshatishni qiyinlashtiradi.
      </li>
      <li>
      Resurs cheklovlari:   DDoS hujumining to'liq oldini olish juda katta trafik hajmini boshqarish uchun katta resurslarni talab qilishi mumkin. Kichikroq tashkilotlar uchun bunday keng qamrovli himoyaga sarmoya kiritish amaliy yoki iqtisodiy jihatdan samarali bo'lmasligi mumkin.
      </li>
    </ul>






    </div>
  )
}

export default Thread3