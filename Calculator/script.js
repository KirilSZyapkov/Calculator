var colection = [];
var countOperation = 0;
var row = "";

function input(arg) {
    let action = arg;
    
    if (document.getElementById('result').innerText === "Cannot divide by zero") {
        document.getElementById('result').innerText = "";
    }

    if (action !== "/" && action !== "*" && action !== "+" && action !== "-") {
        if (action === "C") {
            document.getElementById('result').innerText = "";
            document.getElementById('history').innerText = "";
            colection = [];
            countOperation = 0;
            row = "";
        } else if (action === ".") {
            let curNum = document.getElementById('result').innerText;
            if (!curNum.includes(".")) {
                let txt = document.createTextNode(action);
                document.getElementById('result').append(txt);
            }
        } else if (action === "=") {
            if (document.getElementById('result').innerText === "") {
                alert("Cannot proceed!");
            } else {
                let num = document.getElementById('result').innerText;
                num = Number(num);
                colection.push(num);
                action = undefined;
                let [firstNum, operamde, secondNum] = colection;
                solv(firstNum, operamde, secondNum);
                colection = [];
                countOperation = 0;
                row = "";
            }

        } else {
            if (action === "0") {
                let curIndex = document.getElementById('result').innerText;
                if (curIndex[0] !== "0") {
                    row += action;
                    let txt = document.createTextNode(action);
                    document.getElementById('result').append(txt);
                } else if (curIndex.includes(".")) {
                    row += action;
                    let txt = document.createTextNode(action);
                    document.getElementById('result').append(txt);
                }
            } else {
                row += action;
                let txt = document.createTextNode(action);
                document.getElementById('result').append(txt);
            }
        }

    } else {
        let token = document.getElementById('result').innerText;
        let tokenTwo = document.getElementById('history').innerText;
        if (token === "" && tokenTwo === "") {
            alert("Enter a number!");
        } else {
            if (countOperation <= 0) {
                if ((token === "" && tokenTwo === "") && colection.length !== 0) {
                    alert("Enter a number!");
                } else if (tokenTwo !== "" && token === "") {
                    if (token === "" && (action !== "/" && action !== "*" && action !== "+" && action !== "-")) {
                        alert("Enter a number!");
                    } else {
                        if (token === "" && colection.length !== 0) {
                            alert("Enter a number!");
                        } else {
                            let curResult = document.getElementById('history').innerText;
                            curResult = Number(curResult);
                            colection.push(curResult);
                            colection.push(action);
                            row = colection.join("");
                            document.getElementById('history').innerText = row;
                            document.getElementById('result').innerText = "";
                            countOperation++;
                        }
                    }
                } else {
                    let num = document.getElementById('result').innerText;
                    num = Number(num);
                    colection.push(num);
                    colection.push(action);
                    if (colection.length >= 3) {
                        let [firstNum, operamde, secondNum] = colection;
                        solv(firstNum, operamde, secondNum);
                    } else {
                        row = colection.join("");
                        document.getElementById('history').innerText = row;
                        document.getElementById('result').innerText = "";
                        countOperation++;
                    }
                }
            } else {
                if (token === "") {
                    alert("Cannot perform action!")
                } else {
                    let num = document.getElementById('result').innerText;
                    num = Number(num);
                    colection.push(num);
                    let [firstNum, operamde, secondNum] = colection;
                    solv(firstNum, operamde, secondNum);
                }
            }
        }
    }

    function solv(firstNum, operamde, secondNum) {
        let result = 0;
        switch (operamde) {
            case "/":
                if (secondNum === 0) {
                    document.getElementById('history').innerText = "";
                    document.getElementById('result').innerText = "Cannot divide by zero";
                } else {
                    document.getElementById('result').innerText = "";
                    result = firstNum / secondNum;
                    let txt = document.createTextNode(result);
                    document.getElementById('result').append(txt);
                    let num = document.getElementById('result').innerText;
                    num = Number(num);
                    colection = [];
                    colection.push(num);
                    colection.push(action);
                    row = colection.join("");
                    countOperation = 0;
                    document.getElementById('history').innerText = row;
                    document.getElementById('result').innerText = "";
                    row = "";
                }
                break;
            case "*":
                document.getElementById('result').innerText = "";
                result = firstNum * secondNum;
                let txt = document.createTextNode(result);
                document.getElementById('result').append(txt);
                let num = document.getElementById('result').innerText;
                num = Number(num);
                colection = [];
                colection.push(num);
                colection.push(action);
                row = colection.join("");
                countOperation = 0;
                document.getElementById('history').innerText = row;
                document.getElementById('result').innerText = "";
                row = "";
                break;
            case "+":
                document.getElementById('result').innerText = "";
                result = firstNum + secondNum;
                let tok = document.createTextNode(result);
                document.getElementById('result').append(tok);
                let numAdd = document.getElementById('result').innerText;
                numAdd = Number(numAdd);
                colection = [];
                colection.push(numAdd);
                colection.push(action);
                row = colection.join("");
                countOperation = 0;
                document.getElementById('history').innerText = row;
                document.getElementById('result').innerText = "";
                row = "";
                break;
            case "-":
                document.getElementById('result').innerText = "";
                result = firstNum - secondNum;
                let tx = document.createTextNode(result);
                document.getElementById('result').append(tx);
                let numSubstract = document.getElementById('result').innerText;
                numSubstract = Number(numSubstract);
                colection = [];
                colection.push(numSubstract);
                colection.push(action);
                row = colection.join("");
                countOperation = 0;
                document.getElementById('history').innerText = row;
                document.getElementById('result').innerText = "";
                row = "";
                break;
            default: break;
        }
    }
}
