/* Elektron darsliklar portali: til, mavzu, filtr, oxirgi ochilgan darslik */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* yopiq */ } } };

  const T = {
    ru: {
      skip: 'Перейти к содержанию', brand: 'Электронные учебники', brandSub: 'Кокандский государственный университет',
      nav1: 'Учебники', nav2: 'Университет', nav3: 'Кафедра', nav4: 'Авторы',
      eyebrow: 'Кокандский государственный университет · Кафедра физики и астрономии',
      h1: 'Интерактивные <span class="grad">электронные учебники по физике</span>',
      lead: 'Открытые электронные учебники по четырём дисциплинам: лекции, практические и лабораторные занятия, интерактивные модели, тесты и озвучивание на узбекском языке — на одном портале.',
      cta1: 'Перейти к учебникам', cta2: 'О кафедре', resume: 'Последний открытый учебник:',
      s1: 'электронных учебника', s2: 'лекций', s3: 'лабораторных работ', s4: 'интерактивных моделей',
      cEy: 'Вход', cH: 'Электронные учебники', cP: 'Нажмите на название или карточку — учебник откроется в этом окне. Чтобы выйти из учебника, нажмите кнопку «Портал» в его верхней части.',
      fAll: 'Все', fBak: 'Бакалавриат', fMag: 'Магистратура', lvlBak: 'Бакалавриат', lvlMag: 'Магистратура',
      sem2: '2-й семестр', sem3: '3-й семестр', sem4: '4-й семестр', sem34: '3–4-й семестры', open: 'Открыть учебник',
      t1: 'Электричество и магнетизм', t2: 'Физпрактикум', t3: 'Теоретическая механика', t4: 'Физика полупроводниковых приборов',
      d1: 'От закона Кулона и теоремы Гаусса до постоянного тока, магнитного поля, электромагнитной индукции, уравнений Максвелла и переменного тока.',
      d2: 'Лабораторные работы по электричеству, магнетизму и оптике: теория, порядок измерений, таблицы результатов, расчёт погрешностей и виртуальная лаборатория.',
      d3: 'Принцип наименьшего действия, формализмы Лагранжа и Гамильтона, центральное поле, колебания, твёрдое тело и основы релятивистской механики.',
      d4: 'От p-n перехода и контакта Шоттки до биполярных и полевых транзисторов, фотоэлектрических приборов и современных полупроводниковых технологий.',
      k15m: '15 лекций', k21a: '21 практическое', k15a: '15 практических', k6s: '6 семинаров', k18s: '18 моделей', k16s: '16 моделей', k36l: '36 лабораторных работ', k36v: '36 виртуальных лабораторий',
      dirFiz: 'Физика', dirAstro: 'Астрономия', dirSemi: 'Физика полупроводников', dirMet: 'Методика преподавания точных и естественных наук (физика и астрономия)',
      fEy: 'Возможности', fH: 'В каждом учебнике',
      f1h: 'Озвучивание на узбекском', f1p: 'Текст и формулы читаются естественным нейронным голосом — одинаково на всех компьютерах и телефонах.',
      f2h: 'Интерактивные модели', f2p: 'Симуляторы в браузере и голосовая демонстрация, которая сама управляет моделью и объясняет её.',
      f3h: 'Контрольные тесты', f3p: 'Тесты с пояснениями и решённые примеры в каждой теме; практические задачи с ответами.',
      f4h: 'Соответствие программе', f4p: 'Содержание, часы, результаты обучения и рубрики оценивания — по утверждённым программам дисциплин.',
      f5h: 'Три языка, дневной/ночной режим', f5p: 'Узбекский, русский и английский; удобный режим чтения, печать и адаптация к телефону.',
      f6h: 'Открытый образовательный ресурс', f6p: 'Лицензия CC BY-SA 4.0; регистрация не требуется. Официальное оценивание — в системе HEMIS.',
      uEy: 'Университет', uH: 'Кокандский государственный университет',
      uP1: 'История университета начинается с вечернего педагогического института, основанного в Коканде в январе 1931 года. В 1943 году институту было присвоено имя поэта-просветителя Мукими. На протяжении десятилетий он был ведущим центром подготовки педагогических кадров Ферганской долины.',
      uP2: 'В 2025 году на базе Кокандского государственного педагогического института, Кокандского филиала Ташкентского государственного технического университета и Ферганского регионального филиала Узбекского государственного института искусств и культуры создан Кокандский государственный университет. В 2026 году четыре его образовательные программы прошли аккредитацию немецкого агентства ASIIN.',
      uLink: 'Официальный сайт университета ↗',
      tl1: 'Основан Кокандский вечерний педагогический институт', tl2: 'Преобразован в дневной государственный учительский институт', tl3: 'Институту присвоено имя поэта Мукими', tl4: 'Создан Кокандский государственный университет', tl5: 'Четыре программы прошли международную аккредитацию ASIIN (Германия)',
      kEy: 'Кафедра', kH: 'Кафедра физики и астрономии',
      kP: 'Кафедра готовит будущих учителей и исследователей в области физики и астрономии. Программы дисциплин усовершенствованы с учётом международного опыта, в том числе программ Казахского национального университета им. аль-Фараби; в учебном процессе используются интерактивные электронные учебники и виртуальные лаборатории.',
      stdH: 'На какие требования опираются учебники',
      std1: '<b>ECTS и Болонский процесс</b> — кредитная нагрузка и измеримые результаты обучения', std2: '<b>Конструктивное согласование</b> — соответствие результатов, деятельности и оценивания',
      std3: '<b>Quality Matters</b> — критерии дизайна онлайн-курсов', std4: '<b>WCAG 2.2</b> — доступность: клавиатура, контраст, озвучивание', std5: '<b>Рекомендация ЮНЕСКО по ООР</b> — открытые образовательные ресурсы',
      aEy: 'Авторы', aH: 'Авторы проекта', a1r: 'Автор 1', a2r: 'Автор 2', a2n: 'Джуракузиев Дадакузи',
      a1p: 'Профессор, доктор философии (PhD)', a1d: 'Кокандский государственный университет, кафедра физики и астрономии. Автор электронных учебников и программ дисциплин.',
      a2p: 'Доцент, доктор философии (PhD)', a2d: 'Доцент кафедры физики и астрономии Кокандского государственного университета.',
      fo1: 'Кокандский государственный университет, кафедра физики и астрономии · 2026', fo2: 'Материалы открыты по лицензии CC BY-SA 4.0. Официальные задания и оценивание — в информационной системе HEMIS.', links: 'Ссылки'
    },
    en: {
      skip: 'Skip to main content', brand: 'E-Textbooks', brandSub: 'Kokand State University',
      nav1: 'Textbooks', nav2: 'University', nav3: 'Department', nav4: 'Authors',
      eyebrow: 'Kokand State University · Department of Physics and Astronomy',
      h1: 'Interactive <span class="grad">physics e-textbooks</span>',
      lead: 'Open e-textbooks for four courses: lectures, practical and laboratory classes, interactive models, quizzes and Uzbek text-to-speech — in one portal.',
      cta1: 'Browse textbooks', cta2: 'About the department', resume: 'Last opened textbook:',
      s1: 'e-textbooks', s2: 'lectures', s3: 'lab experiments', s4: 'interactive models',
      cEy: 'Start here', cH: 'E-textbooks', cP: 'Click a title or card — the textbook opens in this window. To leave a textbook, use the “Portal” button at its top.',
      fAll: 'All', fBak: 'Bachelor', fMag: 'Master', lvlBak: 'Bachelor', lvlMag: 'Master',
      sem2: 'Semester 2', sem3: 'Semester 3', sem4: 'Semester 4', sem34: 'Semesters 3–4', open: 'Open textbook',
      t1: 'Electricity and Magnetism', t2: 'Physics Laboratory', t3: 'Theoretical Mechanics', t4: 'Physics of Semiconductor Devices',
      d1: 'From Coulomb’s law and Gauss’s law to DC circuits, magnetic fields, electromagnetic induction, Maxwell’s equations and AC circuits.',
      d2: 'Laboratory work in electricity, magnetism and optics: theory, measurement procedure, data tables, error analysis and a virtual lab.',
      d3: 'The principle of least action, Lagrangian and Hamiltonian formalisms, central fields, oscillations, rigid bodies and relativistic mechanics.',
      d4: 'From p-n junctions and Schottky contacts to bipolar and field-effect transistors, photoelectric devices and modern semiconductor technology.',
      k15m: '15 lectures', k21a: '21 practicals', k15a: '15 practicals', k6s: '6 seminars', k18s: '18 models', k16s: '16 models', k36l: '36 lab experiments', k36v: '36 virtual labs',
      dirFiz: 'Physics', dirAstro: 'Astronomy', dirSemi: 'Semiconductor Physics', dirMet: 'Teaching Methodology of Exact and Natural Sciences (Physics and Astronomy)',
      fEy: 'Features', fH: 'In every textbook',
      f1h: 'Uzbek text-to-speech', f1p: 'Text and formulas are read in a natural neural voice — the same on every computer and phone.',
      f2h: 'Interactive models', f2p: 'In-browser simulators with a narrated demo that drives the model and explains it.',
      f3h: 'Self-check quizzes', f3p: 'Quizzes with explanations and worked examples for every topic; practice problems with answers.',
      f4h: 'Syllabus-aligned', f4p: 'Content, hours, learning outcomes and assessment rubrics follow the approved course syllabi.',
      f5h: 'Three languages, light/dark mode', f5p: 'Uzbek, Russian and English; comfortable reading mode, print and mobile layout.',
      f6h: 'Open educational resource', f6p: 'CC BY-SA 4.0 licence; no registration. Official assessment takes place in HEMIS.',
      uEy: 'University', uH: 'Kokand State University',
      uP1: 'The university traces its history to an evening teacher-training institute founded in Kokand in January 1931. In 1943 the institute was named after the enlightener poet Muqimiy. For decades it was the leading centre for teacher education in the Fergana Valley.',
      uP2: 'In 2025 Kokand State University was established on the basis of Kokand State Pedagogical Institute, the Kokand branch of Tashkent State Technical University and the Fergana regional branch of the Uzbek State Institute of Arts and Culture. In 2026 four of its programmes were accredited by the German agency ASIIN.',
      uLink: 'University website ↗',
      tl1: 'Kokand Evening Pedagogical Institute founded', tl2: 'Became a full-time state teachers’ institute', tl3: 'Institute named after the poet Muqimiy', tl4: 'Kokand State University established', tl5: 'Four programmes received ASIIN (Germany) international accreditation',
      kEy: 'Department', kH: 'Department of Physics and Astronomy',
      kP: 'The department prepares future teachers and researchers in physics and astronomy. Its syllabi have been updated using international practice, including programmes of Al-Farabi Kazakh National University; interactive e-textbooks and virtual labs are used in teaching.',
      stdH: 'Standards behind the textbooks',
      std1: '<b>ECTS and the Bologna Process</b> — credit workload and measurable learning outcomes', std2: '<b>Constructive alignment</b> — outcomes, activities and assessment aligned',
      std3: '<b>Quality Matters</b> — online course design rubric', std4: '<b>WCAG 2.2</b> — accessibility: keyboard, contrast, read-aloud', std5: '<b>UNESCO OER Recommendation</b> — open educational resources',
      aEy: 'Authors', aH: 'Project authors', a1r: 'Author 1', a2r: 'Author 2', a2n: 'Dadaqo‘zi Jo‘raqo‘ziyev',
      a1p: 'Professor, Doctor of Philosophy (PhD)', a1d: 'Kokand State University, Department of Physics and Astronomy. Author of the e-textbooks and course syllabi.',
      a2p: 'Associate Professor, Doctor of Philosophy (PhD)', a2d: 'Associate Professor, Department of Physics and Astronomy, Kokand State University.',
      fo1: 'Kokand State University, Department of Physics and Astronomy · 2026', fo2: 'Materials are open under CC BY-SA 4.0. Official assignments and grading are handled in the HEMIS information system.', links: 'Links'
    }
  };
  const TITLES = { uz: document.title, ru: 'Электронные учебники — Кокандский государственный университет', en: 'E-Textbooks — Kokand State University' };

  /* Til */
  const orig = new Map();
  $$('[data-i18n]').forEach(el => orig.set(el, el.innerHTML));
  const setLang = l => {
    if (!T[l] && l !== 'uz') l = 'uz';
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; el.innerHTML = l === 'uz' ? orig.get(el) : (T[l][k] ?? orig.get(el)); });
    document.documentElement.lang = l; document.title = TITLES[l];
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    store.set('ed-lang', l); showResume(l);
  };
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* Kun / tun */
  $('#theme').addEventListener('click', () => { const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; document.documentElement.dataset.theme = t; store.set('ed-theme', t); });

  /* Mobil menyu */
  const nav = $('#nav'), bg = $('#burger');
  bg.addEventListener('click', () => { const o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', String(o)); });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); bg.setAttribute('aria-expanded', 'false'); }));

  /* Filtr */
  $$('.chip').forEach(c => c.addEventListener('click', () => {
    $$('.chip').forEach(x => x.setAttribute('aria-pressed', String(x === c)));
    const f = c.dataset.f; $$('.course').forEach(k => { k.hidden = !(f === 'all' || k.dataset.lvl === f); });
  }));

  /* Oxirgi ochilgan darslik */
  $$('.course').forEach(c => c.addEventListener('click', () => store.set('ed-last', c.dataset.key)));
  function showResume(l) {
    const k = store.get('ed-last'), c = k && $(`.course[data-key="${k}"]`); if (!c) return;
    const a = $('#resumeLink'); a.href = c.href; a.textContent = $('h3', c).textContent; $('#resume').hidden = false;
  }

  setLang(store.get('ed-lang') || 'uz');
})();
