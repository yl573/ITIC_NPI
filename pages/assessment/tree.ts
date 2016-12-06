export class TreeManager {

	root: node = null;
	currentNode: node = null;

	constructor(jsonObj: any) {
		this.root = this.parseObjToTree(jsonObj);
		this.currentNode = this.root;
	}

	parseObjToTree(jsonObj) {
		console.log(jsonObj['value']);
		var rootNode = new node(jsonObj['value'], jsonObj['label']);
		if(typeof jsonObj['children'] !== 'undefined') {

			jsonObj['children'].forEach((child) => {
				console.log(child);
			    rootNode.children.push(this.parseObjToTree(child));
			});
		}
		return rootNode;
	}

	goToChild(index) {
		try {
			this.currentNode = this.currentNode.children[index];
		}
		catch (err) {
			console.log(err);
		}
	}
}

class node {
    value: any;
    label: string;
    children: node[] = [];
    constructor(val, lab) {
        this.value = val;
        this.label = lab;
    }   
}

