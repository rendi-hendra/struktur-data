import { Queue } from "./queue";
import { Stack } from "./stack";

const stack1 = new Stack<number>()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
stack1.pop()
console.log(stack1.peak());
console.log(stack1.size());
console.log(stack1.all());


const koki = new Queue<string>()
koki.enqueue("Nasi Goreng")
koki.enqueue("Es Teh")
koki.enqueue("Bakso")
koki.enqueue("Sate")

console.log(`Koki Sedang Menyiapkan Pesanan ${koki.peak()}`);
console.log(`Pesanan Sudah Siap ${koki.dequeue()}`);
console.log(`Koki Sedang Menyiapkan Pesanan ${koki.peak()}`);
console.log(`Total Pesanan: ${koki.getSize()}`);



