import {BASE_URL} from "@/shared/data/const.ts";

export type BeforeAfterItem = {
  id: number
  title: string
  before: string
  after: string
}


export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  { id: 1, title: 'Ремонт генератора Bosch', before: `${BASE_URL}/before-after/before.jpg`, after: `${BASE_URL}/before-after/after.jpg` },
  { id: 2, title: 'Ремонт стартера Valeo', before: `${BASE_URL}/before-after/before.jpg`, after: `${BASE_URL}/before-after/after.jpg` },
  { id: 3, title: 'Восстановление генератора Denso', before: `${BASE_URL}/before-after/before.jpg`, after: `${BASE_URL}/before-after/after.jpg` },
  { id: 4, title: 'Ремонт стартера Bosch', before: `${BASE_URL}/before-after/before.jpg`, after: `${BASE_URL}/before-after/after.jpg` },
]
