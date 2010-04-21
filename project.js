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
                        '<a href="', this.data.exampleUrl, '">Перейти к примеру</a>',
                    '</div>',
                    '<div class="source-url">',
                        '<a href="', this.data.sourceUrl, '">Посмотреть исходный код</a>',
                    '</div>',
                    '<div class="widget-url">',
                        this.data.widgetUrl != '#' ?
                                ['<a href="', this.data.widgetUrl, '">Установить Яндекс виджет</a>'].join('') : '',
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
