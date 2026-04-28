// src/data/trains.js
export const trainsData = [
  {
    id: 1,
    trainNumber: "081Л",
    badge: "Найдешевший",
    departureCity: "Львів",
    arrivalCity: "Київ-Пас",
    departureDate: "28 квітня",
    departureTime: "22:51",
    arrivalDate: "29 квітня",
    arrivalTime: "09:58",
    duration: "11 год 7 хв",
    routeDisplay: "Ужгород → Київ-Пас",
    seats: [
      { class: "Плацкарт", count: 89, price: 273 },
      { class: "Купе", count: 7, price: 607 },
      { class: "Дитяче купе", count: 1, price: 607 }
    ]
  },
  {
    id: 2,
    trainNumber: "092Л",
    badge: "Флагманський",
    departureCity: "Львів",
    arrivalCity: "Київ-Пас",
    departureDate: "28 квітня",
    departureTime: "23:08",
    arrivalDate: "29 квітня",
    arrivalTime: "06:58",
    duration: "7 год 50 хв",
    routeDisplay: "Львів → Київ-Пас",
    seats: [
      { class: "Купе", count: 29, price: 674 },
      { class: "Люкс", count: 4, price: 1650 }
    ]
  },
  {
    id: 3,
    trainNumber: "716Л",
    badge: "Інтерсіті+",
    departureCity: "Львів",
    arrivalCity: "Київ-Пас",
    departureDate: "29 квітня",
    departureTime: "15:30",
    arrivalDate: "29 квітня",
    arrivalTime: "22:45",
    duration: "7 год 15 хв",
    routeDisplay: "Перемишль → Київ-Пас",
    seats: [
      { class: "Сидячий 1-й кл.", count: 12, price: 1150 },
      { class: "Сидячий 2-й кл.", count: 45, price: 560 }
    ]
  },
  {
    id: 4,
    trainNumber: "015О",
    badge: "Швидкий",
    departureCity: "Харків-Пас",
    arrivalCity: "Львів",
    departureDate: "29 квітня",
    departureTime: "18:40",
    arrivalDate: "30 квітня",
    arrivalTime: "08:25",
    duration: "13 год 45 хв",
    routeDisplay: "Харків-Пас → Ясіня",
    seats: [
      { class: "Плацкарт", count: 12, price: 350 },
      { class: "Купе", count: 5, price: 820 },
      { class: "Люкс", count: 2, price: 2100 }
    ]
  },
  {
    id: 5,
    trainNumber: "038Ш",
    badge: null,
    departureCity: "Одеса-Головна",
    arrivalCity: "Львів",
    departureDate: "28 квітня",
    departureTime: "21:15",
    arrivalDate: "29 квітня",
    arrivalTime: "09:45",
    duration: "12 год 30 хв",
    routeDisplay: "Одеса-Головна → Ужгород",
    seats: [
      { class: "Плацкарт", count: 45, price: 290 },
      { class: "Купе", count: 15, price: 680 }
    ]
  }
];