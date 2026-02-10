export type EquipmentItem = {
  id: number
  title: string
  image: string
}

const BASE = '/sto-site'

export const EQUIPMENT: EquipmentItem[] = [
  { id: 1, title: 'Автомобильный подъёмник (2-стоечный / 4-стоечный)', image: `${BASE}/1.webp` },
  { id: 2, title: 'Диагностический сканер OBD-II', image: `${BASE}/2.jpeg` },
  { id: 3, title: 'Стенд для проверки стартеров и генераторов', image: `${BASE}/3.webp` },
  { id: 4, title: 'Компрессор с пневмолинией', image: `${BASE}/4.jpg` },
  { id: 5, title: 'Шиномонтажный станок', image: `${BASE}/5.jpg` },
  { id: 6, title: 'Балансировочный станок', image: `${BASE}/6.jpg` },
  { id: 7, title: 'Гидравлический пресс', image: `${BASE}/7.jpg` },
]
