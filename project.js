function Project(projectCollection, data){
    this.projectCollection = projectCollection;
    this.projectCollection.body = $('body');
    this.data = data;
    this.makeDOM();
}

Project.prototype.makeHTML = function(){
    return [
        '<div class="project">',
            '<div>',
                '<h2 class="title"><span>', this.data.title,'</span></h2>',
                '<div class="slide"',
                    '<div class="about">',
                        this.data.about,
                    '</div>',
                    '<div class="example-url">',
                        '<div class="output"><a href="', this.data.exampleUrl, '">Пример</a> &middot ', this.data.exampleUrl, '</div>',
                    '</div>',
                    '<div class="source-url">',
                        '<div class="output"><a href="', this.data.sourceUrl, '">Исходный код</a> &middot ', this.data.sourceUrl, '</div>',
                    '</div>',
                    '<div class="widget-url">',
                        this.data.widgetUrl != '#' ?
                                ['<div class="output"><a href="', this.data.widgetUrl, '">Яндекс виджет</a> &middot ', this.data.widgetUrl, '</div>'].join('') : '',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
    ].join('');
};

Project.prototype.makeDOM = function(){
    this.elem = $(this.makeHTML()).appendTo(this.projectCollection.body);
    var _this = this;
    $.each({
        title: '.title',
        slide: '.slide',
        about: '.about',
        exampleUrl: '.example-url',
        sourceUrl: '.source-url',
        widgetUrl: '.widget-url'
    }, function(k, v){
        _this[k] = _this.elem.find(v);
    });
/*
    this.title.click(function(){
        _this.projectCollection.makeCurrent(this);
    });
*/
};
