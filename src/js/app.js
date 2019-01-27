(function () {
    'use strict'
    // var vm = this;
    //Declarations
    var itemList = ["Hello World", "fsdfsd", "dsfsd"];

    //Methods
    function displayListItems() {
        itemList.forEach(function (item, index) {
            var element = document.getElementById('itemList');
            var newParagraph = document.createElement('p');
            var newTextNode = document.createTextNode(item);
            var editButton = document.createElement('button');
            var editText = document.createTextNode('Edit');


            newParagraph.appendChild(newTextNode);
            element.appendChild(newParagraph);
            element.appendChild(editButton);
            editButton.appendChild(editText);

            itemList.forEach(function(){

            
                editButton.addEventListener("click", function (index) {
                    edit(index);
                })
            });
        })
    }

    function addItems() {
        var containerElement = document.getElementById('itemList');
        var element = document.getElementById('addItems');
        itemList.push(element.value);
        containerElement.innerHTML = '';
        displayListItems();
        element.value = null;
    }

    function search() {
        var searchContainer = document.getElementById('searchContainer');
        var showDoc = document.getElementById('showIndex');
        var x = document.getElementById('txt').value;
        var index = itemList.indexOf(x);

        if (index != -1) {
            showDoc.innerHTML = x + ' is here = ' + index;
        }
    }

    function edit(index) {
        
        var editElement = document.getElementById('editIndex');
        var editBox = document.createElement('input');
        
        editBox.innerHTML = '';
        editBox.setAttribute('type', 'text');
        editBox.setAttribute('value', 'edit');
        editElement.appendChild(editBox);
        editBox.innerHTML = '?';
    }   

    function initEventListners() {
        var element = document.getElementById('addItems');
        var searchElement = document.getElementById('searchArray');
        var editElement = document.getElementById('');

        element.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                addItems();
            }

        });

        searchElement.addEventListener("click", function (event) {
            search();
        });

    }


    //Init Function
    function init() {
        setTimeout(() => {
            displayListItems();
            initEventListners();
            edit();
        }, 300);
    }

    init();
})()