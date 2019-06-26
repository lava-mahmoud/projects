//Budget Controller
var budgetController=(function(){
    //private section
    
     var Expense=function(id,description,value){
         this.id=id;
         this.description=description;
         this.value=value;
     }
     var Income=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }
     var data={
         allItems:{
            exp:[],
            inc:[]
            },
        totals:{
            exp:0,
            inc:0
            }
     }
    //public section
    return{
        setInput:function(type,description,value){
            var newItem,ID;
            ID=0;
            if(type==='exp')
                newItem=new Expense(ID,description,value);
            else if(type==='inc')
                newItem=new Income(ID,description,value);
            data.all[type].push(newItem);    
            return newItem;
        }

    }
})();

//UI Controller
var UIController=(function(){
    //private section
    var DOMStrings={
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        addButton:'.add__btn' 
    }

      //public section
    return {
        getinput: function(){
            return{
            type:document.querySelector(DOMStrings.inputType).value,
            description:document.querySelector(DOMStrings.inputDescription).value,
           value:document.querySelector(DOMStrings.inputValue).value}
        },
            
        getDOMStrings :function(){
            return DOMStrings;
        }
        }
       

   
   
})();

//Global App Controller
var controller=(function(budgetCtrl,UICtrl){
    //private section
   
    function setupEventListners(){
        var Dom=UICtrl.getDOMStrings();
        document.querySelector(Dom.addButton).addEventListener('click',function(){
            ctrlAddItem();
        });
    
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13 || event.which===13)
            ctrlAddItem();
        });
    }


    function ctrlAddItem(){
        //1. get the field input data 
        
        var input=UICtrl.getinput();

        //console.log( input);
        //2.add the item to the budget controller
        var newItem=budgetCtrl.setInput(input.type,input.description,input.value);
        //console.log(newItem);

        //3.add the item to the UI



        //4.calculate the budget



        //5.display the budget to the user UI

    }


    //public section

    return{
        //initialization function
        init:function(){
            console.log('works');
            //when we cal the controller in ifi it returns imediatly
            //init but dosent call setup event listner to do that we
            // call init from the out side
            setupEventListners();
        }

    }
})(budgetController,UIController);


//whitout this call nothing works and the listner function are not called
controller.init();