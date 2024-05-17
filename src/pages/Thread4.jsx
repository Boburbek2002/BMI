import React from 'react'
import mitm2 from './../assets/images/mitm2.jpg'

const Thread4 = () => {
  return (
    <div className='container'>
      <strong>
      O'rtadagi odam (MitM) hujumlari
      </strong><br/><br/>

      <div><img src={mitm2} alt="Description of the image" /></div>
      <br/>
      <p>
      O'rtadagi odam (MitM) hujumi bu kiberhujum bo'lib, tajovuzkor ikki tomon o'rtasidagi aloqaga yashirincha kiradi. Keyin tajovuzkor suhbatni tinglashi, ma'lumotlarni ushlab turishi va hatto jabrlanuvchi va qonuniy qabul qiluvchi o'rtasidagi ma'lumotlarni o'zgartirishi mumkin. Tasavvur qiling-a, siz do'stingiz bilan yashirin suhbat quryapsiz, lekin chaqirilmagan tinglovchi o'rtaga yashirinib kiradi va siz aytgan hamma narsani eshitadi.
      </p><br/>

      <strong>
      MitM hujumlari qanday ishlaydi:
      </strong><br/><br/>
      <p>
      1. Hujumchi joylashuvi: tajovuzkor o'zini jabrlanuvchi va mo'ljallangan oluvchi o'rtasida joylashtiradi. Bunga turli usullar yordamida erishish mumkin, masalan:
      <ul style={{listStyleType: 'disc'}}>
        <li>
        Zararli Wi-Fi tarmoqlari: Buzg'unchi qonuniy ko'rinadigan soxta Wi-Fi tarmog'ini yaratadi va qurbonlarni aldab ulanishga majbur qiladi. Ulanganidan so'ng, tajovuzkor jabrlanuvchining qurilmasi va internet o'rtasidagi trafikni to'xtata oladi.
        </li>
        <li>
        ARP Spoofing: tajovuzkor soxta manzillarni aniqlash protokoli (ARP) xabarlarini yuborish orqali qurbonning qurilmasini aldaydi. Bu jabrlanuvchining qurilmasi o'z aloqasini mo'ljallangan qabul qiluvchi o'rniga tajovuzkorning qurilmasiga yuborishga majbur qiladi.
        </li>
        <li>
        DNS Spoofing: Buzg'unchi qurbonning DNS so'rovlarini qonuniy veb-saytga o'xshash zararli veb-saytga yo'naltiradi. Jabrlanuvchi soxta veb-saytga ma'lumotlarni kiritganda, tajovuzkor uni tutib oladi.
        </li>
      </ul>
      2. Tinglash va buzish: Tajovuzkor jabrlanuvchi va qabul qiluvchi o'rtasidagi muloqotni tinglashi mumkin. Bu tizimga kirish ma'lumotlari, kredit karta ma'lumotlari yoki shaxsiy xabarlar kabi nozik ma'lumotlarni o'z ichiga olishi mumkin. Ba'zi hollarda, tajovuzkor hatto almashilayotgan ma'lumotlarni o'zgartirib, suhbatni manipulyatsiya qilishi mumkin.
      </p><br/>

      <strong>
      MitM hujumlarining turlari:
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Seansni o'g'irlash: Buzg'unchi jabrlanuvchi va qonuniy veb-sayt yoki xizmat o'rtasidagi mavjud aloqa seansini o'zlashtiradi.
        </li>
        <li>
        SSL o'chirish: Buzg'unchi xavfsiz HTTPS ulanishini xavfsiz bo'lmagan HTTP ulanishiga tushirib, shifrlanmagan ma'lumotlarni olish imkonini qo'lga kiritadi.
        </li>
        <li>
        Veb-keshni zararlash: tajovuzkor veb-keshga zararli kodni kiritadi, keyinchalik u ma'lum bir veb-saytga tashrif buyurgan qurbonlarga qarshi xizmat qilishi mumkin.
        </li>
      </ul>

      <strong>
      MitM hujumlarining ta'siri:
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Ma'lumotlarni o'g'irlash: foydalanuvchi nomlari, parollar, kredit karta ma'lumotlari va xabarlar kabi nozik ma'lumotlar o'g'irlanishi mumkin.
        </li>
        <li>
        Shaxsni o'g'irlash: O'g'irlangan hisob ma'lumotlari jabrlanuvchiga taqlid qilish va ularning hisoblari yoki manbalariga kirish uchun ishlatilishi mumkin.
        </li>
        <li>
        Moliyaviy yo'qotish: MitM hujumlari orqali olingan moliyaviy ma'lumotlar soxta xaridlar uchun ishlatilishi mumkin.
        </li>
      </ul><br/>

      <strong>
      Ma'lumotlaringizni himoya qilish: O'rtadagi odam (MitM) hujumlaridan himoya qilish usullari
      </strong><br/><br/>
      <p>
      Man-in-the-Middle (MitM) hujumlari sizning onlayn xavfsizligingizga jiddiy tahdid soladi. O'zingizni himoya qilish uchun qo'llashingiz mumkin bo'lgan ba'zi asosiy strategiyalar:
      </p><br/>

      <strong>
      Xavfsiz ulanishlarga ustunlik berish:
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Hamma joyda HTTPS:   Veb-saytga biron bir nozik ma'lumotni kiritishdan oldin har doim brauzeringizning manzil satrida "https://" indikatori va qulf belgisini qidiring. "HTTPS" shifrlash bilan xavfsiz ulanishni bildiradi, bu esa tajovuzkorlarning sizning muloqotingizni tinglashini ancha qiyinlashtiradi.
        </li>
        <li>
        Umumiy Wi-Fi tarmog'idan ehtiyot bo'ling: Umumiy Wi-Fi tarmoqlari xavfsiz emas. Onlayn banking, parollarni kiritish yoki onlayn xaridlarni amalga oshirish kabi nozik harakatlar uchun ulardan foydalanishdan saqlaning. Agar siz umumiy Wi-Fi tarmog'idan foydalanishingiz kerak bo'lsa, trafikni shifrlash va qurilmangiz va internet o'rtasida xavfsiz tunnel yaratish uchun VPN (Virtual Private Network) dan foydalanishni o'ylab ko'ring.
        </li>
        <li>
        Uy tarmog'ingizni himoyalang: Wi-Fi tarmog'ingiz uchun kuchli paroldan foydalaning va uy tarmog'ingizni ruxsatsiz kirishdan himoya qilish uchun WPA2 shifrlashni (yoki mavjud bo'lsa WPA3) yoqing. Routeringizdagi dasturiy ta'minotni muntazam yangilab turing.
        </li>
      </ul><br/>

      <strong>
      Kuchli autentifikatsiya choralari:
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Kuchli va noyob parollar:   Barcha onlayn hisoblaringiz uchun har doim kuchli, noyob parollardan foydalaning. Bir nechta hisoblar uchun osongina taxmin qilinadigan parollardan yoki bir xil paroldan foydalanishdan saqlaning. Kuchli parollarni xavfsiz yaratish va saqlash uchun parol menejeridan foydalanishni o'ylab ko'ring.
        </li>
        <li>
        Ko'p faktorli autentifikatsiya (KFA): Iloji boricha ko'p faktorli autentifikatsiyani (KFA) yoqing. Bu paroldan tashqari ikkinchi tekshirish bosqichini talab qilish orqali qo'shimcha xavfsizlik darajasini oshiradi. Bunga qo'shimcha kod kiritish yoki barmoq izi skaneridan foydalanish kiradi.
        </li>
      </ul><br/>

      <strong>
      Xavfsizlik dasturi va xabardorlik::
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Yangilangan dasturiy ta'minot:   Barcha qurilmalaringizdagi operatsion tizimingiz, ilovalaringiz va proshivkangizni so'nggi xavfsizlik yamoqlari bilan yangilab turing. Ushbu yamoqlar ko'pincha tajovuzkorlar MitM hujumlarini boshlash uchun foydalanadigan zaifliklarni bartaraf etadi.
        </li>
        <li>
        Xavfsizlik Dasturi:   Zararli dasturlarga va fishingga qarshi xususiyatlarga ega xavfsizlik dasturidan foydalanishni o'ylab ko'ring. Bular MitM hujumlarida ishlatilishi mumkin bo'lgan zararli veb-saytlar yoki dasturlarni aniqlash va blokirovka qilishga yordam beradi.
        </li>
        <li>
        Fishingdan xabardorlik:   Sizni zararli havolalarni bosish yoki qo'shimchalarni yuklab olish uchun aldashga urinayotgan shubhali elektron pochta xabarlari, matnli xabarlar yoki ijtimoiy media xabarlaridan ehtiyot bo'ling. Ushbu taktikalar MitM hujumlarini osonlashtiradigan zararli dasturlarni o'rnatish uchun ishlatilishi mumkin. Noto'g'ri yozilgan URL manzillar, grammatik xatolar yoki shoshilinchlik hissi kabi fishing urinishlarini aniqlashni o'rganing.
        </li>
      </ul><br/>

      <strong>
      Qo'shimcha tavsiyalar:
      </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        Umumiy qurilmalardagi virtual klaviatura: Umumiy kompyuterlardan foydalanganda parollar kabi nozik maʼlumotlarni kiritish uchun ekranda virtual klaviaturadan foydalanishni oʻylab koʻring. Bu zararli dasturiy ta'minot sizning tugmalar bosishlaringizni ushlab qolishining oldini olishga yordam beradi.
        </li>
        <li>
        Bepul yoki buzilgan dasturlardan ehtiyot bo'ling: dasturiy ta'minotni faqat ishonchli manbalardan yuklab oling. Bepul yoki buzilgan dasturlarni yuklab olishdan saqlaning, chunki ular MitM hujumlarida ishlatilishi mumkin bo'lgan zararli dasturlar bilan birga bo'lishi mumkin.
        </li>
      </ul><br/>

      <p>
      Ushbu strategiyalarni amalga oshirish va hushyorlikni saqlab qolish orqali siz MitM hujumlari qurboni bo'lish xavfini sezilarli darajada kamaytirishingiz va shaxsiy ma'lumotlaringizni onlayn himoya qilishingiz mumkin.
      </p><br/>

    </div>
  )
}

export default Thread4
