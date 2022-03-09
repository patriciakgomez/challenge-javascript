function OrderedLinkedList() {
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

OrderedLinkedList.prototype.add = function (val) {
    if (!this.head) {
        this.head = new Node(val);
    } else {
        let current = this.head, prev = null, temp = null;
        if (current.value < val) {
            temp = current;
            this.head = new Node(val);
            this.head.next = temp;
        } else {
            while (current.next && current.next.value > val) {
                prev = current.next;
                current = current.next;
            }
            temp = current.next;
            current.next = new Node(val);
            current = current.next;
            current.next = temp;
        }
    }
}

let ll = new OrderedLinkedList()
ll.add(5)
ll.add(1)
ll.add(4)

OrderedLinkedList.prototype.removeHigher = function () {
    /*if (!this.head) return null;
    let current = this.head, higher = this.head.value, prev = null, higherNext = null;
    while (current.next) {
        if (current.next.value > higher) {
            higher = current.next.value;
            higherNext = current.next.next;
            prev = current.next;
        }
        current.next = current.next.next;
    }
    if (higher===this.head.value){
        this.head=this.head.next
    }else {
        prev=higherNext
    }
    return higher*/
}