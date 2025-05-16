export class Stack<T> {
  private items: T[]

  constructor(){
    this.items = []
  }

  push(items: T): void {
    this.items.push(items)
  }

  pop(): T | undefined {
    this.items.shift()
    return this.items[0]
  }

  peak(): T | undefined {
    return this.items[0]
  }

  isEmpty(): boolean {
    return this.items.length == 0
  }

  size(): number {
    return this.items.length
  }

  all(): T[] {
    return this.items
  }
}
