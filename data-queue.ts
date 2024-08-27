class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  values(): T[] {
    return Array.from(this.items);
  }
}

const queue = new Queue<Number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.values());
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());

const queue2 = new Queue<Number>();
console.log(queue2.isEmpty());
console.log(queue2.values());
