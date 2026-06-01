export const TECH_LINKS = {
  'Next.js': 'https://nextjs.org/',
  'React': 'https://react.dev/',
  'React Native': 'https://reactnative.dev/',
  'Expo': 'https://expo.dev/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Node.js': 'https://nodejs.org/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'FastAPI': 'https://fastapi.tiangolo.com/',
  'Python': 'https://www.python.org/',
  'OpenAI API': 'https://openai.com/',
  'Cloudinary': 'https://cloudinary.com/',
  'WhatsApp Business API': 'https://developers.facebook.com/docs/whatsapp/'
};

/**
 * Returns the official external link for a technology if mapped, otherwise null.
 * @param {string} techName 
 * @returns {string|null}
 */
export function getTechLink(techName) {
  return TECH_LINKS[techName] || null;
}
