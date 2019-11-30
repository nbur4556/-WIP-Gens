var treeDisplay;
var nodeClassName = "node";
var genContainerClassName = "node-container";

window.onload = function () {
    treeDisplay = document.getElementById("family-tree-display");

    document.getElementById("start-gen").addEventListener("click", function () {
        firstGeneration = CreateFirstGeneration(1);
        lastGeneration = firstGeneration;
        selectedGeneration = firstGeneration;
        //console.log(firstGeneration);

        DisplayNodes();
    });

    document.getElementById("next-gen").addEventListener("click", function () {
        lastGeneration = CreateNewGeneration(lastGeneration);
        selectedGeneration = lastGeneration;
        //console.log(lastGeneration);

        DisplayNodes();
    });

    document.getElementById("find-gen-by-num").addEventListener("click", function () {
        selectedGeneration = FindGenerationByNumber(3);
        console.log(selectedGeneration);
    });

    document.getElementById("find-node-by-num").addEventListener("click", function () {
        selectedNode = FindNodeInGenByNumber(1);
        console.log(selectedNode);
    });
}

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

function NodeContainer(){
	var nodeContainer = document.createElement("div");
	nodeContainer.className = genContainerClassName;
	
	return nodeContainer;
}