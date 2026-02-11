import {BASE_URL} from "@/shared/data/const.ts";

export type EquipmentItem = {
  id: number
  title: string
  image: string
}

export const EQUIPMENT: EquipmentItem[] = [
  { id: 1, title: 'Автомобильный подъёмник (2-стоечный / 4-стоечный)', image: `${BASE_URL}/1.webp` },
  { id: 2, title: 'Диагностический сканер OBD-II', image: `${BASE_URL}/2.jpeg` },
  { id: 3, title: 'Стенд для проверки стартеров и генераторов', image: `${BASE_URL}/3.webp` },
  { id: 4, title: 'Компрессор с пневмолинией', image: `${BASE_URL}/4.jpg` },
  { id: 5, title: 'Шиномонтажный станок', image: `${BASE_URL}/5.jpg` },
  { id: 6, title: 'Балансировочный станок', image: `${BASE_URL}/6.jpg` },
  { id: 7, title: 'Гидравлический пресс', image: `${BASE_URL}/7.jpg` },
]
