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
                    '<span class="example-url">',
                        '<a href="', this.data.exampleUrl, '">Пример</a> &middot ',
                    '</span>',
                    '<span class="source-url">',
                        '<a href="', this.data.sourceUrl, '">Исходный код</a> &middot ',
                    '</span>',
                    '<span class="widget-url">',
                        this.data.widgetUrl != '#' ?
                                ['<a href="', this.data.widgetUrl, '">Яндекс виджет</a>'].join('') : '',
                    '</span>',
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
