const STORAGE_KEYS = {
  tasks: "scenic-focus-tasks",
  links: "scenic-focus-links",
  name: "scenic-focus-name",
  theme: "scenic-focus-theme",
  mode: "scenic-focus-mode",
  language: "scenic-focus-language"
};

const DEFAULT_LINKS = [
  { id: crypto.randomUUID(), name: "YouTube", url: "https://www.youtube.com" },
  { id: crypto.randomUUID(), name: "GitHub", url: "https://github.com" },
  { id: crypto.randomUUID(), name: "Google Drive", url: "https://drive.google.com" }
];

const timerDisplay = document.getElementById("timerDisplay");
const currentTime = document.getElementById("currentTime");
const currentDate = document.getElementById("currentDate");
const greeting = document.getElementById("greeting");
const dailyMotivation = document.getElementById("dailyMotivation");
const heroEyebrow = document.getElementById("heroEyebrow");
const languageLabel = document.getElementById("languageLabel");
const currencySelect = document.getElementById("currencySelect");
const nameLabel = document.getElementById("nameLabel");
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const nameInitials = document.getElementById("nameInitials");
const nameHint = document.getElementById("nameHint");
const nameMessage = document.getElementById("nameMessage");
const themeLabel = document.getElementById("themeLabel");
const themeSelect = document.getElementById("themeSelect");
const modeToggle = document.getElementById("modeToggle");
const heroImage = document.querySelector(".hero-image");

