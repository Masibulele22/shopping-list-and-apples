// shopping-list dom code here
var addedTopicElem = document.querySelector(".addedTopic");
var allocatedBudgetInputElem = document.querySelector(".allocatedBudgetInput");
var addedTopicElem = document.querySelector(".addedTopic");
var itemsSpanElem = document.querySelector(".itemsPricesSpan");
var itemsPricesSpanElem = document.querySelector(".itemsSpan");

var topicElem = document.querySelector(".topic");
var addDescriptionElem = document.querySelector(".addDescription");
var addDescriptionPriceInputElem = document.querySelector(".addDescriptionPriceInput");
var topicAndBudgetButtonElem = document.querySelector(".topicAndBudgetButton");
var descriptionAndPriceButtonElem = document.querySelector(".descriptionAndPriceButton");

var totalElem = document.querySelector(".total"); 

if(localStorage['prod','listTopic'] !== undefined){
    var storeTopic = JSON.parse(localStorage['prod', 'listTopic'])
 }
else {
    storeTopic = [];
}

var factoryInstance = addedItems(storeTopic);

function showTopicAndBudgetFunc(){
    var listTopic = addedTopicElem.value; 
   // var listTotal = totalElem.value;
    var topicDisplay = factoryInstance.showTopic(listTopic);
    
    topicElem.innerHTML = topicDisplay;
    localStorage['listTopic'] = JSON.stringify(factoryInstance.getTopic());

   // if (!listTotal <= itemsPriceTotal);    
    // var addDescriptionPriceInputElem.innerHTML;

};

function showDescriptionAndPriceFunc(){
    var prod = addDescriptionElem.value; 
    var itemPrices = factoryInstance.showProducts(prod);
    
    itemsPricesSpanElem.innerHTML = itemPrices;
    localStorage['prod'] = JSON.stringify(factoryInstance.getProducts());
    
};

descriptionAndPriceButtonElem.addEventListener("click", showDescriptionAndPriceFunc);
topicAndBudgetButtonElem.addEventListener("click", showTopicAndBudgetFunc);



