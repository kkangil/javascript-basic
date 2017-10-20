function BarMenu(selector){
    this.$barMenu = null;
    this.$menuBody = null;
    this.$menuItems = null;
    this.$overItem = null;
    this.$bar = null;
    this.$selectItem = null;
    
    this.init(selector);
    this.initEvent();
};

BarMenu.prototype.init = function(selector){
    this.$barMenu = $(selector);
    this.$menuBody = this.$barMenu.find('.menu-body');
    this.$menuItems = this.$menuBody.find('li');
    this.$bar = this.$barMenu.find('.bar');
};
BarMenu.prototype.initEvent = function(){
    var objThis = this;
    
    this.$menuItems.on('mouseenter',function(){
        objThis.setOverMenuItem($(this));
    })
    this.$menuItems.on('mouseleave',function(){
        objThis.removeOverItem();
        objThis.reSelectMenuItem();
    });
    this.$menuItems.on('click',function(){
        objThis.removeOverItem();
        objThis.setSelectMenuItem($(this));
    });
};
BarMenu.prototype.setOverMenuItem = function($item){
    if(this.$overItem){
        this.$overItem.removeClass('over');
    }
//    this.$overItem = $item;
//    this.$overItem.addClass('over');
    var selectIndex = -1;
    if(this.$selectItem != null){
        selectIndex = this.$selectItem.index();
    };
    if($item.index() != selectIndex){
        this.$overItem = $item;
        this.$overItem.addClass('over');
    }else{
        this.$overItem = null;
    }
    this.moveBar($item);
};
BarMenu.prototype.removeOverItem = function(){
    if(this.$overItem){
        this.$overItem.removeClass('over');
    }
    this.$overItem = null;
    this.moveBar(null);
};
BarMenu.prototype.moveBar = function($item){
    var left = 0;
    var width = 0;
    if($item != null){
        left = $item.position().left + parseInt($item.css('margin-left'));
        width = $item.outerWidth();
    };
    this.$bar.stop().animate({
        left : left,
        width : width
    },300);
};
BarMenu.prototype.setSelectMenuItem = function($item){
    if(this.$selectItem){
        this.$selectItem.removeClass('select');
    };
    this.$selectItem = $item;
    this.$selectItem.addClass('select');
    this.moveBar($item);
};
BarMenu.prototype.reSelectMenuItem = function(){
    if(this.$selectItem){
        this.moveBar(this.$selectItem);
    }
};

$(document).ready(function(){
    var barMenu = new BarMenu('.bar-menu');
});



