//Variables
var treeDisplay;
var nodeClassName = "node";
var genContainerClassName = "node-container";

//Initialize
window.onload = function () {
    treeDisplay = document.getElementById("family-tree-display");

    //Start Button
    document.getElementById("start-gen").addEventListener("click", function () {
        firstGeneration = CreateFirstGeneration(1);
        lastGeneration = firstGeneration;
        selectedGeneration = firstGeneration;

        DisplayNodes();
    });

    //Next Gen Button
    document.getElementById("next-gen").addEventListener("click", function () {
        lastGeneration = CreateNewGeneration(lastGeneration);
        selectedGeneration = lastGeneration;

        DisplayNodes();
    });

    //Find Generation Button
    document.getElementById("find-gen-by-num").addEventListener("click", function () {
        selectedGeneration = FindGenerationByNumber(3);
        console.log(selectedGeneration);
    });

    //Find Node Button
    document.getElementById("find-node-by-num").addEventListener("click", function () {
        selectedNode = FindNodeInGenByNumber(1);
        console.log(selectedNode);
    });

    //Clear Button
    document.getElementById("clear-tree-display").addEventListener("click", function () {
        ClearTreeDisplay();
    });
}

//Display nodes to screen
function DisplayNodes() {
    var nodes = selectedGeneration.GetGenNodeList();
    var nodeContainer = NodeContainer();

    for (let i = 0; i < nodes.length; i++) {
        let node = document.createElement("div");
        //let nodeText = document.createTextNode(nodes[i].GetNodeID());
        let nodeColor = nodes[i].GetNodeColor();

        node.className = nodeClassName;
        node.style.backgroundColor = nodeColor;

        //node.appendChild(nodeText);
        nodeContainer.appendChild(node);
    }

    treeDisplay.appendChild(nodeContainer);
}

//Create container for all nodes in a generation
function NodeContainer() {
    var nodeContainer = document.createElement("div");
    nodeContainer.className = genContainerClassName;

    return nodeContainer;
}

//Remove all children from treeDisplay element
function ClearTreeDisplay() {
    while (treeDisplay.firstChild) {
        treeDisplay.removeChild(treeDisplay.firstChild);
    }
}