var pxModal = angular.module('pxModal', ['ui.bootstrap']);

pxModal.factory('ModalFactory',function($modal){
    var modalInstance;
    return {
        open : function(params){
            var backdrop = (params.backdrop)?params.backdrop:"static";
            var keyboard = (params.keyboard)?params.keyboard:false;

            modalInstance = $modal.open({
                templateUrl: params.template,
                controller: params.controller,
                keyboard: keyboard,
                backdrop: backdrop,
                windowClass: "pxModalClass",
                resolve: {
                    params : function(){
                        return params.params;
                    }
                },
            });

            modalInstance.cancel = function(){}

            modalInstance.result.then(
                function (close) {
                    if(close != undefined){
                        modalInstance.cancel();
                    }
                },
                function (dismiss) {
                    modalInstance.cancel();
                });
        },
        close : function(){
            modalInstance.close();
        },
        cancel : function(){
            modalInstance.close('cancel');
        },
        setCancel : function(cancel){
            modalInstance.cancel = cancel;
        },
    };
});