const timerEyebrow = document.getElementById("timerEyebrow");
const taskForm = document.getElementById("taskForm");
const taskLabel = document.getElementById("taskLabel");
const taskInput = document.getElementById("taskInput");
const taskSubmitBtn = document.getElementById("taskSubmitBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const taskMessage = document.getElementById("taskMessage");
const todoEyebrow = document.getElementById("todoEyebrow");
const todoTitle = document.getElementById("todoTitle");

const linksEyebrow = document.getElementById("linksEyebrow");
const linksTitle = document.getElementById("linksTitle");
const linkForm = document.getElementById("linkForm");
const linkLabel = document.getElementById("linkLabel");
const linkNameInput = document.getElementById("linkNameInput");
const linkUrlInput = document.getElementById("linkUrlInput");
const linkSubmitBtn = document.getElementById("linkSubmitBtn");
const quickLinks = document.getElementById("quickLinks");
const linkMessage = document.getElementById("linkMessage");

const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const resetTimerBtn = document.getElementById("resetTimerBtn");
const weatherEyebrow = document.getElementById("weatherEyebrow");
const weatherTitle = document.getElementById("weatherTitle");
const refreshWeatherBtn = document.getElementById("refreshWeatherBtn");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTemp = document.getElementById("weatherTemp");
const weatherCondition = document.getElementById("weatherCondition");
const weatherLocationLabel = document.getElementById("weatherLocationLabel");
const weatherLocation = document.getElementById("weatherLocation");
const weatherHumidityLabel = document.getElementById("weatherHumidityLabel");
const weatherHumidity = document.getElementById("weatherHumidity");
const weatherWindLabel = document.getElementById("weatherWindLabel");
const weatherWind = document.getElementById("weatherWind");
const weatherCoordsLabel = document.getElementById("weatherCoordsLabel");
const weatherCoords = document.getElementById("weatherCoords");
const weatherMessage = document.getElementById("weatherMessage");

const DAILY_MOTIVATIONS = [
  (name) => `${name ? `${name}, ` : ""}one small step today still moves you forward.`,
  (name) => `${name ? `${name}, ` : ""}focus on progress, not perfection.`,
  (name) => `${name ? `${name}, ` : ""}consistency beats short bursts of motivation.`,
  (name) => `${name ? `${name}, ` : ""}the time you protect today shapes your future.`,
  (name) => `${name ? `${name}, ` : ""}start with what you can do right now.`,
  (name) => `${name ? `${name}, ` : ""}every completed task is proof that you are growing.`,
  (name) => `${name ? `${name}, ` : ""}stay calm, move slowly, keep going.`
];

const TRANSLATIONS = {
  id: {
    locale: "id-ID",
    htmlLang: "id",
    languageLabel: "Bahasa",
    languageAriaLabel: "Pilih bahasa",
    heroEyebrow: "Forest Focus",
    nameLabel: "Nama kamu",
    save: "Simpan",
    saved: "Tersimpan",
    themeLabel: "Tema",
    modeLight: "Mode: Terang",
    modeDark: "Mode: Gelap",
    timerEyebrow: "Timer Fokus",
    start: "Mulai",
    stop: "Berhenti",
    reset: "Reset",
    todoEyebrow: "Daftar Tugas",
    todayTasks: "Tugas Hari Ini",
    taskLabel: "Tambah tugas",
    taskAdd: "Tambah",
    linksEyebrow: "Link Cepat",
    linksTitle: "Situs Favorit",
    linkLabel: "Tambah link",
    linkSave: "Simpan link",
    weatherEyebrow: "Cuaca",
    weatherTitle: "Cuaca Lokal",
    weatherRefresh: "Muat ulang",
    weatherLocationLabel: "Lokasi",
    weatherHumidityLabel: "Kelembapan",
    weatherWindLabel: "Angin",
    weatherCoordsLabel: "Koordinat",
    weatherWaiting: "Menunggu lokasi...",
    weatherDetecting: "Mendeteksi area kamu...",
    weatherAllowLocation: "Izinkan akses lokasi untuk melihat cuaca di sekitarmu.",
    weatherLoading: "Mengambil data cuaca terbaru...",
    weatherLocationDenied: "Akses lokasi ditolak. Aktifkan izin lokasi untuk memakai fitur ini.",
    weatherUnavailable: "Data cuaca belum tersedia sekarang.",
    weatherFailed: "Cuaca gagal dimuat. Coba lagi sebentar lagi.",
    weatherUnsupported: "Browser ini tidak mendukung geolocation.",
    weatherUnknownPlace: "Lokasi tidak diketahui",
    weatherUpdatedAt: (time) => `Diperbarui ${time}`,
    taskCount: (completed, total) => `${completed}/${total} selesai`,
    taskEmpty: "Belum ada tugas. Tambahkan satu untuk mulai.",
    taskEdit: "Edit",
    taskDelete: "Hapus",
    taskSave: "Simpan",
    taskCancel: "Batal",
    taskPlaceholder: "Tulis tugas berikutnya",
    taskPlaceholderNamed: (name) => `Apa yang akan kamu selesaikan hari ini, ${name}?`,
    namePlaceholder: "Masukkan nama kamu",
    namePlaceholderNamed: "Ubah nama kamu",
    nameHint: "Simpan nama untuk mengaktifkan mode personal.",
    nameHintNamed: (name) => `Mode personal aktif untuk ${name}.`,
    taskCannotBeEmpty: "Tugas tidak boleh kosong.",
    taskDuplicate: "Tugas duplikat tidak diperbolehkan.",
    taskNotFound: "Tugas tidak ditemukan.",
    taskUpdated: "Tugas diperbarui.",
    taskDeleted: "Tugas dihapus.",
    taskAdded: "Tugas ditambahkan.",
    taskEnterFirst: "Masukkan tugas terlebih dahulu.",
    greetingMorning: "Selamat pagi",
    greetingAfternoon: "Selamat siang",
    greetingEvening: "Selamat malam",
    motivations: [
      (name) => `${name ? `${name}, ` : ""}satu langkah kecil hari ini tetap membawamu maju.`,
      (name) => `${name ? `${name}, ` : ""}fokus pada progres, bukan kesempurnaan.`,
      (name) => `${name ? `${name}, ` : ""}konsistensi lebih kuat daripada semangat sesaat.`,
      (name) => `${name ? `${name}, ` : ""}waktu yang kamu jaga hari ini membentuk masa depanmu.`,
      (name) => `${name ? `${name}, ` : ""}mulai dari hal yang bisa kamu lakukan sekarang.`,
      (name) => `${name ? `${name}, ` : ""}setiap tugas yang selesai adalah bukti kamu terus berkembang.`,
      (name) => `${name ? `${name}, ` : ""}tetap tenang, bergerak pelan, terus lanjutkan.`
    ],
    pomodoroDone: "Sesi pomodoro selesai.",
    nameSaved: (name) => `${name} berhasil disimpan.`,
    nameRemoved: "Nama dihapus dari penyimpanan.",
    linkNamePlaceholder: "Label",
    linkUrlPlaceholder: "https://example.com",
    linkOpen: "Buka",
    linkEdit: "Edit",
    linkDelete: "Hapus",
    linkNotFound: "Link tidak ditemukan.",
    linkEditLabelPrompt: "Edit label link:",
    linkEditUrlPrompt: "Edit URL link:",
    linkLabelEmpty: "Label tidak boleh kosong.",
    linkUrlEmpty: "URL tidak boleh kosong.",
    linkValidUrl: "Masukkan URL yang valid.",
    linkUpdated: "Link diperbarui.",
    linkDeleteConfirm: (name) => `Hapus link \"${name}\"?`,
    linkDeleted: "Link dihapus.",
    linkFillBoth: "Isi kedua kolom terlebih dahulu.",
    linkSaved: "Link disimpan.",
    themeOptions: ["Default", "Laut", "Gunung", "Hutan", "Planet", "Awan"],
    languageNames: ["Bahasa Indonesia", "Japanese", "English", "Russian", "Korean", "Chinese"],
    taskTitleNamed: (name) => `Tugas ${name}`
  },
  en: {
  locale: "en-US",
  htmlLang: "en",
  languageLabel: "Language",
  languageAriaLabel: "Select language",
  heroEyebrow: "Forest Focus",
  nameLabel: "Your name",
  save: "Save",
  saved: "Saved",
  themeLabel: "Theme",
  modeLight: "Mode: Light",
  modeDark: "Mode: Dark",
  timerEyebrow: "Focus Timer",
  start: "Start",
  stop: "Stop",
  reset: "Reset",
  todoEyebrow: "To-Do List",
  todayTasks: "Today's Tasks",
  taskLabel: "Add task",
  taskAdd: "Add",
  linksEyebrow: "Quick Links",
  linksTitle: "Favorite Sites",
  linkLabel: "Add link",
  linkSave: "Save link",
  weatherEyebrow: "Weather",
  weatherTitle: "Local Weather",
  weatherRefresh: "Refresh",
  weatherLocationLabel: "Location",
  weatherHumidityLabel: "Humidity",
  weatherWindLabel: "Wind",
  weatherCoordsLabel: "Coordinates",
  weatherWaiting: "Waiting for location...",
  weatherDetecting: "Detecting your area...",
  weatherAllowLocation: "Allow location access to see weather around you.",
  weatherLoading: "Fetching latest weather data...",
  weatherLocationDenied: "Location access denied. Enable permission to use this feature.",
  weatherUnavailable: "Weather data is not available right now.",
  weatherFailed: "Failed to load weather. Try again later.",
  weatherUnsupported: "This browser does not support geolocation.",
  weatherUnknownPlace: "Unknown location",
  weatherUpdatedAt: (time) => `Updated ${time}`,
  taskCount: (completed, total) => `${completed}/${total} completed`,
  taskEmpty: "No tasks yet. Add one to get started.",
  taskEdit: "Edit",
  taskDelete: "Delete",
  taskSave: "Save",
  taskCancel: "Cancel",
  taskPlaceholder: "Write your next task",
  taskPlaceholderNamed: (name) => `What will you accomplish today, ${name}?`,
  namePlaceholder: "Enter your name",
  namePlaceholderNamed: "Change your name",
  nameHint: "Save your name to enable personal mode.",
  nameHintNamed: (name) => `Personal mode active for ${name}.`,
  taskCannotBeEmpty: "Task cannot be empty.",
  taskDuplicate: "Duplicate tasks are not allowed.",
  taskNotFound: "Task not found.",
  taskUpdated: "Task updated.",
  taskDeleted: "Task deleted.",
  taskAdded: "Task added.",
  taskEnterFirst: "Enter a task first.",
  greetingMorning: "Good morning",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  motivations: [
    (name) => `${name ? `${name}, ` : ""}a small step today still moves you forward.`,
    (name) => `${name ? `${name}, ` : ""}focus on progress, not perfection.`,
    (name) => `${name ? `${name}, ` : ""}consistency is stronger than temporary motivation.`,
    (name) => `${name ? `${name}, ` : ""}the time you protect today shapes your future.`,
    (name) => `${name ? `${name}, ` : ""}start with what you can do now.`,
    (name) => `${name ? `${name}, ` : ""}every completed task proves you are growing.`,
    (name) => `${name ? `${name}, ` : ""}stay calm, move slowly, keep going.`
  ],
  pomodoroDone: "Pomodoro session finished.",
  nameSaved: (name) => `${name} has been saved.`,
  nameRemoved: "Name removed from storage.",
  linkNamePlaceholder: "Label",
  linkUrlPlaceholder: "https://example.com",
  linkOpen: "Open",
  linkEdit: "Edit",
  linkDelete: "Delete",
  linkNotFound: "Link not found.",
  linkEditLabelPrompt: "Edit link label:",
  linkEditUrlPrompt: "Edit link URL:",
  linkLabelEmpty: "Label cannot be empty.",
  linkUrlEmpty: "URL cannot be empty.",
  linkValidUrl: "Enter a valid URL.",
  linkUpdated: "Link updated.",
  linkDeleteConfirm: (name) => `Delete link "${name}"?`,
  linkDeleted: "Link deleted.",
  linkFillBoth: "Fill in both fields first.",
  linkSaved: "Link saved.",
  themeOptions: ["Default", "Ocean", "Mountain", "Forest", "Planet", "Cloud"],
  languageNames: ["Indonesian", "Japanese", "English", "Russian", "Korean", "Chinese"],
  taskTitleNamed: (name) => `${name}'s Tasks`
},
  ja: {
  locale: "ja-JP",
  htmlLang: "ja",
  languageLabel: "言語",
  languageAriaLabel: "言語を選択",
  heroEyebrow: "フォレストフォーカス",
  nameLabel: "あなたの名前",
  save: "保存",
  saved: "保存済み",
  themeLabel: "テーマ",
  modeLight: "モード：ライト",
  modeDark: "モード：ダーク",
  timerEyebrow: "集中タイマー",
  start: "開始",
  stop: "停止",
  reset: "リセット",
  todoEyebrow: "タスク一覧",
  todayTasks: "今日のタスク",
  taskLabel: "タスクを追加",
  taskAdd: "追加",
  linksEyebrow: "クイックリンク",
  linksTitle: "お気に入りサイト",
  linkLabel: "リンクを追加",
  linkSave: "リンクを保存",
  weatherEyebrow: "天気",
  weatherTitle: "現在の天気",
  weatherRefresh: "更新",
  weatherLocationLabel: "場所",
  weatherHumidityLabel: "湿度",
  weatherWindLabel: "風",
  weatherCoordsLabel: "座標",
  weatherWaiting: "位置情報を待機中...",
  weatherDetecting: "現在地を検出中...",
  weatherAllowLocation: "周辺の天気を見るには位置情報の許可が必要です。",
  weatherLoading: "最新の天気データを取得中...",
  weatherLocationDenied: "位置情報の許可が拒否されました。この機能を使うには許可してください。",
  weatherUnavailable: "現在、天気データは利用できません。",
  weatherFailed: "天気の取得に失敗しました。後でもう一度お試しください。",
  weatherUnsupported: "このブラウザは位置情報に対応していません。",
  weatherUnknownPlace: "不明な場所",
  weatherUpdatedAt: (time) => `${time} に更新`,
  taskCount: (completed, total) => `${completed}/${total} 完了`,
  taskEmpty: "まだタスクがありません。追加して始めましょう。",
  taskEdit: "編集",
  taskDelete: "削除",
  taskSave: "保存",
  taskCancel: "キャンセル",
  taskPlaceholder: "次のタスクを書いてください",
  taskPlaceholderNamed: (name) => `${name}さん、今日は何を達成しますか？`,
  namePlaceholder: "名前を入力",
  namePlaceholderNamed: "名前を変更",
  nameHint: "名前を保存するとパーソナルモードが有効になります。",
  nameHintNamed: (name) => `${name}さんのパーソナルモードが有効です。`,
  taskCannotBeEmpty: "タスクは空にできません。",
  taskDuplicate: "同じタスクは追加できません。",
  taskNotFound: "タスクが見つかりません。",
  taskUpdated: "タスクを更新しました。",
  taskDeleted: "タスクを削除しました。",
  taskAdded: "タスクを追加しました。",
  taskEnterFirst: "先にタスクを入力してください。",
  greetingMorning: "おはようございます",
  greetingAfternoon: "こんにちは",
  greetingEvening: "こんばんは",
  motivations: [
    (name) => `${name ? `${name}さん、` : ""}小さな一歩でも前進です。`,
    (name) => `${name ? `${name}さん、` : ""}完璧より進歩に集中しましょう。`,
    (name) => `${name ? `${name}さん、` : ""}継続は一時的なやる気より強いです。`,
    (name) => `${name ? `${name}さん、` : ""}今日の時間が未来を作ります。`,
    (name) => `${name ? `${name}さん、` : ""}今できることから始めましょう。`,
    (name) => `${name ? `${name}さん、` : ""}完了したタスクは成長の証です。`,
    (name) => `${name ? `${name}さん、` : ""}落ち着いて、ゆっくりでも進み続けましょう。`
  ],
  pomodoroDone: "ポモドーロセッションが終了しました。",
  nameSaved: (name) => `${name}さんを保存しました。`,
  nameRemoved: "名前が削除されました。",
  linkNamePlaceholder: "ラベル",
  linkUrlPlaceholder: "https://example.com",
  linkOpen: "開く",
  linkEdit: "編集",
  linkDelete: "削除",
  linkNotFound: "リンクが見つかりません。",
  linkEditLabelPrompt: "リンクのラベルを編集:",
  linkEditUrlPrompt: "リンクのURLを編集:",
  linkLabelEmpty: "ラベルは空にできません。",
  linkUrlEmpty: "URLは空にできません。",
  linkValidUrl: "有効なURLを入力してください。",
  linkUpdated: "リンクを更新しました。",
  linkDeleteConfirm: (name) => `「${name}」を削除しますか？`,
  linkDeleted: "リンクを削除しました。",
  linkFillBoth: "両方の項目を入力してください。",
  linkSaved: "リンクを保存しました。",
  themeOptions: ["デフォルト", "海", "山", "森", "惑星", "雲"],
  languageNames: ["インドネシア語", "日本語", "英語", "ロシア語", "韓国語", "中国語"],
  taskTitleNamed: (name) => `${name}さんのタスク`
},
  ru: {
  locale: "ru-RU",
  htmlLang: "ru",
  languageLabel: "Язык",
  languageAriaLabel: "Выберите язык",
  heroEyebrow: "Лесной фокус",
  nameLabel: "Ваше имя",
  save: "Сохранить",
  saved: "Сохранено",
  themeLabel: "Тема",
  modeLight: "Режим: Светлый",
  modeDark: "Режим: Тёмный",
  timerEyebrow: "Таймер фокуса",
  start: "Старт",
  stop: "Стоп",
  reset: "Сброс",
  todoEyebrow: "Список задач",
  todayTasks: "Задачи на сегодня",
  taskLabel: "Добавить задачу",
  taskAdd: "Добавить",
  linksEyebrow: "Быстрые ссылки",
  linksTitle: "Избранные сайты",
  linkLabel: "Добавить ссылку",
  linkSave: "Сохранить ссылку",
  weatherEyebrow: "Погода",
  weatherTitle: "Местная погода",
  weatherRefresh: "Обновить",
  weatherLocationLabel: "Местоположение",
  weatherHumidityLabel: "Влажность",
  weatherWindLabel: "Ветер",
  weatherCoordsLabel: "Координаты",
  weatherWaiting: "Ожидание местоположения...",
  weatherDetecting: "Определение вашего местоположения...",
  weatherAllowLocation: "Разрешите доступ к геолокации, чтобы увидеть погоду рядом с вами.",
  weatherLoading: "Загрузка актуальных данных о погоде...",
  weatherLocationDenied: "Доступ к геолокации отклонён. Включите разрешение для использования функции.",
  weatherUnavailable: "Данные о погоде сейчас недоступны.",
  weatherFailed: "Не удалось загрузить погоду. Попробуйте позже.",
  weatherUnsupported: "Этот браузер не поддерживает геолокацию.",
  weatherUnknownPlace: "Неизвестное место",
  weatherUpdatedAt: (time) => `Обновлено ${time}`,
  taskCount: (completed, total) => `${completed}/${total} выполнено`,
  taskEmpty: "Пока нет задач. Добавьте первую.",
  taskEdit: "Редактировать",
  taskDelete: "Удалить",
  taskSave: "Сохранить",
  taskCancel: "Отмена",
  taskPlaceholder: "Введите следующую задачу",
  taskPlaceholderNamed: (name) => `Что вы выполните сегодня, ${name}?`,
  namePlaceholder: "Введите ваше имя",
  namePlaceholderNamed: "Изменить имя",
  nameHint: "Сохраните имя, чтобы включить персональный режим.",
  nameHintNamed: (name) => `Персональный режим активен для ${name}.`,
  taskCannotBeEmpty: "Задача не может быть пустой.",
  taskDuplicate: "Повторяющиеся задачи не допускаются.",
  taskNotFound: "Задача не найдена.",
  taskUpdated: "Задача обновлена.",
  taskDeleted: "Задача удалена.",
  taskAdded: "Задача добавлена.",
  taskEnterFirst: "Сначала введите задачу.",
  greetingMorning: "Доброе утро",
  greetingAfternoon: "Добрый день",
  greetingEvening: "Добрый вечер",
  motivations: [
    (name) => `${name ? `${name}, ` : ""}маленький шаг сегодня всё равно ведёт вперёд.`,
    (name) => `${name ? `${name}, ` : ""}сосредоточьтесь на прогрессе, а не на идеале.`,
    (name) => `${name ? `${name}, ` : ""}постоянство сильнее временной мотивации.`,
    (name) => `${name ? `${name}, ` : ""}время, которое вы сохраняете сегодня, формирует ваше будущее.`,
    (name) => `${name ? `${name}, ` : ""}начните с того, что можете сделать сейчас.`,
    (name) => `${name ? `${name}, ` : ""}каждая выполненная задача — доказательство вашего роста.`,
    (name) => `${name ? `${name}, ` : ""}оставайтесь спокойны, двигайтесь постепенно и продолжайте.`
  ],
  pomodoroDone: "Сессия помодоро завершена.",
  nameSaved: (name) => `${name} сохранено.`,
  nameRemoved: "Имя удалено из хранилища.",
  linkNamePlaceholder: "Название",
  linkUrlPlaceholder: "https://example.com",
  linkOpen: "Открыть",
  linkEdit: "Редактировать",
  linkDelete: "Удалить",
  linkNotFound: "Ссылка не найдена.",
  linkEditLabelPrompt: "Редактировать название ссылки:",
  linkEditUrlPrompt: "Редактировать URL ссылки:",
  linkLabelEmpty: "Название не может быть пустым.",
  linkUrlEmpty: "URL не может быть пустым.",
  linkValidUrl: "Введите корректный URL.",
  linkUpdated: "Ссылка обновлена.",
  linkDeleteConfirm: (name) => `Удалить ссылку "${name}"?`,
  linkDeleted: "Ссылка удалена.",
  linkFillBoth: "Заполните оба поля.",
  linkSaved: "Ссылка сохранена.",
  themeOptions: ["По умолчанию", "Океан", "Горы", "Лес", "Планета", "Облака"],
  languageNames: ["Индонезийский", "Японский", "Английский", "Русский", "Корейский", "Китайский"],
  taskTitleNamed: (name) => `Задачи ${name}`
},
ko: {
  locale: "ko-KR",
  htmlLang: "ko",
  languageLabel: "언어",
  languageAriaLabel: "언어 선택",
  heroEyebrow: "포레스트 포커스",
  nameLabel: "이름",
  save: "저장",
  saved: "저장됨",
  themeLabel: "테마",
  modeLight: "모드: 라이트",
  modeDark: "모드: 다크",
  timerEyebrow: "집중 타이머",
  start: "시작",
  stop: "정지",
  reset: "초기화",
  todoEyebrow: "할 일 목록",
  todayTasks: "오늘의 할 일",
  taskLabel: "할 일 추가",
  taskAdd: "추가",
  linksEyebrow: "빠른 링크",
  linksTitle: "즐겨찾기 사이트",
  linkLabel: "링크 추가",
  linkSave: "링크 저장",
  weatherEyebrow: "날씨",
  weatherTitle: "현재 날씨",
  weatherRefresh: "새로고침",
  weatherLocationLabel: "위치",
  weatherHumidityLabel: "습도",
  weatherWindLabel: "바람",
  weatherCoordsLabel: "좌표",
  weatherWaiting: "위치 정보를 기다리는 중...",
  weatherDetecting: "현재 위치를 확인하는 중...",
  weatherAllowLocation: "주변 날씨를 보려면 위치 접근을 허용하세요.",
  weatherLoading: "최신 날씨 데이터를 불러오는 중...",
  weatherLocationDenied: "위치 접근이 거부되었습니다. 이 기능을 사용하려면 권한을 허용하세요.",
  weatherUnavailable: "현재 날씨 정보를 사용할 수 없습니다.",
  weatherFailed: "날씨 정보를 불러오지 못했습니다. 잠시 후 다시 시도하세요.",
  weatherUnsupported: "이 브라우저는 위치 정보를 지원하지 않습니다.",
  weatherUnknownPlace: "알 수 없는 위치",
  weatherUpdatedAt: (time) => `${time} 업데이트됨`,
  taskCount: (completed, total) => `${completed}/${total} 완료`,
  taskEmpty: "아직 할 일이 없습니다. 하나 추가해 보세요.",
  taskEdit: "수정",
  taskDelete: "삭제",
  taskSave: "저장",
  taskCancel: "취소",
  taskPlaceholder: "다음 할 일을 입력하세요",
  taskPlaceholderNamed: (name) => `${name}, 오늘 무엇을 할 예정인가요?`,
  namePlaceholder: "이름을 입력하세요",
  namePlaceholderNamed: "이름 변경",
  nameHint: "이름을 저장하면 개인 모드가 활성화됩니다.",
  nameHintNamed: (name) => `${name}님의 개인 모드가 활성화되었습니다.`,
  taskCannotBeEmpty: "할 일은 비워둘 수 없습니다.",
  taskDuplicate: "중복된 할 일은 허용되지 않습니다.",
  taskNotFound: "할 일을 찾을 수 없습니다.",
  taskUpdated: "할 일이 업데이트되었습니다.",
  taskDeleted: "할 일이 삭제되었습니다.",
  taskAdded: "할 일이 추가되었습니다.",
  taskEnterFirst: "먼저 할 일을 입력하세요.",
  greetingMorning: "좋은 아침입니다",
  greetingAfternoon: "안녕하세요",
  greetingEvening: "좋은 저녁입니다",
  motivations: [
    (name) => `${name ? `${name}, ` : ""}오늘의 작은 한 걸음도 앞으로 나아가는 것입니다.`,
    (name) => `${name ? `${name}, ` : ""}완벽함보다 발전에 집중하세요.`,
    (name) => `${name ? `${name}, ` : ""}꾸준함은 순간적인 동기보다 강합니다.`,
    (name) => `${name ? `${name}, ` : ""}오늘 지킨 시간이 미래를 만듭니다.`,
    (name) => `${name ? `${name}, ` : ""}지금 할 수 있는 것부터 시작하세요.`,
    (name) => `${name ? `${name}, ` : ""}완료된 모든 일은 성장의 증거입니다.`,
    (name) => `${name ? `${name}, ` : ""}차분하게, 천천히, 계속 나아가세요.`
  ],
  pomodoroDone: "포모도로 세션이 완료되었습니다.",
  nameSaved: (name) => `${name}이(가) 저장되었습니다.`,
  nameRemoved: "이름이 저장소에서 삭제되었습니다.",
  linkNamePlaceholder: "이름",
  linkUrlPlaceholder: "https://example.com",
  linkOpen: "열기",
  linkEdit: "수정",
  linkDelete: "삭제",
  linkNotFound: "링크를 찾을 수 없습니다.",
  linkEditLabelPrompt: "링크 이름 수정:",
  linkEditUrlPrompt: "링크 URL 수정:",
  linkLabelEmpty: "이름은 비워둘 수 없습니다.",
  linkUrlEmpty: "URL은 비워둘 수 없습니다.",
  linkValidUrl: "올바른 URL을 입력하세요.",
  linkUpdated: "링크가 업데이트되었습니다.",
  linkDeleteConfirm: (name) => `"${name}" 링크를 삭제하시겠습니까?`,
  linkDeleted: "링크가 삭제되었습니다.",
  linkFillBoth: "두 필드를 모두 입력하세요.",
  linkSaved: "링크가 저장되었습니다.",
  themeOptions: ["기본", "바다", "산", "숲", "행성", "구름"],
  languageNames: ["인도네시아어", "일본어", "영어", "러시아어", "한국어", "중국어"],
  taskTitleNamed: (name) => `${name}의 할 일`
},
zh: {
  locale: "zh-CN",
  htmlLang: "zh",
  languageLabel: "语言",
  languageAriaLabel: "选择语言",
  heroEyebrow: "森林专注",
  nameLabel: "你的名字",
  save: "保存",
  saved: "已保存",
  themeLabel: "主题",
  modeLight: "模式：浅色",
  modeDark: "模式：深色",
  timerEyebrow: "专注计时器",
  start: "开始",
  stop: "停止",
  reset: "重置",
  todoEyebrow: "任务列表",
  todayTasks: "今日任务",
  taskLabel: "添加任务",
  taskAdd: "添加",
  linksEyebrow: "快捷链接",
  linksTitle: "收藏网站",
  linkLabel: "添加链接",
  linkSave: "保存链接",
  weatherEyebrow: "天气",
  weatherTitle: "本地天气",
  weatherRefresh: "刷新",
  weatherLocationLabel: "位置",
  weatherHumidityLabel: "湿度",
  weatherWindLabel: "风速",
  weatherCoordsLabel: "坐标",
  weatherWaiting: "正在等待位置...",
  weatherDetecting: "正在检测你的位置...",
  weatherAllowLocation: "请允许访问位置以查看附近天气。",
  weatherLoading: "正在获取最新天气数据...",
  weatherLocationDenied: "位置访问被拒绝。请开启权限以使用此功能。",
  weatherUnavailable: "当前暂无天气数据。",
  weatherFailed: "天气加载失败，请稍后再试。",
  weatherUnsupported: "此浏览器不支持定位功能。",
  weatherUnknownPlace: "未知位置",
  weatherUpdatedAt: (time) => `更新于 ${time}`,
  taskCount: (completed, total) => `${completed}/${total} 已完成`,
  taskEmpty: "还没有任务，添加一个开始吧。",
  taskEdit: "编辑",
  taskDelete: "删除",
  taskSave: "保存",
  taskCancel: "取消",
  taskPlaceholder: "输入你的下一个任务",
  taskPlaceholderNamed: (name) => `${name}，今天你要完成什么？`,
  namePlaceholder: "输入你的名字",
  namePlaceholderNamed: "更改你的名字",
  nameHint: "保存名字以启用个性化模式。",
  nameHintNamed: (name) => `${name} 的个性化模式已启用。`,
  taskCannotBeEmpty: "任务不能为空。",
  taskDuplicate: "不允许重复任务。",
  taskNotFound: "未找到任务。",
  taskUpdated: "任务已更新。",
  taskDeleted: "任务已删除。",
  taskAdded: "任务已添加。",
  taskEnterFirst: "请先输入任务。",
  greetingMorning: "早上好",
  greetingAfternoon: "下午好",
  greetingEvening: "晚上好",
  motivations: [
    (name) => `${name ? `${name}，` : ""}今天的一小步也在推动你前进。`,
    (name) => `${name ? `${name}，` : ""}专注于进步，而不是完美。`,
    (name) => `${name ? `${name}，` : ""}坚持比一时的动力更重要。`,
    (name) => `${name ? `${name}，` : ""}你今天守护的时间塑造你的未来。`,
    (name) => `${name ? `${name}，` : ""}从现在能做的事情开始。`,
    (name) => `${name ? `${name}，` : ""}每完成一个任务都是成长的证明。`,
    (name) => `${name ? `${name}，` : ""}保持冷静，慢慢前进，坚持下去。`
  ],
  pomodoroDone: "番茄钟已结束。",
  nameSaved: (name) => `${name} 已保存。`,
  nameRemoved: "名字已从存储中删除。",
  linkNamePlaceholder: "名称",
  linkUrlPlaceholder: "https://example.com",
  linkOpen: "打开",
  linkEdit: "编辑",
  linkDelete: "删除",
  linkNotFound: "未找到链接。",
  linkEditLabelPrompt: "编辑链接名称：",
  linkEditUrlPrompt: "编辑链接地址：",
  linkLabelEmpty: "名称不能为空。",
  linkUrlEmpty: "URL不能为空。",
  linkValidUrl: "请输入有效的URL。",
  linkUpdated: "链接已更新。",
  linkDeleteConfirm: (name) => `确定删除链接“${name}”？`,
  linkDeleted: "链接已删除。",
  linkFillBoth: "请填写所有字段。",
  linkSaved: "链接已保存。",
  themeOptions: ["默认", "海洋", "山脉", "森林", "星球", "云"],
  languageNames: ["印尼语", "日语", "英语", "俄语", "韩语", "中文"],
  taskTitleNamed: (name) => `${name}的任务`
}
};

TRANSLATIONS.ru = { ...TRANSLATIONS.ru, locale: "ru-RU", htmlLang: "ru" };
TRANSLATIONS.ko = { ...TRANSLATIONS.ko, locale: "ko-KR", htmlLang: "ko" };
TRANSLATIONS.zh = { ...TRANSLATIONS.zh, locale: "zh-CN", htmlLang: "zh-CN" };
TRANSLATIONS.ja = {
  ...TRANSLATIONS.ja,
  weatherEyebrow: "Weather",
  weatherTitle: "Local Forecast",
  weatherRefresh: "Refresh",
  weatherLocationLabel: "Location",
  weatherHumidityLabel: "Humidity",
  weatherWindLabel: "Wind",
  weatherCoordsLabel: "Coordinates",
  weatherWaiting: "Waiting for location...",
  weatherDetecting: "Detecting your area...",
  weatherAllowLocation: "Allow location access to see weather near you.",
  weatherLoading: "Loading the latest weather...",
  weatherLocationDenied: "Location access was denied. Enable it to use this feature.",
  weatherUnavailable: "Weather data is unavailable right now.",
  weatherFailed: "Weather could not be loaded. Please try again shortly.",
  weatherUnsupported: "This browser does not support geolocation.",
  weatherUnknownPlace: "Unknown location",
  weatherUpdatedAt: (time) => `Updated ${time}`
};

let currentLanguage = readStorage(STORAGE_KEYS.language, "id");
if (!TRANSLATIONS[currentLanguage]) {
  currentLanguage = "id";
}

const THEME_SETTINGS = {
  default: {
    heroImage: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Soft pastel sky at sunrise"
  },
  ocean: {
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Calm blue ocean waves"
  },
  mountain: {
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Mountain range under golden light"
  },
  forest: {
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Misty forest with tall green trees"
  },
  planet: {
    heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Planet Earth seen from space"
  },
  cloud: {
    heroImage: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Fluffy white clouds in bright sky"
  }
};

let tasks = readStorage(STORAGE_KEYS.tasks, []);
let links = readStorage(STORAGE_KEYS.links, DEFAULT_LINKS);
let savedName = readNameStorage();
let remainingSeconds = 25 * 60;
let timerInterval = null;
let weatherRequestInFlight = false;
const LANGUAGE_TIMEZONES = {
  id: "Asia/Jakarta",
  en: "Etc/GMT",
  ja: "Asia/Tokyo",
  ru: "Europe/Moscow",
  ko: "Asia/Seoul",
  zh: "Asia/Shanghai"
};

function t() {
  return TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
}

function getActiveTimeZone() {
  return (
    LANGUAGE_TIMEZONES[currentLanguage] ||
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    "UTC"
  );
}

function readStorage(key, fallbackValue) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readNameStorage() {
  try {
    const rawValue = localStorage.getItem(STORAGE_KEYS.name);
    if (rawValue === null) {
      return "";
    }

    try {
      const parsed = JSON.parse(rawValue);
      return typeof parsed === "string" ? parsed : "";
    } catch (error) {
      return rawValue;
    }
  } catch (error) {
    return "";
  }
}

function writeNameStorage(name) {
  localStorage.setItem(STORAGE_KEYS.name, name);
}

function setMessage(element, message, type = "") {
  element.textContent = message;
  element.className = "helper-text";

  if (type) {
    element.classList.add(type);
  }
}

function formatTimeUnit(value) {
  return String(value).padStart(2, "0");
}

function formatCoordinate(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "--";
}

function getWeatherVisual(weatherCode) {
  if (weatherCode === 0) {
    return { icon: "☀", label: "Clear sky" };
  }

  if ([1, 2, 3].includes(weatherCode)) {
    return { icon: "⛅", label: "Partly cloudy" };
  }

  if ([45, 48].includes(weatherCode)) {
    return { icon: "🌫", label: "Foggy" };
  }

  if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return { icon: "🌦", label: "Drizzle" };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return { icon: "🌧", label: "Rain" };
  }

  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return { icon: "❄", label: "Snow" };
  }

  if ([95, 96, 99].includes(weatherCode)) {
    return { icon: "⛈", label: "Thunderstorm" };
  }

  return { icon: "☁", label: "Cloudy" };
}

