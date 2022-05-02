import './Resources.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';

const Resources = () => {
  return (
    <div className='ResourcesContainer'>
      <p className='header' style={{ color: COLORS.navy, fontSize: 50, marginBottom: 40 }}>
        Resources
      </p>
      <div className='ResourcesBodyContainer'>
        <p className='ResourcesBodyParagraph'>
        Гуманитарный Проект Ассоциации EMDR России:
список контактов кризисных центров психологической поддержки:
РОССИЯ
-Кризисная линия доверия (круглосуточно): 8 (800) 100-49-94
-Горячая линия Центра экстренной психологической помощи МЧС России: 8 (495) 989-50-
50  Интернет-служба: http://psi.mchs.gov.ru
-Горячая линия психологической поддержки Благотворительного фонда «Просто люди» 8
(495) 025 15 35
-Бесплатная кризисная линия доверия  8 (495) 988-44-34 (бесплатно по Москве), 8 (800)
333-44-34 (бесплатно по России) – круглосуточные экстренные консультации психолога в
области жизненных проблем.
-Московская служба психологической помощи населению: 051
-Экстренная медико-психологическая помощь в кризисных ситуациях Департамента
здравоохранения города Москвы: 8 (499) 791-20-50
-Телефон доверия экстренной психологической помощи: 8 (495) 575-87-70
-Независимая психиатрическая ассоциация: 8 (495) 625-06-20
-Государственная скорая психиатрическая помощь (Москва): 8 (495) 625-31-01
-Психиатрическая клиническая больница № 1 им. Н.А. Алексеева (Москва), приемное
отделение: 8 (495) 952-91-61
-Психиатрическая клиническая больница № 4 имени П.Б. Ганнушкина (Москва),
справочная: 8 (495) 963-11-02
-Центральная клиническая психиатрическая больница (Москва), приемный покой: 8 (495)
614-19-11
-Психологическая помощь детям и подросткам онлайн: https://pomoschryadom.ru/
-Телефон доверия для детей и подростков: 8 (495) 160-03-63
-Телефон доверия для помощи детям, подросткам и родителям: 8 (800) 200-01-22
-Горячая линия для людей с алкогольной и наркотической зависимостью: 8 (495) 126-04-
51

-Горячая линия социально-психологической помощи детям и семьям мигрантов,
находящимся в трудной жизненной ситуации: 8 (499) 201-59-47 
УКРАИНА:
- Телефон горячей линии психологической помощи: 0800211444
- Ассоциация профессионального развития психологов и психотерапевтов в Украине с
10:00 до 21:00: 073 420 0330.
- «Телефон доверия» по номерам:  (044) 456 17 02 та (044) 456 17 25
-Горячая линия «Давай поговорим» бесплатно оказывает психологическую помощь по
номеру 0 800 331 800
-Медико-психологическая служба доверия (круглосуточно): (044) 456-17-25
-Лінія запобігання самогубствам дзвони зараз 7333
БЕЛАРУСЬ
- Служба экстренной психологической помощи «Телефон доверия» 8 029 899 04 01.
Можно обращаться через мессенджеры Телеграм(Telegram); Вайбер (Viber); Ватсап
(WhatsApp) 8 029 899 04 01
- Республиканский центр психологической помощи 8 017 300 10 06
- Минский областной клинический центр «Психиатрия — наркология», круглосуточная
служба экстренной психологической помощи «Телефон доверия» 8 017 202 04 01
- Республиканская телефонная &quot;горячая линия&quot;по оказанию психологической помощи
несовершеннолетним, попавшим в кризисную ситуацию 8 801 100 16 11
psi.mchs.gov.ru (https://psi.mchs.gov.ru/) Интернет-служба экстренной психологической
помощи
        </p>
      </div>
    </div>
  );
};

export default Resources;
