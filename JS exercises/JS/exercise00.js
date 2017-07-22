document.addEventListener("DOMContentLoaded", function () {


    function TableObject(number) {
        this.number = number;
    }

    TableObject.prototype.getNumber = function () {
        return this.number;
    }

    function createTable(m, n) {
        var tab = [];
        for (var i = 0; i < m; i++) {
            var subTab = [];
            for (var j = 0; j < n; j++) {
                var newObject = new TableObject(i * n + j);
                subTab.push(newObject);
            }
            tab.push(subTab);
        }
        return tab;
    }

    function drawTable(array) {
        var container = document.querySelector('.container');
        var table = document.createElement('table');
        table.className = 'table';

        for (var i = 0; i < array.length; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < array[i].length; j++) {
                var td = document.createElement('td');

                td.innerText = array[i][j].getNumber();

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        container.appendChild(table);

    }

    var timeout = setTimeout(function () {
        var arr = createTable(4, 8);
        drawTable(arr);
    }, 2000);

});
