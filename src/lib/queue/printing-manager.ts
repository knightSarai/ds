import {Queue} from './queue';


export class PrintingManager {
  queue = new Queue<string>();

  schedule(document: string){
    this.queue.enqueue(document);
  }

  run() {
    while(this.queue.peek()) {
      this.print(this.queue.deque());
    }
  }

  print(document: string) {
    console.log(document);
  }

}