function setWeatherLoadingState() {
  weatherIcon.textContent = "..";
  weatherTemp.textContent = "--°C";
  weatherCondition.textContent = t().weatherWaiting;
  weatherLocation.textContent = t().weatherDetecting;
  weatherHumidity.textContent = "--%";
  weatherWind.textContent = "-- km/h";
  weatherCoords.textContent = "--, --";
  setMessage(weatherMessage, t().weatherLoading);
}

function setWeatherFallback(messageKey) {
  weatherIcon.textContent = "..";
  weatherTemp.textContent = "--°C";
  weatherCondition.textContent = t().weatherUnavailable;
  weatherLocation.textContent = t().weatherUnknownPlace;
  weatherHumidity.textContent = "--%";
  weatherWind.textContent = "-- km/h";
  weatherCoords.textContent = "--, --";
  setMessage(weatherMessage, t()[messageKey], "error");
}

function formatWeatherLocation(locationResult) {
  if (!locationResult) {
    return t().weatherUnknownPlace;
  }

  const parts = [
    locationResult.city,
    locationResult.town,
    locationResult.village,
    locationResult.county,
    locationResult.state,
    locationResult.country
  ].filter(Boolean);

  return parts.length ? Array.from(new Set(parts)).slice(0, 3).join(", ") : t().weatherUnknownPlace;
}

