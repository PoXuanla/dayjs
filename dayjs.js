import dayjs from "dayjs";

// 註解統一使用 format("YYYY-MM-DD HH:mm:ss")

const now = dayjs(); // '2024-05-22 09:32:24'

// Set

const setYear = now.set("year", 2000); // '2000-05-22 09:32:44'

const setMonth = now.set("month", 0); // '2024-01-22 09:33:17'

const setHour = now.hour(16); // '2024-05-22 16:11:35'

const setDate = now.date(13); // '2024-05-13 10:15:49'


// !important: 取得日期當周星期六的日期
const setDay = now.day(6); // '2024-05-25 10:12:59'


// Manipulate 

const addSevenDays = now.add(7, "day"); // '2024-05-29 09:33:35'

const subSevenDays = now.subtract(7, "day"); // '2024-05-15 09:33:35'

const startOf = now.startOf("month"); // '2024-05-01 00:00:00'


// Compare

const compare = now.isBefore(addSevenDays); // true

const compare2 = now.isAfter(addSevenDays); // false

const compare3 = now.isSame(addSevenDays); // false


// Compare by value

const compareByValue = now.valueOf() < addSevenDays.valueOf(); // true

const compareByValue2 = now.valueOf() >= subSevenDays.valueOf(); // true

// Diff

const diff = now.diff(addSevenDays, "day"); // -7

const diff2 = now.diff(addSevenDays, "month"); // 0