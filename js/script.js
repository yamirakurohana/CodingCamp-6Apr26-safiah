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
    taskLabel: "Add a task",
    taskAdd: "Add",
    linksEyebrow: "Quick Links",
    linksTitle: "Favorite Sites",
    linkLabel: "Add a link",
    linkSave: "Save link",
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
    weatherUpdatedAt: (time) => `Updated ${time}`,
    taskCount: (completed, total) => `${completed}/${total} done`,
    taskEmpty: "No tasks yet. Add one to get started.",
    taskEdit: "Edit",
    taskDelete: "Delete",
    taskSave: "Save",
    taskCancel: "Cancel",
    taskPlaceholder: "Write your next task",
    taskPlaceholderNamed: (name) => `What will you finish today, ${name}?`,
    namePlaceholder: "Enter your name",
    namePlaceholderNamed: "Update your name",
    nameHint: "Save your name to enable personal mode.",
    nameHintNamed: (name) => `Personal mode is active for ${name}.`,
    taskCannotBeEmpty: "Task cannot be empty.",
    taskDuplicate: "Duplicate task is not allowed.",
    taskNotFound: "Task not found.",
    taskUpdated: "Task updated.",
    taskDeleted: "Task deleted.",
    taskAdded: "Task added.",
    taskEnterFirst: "Please enter a task first.",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    motivations: DAILY_MOTIVATIONS,
    pomodoroDone: "Pomodoro session complete.",
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
    linkValidUrl: "Please enter a valid URL.",
    linkUpdated: "Link updated.",
    linkDeleteConfirm: (name) => `Delete link \"${name}\"?`,
    linkDeleted: "Link deleted.",
    linkFillBoth: "Please fill in both fields.",
    linkSaved: "Link saved.",
    themeOptions: ["Default", "Ocean", "Mountain", "Forest", "Planet", "Cloud"],
    languageNames: ["Indonesian", "Japanese", "English", "Russian", "Korean", "Chinese"],
    taskTitleNamed: (name) => {
      const lastChar = name.charAt(name.length - 1).toLowerCase();
      return `${lastChar === "s" ? `${name}'` : `${name}'s`} Tasks`;
    }
  },
  ja: {
    locale: "ja-JP",
    htmlLang: "ja",
    languageLabel: "言語",
    languageAriaLabel: "言語を選択",
    heroEyebrow: "Forest Focus",
    nameLabel: "名前",
    save: "保存",
    saved: "保存済み",
    themeLabel: "テーマ",
    modeLight: "モード: ライト",
    modeDark: "モード: ダーク",
    timerEyebrow: "集中タイマー",
    start: "開始",
    stop: "停止",
    reset: "リセット",
    todoEyebrow: "やることリスト",
    todayTasks: "今日のタスク",
    taskLabel: "タスクを追加",
    taskAdd: "追加",
    linksEyebrow: "クイックリンク",
    linksTitle: "お気に入りサイト",
    linkLabel: "リンクを追加",
    linkSave: "リンクを保存",
    taskCount: (completed, total) => `${completed}/${total} 完了`,
    taskEmpty: "まだタスクがありません。追加して始めましょう。",
    taskEdit: "編集",
    taskDelete: "削除",
    taskSave: "保存",
    taskCancel: "キャンセル",
    taskPlaceholder: "次のタスクを入力",
    taskPlaceholderNamed: (name) => `${name}さん、今日は何を終わらせますか？`,
    namePlaceholder: "名前を入力",
    namePlaceholderNamed: "名前を更新",
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
      (name) => `${name ? `${name}さん、` : ""}今日の小さな一歩も前進です。`,
      (name) => `${name ? `${name}さん、` : ""}完璧より進歩に集中しましょう。`,
      (name) => `${name ? `${name}さん、` : ""}一貫性は一時的なやる気に勝ります。`,
      (name) => `${name ? `${name}さん、` : ""}今日守った時間が未来を形作ります。`,
      (name) => `${name ? `${name}さん、` : ""}今できることから始めましょう。`,
      (name) => `${name ? `${name}さん、` : ""}終えたタスク一つひとつが成長の証です。`,
      (name) => `${name ? `${name}さん、` : ""}落ち着いて、ゆっくりでも進み続けましょう。`
    ],
    pomodoroDone: "ポモドーロセッションが完了しました。",
    nameSaved: (name) => `${name}さんを保存しました。`,
    nameRemoved: "保存された名前を削除しました。",
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
    languageNames: ["Indonesian", "日本語", "English", "Russian", "Korean", "Chinese"],
    taskTitleNamed: (name) => `${name}さんのタスク`
  },
  ru: null,
  ko: null,
  zh: null
};

TRANSLATIONS.ru = { ...TRANSLATIONS.en, locale: "ru-RU", htmlLang: "ru" };
TRANSLATIONS.ko = { ...TRANSLATIONS.en, locale: "ko-KR", htmlLang: "ko" };
TRANSLATIONS.zh = { ...TRANSLATIONS.en, locale: "zh-CN", htmlLang: "zh-CN" };
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