async function fetchWeatherForCoordinates(latitude, longitude) {
  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
  weatherUrl.searchParams.set("latitude", latitude);
  weatherUrl.searchParams.set("longitude", longitude);
  weatherUrl.searchParams.set("current", "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m");
  weatherUrl.searchParams.set("timezone", "auto");

  const reverseUrl = new URL("https://geocoding-api.open-meteo.com/v1/reverse");
  reverseUrl.searchParams.set("latitude", latitude);
  reverseUrl.searchParams.set("longitude", longitude);
  reverseUrl.searchParams.set("language", currentLanguage === "id" ? "id" : "en");
  reverseUrl.searchParams.set("format", "json");

  const [weatherResponse, reverseResponse] = await Promise.all([
    fetch(weatherUrl),
    fetch(reverseUrl)
  ]);

  if (!weatherResponse.ok) {
    throw new Error("Weather fetch failed");
  }

  const weatherData = await weatherResponse.json();
  const reverseData = reverseResponse.ok ? await reverseResponse.json() : null;

  if (!weatherData.current) {
    throw new Error("Missing current weather");
  }

  return {
    currentWeather: weatherData.current,
    locationResult: reverseData?.results?.[0] || null
  };
}

async function updateWeather() {
  if (weatherRequestInFlight) {
    return;
  }

  if (!navigator.geolocation) {
    setWeatherFallback("weatherUnsupported");
    return;
  }

  weatherRequestInFlight = true;
  refreshWeatherBtn.disabled = true;
  setWeatherLoadingState();

  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      const { latitude, longitude } = position.coords;
      const { currentWeather, locationResult } = await fetchWeatherForCoordinates(latitude, longitude);
      const visual = getWeatherVisual(currentWeather.weather_code);
      const updatedAt = new Date().toLocaleTimeString(t().locale, {
        hour: "2-digit",
        minute: "2-digit"
      });

      weatherIcon.textContent = visual.icon;
      weatherTemp.textContent = `${Math.round(currentWeather.temperature_2m)}°C`;
      weatherCondition.textContent = visual.label;
      weatherLocation.textContent = formatWeatherLocation(locationResult);
      weatherHumidity.textContent = `${Math.round(currentWeather.relative_humidity_2m)}%`;
      weatherWind.textContent = `${Math.round(currentWeather.wind_speed_10m)} km/h`;
      weatherCoords.textContent = `${formatCoordinate(latitude)}, ${formatCoordinate(longitude)}`;
      setMessage(weatherMessage, t().weatherUpdatedAt(updatedAt), "success");
    } catch (error) {
      setWeatherFallback("weatherFailed");
    } finally {
      weatherRequestInFlight = false;
      refreshWeatherBtn.disabled = false;
    }
  }, (error) => {
    weatherRequestInFlight = false;
    refreshWeatherBtn.disabled = false;

    if (error.code === error.PERMISSION_DENIED) {
      setWeatherFallback("weatherLocationDenied");
      return;
    }

    setWeatherFallback("weatherFailed");
  }, {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 300000
  });
}

