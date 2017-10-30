function Poster(selector){
    this.$poster = null;
    this.$poster_width = null;
    this.$poster_height = null;
    
    this.$horizon = null;
    this.$vertical = null;
    this.$random = null;
    this.$grid = null;
    
    this.init(selector)
    this.initEvent();
}

Poster.prototype.init = function(selector){
    this.$poster = $(selector);
    this.$poster_width = this.$poster.outerWidth();
    this.$poster_height = this.$poster.outerHeight();
    
    this.$horizon = $('#horizon');
    this.$vertical = $('#vertical');
    this.$random = $('#random');
    this.$grid = $('#grid');
};

Poster.prototype.initEvent = function(){
    this.$horizon.on('click',this.horizon);
    this.$vertical.on('click',this.vertical);
    this.$random.on('click',this.random);
    this.$grid.on('click',this.grid);
};

Poster.prototype.horizon = function(){
    poster.$poster.each(function(i){
        var move = (poster.$poster_width + 20) * i;
        poster.$poster.eq(i).css({ 
            top : 0,
            left : move + 'px'
        })
    });
};

Poster.prototype.vertical = function(){
    poster.$poster.each(function(i){
        var move = (poster.$poster_height + 20) * i;
        poster.$poster.eq(i).css({ 
            top : move + 'px',
            left : 0
        })
    });
};

Poster.prototype.random = function(){
    poster.$poster.each(function(i){
        var random_left = Math.floor(Math.random()*(poster.$poster_width+1));
        var random_top = Math.floor(Math.random()*(poster.$poster_height+1));
        poster.$poster.eq(i).css({ 
            top : random_top + 'px',
            left : random_left + 'px'
        })
    });
};

Poster.prototype.grid = function(){
    poster.$poster.each(function(i){
        var grid_cnt = 3;
        var grid_left_rule = (i % 3) * (poster.$poster_width + 20 );
        var grid_top_rule = (Math.floor(i / 3)) * (poster.$poster_height + 20);
        poster.$poster.eq(i).css({ 
            top : grid_top_rule + 'px',
            left : grid_left_rule + 'px'
        })
    });
};

var poster = new Poster('.poster img');
