var minFirstGenAmount = 1;
var maxFirstGenAmount = 12;

var firstGeneration;
var lastGeneration;
var selectedGeneration;
var selectedNode;

var genNodeColors = [
    '#ff3399', '#0099ff', '#99ff33', '#9966ff', '#00ff99', '#ff9933'
];

class GenNode {
    constructor(genNumber, nodeID, selectColor) {
        this.genNumber = genNumber;
        this.nodeID = nodeID;
        this.nodeColor = genNodeColors[selectColor];
        this.selectColor = selectColor;
    }

    GetNodeID() {
        return this.nodeID;
    }

    GetNodeColor() {
        return this.nodeColor;
    }

    GetSelectColor() {
        return this.selectColor;
    }

    AppendChildNode(childNode) {
        this.childNode = childNode;
    }
}

class Generation {
    constructor(genNumber, parentGen = null, childGen = null) {
        this.genNumber = genNumber;
        this.parentGen = parentGen;
        this.childGen = childGen;
        this.genNodeList = new Array();
    }

    GetGenNumber() {
        return this.genNumber;
    }

    GetParentGen() {
        return this.parentGen;
    }

    GetChildGen() {
        return this.childGen;
    }

    GetGenNodeList() {
        return this.genNodeList;
    }

    AddGenNode(nodeNumber, preSelectColor = null) {
        //Generate nodeID
        var nodeID = "";
        var charLength = 15;
        var charList = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
            '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        for (let i = 0; i < charLength; i++) {
            let setChar = Math.floor(Math.random() * charList.length);
            nodeID = nodeID + charList[setChar];
        }

        //Set node color
        let selectColor = nodeNumber;

        if (preSelectColor == null) {
            while (selectColor >= genNodeColors.length) {
                selectColor -= genNodeColors.length;
            }
        }
        else {
            selectColor = preSelectColor;
        }

        //Push node
        var node = new GenNode(this.genNumber, nodeID, selectColor);
        this.genNodeList.push(node);
    }

    AppendChildGen(childGen) {
        this.childGen = childGen;
    }
}

function CreateFirstGeneration(genNumber) {
    var genNodeAmount = Math.floor(Math.random() * (maxFirstGenAmount - minFirstGenAmount)) + minFirstGenAmount;
    var generation = new Generation(1);

    for (let i = 0; i < genNodeAmount; i++) {
        generation.AddGenNode(i);
    }

    return generation;
}

function CreateNewGeneration(parentGen) {
    var generation = new Generation(parentGen.GetGenNumber() + 1, parentGen);
    parentGen.AppendChildGen(generation);

    PopulateNewGeneration(generation);
    return generation;
}

function PopulateNewGeneration(generation) {
    var parentNodeList = generation.GetParentGen().GetGenNodeList();

    for (let i = 0; i < parentNodeList.length; i++) {
        let childCount = DetermineChildNodeCount();
        let nodeIndex = 0;

        while (nodeIndex < childCount) {
            generation.AddGenNode(i, parentNodeList[i].GetSelectColor());
            let genNodeList = generation.GetGenNodeList();

            parentNodeList[i].AppendChildNode(genNodeList[i]);
            nodeIndex++;
        }
    }
    console.log("_______________");
}

function DetermineChildNodeCount() {
    var minChildCount = 0;
    var maxChildCount = 3;

    var childCount = Math.floor(Math.random() * (maxChildCount - minChildCount)) + minChildCount;
    console.log(childCount);
    return childCount;
}

function FindGenerationByNumber(genNumber) {
    let foundGeneration = false;
    let checkGeneration = firstGeneration;

    do {
        if (checkGeneration.GetGenNumber() == genNumber) {
            foundGeneration = true;
        }
        else {
            checkGeneration = checkGeneration.GetChildGen();
        }
    } while (!foundGeneration);

    return checkGeneration;
}

function FindNodeInGenByNumber(nodeNumber) {
    let nodeList = selectedGeneration.GetGenNodeList();
    let foundNode = nodeList[nodeNumber];

    return foundNode;
}