function getInitials(name) {
  if (!name) {
    return "--";
  }

  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) {
    return "--";
  }

  const initials = words.slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
  return initials || "--";
}

function applyNamePersonalization() {
  const hasName = Boolean(savedName);

  todoTitle.textContent = hasName ? t().taskTitleNamed(savedName) : t().todayTasks;
  taskInput.placeholder = hasName ? t().taskPlaceholderNamed(savedName) : t().taskPlaceholder;
  nameInput.placeholder = hasName ? t().namePlaceholderNamed : t().namePlaceholder;
  linkNameInput.placeholder = t().linkNamePlaceholder;
  linkUrlInput.placeholder = t().linkUrlPlaceholder;
  nameInitials.textContent = getInitials(savedName);
  nameHint.textContent = hasName ? t().nameHintNamed(savedName) : t().nameHint;
}

function getDayOfYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function updateDailyMotivation(now) {
  if (!dailyMotivation) {
    return;
  }

  const dayOfYear = getDayOfYear(now);
  const messageIndex = dayOfYear % t().motivations.length;
  dailyMotivation.textContent = t().motivations[messageIndex](savedName);
}

function updateClock() {
  const now = new Date();
  const activeTimeZone = getActiveTimeZone();
  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: activeTimeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(now);
  const hour = Number(timeParts.find((part) => part.type === "hour")?.value || "0");
  const minute = timeParts.find((part) => part.type === "minute")?.value || "00";
  const second = timeParts.find((part) => part.type === "second")?.value || "00";

  currentTime.textContent = `${formatTimeUnit(hour)}:${minute}:${second}`;
  currentDate.textContent = now.toLocaleDateString(t().locale, {
    timeZone: activeTimeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  let salute = t().greetingEvening;
  if (hour < 12) {
    salute = t().greetingMorning;
  } else if (hour < 18) {
    salute = t().greetingAfternoon;
  }

  greeting.textContent = savedName ? `${salute}, ${savedName}` : salute;
  updateDailyMotivation(now);
}

function renderTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  timerDisplay.textContent = `${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
}

function startTimer() {
  if (timerInterval) {
    return;
  }

  timerInterval = window.setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds -= 1;
      renderTimer();
      return;
    }

    stopTimer();
    window.alert(t().pomodoroDone);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  remainingSeconds = 25 * 60;
  renderTimer();
}

function updateTaskCount() {
  const completed = tasks.filter((task) => task.done).length;
  taskCount.textContent = t().taskCount(completed, tasks.length);
}

function saveTasks() {
  writeStorage(STORAGE_KEYS.tasks, tasks);
}

function updateTaskText(taskId, nextText) {
  const normalizedText = nextText.trim();
  if (!normalizedText) {
    setMessage(taskMessage, t().taskCannotBeEmpty, "error");
    return false;
  }

  const hasDuplicate = tasks.some(
    (item) => item.id !== taskId && item.text.toLowerCase() === normalizedText.toLowerCase()
  );

  if (hasDuplicate) {
    setMessage(taskMessage, t().taskDuplicate, "error");
    return false;
  }

  const targetTask = tasks.find((item) => item.id === taskId);
  if (!targetTask) {
    setMessage(taskMessage, t().taskNotFound, "error");
    return false;
  }

  targetTask.text = normalizedText;
  saveTasks();
  setMessage(taskMessage, t().taskUpdated, "success");
  return true;
}

function renderTasks() {
  taskList.innerHTML = "";

  if (!tasks.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "task-item";
    emptyItem.textContent = t().taskEmpty;
    taskList.appendChild(emptyItem);
    updateTaskCount();
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task-item";

    const row = document.createElement("div");
    row.className = "task-row";

    const main = document.createElement("div");
    main.className = "task-main";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const text = document.createElement("span");
    text.className = `task-text${task.done ? " done" : ""}`;
    text.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = t().taskEdit;
    editBtn.addEventListener("click", () => {
      if (item.classList.contains("editing")) {
        return;
      }

      item.classList.add("editing");

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "task-edit-input";
      editInput.maxLength = 120;
      editInput.value = task.text;

      main.replaceChild(editInput, text);
      actions.innerHTML = "";

      const saveEditBtn = document.createElement("button");
      saveEditBtn.type = "button";
      saveEditBtn.textContent = t().taskSave;
      saveEditBtn.addEventListener("click", () => {
        if (updateTaskText(task.id, editInput.value)) {
          renderTasks();
        }
      });

      const cancelEditBtn = document.createElement("button");
      cancelEditBtn.type = "button";
      cancelEditBtn.textContent = t().taskCancel;
      cancelEditBtn.addEventListener("click", () => {
        renderTasks();
      });

      editInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          if (updateTaskText(task.id, editInput.value)) {
            renderTasks();
          }
        } else if (event.key === "Escape") {
          event.preventDefault();
          renderTasks();
        }
      });

      actions.append(saveEditBtn, cancelEditBtn);
      editInput.focus();
      editInput.select();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = t().taskDelete;
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      renderTasks();
      setMessage(taskMessage, t().taskDeleted, "success");
    });

    main.append(checkbox, text);
    actions.append(editBtn, deleteBtn);
    row.append(main, actions);
    item.appendChild(row);
    taskList.appendChild(item);
  });

  updateTaskCount();
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function saveLinks() {
  writeStorage(STORAGE_KEYS.links, links);
}

function editLinkById(linkId) {
  const targetLink = links.find((item) => item.id === linkId);
  if (!targetLink) {
    setMessage(linkMessage, t().linkNotFound, "error");
    return;
  }

  const updatedName = window.prompt(t().linkEditLabelPrompt, targetLink.name);
  if (updatedName === null) {
    return;
  }

  const cleanName = updatedName.trim();
  if (!cleanName) {
    setMessage(linkMessage, t().linkLabelEmpty, "error");
    return;
  }

  const updatedUrl = window.prompt(t().linkEditUrlPrompt, targetLink.url);
  if (updatedUrl === null) {
    return;
  }

  const normalizedUrl = normalizeUrl(updatedUrl);
  if (!normalizedUrl) {
    setMessage(linkMessage, t().linkUrlEmpty, "error");
    return;
  }

  try {
    const parsedUrl = new URL(normalizedUrl);
    targetLink.name = cleanName;
    targetLink.url = parsedUrl.href;
    saveLinks();
    renderLinks();
    setMessage(linkMessage, t().linkUpdated, "success");
  } catch (error) {
    setMessage(linkMessage, t().linkValidUrl, "error");
  }
}

function deleteLinkById(linkId) {
  const targetLink = links.find((item) => item.id === linkId);
  if (!targetLink) {
    setMessage(linkMessage, t().linkNotFound, "error");
    return;
  }

  const isConfirmed = window.confirm(t().linkDeleteConfirm(targetLink.name));
  if (!isConfirmed) {
    return;
  }

  links = links.filter((item) => item.id !== linkId);
  saveLinks();
  renderLinks();
  setMessage(linkMessage, t().linkDeleted, "success");
}

function renderLinks() {
  quickLinks.innerHTML = "";

  links.forEach((link) => {
    const wrapper = document.createElement("div");
    wrapper.className = "link-card";

    const meta = document.createElement("div");
    meta.className = "link-meta";

    const title = document.createElement("strong");
    title.textContent = link.name;

    const urlText = document.createElement("p");
    urlText.className = "link-url";
    urlText.textContent = link.url;

    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.className = "link-button";
    openBtn.textContent = t().linkOpen;
    openBtn.addEventListener("click", () => {
      window.open(link.url, "_blank", "noopener,noreferrer");
    });

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "link-button";
    editBtn.textContent = t().linkEdit;
    editBtn.addEventListener("click", () => {
      editLinkById(link.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "link-button";
    deleteBtn.textContent = t().linkDelete;
    deleteBtn.addEventListener("click", () => {
      deleteLinkById(link.id);
    });

    const actions = document.createElement("div");
    actions.className = "link-actions";
    actions.append(openBtn, editBtn, deleteBtn);

    meta.append(title, urlText);
    wrapper.append(meta, actions);
    quickLinks.appendChild(wrapper);
  });
}

function applyTheme(theme) {
  let normalizedTheme = theme;
  if (theme === "light") {
    normalizedTheme = "default";
  } else if (theme === "dark") {
    normalizedTheme = "forest";
  } else if (!THEME_SETTINGS[theme]) {
    normalizedTheme = "default";
  }

  document.body.dataset.theme = normalizedTheme;

  if (themeSelect) {
    themeSelect.value = normalizedTheme;
  }

  if (heroImage) {
    heroImage.src = THEME_SETTINGS[normalizedTheme].heroImage;
    heroImage.alt = THEME_SETTINGS[normalizedTheme].heroAlt;
  }
}

function applyLanguage(language) {
  currentLanguage = TRANSLATIONS[language] ? language : "id";
  writeStorage(STORAGE_KEYS.language, currentLanguage);

  document.documentElement.lang = t().htmlLang;
  heroEyebrow.textContent = t().heroEyebrow;
  languageLabel.textContent = t().languageLabel;
  currencySelect.setAttribute("aria-label", t().languageAriaLabel);
  nameLabel.textContent = t().nameLabel;
  themeLabel.textContent = t().themeLabel;
  timerEyebrow.textContent = t().timerEyebrow;
  todoEyebrow.textContent = t().todoEyebrow;
  taskLabel.textContent = t().taskLabel;
  taskSubmitBtn.textContent = t().taskAdd;
  linksEyebrow.textContent = t().linksEyebrow;
  linksTitle.textContent = t().linksTitle;
  linkLabel.textContent = t().linkLabel;
  linkSubmitBtn.textContent = t().linkSave;
  weatherEyebrow.textContent = t().weatherEyebrow;
  weatherTitle.textContent = t().weatherTitle;
  refreshWeatherBtn.textContent = t().weatherRefresh;
  weatherLocationLabel.textContent = t().weatherLocationLabel;
  weatherHumidityLabel.textContent = t().weatherHumidityLabel;
  weatherWindLabel.textContent = t().weatherWindLabel;
  weatherCoordsLabel.textContent = t().weatherCoordsLabel;
  startTimerBtn.textContent = t().start;
  stopTimerBtn.textContent = t().stop;
  resetTimerBtn.textContent = t().reset;
  saveNameBtn.textContent = t().save;

  const themeOptionIds = [
    "themeOptionDefault",
    "themeOptionOcean",
    "themeOptionMountain",
    "themeOptionForest",
    "themeOptionPlanet",
    "themeOptionCloud"
  ];

  themeOptionIds.forEach((id, index) => {
    const option = document.getElementById(id);
    if (option) {
      option.textContent = t().themeOptions[index];
    }
  });

  Array.from(currencySelect.options).forEach((option, index) => {
    option.textContent = t().languageNames[index];
  });

  currencySelect.value = currentLanguage;
  applyNamePersonalization();
  applyMode(document.body.dataset.mode);
  renderTasks();
  renderLinks();
  updateClock();

  if (weatherTemp.textContent === "--°C" && !weatherRequestInFlight) {
    weatherCondition.textContent = t().weatherWaiting;
    weatherLocation.textContent = t().weatherDetecting;
    setMessage(weatherMessage, t().weatherAllowLocation);
  }
}

function applyMode(mode) {
  const normalizedMode = mode === "dark" ? "dark" : "light";
  document.body.dataset.mode = normalizedMode;

  if (modeToggle) {
    modeToggle.textContent = normalizedMode === "dark" ? t().modeDark : t().modeLight;
  }
}

function saveName() {
  savedName = nameInput.value.trim();
  writeNameStorage(savedName);
  applyNamePersonalization();
  updateClock();
  setMessage(
    nameMessage,
    savedName ? t().nameSaved(savedName) : t().nameRemoved,
    "success"
  );
  saveNameBtn.textContent = t().saved;
  window.setTimeout(() => {
    saveNameBtn.textContent = t().save;
  }, 1200);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = taskInput.value.trim();
  if (!value) {
    setMessage(taskMessage, t().taskEnterFirst, "error");
    return;
  }

  const hasDuplicate = tasks.some((task) => task.text.toLowerCase() === value.toLowerCase());
  if (hasDuplicate) {
    setMessage(taskMessage, t().taskDuplicate, "error");
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    text: value,
    done: false
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
  setMessage(taskMessage, t().taskAdded, "success");
});

linkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = linkNameInput.value.trim();
  const url = normalizeUrl(linkUrlInput.value);

  if (!name || !url) {
    setMessage(linkMessage, t().linkFillBoth, "error");
    return;
  }

  try {
    const parsedUrl = new URL(url);
    links.unshift({
      id: crypto.randomUUID(),
      name,
      url: parsedUrl.href
    });
  } catch (error) {
    setMessage(linkMessage, t().linkValidUrl, "error");
    return;
  }

  saveLinks();
  renderLinks();
  linkForm.reset();
  applyNamePersonalization();
  setMessage(linkMessage, t().linkSaved, "success");
});

saveNameBtn.addEventListener("click", saveName);
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    saveName();
  }
});

if (themeSelect) {
  themeSelect.addEventListener("change", () => {
    const nextTheme = themeSelect.value;
    writeStorage(STORAGE_KEYS.theme, nextTheme);
    applyTheme(nextTheme);
  });
}

if (currencySelect) {
  currencySelect.addEventListener("change", () => {
    applyLanguage(currencySelect.value);
  });
}

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    const currentMode = document.body.dataset.mode === "dark" ? "dark" : "light";
    const nextMode = currentMode === "dark" ? "light" : "dark";
    writeStorage(STORAGE_KEYS.mode, nextMode);
    applyMode(nextMode);
  });
}

refreshWeatherBtn.addEventListener("click", updateWeather);

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);

function init() {
  const storedTheme = readStorage(STORAGE_KEYS.theme, "default");
  const storedMode = readStorage(STORAGE_KEYS.mode, "light");
  applyTheme(storedTheme);

  nameInput.value = savedName;
  renderTimer();
  applyLanguage(currentLanguage);
  applyMode(storedMode);
  window.setInterval(updateClock, 1000);
  updateWeather();
}

init();
