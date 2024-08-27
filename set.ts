class CustomSet<T> {
  private items: Map<T, boolean>;

  constructor() {
    this.items = new Map<T, boolean>();
  }

  // Menambahkan elemen ke set
  add(element: T): boolean {
    if (!this.items.has(element)) {
      this.items.set(element, true);
      return true;
    }

    return false;
  }

  // Menghapus elemen dari set
  delete(element: T): boolean {
    return this.items.delete(element);
  }

  // Memeriksa apakah elemen ada di set
  has(element: T): boolean {
    return this.items.has(element);
  }

  // Mengembalikan ukuran set
  size(): number {
    return this.items.size;
  }

  // Menghapus semua elemen di set
  clear(): void {
    this.items.clear();
  }

  // Mengembalikan semua elemen dalam set
  values(): T[] {
    return Array.from(this.items.keys());
  }
}

const mySet = new CustomSet();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);

console.log(mySet.values());
console.log(mySet.size());

mySet.delete(2);
console.log(mySet.values());
