export function debounce<T extends (...args: any[]) => any>(
  this: any,
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer)
    }
    const context: any = this
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
