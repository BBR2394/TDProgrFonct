/*
* @Author: Baptiste
* @Date:   2019-12-17 10:44:49
* @Last Modified by:   Baptiste
* @Last Modified time: 2019-12-17 16:56:50
*/

/*
pour compiler : npx tsc todolist.ts --lib es2015
*/

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function createTask(titre, des) {
    return ({ name: titre, description: des });
}
function addTask(titre, des, lst) {
    cpLst = __spreadArrays(lst);
    cpLst.push({ name: titre, description: des });
    return cpLst;
}
function addTaskFromObj(obj, lst) {
    cpLst = __spreadArrays(lst);
    cpLst.push(obj);
    return cpLst;
}
function removeTaskFromName(giventitle, theLst) {
    lst = theLst.filter(function (task) { return task.name !== giventitle; });
    return lst;
}
function printTask(thelst) {
    var toPrint = "";
    thelst.forEach(function (task, index) {
        toPrint += "La tache " + index + "\n->nom : " + task.name + "\n---> et la description : " + task.description + "\n";
    });
    return toPrint;
}
function changeDescription(nameGiven, newDes, theLst) {
    return theLst.map(function (elem) {
        if (elem.name == nameGiven) {
            elem.description = newDes;
        }
        return elem;
    });
}
module.exports = {
    createTask: createTask,
    addTask: addTask,
    addTaskFromObj: addTaskFromObj,
    removeTaskFromName: removeTaskFromName,
    printTask: printTask,
    changeDescription: changeDescription
};
