import { webFrame } from 'electron';
import { attachSpellCheckProvider, SpellCheckerProvider } from 'electron-hunspell';
import { ENVIRONMENT } from 'hunspell-asm';
import path from 'path';
import { readFileSync } from 'fs';

import { DICTIONARY_PATH } from '../config';
import { SPELLCHECKER_LOCALES } from '../i18n/languages';

const debug = require('debug')('Franz:spellchecker');

let provider;
let currentDict;
let _isEnabled = false;
let attached;

async function loadDictionary(locale) {
  try {
    const fileLocation = path.join(DICTIONARY_PATH, `hunspell-dict-${locale}/${locale}`);
    await provider.loadDictionary(locale, readFileSync(`${fileLocation}.dic`), readFileSync(`${fileLocation}.aff`));
    debug('Loaded dictionary', locale, 'from', fileLocation);
  } catch (err) {
    console.error('Could not load dictionary', err);
  }
}

export async function switchDict(locale) {
  try {
    debug('Trying to load dictionary', locale);

    if (!provider) {
      console.warn('SpellcheckProvider not initialized');

      return;
    }

    if (locale === currentDict) {
      console.warn('Dictionary is already used', currentDict);

      return;
    }

    if (currentDict) {
      provider.unloadDictionary(locale);
    }
    loadDictionary(locale);
    attached.switchLanguage(locale);

    debug('Switched dictionary to', locale);

    currentDict = locale;
    _isEnabled = true;
  } catch (err) {
    console.error(err);
  }
}

export default async function initialize(languageCode = 'en-us') {
  try {
    provider = new SpellCheckerProvider();
    const locale = languageCode.toLowerCase();

    debug('Init spellchecker');
    await provider.initialize({ environment: ENVIRONMENT.NODE });

    debug('Attaching spellcheck provider');
    attached = await attachSpellCheckProvider(provider);

    debug('Available spellchecker dictionaries', provider.availableDictionaries);

    attached.switchLanguage(locale);

    return provider;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function isEnabled() {
  return _isEnabled;
}

export function disable() {
  if (isEnabled()) {
    webFrame.setSpellCheckProvider(currentDict, true, { spellCheck: () => true });
    _isEnabled = false;
    currentDict = null;
  }
}

export function getSpellcheckerLocaleByFuzzyIdentifier(identifier) {
  const locales = Object.keys(SPELLCHECKER_LOCALES).filter(key => key === identifier.toLowerCase() || key.split('-')[0] === identifier.toLowerCase());

  if (locales.length >= 1) {
    return locales[0];
  }

  return null;
}
