export function isIOS() {
  return (
    window && window.navigator && window.navigator.userAgent &&
    window.navigator.userAgent.match(/(iPod|iPhone|iPad)/)
  )
}
