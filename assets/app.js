/* Elektron darsliklar portali: til (UZ/RU/EN), qidiruv, saralash, mobil menyu */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* yopiq */ } } };

  const T = {
    ru: {
      skip: 'Перейти к содержанию', uni: 'Кокандский государственный университет', uniCaps: 'Кокандский государственный университет', dept: 'Кафедра физики и астрономии',
      nav1: 'Учебники', nav2: 'Кафедра', nav3: 'Авторы', nav4: 'Университет', nav5: 'Контакты',
      cr1: 'Главная', cr2: 'Факультет естественных наук и экономики', cr4: 'Электронные учебники',
      h1: 'Электронные учебники', lead: 'Интерактивные электронные учебники кафедры физики и астрономии: лекции, практические и лабораторные занятия, виртуальные лаборатории, тесты и озвучивание на узбекском языке.',
      qLabel: 'Поиск учебника', qPh: 'Название или код дисциплины, например: механика, EM1306',
      s1: 'электронных учебника', s2: 'лекций', s3: 'лабораторных работ', s4: 'интерактивных моделей',
      cH: 'Каталог учебников', cP: 'Нажмите на название учебника или кнопку «Открыть учебник». Чтобы выйти из учебника, используйте кнопку «Портал» в его верхней части.',
      fAll: 'Все', fBak: 'Бакалавриат', fMag: 'Магистратура', lvlBak: 'Бакалавриат', lvlMag: 'Магистратура',
      mDir: 'Направление', mSem: 'Семестр', mCont: 'Состав', open: 'Открыть учебник',
      t1: 'Электричество и магнетизм', t2: 'Физпрактикум', t3: 'Теоретическая механика', t4: 'Физика полупроводниковых приборов',
      d1: 'От закона Кулона и теоремы Гаусса до постоянного тока, магнитного поля, электромагнитной индукции, уравнений Максвелла и переменного тока.',
      d2: 'Лабораторные работы по электричеству, магнетизму и оптике: теория, порядок измерений, таблицы результатов, расчёт погрешностей и виртуальная лаборатория.',
      d3: 'Принцип наименьшего действия, формализмы Лагранжа и Гамильтона, центральное поле, колебания, твёрдое тело и основы релятивистской механики.',
      d4: 'От p-n перехода и контакта Шоттки до биполярных и полевых транзисторов, фотоэлектрических приборов и современных полупроводниковых технологий.',
      c1: '15 лекций, 21 практическое, 18 моделей', c2: '36 лабораторных работ, 36 виртуальных лабораторий', c3: '15 лекций, 15 практических, 6 семинаров, 18 моделей', c4: '15 лекций, 15 практических, 16 моделей',
      dirFiz: 'Физика', dirAstro: 'Астрономия', dirSemi: 'Физика полупроводников', dirMet: 'Методика преподавания точных и естественных наук (физика и астрономия)',
      empty: 'Ничего не найдено. Попробуйте другое слово.',
      hH: 'Как пользоваться учебниками',
      h1t: 'Выберите учебник', h1p: 'Выберите дисциплину в каталоге. В каждом учебнике есть программа, результаты обучения, критерии оценивания и календарь на 15 недель.',
      h2t: 'Читайте, слушайте, экспериментируйте', h2p: 'Читайте теорию или слушайте её на узбекском, меняйте параметры в интерактивной модели, решайте примеры и тесты.',
      h3t: 'Сдавайте задания в HEMIS', h3p: 'Учебники — открытый образовательный ресурс. Официальные задания, контроль и оценивание проводятся в информационной системе HEMIS.',
      kP1: 'Кафедра готовит будущих учителей и исследователей в области физики и астрономии. Программы дисциплин усовершенствованы с учётом международного опыта, в том числе программ Казахского национального университета им. аль-Фараби.',
      kP2: 'Электронные учебники разработаны с учётом требований ECTS и Болонского процесса, принципа конструктивного согласования, критериев Quality Matters, стандарта доступности WCAG 2.2 и рекомендации ЮНЕСКО по открытым образовательным ресурсам.',
      pH: 'Направления подготовки', pC: 'Код', pN: 'Направление / специальность', pL: 'Уровень',
      panH: 'Кратко', pan1: 'Заведующий кафедрой', pan1v: 'Кочкаров Мавзуржон Хурсанбоевич', pan2: 'Факультет', pan3: 'Декан факультета', pan3v: 'Ходжаев Вахобжон Умарович',
      pan4: 'Кафедры факультета', pan4v: 'физики и астрономии; биологии; географии и экономики; химии и экологии', pan5: 'На факультете', pan5v: '19 программ бакалавриата и 7 программ магистратуры', panL: 'Страница факультета ↗',
      aH: 'Авторы', a1p: 'Профессор, доктор философии (PhD)', a1d: 'Кафедра физики и астрономии. Автор электронных учебников и программ дисциплин.',
      a2n: 'Джуракузиев Дадакузи', a2p: 'Доцент, доктор философии (PhD)', a2d: 'Доцент кафедры физики и астрономии. Соавтор электронных учебников.',
      uP1: 'История университета начинается с вечернего педагогического института, основанного в Коканде в январе 1931 года. В 1943 году институту было присвоено имя поэта-просветителя Мукими. На протяжении десятилетий он был ведущим центром подготовки педагогов Ферганской долины.',
      uP2: 'В 2025 году на базе Кокандского государственного педагогического института, Кокандского филиала Ташкентского государственного технического университета и Ферганского регионального филиала Узбекского государственного института искусств и культуры создан Кокандский государственный университет. В 2026 году четыре его образовательные программы прошли аккредитацию немецкого агентства ASIIN.',
      uLink: 'Официальный сайт университета ↗',
      tl1: 'Основан Кокандский вечерний педагогический институт', tl3: 'Институту присвоено имя поэта Мукими', tl6: 'Создан химико-географический факультет (ныне факультет естественных наук и экономики)', tl4: 'Создан Кокандский государственный университет', tl5: 'Четыре программы прошли международную аккредитацию ASIIN (Германия)',
      fDept: 'Факультет естественных наук и экономики · Кафедра физики и астрономии', addr: 'Ферганская область, г. Коканд, ул. Турон, 23', hours: 'Понедельник–суббота, 8:00–18:00',
      lic: 'Материалы открыты по лицензии CC BY-SA 4.0. Официальное оценивание — в системе HEMIS.',
      count: n => `Найдено учебников: ${n}`
    },
    en: {
      skip: 'Skip to main content', uni: 'Kokand State University', uniCaps: 'Kokand State University', dept: 'Department of Physics and Astronomy',
      nav1: 'Textbooks', nav2: 'Department', nav3: 'Authors', nav4: 'University', nav5: 'Contact',
      cr1: 'Home', cr2: 'Faculty of Natural Sciences and Economics', cr4: 'E-textbooks',
      h1: 'E-textbooks', lead: 'Interactive e-textbooks of the Department of Physics and Astronomy: lectures, practical and laboratory classes, virtual labs, quizzes and Uzbek text-to-speech.',
      qLabel: 'Search textbooks', qPh: 'Course title or code, e.g. mechanics, EM1306',
      s1: 'e-textbooks', s2: 'lectures', s3: 'lab experiments', s4: 'interactive models',
      cH: 'Textbook catalogue', cP: 'Click a textbook title or “Open textbook”. To leave a textbook, use the “Portal” button at its top.',
      fAll: 'All', fBak: 'Bachelor', fMag: 'Master', lvlBak: 'Bachelor', lvlMag: 'Master',
      mDir: 'Programme', mSem: 'Semester', mCont: 'Contents', open: 'Open textbook',
      t1: 'Electricity and Magnetism', t2: 'Physics Laboratory', t3: 'Theoretical Mechanics', t4: 'Physics of Semiconductor Devices',
      d1: 'From Coulomb’s law and Gauss’s law to DC circuits, magnetic fields, electromagnetic induction, Maxwell’s equations and AC circuits.',
      d2: 'Laboratory work in electricity, magnetism and optics: theory, measurement procedure, data tables, error analysis and a virtual lab.',
      d3: 'The principle of least action, Lagrangian and Hamiltonian formalisms, central fields, oscillations, rigid bodies and relativistic mechanics.',
      d4: 'From p-n junctions and Schottky contacts to bipolar and field-effect transistors, photoelectric devices and modern semiconductor technology.',
      c1: '15 lectures, 21 practicals, 18 models', c2: '36 lab experiments, 36 virtual labs', c3: '15 lectures, 15 practicals, 6 seminars, 18 models', c4: '15 lectures, 15 practicals, 16 models',
      dirFiz: 'Physics', dirAstro: 'Astronomy', dirSemi: 'Semiconductor Physics', dirMet: 'Teaching Methodology of Exact and Natural Sciences (Physics and Astronomy)',
      empty: 'Nothing found. Try another word.',
      hH: 'How to use the textbooks',
      h1t: 'Choose a textbook', h1p: 'Pick a course from the catalogue. Each textbook includes the syllabus, learning outcomes, assessment criteria and a 15-week schedule.',
      h2t: 'Read, listen, experiment', h2p: 'Read the theory or listen to it in Uzbek, change parameters in the interactive models, work through examples and quizzes.',
      h3t: 'Submit work in HEMIS', h3p: 'The textbooks are open educational resources. Official assignments, tests and grading take place in the university’s HEMIS system.',
      kP1: 'The department prepares future teachers and researchers in physics and astronomy. Its syllabi have been updated using international practice, including programmes of Al-Farabi Kazakh National University.',
      kP2: 'The e-textbooks follow ECTS and Bologna Process requirements, constructive alignment, the Quality Matters course-design rubric, the WCAG 2.2 accessibility standard and the UNESCO Recommendation on Open Educational Resources.',
      pH: 'Degree programmes', pC: 'Code', pN: 'Programme', pL: 'Level',
      panH: 'At a glance', pan1: 'Head of department', pan1v: 'Mavzurjon Qo‘chqorov', pan2: 'Faculty', pan3: 'Dean of the faculty', pan3v: 'Vahobjon Xo‘jayev',
      pan4: 'Departments of the faculty', pan4v: 'Physics and Astronomy; Biology; Geography and Economics; Chemistry and Ecology', pan5: 'The faculty offers', pan5v: '19 bachelor’s and 7 master’s programmes', panL: 'Faculty page ↗',
      aH: 'Authors', a1p: 'Professor, Doctor of Philosophy (PhD)', a1d: 'Department of Physics and Astronomy. Author of the e-textbooks and course syllabi.',
      a2n: 'Dadaqo‘zi Jo‘raqo‘ziyev', a2p: 'Associate Professor, Doctor of Philosophy (PhD)', a2d: 'Associate Professor, Department of Physics and Astronomy. Co-author of the e-textbooks.',
      uP1: 'The university traces its history to an evening teacher-training institute founded in Kokand in January 1931. In 1943 it was named after the enlightener poet Muqimiy. For decades it was the leading centre for teacher education in the Fergana Valley.',
      uP2: 'In 2025 Kokand State University was established on the basis of Kokand State Pedagogical Institute, the Kokand branch of Tashkent State Technical University and the Fergana regional branch of the Uzbek State Institute of Arts and Culture. In 2026 four of its programmes were accredited by the German agency ASIIN.',
      uLink: 'University website ↗',
      tl1: 'Kokand Evening Pedagogical Institute founded', tl3: 'Institute named after the poet Muqimiy', tl6: 'Faculty of Chemistry and Geography founded (today the Faculty of Natural Sciences and Economics)', tl4: 'Kokand State University established', tl5: 'Four programmes received ASIIN (Germany) international accreditation',
      fDept: 'Faculty of Natural Sciences and Economics · Department of Physics and Astronomy', addr: '23 Turon Street, Kokand, Fergana Region, Uzbekistan', hours: 'Monday–Saturday, 8:00–18:00',
      lic: 'Materials are open under CC BY-SA 4.0. Official grading takes place in HEMIS.',
      count: n => `${n} textbook${n === 1 ? '' : 's'} found`
    }
  };
  const UZ_COUNT = n => `Topilgan darsliklar: ${n} ta`;
  const TITLES = { uz: document.title, ru: 'Электронные учебники — Кафедра физики и астрономии | Кокандский государственный университет', en: 'E-textbooks — Department of Physics and Astronomy | Kokand State University' };

  let lang = 'uz';
  const orig = new Map(); $$('[data-i18n]').forEach(el => orig.set(el, el.innerHTML));
  const q = $('#q'), phUz = q.placeholder;

  function setLang(l) {
    lang = T[l] ? l : 'uz';
    $$('[data-i18n]').forEach(el => { const v = lang === 'uz' ? null : T[lang][el.dataset.i18n]; el.innerHTML = typeof v === 'string' ? v : orig.get(el); });
    q.placeholder = lang === 'uz' ? phUz : T[lang].qPh;
    document.documentElement.lang = lang; document.title = TITLES[lang];
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    store.set('ed-lang', lang); apply();
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* Qidiruv va saralash */
  let level = 'all';
  const norm = s => s.toLowerCase().replace(/[‘’'`ʻʼ]/g, '').replace(/\s+/g, ' ').trim();
  function apply() {
    const term = norm(q.value); let n = 0;
    $$('.item').forEach(it => {
      const text = norm(it.dataset.q + ' ' + it.textContent);
      const show = (level === 'all' || it.dataset.lvl === level) && (!term || term.split(' ').every(w => text.includes(w)));
      it.hidden = !show; if (show) n++;
    });
    $('#count').textContent = lang === 'uz' ? UZ_COUNT(n) : T[lang].count(n);
    $('#empty').hidden = n > 0;
  }
  q.addEventListener('input', apply);
  q.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const first = $('.item:not([hidden]) .open'); if (first) $('#katalog').scrollIntoView(); } });
  $$('.tabs button').forEach(b => b.addEventListener('click', () => { level = b.dataset.f; $$('.tabs button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); apply(); }));

  /* Mobil menyu */
  const nav = $('#nav'), bg = $('#burger');
  bg.addEventListener('click', () => { const o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', String(o)); });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); bg.setAttribute('aria-expanded', 'false'); }));

  setLang(store.get('ed-lang') || 'uz');
})();
