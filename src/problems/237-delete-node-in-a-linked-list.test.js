import ListNode from "../utils/ListNode";
import { deleteNode } from "./237-delete-node-in-a-linked-list";
import { readList } from "../utils/list.util";

describe("delete a node in a linked list when only given that node", () => {
  it("should delete the given node correctly", () => {
    const nodeA = new ListNode(1);
    const nodeB = new ListNode(2);
    const nodeC = new ListNode(3);
    const nodeD = new ListNode(4);

    nodeA.next = nodeB;
    nodeB.next = nodeC;
    nodeC.next = nodeD;

    deleteNode(nodeB);
    expect(readList(nodeA)).toEqual([1, 3, 4]);
  });
});
