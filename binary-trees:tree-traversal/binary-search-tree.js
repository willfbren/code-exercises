class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                // if we just want to return true or false
                // return true
                found = true;
            }
        }
        // if we just want to return true or false
        // return false
        if (!found) return undefined;
        return current;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // more verbose with explicit else statements

    // insert(value) {
    //     let newNode = new Node(value);
    //     if (this.root === null) {
    //         this.root = newNode;
    //         return this;
    //     } else {
    //         let current = this.root;
    //         while (true) {
    //             if (value === current.value) return undefined;
    //             if (value < current.value) {
    //                 if (current.left === null) {
    //                     current.left = newNode;
    //                     return this;
    //                 } else {
    //                     current = current.left;
    //                 }
    //             } else if (value > current.value) {
    //                 if (current.right === null) {
    //                     current.right = newNode;
    //                     return this;
    //                 } else {
    //                     current = current.right;
    //                 }
    //             }
    //         }
    //     }
    // }

    bfs() {
        let data = [];
        let queue = [];
        let node = this.root;

        queue.push(this.root);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    dfsPreOrder() {
        let data = [];
        // let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    dfsPostOrder() {
        // root is the last thing that is visited
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    dfsInOrder() {
        // traverse left to right
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}
