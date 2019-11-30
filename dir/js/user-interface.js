var treeDisplay;

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

    for (let i = 0; i < nodes.length; i++) {
        let nodeContainer = document.createElement("div");
        console.log(nodes[i]);
        let nodeText = document.createTextNode(nodes[i].GetNodeID());

        nodeContainer.appendChild(nodeText);
        treeDisplay.appendChild(nodeContainer);
    }
}