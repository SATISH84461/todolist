document.addEventListener("DOMContentLoaded", function (){
var num = localStorage.getItem('num');
    if (num == null) {
        num = -1;
        localStorage.setItem('num', num);
    }
    var x = document.getElementById("task");
    var y = document.getElementById("button");
    y.onclick = function () {
        var z = document.getElementById("input_task");
        var a = document.createElement('p');
        if (z.value != "") {
            a.innerHTML = z.value + '<button type="button" class="btn btn-danger" id="btn">Remove</button>';
            x.appendChild(a);
            x.style.padding = "0 0 1% 0";
            num++;
            localStorage.setItem(num, z.value);
            localStorage.setItem('num', num);
        }
        else {
            alert("Enter Your Task");
        }
    }
    document.addEventListener("click", function () {
        if (num != -1) {
            var b = document.getElementsByTagName("button");
            for (i = 0; i < b.length; i++) {
                b[i].onclick = function () {
                    var p = this.parentElement;
                    localStorage.removeItem(num);
                    num--;
                    localStorage.setItem('num', num);
                    if (num == -1) {
                        h = b[0].parentElement.parentElement;
                        h.innerHTML = null;
                        h.style.padding = 0;
                    }
                    p.innerHTML = null;
                    p.style.padding = 0;
                }
            }
        }
    });
    var x = document.getElementById("task");
    i = 0;
    while (localStorage.getItem(i) != null) {
        var a = document.createElement('p');
        var l = localStorage.getItem(i);
        a.innerHTML = l + '<button type="button" class="btn btn-danger" id="btn">Remove</button>';
        x.appendChild(a);
        x.style.padding = "0 0 1% 0";
        i++;
    }
});