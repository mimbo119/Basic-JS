(function () {
    'use strict'
    // var vm = this;
    //Declarations
    var itemList = ["Hello World", "fsdfsd", "dsfsd"];

    //Methods

    function titleShow(){

        var title = document.getElementsByClassName('title');
        var newTitle = document.createElement('h2');
        var titleName = document.createTextNode('To-Do List');

        newTitle.appendChild(titleName);
        title[0].appendChild(newTitle);
    }


    function displayListItems() {
        itemList.forEach(function (item, index) {
            var element = document.getElementById('itemList');
            var newParagraph = document.createElement('p');
            var newTextNode = document.createTextNode(item);
            var paragraph = document.createTextNode('    ')
            var editButton = document.createElement('button');
            var editText = document.createTextNode('Edit');
            editButton.setAttribute('id', 'button');
            var deleteButton = document.createElement('button');
            var deleteText = document.createTextNode('Delete');
            deleteButton.setAttribute('id', 'button2');



            newParagraph.appendChild(newTextNode);
            element.appendChild(newParagraph);
            element.appendChild(editButton);
            editButton.appendChild(editText);
            element.appendChild(deleteButton);
            deleteButton.appendChild(deleteText);


            editButton.addEventListener("click", function () {
                editItem(index);
            });

            
            deleteButton.addEventListener("click", function () {
                deleteItem(index);
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
        var searchContainer = document.getElementById('showItem');
        //var showDoc = document.getElementById('showIndex');
        var x = document.getElementById('txt').value;
        var index = itemList.indexOf(x);

        if (index != -1) {
            searchContainer.innerHTML = x + ' is here = ' + index;
        }
    }

    function editItem(index) {

        var editElement = document.getElementById('editIndex');
        editElement.innerHTML = '';

        var editBox = document.createElement('input');

        
        editBox.setAttribute('type', 'text');
        editBox.setAttribute('value', itemList[index]);
        editBox.addEventListener("keypress", function () {
            if (event.key === "Enter") {
                itemList[index] = editBox.value;
                var containerElement = document.getElementById('itemList');
                containerElement.innerHTML = '';
                displayListItems();
                editElement.innerHTML = '';
            }
        })
        editElement.appendChild(editBox);
       
    }


    function deleteItem(index) {

        var containerElement = document.getElementById('itemList');
        containerElement.innerHTML = '';
        itemList.splice(index, 1);  
        displayListItems();

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
            titleShow();
        }, 300);
    }

    init();
})()