export class Queue<T> {
    private queue: T[] = []
    private size: number = 0

    enqueue(element: T): void{
        this.queue.push(element)
        this.size++
    }

    dequeue(): T | undefined{
        if(this.isEmpty()) return undefined
        this.size--
        return this.queue.shift()
    }

    
  peak(): T | undefined {
    return this.queue[0]
  }

  isEmpty(): boolean {
    return this.queue.length == 0
  }

  getSize(): number {
    return this.size;  // Mengembalikan ukuran antrian
}

}