export type BeforeAfterItem = {
  id: number
  title: string
  before: string
  after: string
}

const BASE = '/sto-site'

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  { id: 1, title: 'Ремонт генератора Bosch', before: `${BASE}/before.jpg`, after: `${BASE}/after.jpg` },
  { id: 2, title: 'Ремонт стартера Valeo', before: `${BASE}/before.jpg`, after: `${BASE}/after.jpg` },
  { id: 3, title: 'Восстановление генератора Denso', before: `${BASE}/before.jpg`, after: `${BASE}/after.jpg` },
  { id: 4, title: 'Ремонт стартера Bosch', before: `${BASE}/before.jpg`, after: `${BASE}/after.jpg` },
]
