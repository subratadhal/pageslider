/****************************************************************
	Website: subratadhal.com
	Name: pageslider
	Author: Subrata Dhal
	version: 1.0
	Date: 01/07/2017
******************************************************************/
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($,undefined) {
    'use strict';
    var defaults = {
        bullet: false,
        bulletthumb: false,
        bulletthumbshow: false,
        controler: false
    };
    var global = {
        sh:0,
        counter:0,
        list:0,
        ph:0,
        exe:'false'
    };
    function pageslider(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, global, options);
        var gsh=0,tc=0,a=[],icn=[];
        $(element).children().each(function(i,e){
            a.push($(e).data('pagetitle')? $(e).data('pagetitle') : "" );
            icn.push($(e).data('icon')? $(e).data('icon') : "" );
            //var p  =  i === 0 ? $(e).addClass('pa') : '';
            $(e).addClass('page');
            tc+=1;
        });
        this.options.list = (tc);
        function setheight(){
           var wh = window.innerHeight;
           $(element).children().each(function(i,e){
                if(!$(e).hasClass('controlpoint')){
                    $(e).height(wh);  
                }
           });
           gsh = wh;
           var o = $(element).find('.sl-bullets').data('bc');
           var  count = o*wh;
           $('html, body').animate({ scrollTop: count }, 600, 'swing');
        };
        setheight(); 
        this.options.sh = gsh;
        $(window).resize(setheight);
        this.init($(element),icn,a); 
    }
    pageslider.prototype.init = function (that,icn,a) {
        var _ = this;
        if(_.options.controler){
            _.createcontroler(that);
        }
        if(_.options.bullet){
            _.createbullets(that);
        }
        _.control(that,icn,a);  
        _.bulletsActive(that,a);
    };
    pageslider.prototype.seticon = function(that,icn) {
        var v = icn[this.options.counter];
        that.find('.control-icon').children().removeAttr('class').attr('class', '');
        that.find('.control-icon').children().addClass(v);
    };
    pageslider.prototype.bulletsActive = function(that,a) {
        var _ = this, b = that.find('.sl-bullets').children();
        b.removeClass('active');
        b.eq(this.options.counter).addClass('active'); 
        if(_.options.bulletthumbshow){
            if(_.options.bulletthumb){
                that.find('.sl-bullets a').each(function(i,e){
                    var i = $(this).index();
                    var v = a[i];
                    $(this).append('<span>'+v+'</span>');
                });
                _.options.bulletthumb = false;
            };
            b.find('span').hide();
            b.eq(this.options.counter).find('span').fadeIn();
            setTimeout(function () {
                b.find('span').fadeOut();
            },800);
        }
    };
    pageslider.prototype.createcontroler = function(that) {
        var html = '<div class="controlpoint"><div class="controlpoint-content"><div class="c-line-horizontal"></div><div class="c-line-left"></div><div class="c-line-right"></div><div class="control-first"><i class="fa fa-hand-o-up" aria-hidden="true"></i></div><div class="control-prev"><i class="fa fa-hand-o-left" aria-hidden="true"></i></div><div class="control-next"><i class="fa fa-hand-o-right" aria-hidden="true"></i></div><div class="control-last"><i class="fa fa-hand-o-down" aria-hidden="true"></i></div><div class="control-icon"><i class="fa fa-home" aria-hidden="true"></i></div></div></div>';
        that.append(html);
    };
    pageslider.prototype.createbullets = function(that) {
        var w,d = '';
        for(var i = 0; i<this.options.list; i++){
            d += '<a></a>';
        };
        var html = '<div class="sl-bullets" data-bc="0">' + d + '</div>';
        that.append(html);
        w=that.find('.sl-bullets').innerHeight();
        that.find('.sl-bullets').css({marginTop:-(w/2)+'px'});
    };
    pageslider.prototype.call = function(that,icn,a) {
        var _ = this; 
        if(_.options.exe === 'false'){
            _.options.exe = 'true';
            var o = this.options.counter;
            var wh = window.innerHeight;
            that.find('.pa').addClass('sectioninvisible');
            that.find('.sectioninvisible').removeClass('pa');
            that.find('.sectioninvisible').prev().addClass('pa');
            that.find('.page').removeClass('sectioninvisible');
            var  count = o*wh;
            $('html, body').animate({ scrollTop: count }, 600, 'swing');
            _.bulletsActive(that,a);
            _.seticon(that,icn);
        }
        setTimeout(function () {
            _.options.exe = 'false';
        },1300);
    };
    pageslider.prototype.first = function(that,icn,a) {
        var _ = this;
        this.options.counter = 0;
        that.find('.sl-bullets').data('bc',0);
        _.call(that,icn,a);
    };
    pageslider.prototype.last = function(that,icn,a) {
        var o, _ = this;
        o=this.options.list -1;
        this.options.counter = o;
        that.find('.sl-bullets').data('bc',o);
        _.call(that,icn,a);
    };
    pageslider.prototype.prev = function(that,icn,a) {
        var _ = this;
        var ex = _.options.exe;
        var o = this.options.counter;    
        if(ex === 'false'){
            if(o!==0){
                o  =  o === 0 ? (o=this.options.list -1) : o-1;
                this.options.counter = o;
                that.find('.sl-bullets').data('bc',o);
                _.call(that,icn,a);
            }
        }
    };
    pageslider.prototype.next = function(that,icn,a) {
        var _ = this;
        var ex = _.options.exe;
        var o = this.options.counter;
        if(ex === 'false'){
            o  =  o === (this.options.list -1) ? 0 : o+1;
            if(o!==0){
                this.options.counter = o;
                that.find('.sl-bullets').data('bc',o);
                _.call(that,icn,a);
            }
        }
    };
    pageslider.prototype.bulletsClick = function(that,icn,a) {
        var _ = this;
        _.call(that,icn,a);
    };
    pageslider.prototype.control = function(that,icn,a) {
        var _ = this;
        that.find('.control-first').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.first(that,icn,a);
                $(this).addClass('clicked');
            }
            var v = 'df';
            _.rb(that,v);
        });
        that.find('.control-last').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.last(that,icn,a);
                $(this).addClass('clicked');
            }
            var v = 'dl';
            _.rb(that,v);
        });
        that.find('.control-next').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.next(that,icn,a);
                $(this).addClass('clicked');
            }
            var v = 'dn';
            _.rb(that,v);
        });
        that.find('.control-prev').on('click',function(){
            if(!$(this).hasClass('clicked')){
                _.prev(that,icn,a);
                $(this).addClass('clicked');
            }
            var v = 'dp';
            _.rb(that,v);
        });
        $('body').on('mousewheel', function(e){
                if(e.originalEvent.wheelDelta > 0) {
                    _.prev(that,icn,a);
                }else{
                    _.next(that,icn,a);
                }
        });
        that.find('.sl-bullets a').on('click',function(){
             if(!$(this).parent().hasClass('clicked')){
                $(this).parent().addClass('clicked');
               _.options.counter = $(this).index(); 
               _.bulletsClick(that,icn,a);
            }
            var v = 'db';
            _.rb(that,v);
        });
        if(_.options.bulletthumb){
            that.find('.sl-bullets a').on('mouseover',function(){
                if($(this).hasClass('bthumb')){
                    $(this).find('span').fadeIn();
                }else{
                    var i = $(this).index();
                    var v = a[i];
                    $(this).addClass('bthumb').append('<span>'+v+'</span>');
                }
            });
            that.find('.sl-bullets a').on('mouseout',function(){
                $(this).find('span').fadeOut();
            });
        }
    };
    pageslider.prototype.rb = function(that,v) {
        setTimeout(function(){
            if(v === 'dn' ){
                that.find('.control-next').removeClass('clicked');
            }else if(v === 'dp'){
                that.find('.control-prev').removeClass('clicked');
            }else if(v === 'df'){
                that.find('.control-first').removeClass('clicked');
            }else if(v === 'dl'){
                that.find('.control-last').removeClass('clicked');
            }else if(v === 'db'){
                that.find('.sl-bullets').removeClass('clicked');
            }
        },1000);
    };
    $.fn.pageslider = function (options) {
        return this.each(function () {   
            if (!$.data(this, "pageslider")) {
                $.data(this, "pageslider", new pageslider(this, options));
            }
        });
    };
}));