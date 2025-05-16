class ListNode {
  documentName: string;
  next: any;

  constructor(documentName: string) {
    this.documentName = documentName;
    this.next = null;
  }
}

// Queue menggunakan Linked List
class PrinterQueue {
  front: any;
  rear: any;
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(documentName: string) {
    const newNode = new ListNode(documentName);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    console.log(`📥 Dokumen ditambahkan: ${documentName}`);
  }

  dequeue() {
    if (!this.front) {
      console.log("📭 Antrian kosong, tidak ada dokumen untuk dicetak.");
      return;
    }

    const removedDoc = this.front.documentName;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    console.log(`🖨️ Mencetak dokumen: ${removedDoc}`);
  }

  showQueue() {
    let current = this.front;
    if (!current) {
      console.log("📭 Antrian kosong.");
      return;
    }

    console.log("📄 Daftar dokumen dalam antrian:");
    while (current) {
      console.log(`- ${current.documentName}`);
      current = current.next;
    }
  }
}

// Contoh penggunaan
const queue1 = new PrinterQueue();

queue1.enqueue("Laporan_Kuliah.pdf");
queue1.enqueue("Struktur_Data.docx");
queue1.enqueue("Resume_CV.pdf");

queue1.showQueue();

queue1.dequeue(); // Cetak dokumen pertama
queue1.showQueue(); // Lihat antrian tersisa
