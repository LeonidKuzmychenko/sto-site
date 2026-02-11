import {BASE_URL} from "@/shared/data/const.ts";

export const MESSENGERS = [
  { href: 'https://web.telegram.org/', icon: `${BASE_URL}/social/telegram.avif`, alt: 'Telegram', label: 'Telegram' },
  { href: 'https://www.viber.com/', icon: `${BASE_URL}/social/viber.avif`, alt: 'Viber', label: 'Viber' },
] as const

export const SOCIAL_NETWORKS = [
  { href: 'https://www.instagram.com/', icon: `${BASE_URL}/social/instagram.avif`, alt: 'Instagram', label: 'Instagram' },
  { href: 'https://www.tiktok.com/', icon: `${BASE_URL}/social/tiktok.avif`, alt: 'TikTok', label: 'TikTok' },
  { href: 'https://www.youtube.com/', icon: `${BASE_URL}/social/youtube.avif`, alt: 'YouTube', label: 'YouTube' },
] as const
