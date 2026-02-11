import {BASE_URL} from "@/shared/data/const.ts";

export type EquipmentItem = {
    id: number
    titleKey: string
    descriptionKey: string
    image: string
}

export const EQUIPMENT: EquipmentItem[] = [
    {
        id: 1,
        titleKey: 'equipmentPage.equipment.ms005a.title',
        descriptionKey: 'equipmentPage.equipment.ms005a.description',
        image: `${BASE_URL}/equipment/MS005A.avif`,
    },
    {
        id: 2,
        titleKey: 'equipmentPage.equipment.ms016a.title',
        descriptionKey: 'equipmentPage.equipment.ms016a.description',
        image: `${BASE_URL}/equipment/MS016A.avif`,
    },
    {
        id: 3,
        titleKey: 'equipmentPage.equipment.ms014.title',
        descriptionKey: 'equipmentPage.equipment.ms014.description',
        image: `${BASE_URL}/equipment/MS014.avif`,
    },
    {
        id: 4,
        titleKey: 'equipmentPage.equipment.ms015.title',
        descriptionKey: 'equipmentPage.equipment.ms015.description',
        image: `${BASE_URL}/equipment/MS015.avif`,
    },
    {
        id: 5,
        titleKey: 'equipmentPage.equipment.kdp200.title',
        descriptionKey: 'equipmentPage.equipment.kdp200.description',
        image: `${BASE_URL}/equipment/KDP200.avif`,
    },
]

