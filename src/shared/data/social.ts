import {BASE_URL} from "@/shared/data/const.ts";

export const MESSENGERS = [
  { href: '#', icon: `${BASE_URL}/social/telegram.avif`, alt: 'Telegram', label: 'Telegram' },
  { href: '#', icon: `${BASE_URL}/social/viber.avif`, alt: 'Viber', label: 'Viber' },
] as const

export const SOCIAL_NETWORKS = [
  { href: '#', icon: `${BASE_URL}/social/instagram.avif`, alt: 'Instagram', label: 'Instagram' },
  { href: '#', icon: `${BASE_URL}/social/tiktok.avif`, alt: 'TikTok', label: 'TikTok' },
  { href: '#', icon: `${BASE_URL}/social/youtube.avif`, alt: 'YouTube', label: 'YouTube' },
] as const
