import type { Locale } from '../i18n';
import { en } from './en';
import { vi } from './vi';
import { zh } from './zh';
import { ko } from './ko';
import type { GuideContent } from './types';

export const guides: Record<Locale, GuideContent> = { en, vi, zh, ko };

export type { GuideContent, TopicContent } from './types';
