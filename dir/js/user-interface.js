window.onload = function () {
    document.getElementById("start-gen").addEventListener("click", function () {
        firstGeneration = CreateFirstGeneration(1);
        lastGeneration = firstGeneration;
        selectedGeneration = firstGeneration;
        //console.log(firstGeneration);
    });

    document.getElementById("next-gen").addEventListener("click", function () {
        lastGeneration = CreateNewGeneration(lastGeneration);
        selectedGeneration = lastGeneration;
        //console.log(lastGeneration);
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