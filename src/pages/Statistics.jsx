import React from "react";
import { Container } from "reactstrap";
import ransomstatistics from './../assets/images/ransomstatistics.jpg'
import ransomstatistics2 from './../assets/images/ransomstatistics2.jpg'
import ddosstatistics from './../assets/images/ddosstatistics.png'
import iotstatistics from './../assets/images/iotstatistics.png'
import iotstatistics2 from './../assets/images/iotstatistics2.png'
import crimeprice from './../assets/images/crimeprice.png'
import '../App.css'





const Statistics = () => {
  return (
    <div className="statistics">
      <Container>
        <br/>
        <strong>
        2019-2024 yillar uchun kiberjinoyatlar statistikasi
        </strong><br/><br/>

      <ul style={{listStyleType: 'disc'}}>
        <li>
        2023-yilda 30 million yangi zararli dastur namunalari aniqlandi ( AV-Test ). Bu, aslida, o'tgan yilga nisbatan uchdan ikki baravar kamayganini ko'rsatadi.
        </li>
        <li>
        2019-yilda kuzatilgan zararli dasturlarning 93,6 foizi polimorf edi , ya’ni u aniqlashdan qochish uchun o‘z kodini doimiy ravishda o‘zgartirish imkoniyatiga ega ( 2020 Webroot tahdid hisoboti ).
        </li>
        <li>
        Bir marta yuqtirgan biznes kompyuterlarining 45 foizi va iste'molchi shaxsiy kompyuterlarining 53 foizi o'sha yil ichida qayta infektsiyalangan ( 2022-yil Webroot tahdid hisoboti )
        </li>
        <li>
        Merilend universitetida 2007-yilda o'tkazilgan tadqiqot shuni ko'rsatdiki, zararli xakerlar avvallari kompyuterlar va tarmoqlarga har 39 soniyada bir marta hujum qilishgan . Internetdagi jinoyatlar bo‘yicha shikoyat markazining 2022 yilgi hisobotida o‘sha yili 800 944 ta xabar borligi aniqlangan. Bu har 0,65 soniyada bitta muvaffaqiyatli hujum amalga oshirilgan degani.
        </li>
        <li>
        So‘rovda qatnashgan tashkilotlarning 84,7 foizi muvaffaqiyatli kiberhujumga uchragan.  Bu 2022-yildagi 85,3 foizdan va 2021 yildagi 86,2 foizdan kam. ( CyberEdge Group 2023 Cyberthreat Defense Report )
        </li>
        <li>
        2025-yilga borib kiberjinoyatlarning global zarari yiliga 10,5 trillion dollargacha yetishi kutilmoqda (Cybersecurity Ventures)
        </li>
      </ul>



      <strong>
      Ransomware statistikasi
      </strong><br/><br/>

     <p>So'nggi yillarda to'lov dasturini yuqtirish darajasi keskin oshdi, bu asosan onlayn o'rganish va masofaviy ishlash platformalarining ahamiyati ortishi bilan bog'liq.</p>

     <ul style={{listStyleType: 'disc'}}>
      <li>
      Birgina 2023-yilning birinchi yarmida AQShning to‘lov dasturi hujumlari taxminan 449 million dollarga tushgan. ( Emsisoft )
      </li>
      <li>
      2022-yilda 493,3 million to‘lov dasturi hujumi sodir bo‘ldi, bu o‘tgan yilga nisbatan bir oz pasaygan. ( SonicWall )
      </li>
      <li>2023 yilgi hisobotga ko'ra, ransomware hujumlarining 93 foizi maxsus maqsadli zaxira omborlariga qaratilgan va bu urinishlarning 75 foizi muvaffaqiyatli bo'lgan . ( Veeam )
      </li>
      <li>
      Dunyo bo'ylab har soatda 37 700 dan ortiq to'lov dasturi hujumlari sodir bo'ladi. Bu har daqiqada taxminan 578 ta to'lov dasturi hujumi. ( Metyu Vudvord )
      </li>
      <li>
      2022-yilda Amerika ta’lim muassasalari to‘lovga oid hujumlar natijasida ishlamay qolishlari sababli taxminan 9,45 milliard dollar yo‘qotdi.
      </li>
      <li>
      Ransomware to'lovlari yangi yuqori darajaga yetdi. 2023-yilning ikkinchi choragida o‘rtacha to‘lov 1,54 million dollarni tashkil etdi, bu o‘tgan yilga nisbatan deyarli 100 foizga ko‘p. ( Koveware )
      </li>
     </ul>

     <div><img src={ransomstatistics} alt="ransomstatistics" /></div>

     <center>Chorak bo'yicha to'lovlar</center>
    <br/>
     
    <p>
    2023-yilda ransomware Germaniya, Saudiya Arabistoni va Xitoydagi korxonalarga eng og‘ir zarba berdi.
    </p>

    <div><img src={ransomstatistics2} alt="ransomstatistics2" /></div>

    <center>
    So'nggi 12 oy ichida to'lov dasturidan jabrlangan tashkilotlarning mamlakatlar bo'yicha foizlari
    </center>
    <br/>

    <strong>
    DDoS hujumlari davomiyligi va chastotasi bo'yicha o'sib boradi
    </strong><br/><br/>

    <p>
    Internetga har qachongidan ham ko'proq himoyalanmagan qurilmalar ulanganligi sababli, kiberjinoyatchilar o'zlarining qayta ishlash imkoniyatlaridan to'liq foydalanmoqdalar. Botnetlarga jalb qilingandan so'ng , ular kuchli DDoS hujumlarini boshlash uchun o'zlarining jamoaviy kuchlaridan foydalanadilar,  bu kompaniyalar deyarli omon qolmaydi.
    </p><br/>
    
    <ul style={{listStyleType: 'disc'}}>
      <li>2022-yilning uchinchi choragida DDoS hujumlari soni 2021-yilning shu davriga nisbatan 4,5 baravardan oshgan. ( Kasperskiy laboratoriyasi )</li>
      <li>Tashkilotlarning 71 foizi DDoS tahdidiga duch kelgan.</li>
    </ul>

    <strong>
    2022-yilda fishing biroz kamaydi
    </strong><br/><br/>

    <p>
    Fishing 2022-yilda Internetdagi jinoyatlar bo‘yicha shikoyat markaziga (IC3) xabar qilingan jinoyatlarning eng yuqori turi bo‘ldi, biroq 2021-yilga nisbatan taxminan 20 000 taga kam hodisalar kuzatilgan. ( IC3 Internet Crime Report 2022 )
    </p><br/>

    <ul style={{listStyleType: 'disc'}}>
      <li>
      2021-yilning 3-choragida APWG 1 286 000 dan ortiq noyob fishing veb-saytlarini aniqladi va 90 000 dan ortiq noyob fishing mavzularini kuzatdi
      </li>
      <li>
      Fishing hujumlarining 30% dan ortig'i keyloggerlarni o'z ichiga oladi.(Cofense)
      </li>
      <li>
      Tog'-kon kompaniyalari zararli elektron pochta xabarlarini olish ehtimoli katta. (Symantec’ning 2019 yildagi Internet xavfsizligiga tahdidlar hisoboti)
      </li>
      <li>
      2019-yilning so‘nggi choragida fishing saytlarining 74 foizi HTTPS’dan foydalangan, bundan ikki yil oldin atigi 32 foiz. ( ENISA Threat Landscape 2020 – Fishing )
      </li>
      <li>
      2019-yilda zararli qo‘shimchalarning deyarli 43 foizi Microsoft Office hujjatlari edi. Biroq, Microsoft makroslarni qo'llab-quvvatlashni o'chirib qo'yganligi sababli, tajovuzkorlar tobora ko'proq ZIP, LNK yoki ISO fayllariga o'tmoqda. (ENISA 2023)
      </li>
      <li>
      Dushanba - bu fishing xabarlarini yuborish uchun eng mashhur kun bo'lib, elektron pochta xabarlarining 30 foizi shu kuni yetkaziladi. (ENISA Threat Landscape 2020 – Fishing)
      </li>
      <li>
      Eng tez-tez taqlid qilinuvchi brendlar Microsoft (33 foiz), Amazon (9 foiz) va Google (8 foiz). ( Checkpoint Research Q4 2023 Brend Phishing hisoboti )
      </li>
    </ul>
    <br/> <br/>

    <div><img src={ddosstatistics} alt="ddosstatistics" /></div>

    <center>
    APWG ning 2023-yil 2-chorak uchun fishing faoliyati tendentsiyalari hisoboti
    </center><br/>

    <strong>
    Kiber jinoyatlar statistikasi shuni ko'rsatadiki, jismoniy hujumlar ham ko'paymoqda:
    </strong><br/><br/>

    <ul style={{listStyleType: 'disc'}}>
      <li>2020-yilda kiberxavfsizlik intsidentlarining 27 foizi jismoniy harakatlar bilan boshlangan yoki tugatilgan ( ENISA Threat Landscape 2020 – Physical Threats )</li>
      <li>Jismoniy hujumlar modadan chiqib ketmoqda, 2023-yilda atigi 46 ta hodisa. Biroq, ENISA real joylarda joylashtiriladigan QR kodlarining ko‘payishini qayd etdi.</li>
      <li>Yevropada bankomatlarga hujumlar 2020-yilning birinchi yarmida birinchi yarim yillik bilan solishtirganda 269 foizga oshdi. Tegishli yo'qotishlar o'tgan yilga nisbatan 1000 yevrodan 1 million yevroga oshgan. Biroq, 2021-yilning olti oyi davomida yo‘qotishlar 37 foizga kamayib, 0,63 million yevroga yetdi</li>
    </ul>

    <strong>
    IoT hujumlari hajmi ortib bormoqda
    </strong><br/><br/>
    <p>
    Internetga ulangan qurilmalar soni 2020-yilda 31 milliarddan 2021- yilda 35 milliardga, ​​2025-yilda esa 75 milliardga ko'payishi kutilmoqda 
    </p><br/>

    <ul style={{listStyleType: 'disc'}}>
      <li>2020-yilda o'rtacha biznesdagi tarmoqqa ulangan barcha qurilmalarning 30 foizdan ortig'i IoT qurilmalari edi. (Palo Alto Networks)</li>
      <li>Tibbiyot tizimlari zaifliklarning eng yuqori ulushiga ega, ammo CCTV kameralari, printerlar va VoIP telefonlari ham yuqori xavfga ega
      </li>
      <li>Palo Alto hisobotida, shuningdek, IoT trafigining 98 foizi shifrlanmaganligini aniqladi.
      </li>
      <li>2023-yilning birinchi olti oyida SonicWall Capture Labs tahdid tadqiqotchilari 77,9 million IoT zararli dasturlari hujumini qayd etdilar.
      </li>
    </ul>

    <div><img src={iotstatistics} alt="iotstatistics" /></div><br/>

    <ul style={{listStyleType: 'disc'}}>
    <li>
      IoT xavfsizligi bozori 2024-yilda taxminan 6,6 milliard dollarga baholangan va kutilayotgan o‘sish sur’ati 33,53% bo‘lsa, 2029-yilga borib uning qiymati 28 milliard dollardan oshishi mumkin.
      </li>
      <li>
      IoTni qo'llash Osiyo-Tinch okeani mintaqasida eng yuqori ko'rsatkichdir, bu asosan aqlli shahar infratuzilmasini (Morder Intelligence) o'zlashtirish tufayli.
      </li>
    </ul>

    <div><img src={iotstatistics2} alt="iotstatistics2" /></div><br/>

    <strong>
    Kiber jinoyatlar narxi
    </strong><br/>

    <p>
    McAfee The Hidden Costs of Cybercrime 2020 ma'lumotlariga ko'ra, hozirda dunyo yalpi ichki mahsulotining 1 foizi kiberjinoyatlar tufayli yo'qotilmoqda . Bundan tashqari, ikki yil ichida kiberjinoyatlarning global iqtisodiyotga tushgan narxi 50% dan oshdi.
    </p><br/>

    <p>

    </p>

    <div><img src={crimeprice} alt="crimeprice" /></div>

    <center>Kiberjinoyatning taxminiy o'rtacha zarari (McAfee)</center><br/>

    <p>
    Va Atlas VPN tomonidan olib borilgan tadqiqot shuni ko'rsatdiki, kiberjinoyat jinoyatchilarga yiliga 1,5 trillion dollar daromad keltirmoqda. Bu Walmart daromadidan deyarli uch baravar ko'pdir.
    </p><br/>

    <p>
    Shu bilan birga, zararli xakerlar va firibgarlar ham pul sarflashadi, ularning hujumlarini yanada samaraliroq qilishlari mumkin bo'lgan aktivlarga "sarmoya kiritadilar". Bu yerda Armor Dark Market Report 2020 da kuzatilgan narxlarning ba'zilari:
    </p><br/>

    <ul style={{listStyleType: 'disc'}}>
      <li>
      Har xil zararli dasturlar: $2,68–80
      </li>
      <li>
      ATM skimmerlari: $700–1500
      </li>
      <li>
      Karta o'qiydiganlar yoki yozuvchilar: $149–990
      </li>
      <li>
      Mashhur dasturiy ta'minotni ijaraga olish: oyiga $ 500
      </li>
      <li>
      SMS spam xizmati: 1000 SMS uchun $18,99–19,99
      </li>
    </ul>

    


























      </Container>
    </div>
  );
};

export default Statistics;
