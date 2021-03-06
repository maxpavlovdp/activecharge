import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContractSection.module.css';

const MainSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.contentPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('offerTitle')}</h1>
        <div className={styles.contractsBox}>
          <div className={styles.textContainer}>
            <p className={styles.conentTitle}>
              <strong>{t('contents')}:</strong>
            </p>
            <p>
            <strong> </strong>
          </p>
          <p><a className={styles.offerLink} href="#dictionary">
            <strong>1. </strong>
            <strong>Визначення термінів</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#offer">
            <strong>2. </strong>
            <strong>Договір між Клієнтом і Веб-сайтом proizd.ua</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#siteUsage">
            <strong>3. </strong>
            <strong>Користування Веб-сайтом</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#forbidden">
            <strong>4. </strong>
            <strong>Заборонена діяльність</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#conditions">
            <strong>5. </strong>
            <strong>Правила та обмеження Постачальника</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#costs">
            <strong>6. </strong>
            <strong>Вартість послуг і порядок розрахунку при купівлі залізничних та автобусних квитків</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#revocation">
            <strong>7. </strong>
            <strong>Умови повернення квитків</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#gettingDocument">
            <strong>8. </strong>
            <strong>Отримання проїзного документа</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#gatheringInfo">
            <strong>9. </strong>
            <strong>Яку інформацію ми збираємо від Вас</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#confidential">
            <strong>10. </strong>
            <strong>Політика конфіденційності</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#childConfidential">
            <strong>11. </strong>
            <strong>Конфіденційність по відношенню до дітей</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#gettingAccess">
            <strong>12. </strong>
            <strong>Яким чином Ви можете отримати доступ до своєї інформації</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#software">
            <strong>13. </strong>
            <strong>Програмне забезпечення, доступне на даному веб-сайті</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#cookies">
            <strong>14. </strong>
            <strong>Куки та інші технології</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#rules">
            <strong>15. </strong>
            <strong>Правила проїзду в потягах/автобусах</strong>
          </a></p>
          <p><a className={styles.offerLink} href="#contacts">
            <strong>16. </strong>
            <strong>Як Ви можете зв'язатися з нами</strong>
          </a></p>
          <br />
          <p id="dictionary">
            <strong><u>1. Визначення термінів</u></strong>
          </p>
            <p>
              <strong>
                Терміни “Ми”, “Нас”, “Наше”, “Компанія”, “Веб-сайт”, “Субагент”
                і “proizd.ua” -{" "}
              </strong>
              відносяться до Товариства з Обмеженою Відповідальністю "Проїзд",
              який є Субагентом та виступає від імені Товариства з обмеженою
              відповідальністю «ТРЕВЕЛБУК», та діє на підставі Субагентського
              договору № 01/150518 від 15.05.2018 року, який наділений правом
              від імені та за рахунок Перевізників і Постачальників здійснювати
              оформлення і продаж послуг.
            </p>
            <p>
              <strong>Веб-сайт - </strong>
              відкритий для вільного візуального ознайомлення, публічно
              доступний, що належить ТОВ "Проїзд", розташований в мережі
              Інтернет за адресою{" "}
              <a className={styles.offerLink} href="https://proizd.ua" target="_blank">
                https://proizd.ua
              </a>
            </p>
            <p>
              <strong>Договір оферти</strong>— даний документ, опублікований в
              мережі Інтернет за єдиною адресою:{" "}
              <a className={styles.offerLink} href="https://proizd.ua/offer" target="_blank">
                https://proizd.ua/offer
              </a>
            </p>
            <p>
              <strong>Акцепт</strong>- це відповідь особи, якій адресована
              оферта, про її прийняття. Вчинення особою, яка одержала оферту, у
              термін, встановлений для її акцепту, дій по виконанню зазначених у
              ній умов договору (оплата послуг та ін.) вважається акцептом.
            </p>
            <p>
              <strong>Акцепт оферти</strong>- повне і беззастережне прийняття
              умов Договору-оферти, шляхом здійснення дій Клієнтом, що виражає
              намір скористатися Веб-сайтом для оформлення Послуг.
            </p>
            <p>
              <strong>Клієнт</strong>– фізична або юридична особа, що отримує
              Послуги та здійснює їх оплату в мережі продажу Субагента, на сайті
              proizd.ua.
            </p>
            <p>
              <strong>Кабінет</strong>- розділ сайта “Мої квитки” в якому
              відображаються придбані квитки Клієнта. Кабінет створюється
              атвоматично, під час оплати квитка.
            </p>
            <p>
              <strong>Авторизація</strong>- процес підтвердження особистості
              користувача на сайті шляхом введення в форму його прізвища та
              останніх 4-ьох цифр банківської карти, з якої здійснювалась оплата
              замовлення.
            </p>
            <p>
              <strong>Електронний квиток</strong>- повноцінний проїзний
              документ, який надає право проїзда без його заміни в касі
              залізничного вокзалу, містить повну інформацію про майбутню
              поїздку (прізвище та ім'я пасажира, станції
              відправлення/призначення, дату відправлення/прибуття, номер
              потягу, вагон, місце та інші супутні послуги), і унікальний номер.
            </p>
            <p>
              <strong>Квиток відкладеного друку</strong>- повноцінний проїзний
              документ, який підлягає обов'язковому обміну на посадковий квиток
              в будь-якій автоматизованій залізничній касі на материковій
              частині України. Він також містить повну інформацію про майбутню
              поїздку (прізвище та ім'я пасажира, станції
              відправлення/призначення, дату відправлення/прибуття, номер
              потягу, вагон, місце та інші супутні послуги) і унікальний номер.
            </p>
            <p>
              <strong>Бланк Бронювання</strong>- документ, який засвідчує
              бронювання обраного місця у вагоні потягу. Даний бланк для проїзду
              недійсний. Бланк бронювання надає право Клієнту викупити на термін
              поїздки обране і оплачене ним місце на протязі однієї доби.
            </p>
            <p>
              <strong>Посадковий документ</strong>- документ, який отримує
              Клієнт в залізничній кассі/кассі автовокзала за результатами
              успішного оформлення та оплати електронного проїзного документу на
              Веб-сайті.
            </p>
            <p>
              <strong>Платіжна система</strong>- сервіс, що функціонує на основі
              АПК в мережі Інтернет за адресою{" "}
              <a className={styles.offerLink} href="https://www.fondy.eu/" target="_blank">
                https://www.fondy.eu/
              </a>
              , за допомогою якого Клієнти отримують можливість оплатити квитки
              в режимі реального часу.
            </p>
            <p>
              <strong>Постачальник</strong>- компанія, постачальник Послуг,
              пропонованих на сайті, що є офіційним, законним партнером
              Веб-сайту.
            </p>
            <p>
              <strong>Перевізник</strong>- компанія, безпосередньо надає Послугу
              з перевезення пасажирів, обрану і оплачену за допомогою системи
              бронювання та оплати на Сайті.
            </p>
            <p id="offer">
              <strong>
                <u>2.Договір між Клієнтом і Веб-сайтом</u>
              </strong>
            </p>
            <p>
              Цей Договір публічної оферти про надання послуг бронювання,
              оформлення та продажу квитків та інших послуг за допомогою
              технічних можливостей інтернет-сайту proizd.ua, (далі -
              «Договір»), укладається між Товариством з Обмеженою
              Відповідальністю "Проїзд", який є Субагентом та виступає від імені
              Товариства з обмеженою відповідальністю «ТРЕВЕЛБУК», та діє на
              підставі Субагентського договору №01/150518 від 15.05.2018 року
              якому належать майнові та немайнові права на інтернет-сайт
              proizd.ua і Клієнтом.
            </p>
            <p>
              В обов'язковому порядку необхідно ознайомитись з умовами
              договору-оферти (надалі, «Договір»).
            </p>
            <p>
              2.1. ТОВ "Проїзд" зобов'язується надати Клієнту послуги з
              бронювання, оформлення, продажу квитків та інших послуг,
              відповідно до умов цієї оферти, а Клієнт зобов'язується оплатити
              послуги за встановленою вартістю.
            </p>
            <p>
              2.2. Справжній публічний договір-оферти вважається укладеним
              (акцепт оферти) з моменту підтвердження Клієнтом своєї згоди з
              його умовами, шляхом установки відповідної позначки на
              інтернет-сайті proizd.ua, після чого публічний Договір вважається
              базовим документом в офіційних взаєминах між ТОВ "Проїзд" і
              Клієнтом.
            </p>
            <p>
              2.3. Цей Договір, а також інформація про послуги, представлені на
              інтернет-сайті proizd.ua, є публічною офертою відповідно до ст.
              633, 641 Цивільного кодексу України. Його умови однакові для всіх
              споживачів, беззастережне прийняття яких (оплата будь-яким
              способом відповідно до ч.2 ст. 642 Цивільного кодексу України)
              вважається акцептом даного Договору між Клієнтом та виконавцем та
              засвідчує факт його укладення.
            </p>
            <p>
              2.4 Послуги Веб-сайту надаються тільки після підтвердження згоди
              Клієнта з умовами Договору. Наша компанія має право без
              попередження вносити зміни в Договір. Отже, просимо Вас кожного
              разу, перед оплатою, переглядати поточну версію Договору.
            </p>
            <p id="siteUsage">
              <strong>
                <u>3. Користування Веб-сайтом</u>
              </strong>
            </p>
            <p>
              Умовами користування даного Веб-сайту є те, що Ви підтверджуєте,
              що:
            </p>
            <p>- Вам 18 і більше років;</p>
            <p>- Ви маєте всі цивільні права і повну дієздатність;</p>
            <p>
              - Ви будете користуватися цим Веб-сайтом відповідно до даного
              Договору;
            </p>
            <p>
              - Ви будете користуватися цим Веб-сайтом тільки для того, щоб
              здійснювати законну купівлю/бронювання для себе або для іншої
              особи, від імені якого ви маєте юридичне право діяти;
            </p>
            <p>
              - Цим іншим особам Ви повідомите про правила і умови, які
              стосуються купівлі/бронювань, зроблених Вами від їх імені,
              включаючи всі застосовувані правила і обмеження;
            </p>
            <p>
              - Вся інформація, яку Ви подаєте на цьому Веб-сайті, є правдивою,
              точною, поточною і повною;
            </p>
            <p>
              Ми маємо право на власний розсуд будь-кому відмовляти в доступі до
              Веб-сайту та послуг, які ми пропонуємо, в будь-який час, без
              вказання причини.
            </p>
            <p id="forbidden">
              <strong>
                <u>4. Заборонена діяльність</u>
              </strong>
            </p>
            <p>
              4.1 Вся інформація на нашому Веб-сайті належать нам, нашим
              постачальникам і провайдерам.
            </p>
            <p>
              4.2 До тих пір поки Клієнту надається можливість використання
              нашого Веб-сайту, він дає свою згоду не зраджувати, не копіювати,
              не поширювати, не передавати іншим особам, не відтворювати, не
              публікувати, не давати дозволу, не створювати похідний від цього
              продукт, не пересилати, не продавати або перепродавати будь-яку
              інформацію, програмне забезпечення, послуги, отримані через або за
              допомогою цього Веб-сайту. А також Клієнт погоджується НЕ:
            </p>
            <p>
              - використовувати цей Веб-сайт або його контент в комерційних
              цілях;
            </p>
            <p>
              - здійснювати спекулятивні, неправдиві або шахрайські бронювання;
            </p>
            <p>
              - отримувати доступ, моніторити або копіювати будь-який контент
              або інформацію з даного Веб-сайту, використовуючи будь-яких
              роботів, пошукових агентів або інші автоматичні засоби або
              будь-які ручні процеси з будь-якою метою без нашого виданого
              письмового дозволу;
            </p>
            <p>
              - порушувати обмеження будь-якого HTTP-заголовка для блокування
              роботи на цьому Веб-сайті і здійснювати будь-які інші шахрайські
              дії щодо інших засобів, які застосовуються, щоб запобігти або
              обмежити доступ до цього Веб-сайту;
            </p>
            <p>
              - здійснювати дії, які викликають або можуть спричинити, на наш
              розсуд, надмірне або велике навантаження на нашу Систему;
            </p>
            <p>
              - робити “фрейм”, “дзеркало” або іншим шляхом включати будь-яку
              частину даного Веб-сайту в будь-який інший веб-сайт без нашого
              завчасного письмового дозволу.
            </p>
            <p id="conditions">
              <strong>
                <u>5. Правила та обмеження Постачальника</u>
              </strong>
            </p>
            <p>
              5.1 Користувач повинен ознайомитися з даним Договором і
              підтвердити свою згоду з його умовами при замовленні будь-якої
              Послуги на Сайті.
            </p>
            <p>
              5.2 Клієнт погоджується виконувати положення та умови покупки,
              встановлені Веб-сайтом, з яким буде співпрацювати.
            </p>
            <p>
              5.3 Ми повідомляємо Клієнта, що найменше порушення будь-яких
              правил і обмежень Постачальника може призвести до втрати його
              бронювання, конфіскації виплачених грошей за броню, і/або
              дебетуванням його рахунку нами на суму, яку ми втратили в
              результаті такого порушення.
            </p>
            <p id="costs">
              <strong>
                <u>
                  6. Вартість послуг і порядок розрахунку при купівлі
                  залізничних та автобусних квитків
                </u>
              </strong>
            </p>
            <p>
              6.1 Клієнт погоджується з тим, що ціна за залізничні та автобусні
              квитки, що відображаються на Веб-сайті, включає в себе ціну за
              залізничний (автобусний) квиток, яка вказана на Веб-сайті, комісію
              платіжної системи, Субагентський та Агентський збір Веб-сайта.
              Клієнт дає згоду на зняття з його банківської картки загальної
              вартості покупки (бронювання) квитків.
            </p>
            <p>
              6.2 Інтернет-замовлення проїзних (перевізних) документів на потяг
              здійснюється тільки для повних, студентських та дитячих проїзних
              документів.
            </p>
            <p>
              6.2.1 При оформленні квитка для студентів діє знижка за умови
              наявності стуненського квитка.
            </p>
            <p>
              6.2.2 Для дітей, віком від семи до чотирнадцяти років, при
              наявності Свідоцтва про народження, також діє знижка.
            </p>
            <p>
              6.3 Інтернет-замовлення автобусного квитка здійснюється тільки для
              повних проїзних документів.
            </p>
            <p>
              6.4 Максимальна кількість звернень, яке може бути здійснена
              Клієнтом протягом доби, не більше 10 000 звернень.
            </p>
            <p>
              6.5 Інтернет-замовлення проїзних (перевізних) документів може бути
              здійснене Клієнтом в термін від 45 діб до 1 доби до моменту
              відправлення потягу - з урахуванням часу, необхідного для
              роздрукування та отримання проїзних (перевізних) документів у
              квитковій касі.
            </p>
            <p>
              6.6 Послуга Бронювання, що засвідчує бронювання обраного місця у
              вагоні потягу, коштує двадцять дев’ять гривень, враховуючи
              вартість всіх вищезгаданих послуг.
              <strong>
                <u> </u>
              </strong>
              Послуга Бронювання діє одну добу, з моменту її покупки. Після
              оплати, Клієнт отримує Бланк Бронювання, на якому прописані дата
              та час, до якого потрібно викупити квиток у залізничній касі
              вокзалу.
            </p>
            <p>
              6.7 Для замовлення проїзних документів потрібно обрати пункт
              відправлення, пункт призначення, дату, потім потяг/автобус, вагон
              та місця (вільні відображаються зеленим кольором; верхнє/нижнє
              місце нумерується наступним чином: парні номери - верхнє, не парні
              - нижні) в цьому вагоні/автобусі.
            </p>
            <p>
              6.8 Клієнт має ще раз уважно перевірити свій вибір і якщо він
              задовольняє - натиснути кнопку “Оплатити”. Після натискання кнопки
              “Оплатити”, Клієнт переходить безпосередньо до процедури оплати.
              На сторінці Оплати заповнює номер банківської картки, термін
              придатності та трьохзначний код, що знаходиться на зворотній
              стороні картки. Деякі банки можуть відправити смс пароль на
              телефон, вказаний при оформленні банківської карти. В такому
              випадку, для успішної оплати, Клієнт має ввести смс пароль і
              натиснути кнопку “Підтвердити”. Після цього Клієнт побачить
              повідомлення “Оплата виконана успішно”, після чого відразу
              потрапляє на сторінку з його квитком. На цій сторінці Клієнт може
              здійснити на свій вибір певні дії: це або відразу роздрукувати
              квиток, або зберегти його на свій електронний пристрій, або ж
              відправити на свою електронну адресу.
            </p>
            <p>
              6.9 Послуга вважається виконаною належним чином і в повному обсязі
              після відображення інформації про сплачене замовлення і
              відображенні квитка після Авторизації в розділі “Кабинет” (
              <a className={styles.offerLink} href="https://proizd.ua/login" target="_blank">
                https://proizd.ua/login
              </a>
              ) на Веб-сайті. Щодо відправлення Квитка на вказану Клієнтом
              електронну пошту, чи номер телефона, вказані при замовленні, то
              дана послуга є не обов’язковою.
            </p>
            <p id="revocation">
              <strong>
                <u>7. Умови повернення квитків</u>
              </strong>
            </p>
            <p>
              7.1 Повернення невикористаних квитків на залізничні/автобусні
              пасажирські перевезення, які були оформлені на Веб-сайті,
              здійснюються в залізничній касі/касі автовокзалу, або Кабінет{" "}
              <a className={styles.offerLink} href="https://proizd.ua/login" target="_blank">
                https://proizd.ua/login
              </a>
              .
            </p>
            <p>
              7.2 При поверненні Проїзного документу через залізничну касу/касу
              автовокзалу, необхідно пред'явити документ, що засвідчує особу та
              відповідно сам Проїзний документ.
            </p>
            <p>
              7.3 Повернення коштів здійснюється відповідно до чинного
              законодавства України, правилами застосування тарифів,
              встановлених Перевізниками та Постачальниками Послуг.
            </p>
            <p>
              7.4 При поверненні квитка будуть утримані: встановлені правилами
              Перевізника та Постачальника комісійні збори, комісії сплачені при
              оформленні Інтернет-замовлення, і збори за переказ грошових
              коштів. Термін повернення коштів на банківську картку, з якої було
              здійснено Замовлення, становить до 90 днів, з моменту звернення в
              залізничну касу/касу автовокзалу та, як підтвердження, отримання
              квитанції про повернення квитка.
            </p>
            <p>
              7.5 Веб-сайт має право брати комісію за повернення коштів за
              зданий квиток.
            </p>
            <p>
              7.6 Служба підтримки Веб-сайту має право запросити у Клієнта, який
              ініціює повернення, скан-копії додаткових документів: квитанції
              про повернення, видані в касі залізничного вокзалу/автовокзалу та
              придбані на сайті квитки.
            </p>
            <p>
              7.7 Для повернення квитків через Кабінет необхідно авторизуватись,
              натиснути на кнопку «Повернути квиток» та підтвердити суму,
              натиснувши на «Підтвердити повернення», яка буде зарахована на
              карту, з якої Клієнт оплачував квиток.
            </p>
            <p id="gettingDocument">
              <strong>
                <u>8. Отримання проїзного документа в залізничних касах</u>
              </strong>
            </p>
            <p>
              8.1 Клієнт, який отримує в квитковій касі Посадковий документ, що
              був замовлений через Веб-сайт, надає касиру документ, що засвідчує
              особу, особисто вказує на роздрукованій касиром квитанції свої
              прізвище, ім'я, по батькові, назву, серію, номер документа, що
              пред'являється, ставить особистий підпис і передає квитанцію зі
              своїм підписом касиру.
            </p>
            <p>
              8.2 Отримати оригінальний Посадковий документ можна тільки в касах
              материкової частини України, не пізніше як за 30 хвилин до
              відправлення потягу/автобуса.
            </p>
            <p>
              8.3 Після того, як Клієнт отримав Посадковий документ,
              відповідальність за нього несе тільки він сам. У разі втрати
              оригінального квитка, повторно за кодом квитка отримати
              оригінальний квиток можна.
            </p>
            <p>
              8.4 Клієнт має викупити заброньований квиток в касі залізничного
              вокзалу, оплативши його повну вартість. Вартість бронювання не
              входить у вартість квитка. Для викупу квитка, Клієнт має подати до
              каси вокзалу роздрукований Бланк бронювання, придбаний на сайті.
            </p>
            <p>
              8.5 Оплачене Бронювання і не викуплене в залізничній касі Клієнтом
              в термін часу, який зазначено в Бланку бронюванні - автоматично
              анулюється і місце потрапляє до вільного продажу. Веб-сайт не несе
              відповідальність за невчасно викуплене заброньоване місце.
            </p>
            <p id="gatheringInfo">
              <strong>
                <u>9. Яку інформацію ми збираємо від Вас</u>
              </strong>
            </p>
            <p>
              9.1 Наш Веб-сайт зберігає будь-яку інформацію, яку Клієнт вводить
              під час реєстрації (прізвище, ім'я, електронну адресу та номер
              мобільного телефону), крім платіжної інформації.
            </p>
            <p>
              9.2 Звертаємо увагу, що в разі бронювання місць для третіх осіб
              (колег, друзів, рідних) просимо Клієнта отримати згоду від
              перерахованих вище осіб перед тим, як надавати нам їх особисту
              інформацію.
            </p>
            <p>
              9.3 Веб-сайт автоматично збирає деяку інформацію про комп'ютер
              Клієнта при відвідуванні даного сайту (IP адресу та інформацію про
              веб-браузер Клієнта).
            </p>
            <p>
              9.4 На залишені Клієнтом контактні дані у вигляді адреса
              електронної пошти чи номера телефона, Ми залишаємо за собою право
              відправляти рекламні матеріали у вигляді поштових/смс розсилок.
            </p>
            <p>
              9.4.1 Клієнту надана можливість відмовитися від комерційних
              повідомлень в будь-якому запропонованому нами повідомленні.
            </p>
            <p id="confidential">
              <strong>
                <u>10. Політика конфіденційності</u>
              </strong>
            </p>
            <p>
              Адміністрація Веб-сайту приймає технічні та організаційно-правові
              заходи з метою забезпечення захисту персональної інформації
              користувача від неправомірного або випадкового доступу до них,
              знищення, перекручення, блокування, копіювання, поширення, а також
              від інших неправомірних дій.
            </p>
            <p id="childConfidential">
              <strong>
                <u>11. Конфіденційність по відношенню до дітей</u>
              </strong>
            </p>
            <p>
              Цей Веб-сайт розрахований на широку аудиторію і не пропонує
              спеціалізованих послуг для дітей. Якщо дитина, про яку нам відомо,
              що їй менше 13 років, пришле нам свою персональну інформацію, ми
              використаємо цю персональну інформацію, лише для того, щоб
              відповісти безпосередньо цій дитині і повідомити їй про те, що нам
              необхідна згода її батьків, на отримання її персональної
              інформації.
            </p>
            <p id="gettingAccess">
              <strong>
                <u>
                  12. Яким чином Ви можете отримати доступ до своєї інформації
                </u>
              </strong>
            </p>
            <p>
              У будь-який зручний для Клієнта час надається можливість заходити
              до Кабінету (
              <a className={styles.offerLink} href="https://proizd.ua/login" target="_blank">
                https://proizd.ua/login
              </a>
              ), у розділ “Мої квитки” на сайті, де зберігаються та
              відображаються всі придбані Клієнтом квитки. Кабінет створюється
              автоматично, під час оплати на сайті.
            </p>
            <p id="software">
              <strong>
                <u>13. Програмне забезпечення, доступне на даному веб-сайті</u>
              </strong>
            </p>
            <p>
              13.1 Все програмне забезпечення даного Веб-сайту - це виконана
              робота, яка охороняється авторським правом proizd.ua
              (Проїзд.ком.юа) і/або наших відповідних Постачальників.
            </p>
            <p>
              13.2 Клієнт не може встановлювати або користуватися Програмним
              Забезпеченням, яке включає в себе Ліцензійний Договір.
            </p>
            <p>
              13.3 Для будь-якого програмного забезпечення, доступного для
              скачування з даного Веб-сайту, яке не супроводжується Ліцензійним
              Договором, ми надаємо Клієнту обмежену, особисту, таку, яка не
              передається, ліцензію на користування Програмним Забезпеченням для
              перегляду даного Веб-сайту відповідно до цих норм і умов, але не
              для яких би то не було інших цілей.
            </p>
            <p>
              13.4 Будь ласка, зверніть увагу, що все Програмне Забезпечення, що
              знаходиться на даному Веб-сайті, включаючи, без обмежень, весь
              HTML(АШТІЕМЕЛ), JavaScript(ДЖАВАСКРИПТ) код і ActiveX
              control(АктівІкс контрол), є власністю і/або наших відповідних
              Постачальників, і знаходиться під захистом законів про авторське
              право і умов міжнародних договорів. Будь-яке розмноження або
              розповсюдження Програмного Забезпечення категорично заборонено і
              може призвести до суворого цивільного і кримінального покарання.
              Порушники будуть переслідуватися в судовому порядку.
            </p>
            <p id="cookies">
              <strong>
                <u>14. Куки та інші технології</u>
              </strong>
            </p>
            <p>
              Куки - це спеціальний текстовий рядок, який зберігається на
              жорсткому диску комп'ютера Клієнта.
            </p>
            <p>Веб-сайт використовує Куки:</p>
            <p>
              - для того щоб розрізняти нового відвідувача від відвідувача,
              браузер
            </p>
            <p>
              якого вже відвідував наш сайт. В даному випадку мова йде про те,
              що ми можемо використовувати куки для того, щоб запам'ятати
              реєстраційну інформацію Клієнта;
            </p>
            <p>- прописати Ваш пароль;</p>
            <p>
              - допомогти оцінити і проаналізувати дієвість функцій та
              пропозицій Веб-сайту, реклами і електронних повідомлень
              (спостерігаючи за тим, які Клієнт найчастіше відкриває);
            </p>
            <p>- рекламних цілях.</p>
            <p>
              У більшості браузерів Клієнту надається можливість відключення
              всіх Куків.
            </p>
            <p id="rules">
              <strong>
                <u>15. Правила проїзду в потягах/автобусах</u>
              </strong>
            </p>
            <p>
              15.1 Клієнт має самостійно ознайомитись з правилами проїзду в
              потягах і автобусах.
            </p>
            <p>
              15.2 Веб-сайт не несе відповідальність за запізнення Клієнта до
              відправлення потяга/автобуса, неякісне надання послуг
              Перевізником.
            </p>
            <p>
              15.3 Якщо Клієнт придбав Електронний квиток на потяг, він повинен
              пред’явити його провіднику в роздрукованому вигляді.
            </p>
            <p>
              15.4 Якщо користувач придбав Квиток Відкладеного друку, він має
              обміняти його в кассі залиізничного вокзалу, в будь який час, але
              не пізніше 15 хвилин до відправлення потягу.
            </p>
            <p>
              15.5 Придбаний квиток на автобус, Клієнт повинен обміняти в касі
              автовокзалу не пізніше 30 хвилин до відправлення автобуса, на
              посадковий квиток.
            </p>
            <p id="contacts">
              <strong>
                <u>16. Як Ви можете зв'язатися з нами</u>
              </strong>
            </p>
            <p>
              Якщо у Клієнта виникли питання про заплановані подорожі або
              покупку, будь ласка, напишіть нам електронне повідомлення на
              адресу info@proizd.ua, або зв'яжіться з технічною підтримкою сайту
              “Допомога онлайн”, або зателефонуйте за номером +38 (044)
              222-71-77.
            </p>
            <p>
              <strong> </strong>
            </p>
            <p>
              <strong>
                Натискаючи кнопку «Оплатить» я підтверджую, що з умовами
                Договору-оферти Веб-сайту proizd.ua ознайомився(-лась),
                погоджуюся з ними, зобов'язуюсь виконувати, даю згоду на обробку
                моїх персональних даних.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection;