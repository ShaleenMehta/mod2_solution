(function(){

  angular.module('ShoppingListCheckOff',[])
  .controller('ctrl1',ctrl1_fn)
  .controller('ctrl2',ctrl2_fn)
  .service('ShoppingListCheckOffService',svc_Constructor);

  ctrl1_fn.$inject = ['ShoppingListCheckOffService'];
  function ctrl1_fn(ShoppingListCheckOffService){
      var ToBuyController = this;
      ToBuyController.move = function (item, pos) {
        ShoppingListCheckOffService.move(item, pos);
      };
      ToBuyController.items = ShoppingListCheckOffService.getToBuyItems();
  };

  ctrl2_fn.$inject = ['ShoppingListCheckOffService'];
  function ctrl2_fn(ShoppingListCheckOffService){
      var AlreadyBoughtController = this;
      AlreadyBoughtController.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function svc_Constructor()
  {
    svc = this;
    var toBuyItems = [
      {
        name: "Milk",
        qty: "2"
      },
      {
        name: "Donuts",
        qty: "200"
      },
      {
        name: "Cookies",
        qty: "300"
      },
      {
        name: "Chocolate",
        qty: "5"
      }
    ];
    var boughtItems = [];
    svc.getToBuyItems = function (){
      return toBuyItems;
    };
    svc.getBoughtItems = function (){
      return boughtItems;
    };
    svc.move = function (item, pos){
      boughtItems.push(item);
      toBuyItems.splice(pos,1);
    };
  };
})();
