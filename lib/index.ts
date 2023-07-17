export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://xxx.vercel.app'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
